"""Persistência de listas em MongoDB, com JSON como modo local.

Quando ``MONGODB_URI`` não está configurada, a aplicação mantém o comportamento
original e lê/escreve arquivos JSON. Em produção, os documentos são gravados no
MongoDB e os JSONs existentes são importados uma única vez.
"""

import json
import os
from copy import deepcopy
from pathlib import Path


class ListStore:
    """Armazena uma lista ordenada em JSON local ou em uma coleção MongoDB."""

    def __init__(self, collection_name: str, json_path: Path):
        self.collection_name = collection_name
        self.json_path = json_path
        self.mongo_uri = os.environ.get("MONGODB_URI", "").strip()
        self.mongo_db_name = os.environ.get("MONGODB_DB", "teamplus").strip() or "teamplus"
        self._collection = None
        self._metadata = None
        self._migration_checked = False

    @property
    def using_mongodb(self) -> bool:
        return bool(self.mongo_uri)

    def _connect(self):
        if self._collection is not None:
            return

        try:
            from pymongo import MongoClient
        except ImportError as exc:
            raise RuntimeError(
                "MONGODB_URI está configurada, mas o pacote pymongo não está instalado."
            ) from exc

        client = MongoClient(
            self.mongo_uri,
            serverSelectionTimeoutMS=5000,
            connectTimeoutMS=5000,
        )
        database = client[self.mongo_db_name]
        self._collection = database[self.collection_name]
        self._metadata = database["teamplus_metadata"]

    def _read_json(self) -> list:
        try:
            value = json.loads(self.json_path.read_text(encoding="utf-8"))
            return value if isinstance(value, list) else []
        except (OSError, json.JSONDecodeError):
            return []

    def _write_json(self, items: list) -> None:
        self.json_path.write_text(
            json.dumps(items, ensure_ascii=False, indent=2),
            encoding="utf-8",
        )

    @staticmethod
    def _public_document(document: dict) -> dict:
        clean = deepcopy(document)
        clean.pop("_id", None)
        clean.pop("_teamplus_key", None)
        clean.pop("_teamplus_order", None)
        return clean

    def _mongo_replace_all(self, items: list) -> None:
        self._connect()
        active_keys = []

        for position, item in enumerate(items):
            document = deepcopy(item)
            key = str(document.get("id") or f"position-{position}")
            document["_teamplus_key"] = key
            document["_teamplus_order"] = position
            self._collection.replace_one(
                {"_teamplus_key": key},
                document,
                upsert=True,
            )
            active_keys.append(key)

        if active_keys:
            self._collection.delete_many({"_teamplus_key": {"$nin": active_keys}})
        else:
            self._collection.delete_many({})

    def _migrate_json_once(self) -> None:
        if self._migration_checked:
            return

        self._connect()
        marker_id = f"json_migration_v1:{self.collection_name}"
        if self._metadata.find_one({"_id": marker_id}) is None:
            if self._collection.count_documents({}) == 0:
                local_items = self._read_json()
                if local_items:
                    self._mongo_replace_all(local_items)
            self._metadata.update_one(
                {"_id": marker_id},
                {"$set": {"completed": True}},
                upsert=True,
            )
        self._migration_checked = True

    def read(self) -> list:
        if not self.using_mongodb:
            return self._read_json()

        self._migrate_json_once()
        documents = self._collection.find({}).sort("_teamplus_order", 1)
        return [self._public_document(document) for document in documents]

    def write(self, items: list) -> None:
        if not self.using_mongodb:
            self._write_json(items)
            return

        self._migrate_json_once()
        self._mongo_replace_all(items)
