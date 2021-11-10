


$(document).ready(function() {
  $('.tipe').next().hide(); 
		
		


				var ig;

				var soft;

   
				var a=1;
				var	porcentagem_kiran;
				var porcentagem_fred;
				var porcentagem_alice ;
				var porcentagem_dave;
					
				var porcentagem_bob;
				var porcentagem_marcos;
				var porcentagem_julia;
				var porcentagem_nick;
				
				var porcentagem_sugestao2;
				var porcentagem_sugestao1;
				
				var kiran_sugest1=1;
				var fred_sugest1=1;
				var alice_sugest1=1;
				var dave_sugest1=1;
				
				var bob_sugest1=1;
				var marcos_sugest1=1;
				var julia_sugest1=1;
				var nick_sugest1=1;
				
				var kiran2_sugest1=1;
				var fred2_sugest1=1;
				var alice2_sugest1=1;
				var dave2_sugest1=1;
				
				var bob2_sugest1=1;
				var marcos2_sugest1=1;
				var julia2_sugest1=1;
				var nick2_sugest1=1;
				
				
				var equipe1 = [];
					var porc_equipe1 = [];
					
					var equipe2 = [];
					var porc_equipe2 = [];
					
					
				
				$( "#botao" ).click(function() {
						
						

				document.getElementById("criatividade_fred").style.display = "none";
				document.getElementById("proatividade_fred").style.display = "none";	
				document.getElementById("lideranca_fred").style.display = "none";
				document.getElementById("interacao_fred").style.display = "none";
				document.getElementById("iniciativa_fred").style.display = "none";
				document.getElementById("comunicacao_fred").style.display = "none";	
				
				document.getElementById("criatividade_kiran").style.display = "none";
				document.getElementById("proatividade_kiran").style.display = "none";	
				document.getElementById("lideranca_kiran").style.display = "none";
				document.getElementById("interacao_kiran").style.display = "none";
				document.getElementById("iniciativa_kiran").style.display = "none";
				document.getElementById("comunicacao_kiran").style.display = "none";
				
				document.getElementById("criatividade_alice").style.display = "none";
				document.getElementById("proatividade_alice").style.display = "none";	
				document.getElementById("lideranca_alice").style.display = "none";
				document.getElementById("interacao_alice").style.display = "none";
				document.getElementById("iniciativa_alice").style.display = "none";
				document.getElementById("comunicacao_alice").style.display = "none";
				
				document.getElementById("criatividade_dave").style.display = "none";
				document.getElementById("proatividade_dave").style.display = "none";	
				document.getElementById("lideranca_dave").style.display = "none";
				document.getElementById("interacao_dave").style.display = "none";
				document.getElementById("iniciativa_dave").style.display = "none";
				document.getElementById("comunicacao_dave").style.display = "none";
				
				
				
				document.getElementById("criatividade_bob").style.display = "none";
				document.getElementById("proatividade_bob").style.display = "none";	
				document.getElementById("lideranca_bob").style.display = "none";
				document.getElementById("interacao_bob").style.display = "none";
				document.getElementById("iniciativa_bob").style.display = "none";
				document.getElementById("comunicacao_bob").style.display = "none";	
				
				document.getElementById("criatividade_marcos").style.display = "none";
				document.getElementById("proatividade_marcos").style.display = "none";	
				document.getElementById("lideranca_marcos").style.display = "none";
				document.getElementById("interacao_marcos").style.display = "none";
				document.getElementById("iniciativa_marcos").style.display = "none";
				document.getElementById("comunicacao_marcos").style.display = "none";
				
				document.getElementById("criatividade_julia").style.display = "none";
				document.getElementById("proatividade_julia").style.display = "none";	
				document.getElementById("lideranca_julia").style.display = "none";
				document.getElementById("interacao_julia").style.display = "none";
				document.getElementById("iniciativa_julia").style.display = "none";
				document.getElementById("comunicacao_julia").style.display = "none";
				
				document.getElementById("criatividade_nick").style.display = "none";
				document.getElementById("proatividade_nick").style.display = "none";	
				document.getElementById("lideranca_nick").style.display = "none";
				document.getElementById("interacao_nick").style.display = "none";
				document.getElementById("iniciativa_nick").style.display = "none";
				document.getElementById("comunicacao_nick").style.display = "none";
				
				
				
				document.getElementById("criatividade_fred2").style.display = "none";
				document.getElementById("proatividade_fred2").style.display = "none";	
				document.getElementById("lideranca_fred2").style.display = "none";
				document.getElementById("interacao_fred2").style.display = "none";
				document.getElementById("iniciativa_fred2").style.display = "none";
				document.getElementById("comunicacao_fred2").style.display = "none";	
				
				document.getElementById("criatividade_kiran2").style.display = "none";
				document.getElementById("proatividade_kiran2").style.display = "none";	
				document.getElementById("lideranca_kiran2").style.display = "none";
				document.getElementById("interacao_kiran2").style.display = "none";
				document.getElementById("iniciativa_kiran2").style.display = "none";
				document.getElementById("comunicacao_kiran2").style.display = "none";
				
				document.getElementById("criatividade_alice2").style.display = "none";
				document.getElementById("proatividade_alice2").style.display = "none";	
				document.getElementById("lideranca_alice2").style.display = "none";
				document.getElementById("interacao_alice2").style.display = "none";
				document.getElementById("iniciativa_alice2").style.display = "none";
				document.getElementById("comunicacao_alice2").style.display = "none";
				
				document.getElementById("criatividade_dave2").style.display = "none";
				document.getElementById("proatividade_dave2").style.display = "none";	
				document.getElementById("lideranca_dave2").style.display = "none";
				document.getElementById("interacao_dave2").style.display = "none";
				document.getElementById("iniciativa_dave2").style.display = "none";
				document.getElementById("comunicacao_dave2").style.display = "none";
				
				
				
				document.getElementById("criatividade_bob2").style.display = "none";
				document.getElementById("proatividade_bob2").style.display = "none";	
				document.getElementById("lideranca_bob2").style.display = "none";
				document.getElementById("interacao_bob2").style.display = "none";
				document.getElementById("iniciativa_bob2").style.display = "none";
				document.getElementById("comunicacao_bob2").style.display = "none";	
				
				document.getElementById("criatividade_marcos2").style.display = "none";
				document.getElementById("proatividade_marcos2").style.display = "none";	
				document.getElementById("lideranca_marcos2").style.display = "none";
				document.getElementById("interacao_marcos2").style.display = "none";
				document.getElementById("iniciativa_marcos2").style.display = "none";
				document.getElementById("comunicacao_marcos2").style.display = "none";
				
				document.getElementById("criatividade_julia2").style.display = "none";
				document.getElementById("proatividade_julia2").style.display = "none";	
				document.getElementById("lideranca_julia2").style.display = "none";
				document.getElementById("interacao_julia2").style.display = "none";
				document.getElementById("iniciativa_julia2").style.display = "none";
				document.getElementById("comunicacao_julia2").style.display = "none";
				
				document.getElementById("criatividade_nick2").style.display = "none";
				document.getElementById("proatividade_nick2").style.display = "none";	
				document.getElementById("lideranca_nick2").style.display = "none";
				document.getElementById("interacao_nick2").style.display = "none";
				document.getElementById("iniciativa_nick2").style.display = "none";
				document.getElementById("comunicacao_nick2").style.display = "none";
				
						
						 $("#kiran").animate({
								top:"0",
								left:"0"
						}, 200);
						 $("#kiran2").animate({
								top:"0",
								left:"0"
						}, 200);
						 $("#fred").animate({
								top:"0",
								left:"0"
						}, 200);
						 $("#fred2").animate({
								top:"0",
								left:"0"
						}, 200);
						 $("#alice").animate({
								top:"0",
								left:"0"
						}, 200);
						 $("#alice2").animate({
								top:"0",
								left:"0"
						}, 200);
						$("#dave").animate({
								top:"0",
								left:"0"
						}, 200);
						 $("#dave2").animate({
								top:"0",
								left:"0"
						}, 200);
						$("#bob").animate({
								top:"0",
								left:"0"
						}, 200);
						 $("#bob2").animate({
								top:"0",
								left:"0"
						}, 200);
						$("#marcos").animate({
								top:"0",
								left:"0"
						}, 200);
						 $("#marcos2").animate({
								top:"0",
								left:"0"
						}, 200);
						$("#julia").animate({
								top:"0",
								left:"0"
						}, 200);
						 $("#julia2").animate({
								top:"0",
								left:"0"
						}, 200);
						$("#nick").animate({
								top:"0",
								left:"0"
						}, 200);
						 $("#nick2").animate({
								top:"0",
								left:"0"
						}, 200);
				
				porcentagem_kiran=0;
				porcentagem_sugestao2=0;
				porcentagem_sugestao1=0;
				
				equipe1 = [];
				porc_equipe1 = [];
					
				equipe2 = [];
				porc_equipe2 = [];
				
						 ig = $('#entrada').val();
						alert("Technologies: "+ig);
						$('#txtdigitado').val(ig+' \n');
						
						
						soft = $('#entrada2').val();
						alert("Soft Skills: "+soft);
						$('#txtdigitado2').val(soft+' \n');
						
						
						
					var qtd_tags_kiran = 0;
					var qtd_tags_fred = 0;
					var qtd_tags_alice = 0;
					var qtd_tags_dave = 0;
					
					porcentagem_kiran = 0;
					porcentagem_fred = 0;
					porcentagem_alice = 0;
					porcentagem_dave = 0;
					
					var qtd_tags_bob = 0;
					var qtd_tags_marcos = 0;
					var qtd_tags_julia = 0;
					var qtd_tags_nick = 0;
					
					porcentagem_bob = 0;
					porcentagem_marcos = 0;
					porcentagem_julia = 0;
					porcentagem_nick = 0;
					
					
					

					var tags_kiran = ["web","WEB", "Web", "mvc", "MVC","Java","JAVA", "java"];	
					var tags_fred = ["Mobile","MOBILE", "mobile", "mvc", "MVC","Java","JAVA", "java"];
					var tags_alice = ["Javascript","javascript", "JAVASCRIPT", "mvc", "MVC","web","WEB", "Web"];
					var tags_dave = ["spring","Spring", "SPRING", "ANGULAR", "Angular","angular","JAVA","java","Java"];	


					var tags_bob = ["spring","Spring", "SPRING", "mvc", "MVC","Java","JAVA", "java"];	
					var tags_marcos = ["web","WEB", "Web", "mvc", "MVC","Javascript","javascript", "JAVASCRIPT"];
					var tags_julia = ["Javascript","javascript", "JAVASCRIPT", "Java","JAVA", "java","web","WEB", "Web"];
					var tags_nick = ["spring","Spring", "SPRING", "ANGULAR", "Angular","angular","mvc", "MVC", "Mvc"];	
					
					
					var softskills_kiran = ["Creativity"];	
					var softskills_fred = ["Creativity","Initiative"];
					var softskills_alice = ["Interaction","Communication"];
					var softskills_dave = ["Leadership"];


					var softskills_bob = ["Creativity"];
					var softskills_marcos = ["Creativity","Initiative"];
					var softskills_julia = ["Interaction","Communication"];
					var softskills_nick = ["Leadership"];
					
					
					
					
					
					
					
					var lines = $('#txtdigitado').val().split(/,/);
					var texts = [];
					
					
					var softs = $('#txtdigitado2').val().split(/,/);
					var arraysoft = [];
					
					
					$("#kiran").css("display", "none");
					$("#fred").css("display", "none");
					$("#alice").css("display", "none");
					$("#dave").css("display", "none");
					$("#bob").css("display", "none");
					$("#marcos").css("display", "none");
					$("#julia").css("display", "none");
					$("#nick").css("display", "none");
					
					
					
					
					
					$("#kiran2").css("display", "none");
					$("#fred2").css("display", "none");
					$("#alice2").css("display", "none");
					$("#dave2").css("display", "none");
					$("#bob2").css("display", "none");
					$("#marcos2").css("display", "none");
					$("#julia2").css("display", "none");
					$("#nick2").css("display", "none");
					
					for (var i=0; i < lines.length; i++) {
					// coloca as tags no array TEXTS PARA TODOS.
						if (/\S/.test(lines[i])) {
							texts.push($.trim(lines[i]));
						}
					}

					
					for (var i=0; i < softs.length; i++) {
					// coloca as tags no array das SOFT SKILLS PARA TODOS.
						if (/\S/.test(softs[i])) {
							arraysoft.push($.trim(softs[i]));
						}
					}
					
					
					
					
					// verifica se existem as tags COMPATIVEIS COM KIRAN e ativa cada uma.
					for (var j=0; j < texts.length; j++) {
							var tag = texts[j];
							
						for (var i=0; i < tags_kiran.length; i++) {
							var hab=tags_kiran[i];
							
							if( tag == hab ){
								 
								 qtd_tags_kiran += 1;
								  
								 
							}
											
						}
					}
					
					porcentagem_kiran = ((qtd_tags_kiran*100)/texts.length);
					porcentagem_kiran = parseFloat(porcentagem_kiran.toFixed(1));
					
					$("#percentual_kiran").html(porcentagem_kiran+'%');
					$("#percentual_kiran2").html(porcentagem_kiran+'%');	
					
					
					
					
					
					// verifica se existem as tags COMPATIVEIS COM FRED e ativa cada uma.
					for (var j=0; j < texts.length; j++) {
							var tag = texts[j];
							
						for (var i=0; i < tags_fred.length; i++) {
							var hab=tags_fred[i];
							
							if( tag == hab ){
								 
								 qtd_tags_fred += 1;
								  
								 
							}
											
						}
					}
					
					porcentagem_fred = ((qtd_tags_fred*100)/texts.length);
					porcentagem_fred = parseFloat(porcentagem_fred.toFixed(1));
					
					$("#percentual_fred").html(porcentagem_fred+'%');
					$("#percentual_fred2").html(porcentagem_fred+'%');
						
					
					// verifica se existem as tags COMPATIVEIS COM ALICE e ativa cada uma.
					for (var j=0; j < texts.length; j++) {
							var tag = texts[j];
							
						for (var i=0; i < tags_alice.length; i++) {
							var hab=tags_alice[i];
							
							if( tag == hab ){
								 
								 qtd_tags_alice += 1;
								  
								 
							}
											
						}
					}
					
					porcentagem_alice = ((qtd_tags_alice*100)/texts.length);
					porcentagem_alice = parseFloat(porcentagem_alice.toFixed(1));
					
					$("#percentual_alice").html(porcentagem_alice+'%');
					$("#percentual_alice2").html(porcentagem_alice+'%');
					
					// verifica se existem as tags COMPATIVEIS COM DAVE e ativa cada uma.
					for (var j=0; j < texts.length; j++) {
							var tag = texts[j];
							
						for (var i=0; i < tags_dave.length; i++) {
							var hab=tags_dave[i];
							
							if( tag == hab ){
								 
								 qtd_tags_dave += 1;
								  
								 
							}
											
						}
					}
					
					porcentagem_dave = ((qtd_tags_dave*100)/texts.length);
					porcentagem_dave = parseFloat(porcentagem_dave.toFixed(1));
					
					$("#percentual_dave").html(porcentagem_dave+'%');	
					$("#percentual_dave2").html(porcentagem_dave+'%');
					
					// verifica se existem as tags COMPATIVEIS COM BOB e ativa cada uma.
					for (var j=0; j < texts.length; j++) {
							var tag = texts[j];
							
						for (var i=0; i < tags_bob.length; i++) {
							var hab=tags_bob[i];
							
							if( tag == hab ){
								 
								 qtd_tags_bob += 1;
								  
								 
							}
											
						}
					}
					
					porcentagem_bob = ((qtd_tags_bob*100)/texts.length);
					porcentagem_bob = parseFloat(porcentagem_bob.toFixed(1));
					
					$("#percentual_bob").html(porcentagem_bob+'%');	
					$("#percentual_bob2").html(porcentagem_bob+'%');
					
					// verifica se existem as tags COMPATIVEIS COM MARCOS e ativa cada uma.
					for (var j=0; j < texts.length; j++) {
							var tag = texts[j];
							
						for (var i=0; i < tags_marcos.length; i++) {
							var hab=tags_marcos[i];
							
							if( tag == hab ){
								 
								 qtd_tags_marcos += 1;
								  
								 
							}
											
						}
					}
					
					porcentagem_marcos = ((qtd_tags_marcos*100)/texts.length);
					porcentagem_marcos = parseFloat(porcentagem_marcos.toFixed(1));
					
					$("#percentual_marcos").html(porcentagem_marcos+'%');	
						$("#percentual_marcos2").html(porcentagem_marcos+'%');	
					
					// verifica se existem as tags COMPATIVEIS COM JULIA e ativa cada uma.
					for (var j=0; j < texts.length; j++) {
							var tag = texts[j];
							
						for (var i=0; i < tags_julia.length; i++) {
							var hab=tags_julia[i];
							
							if( tag == hab ){
								 
								 qtd_tags_julia += 1;
								  
								 
							}
											
						}
					}
					
					porcentagem_julia = ((qtd_tags_julia*100)/texts.length);
					porcentagem_julia = parseFloat(porcentagem_julia.toFixed(1));
					
					$("#percentual_julia").html(porcentagem_julia+'%');	
					$("#percentual_julia2").html(porcentagem_julia+'%');	
					
					
					// verifica se existem as tags COMPATIVEIS COM NICK e ativa cada uma.
					for (var j=0; j < texts.length; j++) {
							var tag = texts[j];
							
						for (var i=0; i < tags_nick.length; i++) {
							var hab=tags_nick[i];
							
							if( tag == hab ){
								 
								 qtd_tags_nick += 1;
								  
								 
							}
											
						}
					}
					
					porcentagem_nick = ((qtd_tags_nick*100)/texts.length);
					porcentagem_nick = parseFloat(porcentagem_nick.toFixed(1));
					$("#percentual_nick").html(porcentagem_nick+'%');
					$("#percentual_nick2").html(porcentagem_nick+'%');
					
					//if ((porcentagem_nick>39) && (porcentagem_nick<50)){
					//		$("#percentual_nick").css("color", "#eead2d");
					//}
					//if (porcentagem_nick>69){
					//	$("#percentual_nick").css("color", "#008000");
					//	}
					//if (porcentagem_nick<40){
					//	$("#percentual_nick").css("color", "#ae0000");
					//}
					
					
					
					var qtd_devmaster = $( "#DevMast" ).val();
					var qtd_devmiddle = $( "#DevPleno" ).val();
					var qtd_devsenior = $( "#DevSeni" ).val();
					var qtd_devjunior = $( "#DevJuni" ).val();
					
					var kiranpode=0;
					var fredpode=0;
					var alicepode=0;
					var davepode=0;
					
					
					var qtd_engmaster = $( "#EngMast" ).val();
					var qtd_engmiddle = $( "#DevPleno" ).val();
					var qtd_engsenior = $( "#EngSeni" ).val();
					var qtd_engjunior = $( "#EngJuni" ).val();
					
					var bobpode=0;
					var marcospode=0;
					var juliapode=0;
					var nickpode=0;
					
					var tamanho=0;
					
					
					if(qtd_devmaster>=1){
						tamanho=tamanho+1;
					}
					if(qtd_devmiddle>=1){
						tamanho=tamanho+1;
					}
					if(qtd_devsenior>=1){
						tamanho=tamanho+1;
					}
					if(qtd_devjunior>=1){
						tamanho=tamanho+1;
					}
					
					
					
					if((tamanho>=1) && (qtd_tags_kiran>0) && (qtd_devmaster>=1)){
						kiranpode=1;
					}
					if((tamanho==0) && (qtd_tags_kiran==0) && (qtd_devmaster==0)) {
						kiranpode=0;
						$("#kiran").css("display", "none");
					}
					
					
					//=================SOFT KIRAN===================
					
					
					
					for (var j=0; j < arraysoft.length; j++) {
						for (var i=0; i < softskills_kiran.length; i++) {
					
								if ((arraysoft[j]) == 'Creativity'){
									document.getElementById("criatividade_kiran").style.display = "block";	
									document.getElementById("criatividade_kiran2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Proactivity'){
									document.getElementById("proatividade_kiran").style.display = "block";
									document.getElementById("proatividade_kiran2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Initiative'){
									document.getElementById("iniciativa_kiran").style.display = "block";
									document.getElementById("iniciativa_kiran2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Communication'){
									document.getElementById("comunicacao_kiran").style.display = "block";	
									document.getElementById("comunicacao_kiran2").style.display = "block";	
								}
								if ((arraysoft[j]) == 'Interaction'){
									document.getElementById("interacao_kiran").style.display = "block";
									document.getElementById("interacao_kiran2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Leadership'){
									document.getElementById("lideranca_kiran").style.display = "block";	
									document.getElementById("lideranca_kiran2").style.display = "block";	
								}
							
								
							
											
						}
						
					}
					//=================SOFT fred===================
					
					
					
					for (var j=0; j < arraysoft.length; j++) {
						for (var i=0; i < softskills_fred.length; i++) {
					
								if ((arraysoft[j]) == 'Creativity'){
									document.getElementById("criatividade_fred").style.display = "block";
									document.getElementById("criatividade_fred2").style.display = "block";									
								}
								if ((arraysoft[j]) == 'Proactivity'){
									document.getElementById("proatividade_fred").style.display = "block";
									document.getElementById("proatividade_fred2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Initiative'){
									document.getElementById("iniciativa_fred").style.display = "block";
									document.getElementById("iniciativa_fred2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Communication'){
									document.getElementById("comunicacao_fred").style.display = "block";
									document.getElementById("comunicacao_fred2").style.display = "block";									
								}
							
								if ((arraysoft[j]) == 'Interaction'){
									document.getElementById("interacao_fred").style.display = "block";
									document.getElementById("interacao_fred2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Leadership'){
									document.getElementById("lideranca_fred").style.display = "block";
									document.getElementById("lideranca_fred2").style.display = "block";									
								}
							
											
						}
						
					}
					
					//=================SOFT ALICEd===================
					
					
					
					for (var j=0; j < arraysoft.length; j++) {
						for (var i=0; i < softskills_alice.length; i++) {
					
								if ((arraysoft[j]) == 'Creativity'){
									document.getElementById("criatividade_alice").style.display = "block";
									document.getElementById("criatividade_alice2").style.display = "block";										
								}
								if ((arraysoft[j]) == 'Proactivity'){
									document.getElementById("proatividade_alice").style.display = "block";
									document.getElementById("proatividade_alice2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Initiative'){
									document.getElementById("iniciativa_alice").style.display = "block";
									document.getElementById("iniciativa_alice2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Communication'){
									document.getElementById("comunicacao_alice").style.display = "block";
									document.getElementById("comunicacao_alice2").style.display = "block";									
								}
							
								if ((arraysoft[j]) == 'Interaction'){
									document.getElementById("interacao_alice").style.display = "block";
									document.getElementById("interacao_alice2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Leadership'){
									document.getElementById("lideranca_alice").style.display = "block";	
									document.getElementById("lideranca_alice2").style.display = "block";
								}
							
											
						}
						
					}
					
					//=================SOFT DAVE===================
					
					
					
					for (var j=0; j < arraysoft.length; j++) {
						for (var i=0; i < softskills_dave.length; i++) {
					
								if ((arraysoft[j]) == 'Creativity'){
									document.getElementById("criatividade_dave").style.display = "block";
									document.getElementById("criatividade_dave2").style.display = "block";									
								}
								if ((arraysoft[j]) == 'Proactivity'){
									document.getElementById("proatividade_dave").style.display = "block";
									document.getElementById("proatividade_dave2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Initiative'){
									document.getElementById("iniciativa_dave").style.display = "block";
									document.getElementById("iniciativa_dave2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Communication'){
									document.getElementById("comunicacao_dave").style.display = "block";
									document.getElementById("comunicacao_dave2").style.display = "block";									
								}
							
								if ((arraysoft[j]) == 'Interaction'){
									document.getElementById("interacao_dave").style.display = "block";
									document.getElementById("interacao_dave2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Leadership'){
									document.getElementById("lideranca_dave").style.display = "block";	
									document.getElementById("lideranca_dave2").style.display = "block";	
								}
							
											
						}
						
					}
					
					
					//=================SOFT BOB===================
					
					
					
					for (var j=0; j < arraysoft.length; j++) {
						for (var i=0; i < softskills_bob.length; i++) {
					
								if ((arraysoft[j]) == 'Creativity'){
									document.getElementById("criatividade_bob").style.display = "block";
									document.getElementById("criatividade_bob2").style.display = "block";									
								}
								if ((arraysoft[j]) == 'Proactivity'){
									document.getElementById("proatividade_bob").style.display = "block";
									document.getElementById("proatividade_bob2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Initiative'){
									document.getElementById("iniciativa_bob").style.display = "block";
									document.getElementById("iniciativa_bob2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Communication'){
									document.getElementById("comunicacao_bob").style.display = "block";
									document.getElementById("comunicacao_bob2").style.display = "block";									
								}
							
								if ((arraysoft[j]) == 'Interaction'){
									document.getElementById("interacao_bob").style.display = "block";
									document.getElementById("interacao_bob2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Leadership'){
									document.getElementById("lideranca_bob").style.display = "block";
									document.getElementById("lideranca_bob2").style.display = "block";									
								}
							
											
						}
						
					}
					
					
					//=================SOFT MARCOS===================
					
					
					
					for (var j=0; j < arraysoft.length; j++) {
						for (var i=0; i < softskills_marcos.length; i++) {
					
								if ((arraysoft[j]) == 'Creativity'){
									document.getElementById("criatividade_marcos").style.display = "block";	
									document.getElementById("criatividade_marcos2").style.display = "block";	
								}
								if ((arraysoft[j]) == 'Proactivity'){
									document.getElementById("proatividade_marcos").style.display = "block";
									document.getElementById("proatividade_marcos2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Initiative'){
									document.getElementById("iniciativa_marcos").style.display = "block";
									document.getElementById("iniciativa_marcos2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Communication'){
									document.getElementById("comunicacao_marcos").style.display = "block";
									document.getElementById("comunicacao_marcos2").style.display = "block";										
								}
							
								if ((arraysoft[j]) == 'Interaction'){
									document.getElementById("interacao_marcos").style.display = "block";
									document.getElementById("interacao_marcos2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Leadership'){
									document.getElementById("lideranca_marcos").style.display = "block";	
									document.getElementById("lideranca_marcos2").style.display = "block";
								}
							
											
						}
						
					}
					
					//=================SOFT JULIA===================
					
					
					
					for (var j=0; j < arraysoft.length; j++) {
						for (var i=0; i < softskills_julia.length; i++) {
					
								if ((arraysoft[j]) == 'Creativity'){
									document.getElementById("criatividade_julia").style.display = "block";
									document.getElementById("criatividade_julia2").style.display = "block";									
								}
								if ((arraysoft[j]) == 'Proactivity'){
									document.getElementById("proatividade_julia").style.display = "block";
									document.getElementById("proatividade_julia2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Initiative'){
									document.getElementById("iniciativa_julia").style.display = "block";
									document.getElementById("iniciativa_julia2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Communication'){
									document.getElementById("comunicacao_julia").style.display = "block";
									document.getElementById("comunicacao_julia2").style.display = "block";									
								}
							
								if ((arraysoft[j]) == 'Interaction'){
									document.getElementById("interacao_julia").style.display = "block";
									document.getElementById("interacao_julia2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Leadership'){
									document.getElementById("lideranca_julia").style.display = "block";	
									document.getElementById("lideranca_julia2").style.display = "block";	
								}
							
											
						}
						
					}
					
					//=================SOFT NICK ===================
					
					
					
					for (var j=0; j < arraysoft.length; j++) {
						for (var i=0; i < softskills_nick.length; i++) {
					
								if ((arraysoft[j]) == 'Creativity'){
									document.getElementById("criatividade_nick").style.display = "block";
									document.getElementById("criatividade_nick2").style.display = "block";										
								}
								if ((arraysoft[j]) == 'Proactivity'){
									document.getElementById("proatividade_nick").style.display = "block";
									document.getElementById("proatividade_nick2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Initiative'){
									document.getElementById("iniciativa_nick").style.display = "block";
									document.getElementById("iniciativa_nick2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Communication'){
									document.getElementById("comunicacao_nick").style.display = "block";	
									document.getElementById("comunicacao_nick2").style.display = "block";	
								}
							
								if ((arraysoft[j]) == 'Interaction'){
									document.getElementById("interacao_nick").style.display = "block";
									document.getElementById("interacao_nick2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Leadership'){
									document.getElementById("lideranca_nick").style.display = "block";	
									document.getElementById("lideranca_nick2").style.display = "block";	
								}
							
											
						}
						
					}
					
					
					if((tamanho>=1) && (qtd_tags_fred>0) && (qtd_devmiddle>=1)){
						fredpode=1;
					}
					if((tamanho==0) && (qtd_tags_fred==0)&& (qtd_devmiddle==0)) {
						fredpode=0;
						$("#fred").css("display", "none");
					}
					
					
					if((tamanho>=1) && (qtd_tags_alice>0) && (qtd_devsenior>=1)){
						alicepode=1;
					}
					if((tamanho==0) && (qtd_tags_alice==0) && (qtd_devsenior==0)) {
						alicepode=0;
						$("#alice").css("display", "none");
					}
					
					
					if((tamanho>=1) && (qtd_tags_dave>0) && (qtd_devjunior>=1)){
						davepode=1;
					}
					if((tamanho==0) && (qtd_tags_dave==0)  && (qtd_devjunior==0)) {
						davepode=0;
						$("#dave").css("display", "none");
					}
					
					
					if((tamanho>=1) && (qtd_tags_bob>0)  && (qtd_devmaster>=1)){
						bobpode=1;
					}
					if((tamanho==0) && (qtd_tags_bob==0) && (qtd_devmaster==0)) {
						bobpode=0;
						$("#bob").css("display", "none");
					}
					
					if((tamanho>=1) && (qtd_tags_marcos>0) && (qtd_devmiddle>=1) ){
						marcospode=1;
					}
					if((tamanho==0) && (qtd_tags_marcos==0) && (qtd_devmiddle==0)) {
						marcospode=0;
						$("#marcos").css("display", "none");
					}
					
					
					if((tamanho>=1) && (qtd_tags_julia>0) && (qtd_devsenior>=1)){
						juliapode=1;
					}
					if((tamanho==0) && (qtd_tags_julia==0)  && (qtd_devsenior==0)) {
						juliapode=0;
						$("#julia").css("display", "none");
					}
					
					//alert("qtd_devjunior: "+qtd_devjunior);
					if((tamanho>=1) && (qtd_tags_nick>0) && (qtd_devjunior>=1)){
						nickpode=1;
					}
					if((tamanho==0) && (qtd_tags_nick==0) && (qtd_devjunior==0)) {
						nickpode=0;
						$("#nick").css("display", "none");
					}
					
					//alert("tamnho é: "+tamanho);
					
					
					//correcao feita em 12/08: apenas 1 master por equipe
					var mas=0;
					if ((porcentagem_kiran>0) && (kiranpode==1)){
						
						if ( porcentagem_kiran > porcentagem_bob ){
							equipe1.push("kiran");
							porc_equipe1.push(porcentagem_kiran);
							
						}
						if ( porcentagem_kiran < porcentagem_bob ) {
						
							equipe2.push("kiran");
							porc_equipe2.push(porcentagem_kiran);
													
						}
						if ( porcentagem_kiran == porcentagem_bob ) {
							for ( var i=0 ; i <= equipe1.length; i++){
								
								if ((equipe1[i] =='bob')){
									mas=1;
								}
								
							}
							if (mas==0){
								equipe1.push("kiran");
								porc_equipe1.push(porcentagem_kiran);
								
							}
							if (mas==1){
								equipe2.push("kiran");
								porc_equipe2.push(porcentagem_kiran);
							}
							
							
						}
					
					}
					mas=0;
					if ((porcentagem_bob>0) && (bobpode==1)){
						
						if ( porcentagem_bob > porcentagem_kiran ){
							equipe1.push("bob");
							porc_equipe1.push(porcentagem_bob);
							
						}
						if ( porcentagem_bob < porcentagem_kiran ) {
						
							equipe2.push("bob");
							porc_equipe2.push(porcentagem_bob);
													
						}		
					
						if ( porcentagem_bob == porcentagem_kiran ) {
							for ( var i=0 ; i <= equipe1.length; i++){
								
								if ((equipe1[i] =='kiran')){
									mas=1;
								}
								
							}
							if (mas==0){
								equipe1.push("bob");
								porc_equipe1.push(porcentagem_bob);
								
							}
							if (mas==1){
								equipe2.push("bob");
								porc_equipe2.push(porcentagem_bob);
							}
						}
					}
					var mid=0;
					//correcao feita em 12/08: apenas 1 middle  por equipe
					if ((porcentagem_fred>0) && (fredpode==1)){
						
						if ( porcentagem_fred > porcentagem_marcos ){
							equipe1.push("fred");
							porc_equipe1.push(porcentagem_fred);
							
						}
						if ( porcentagem_fred < porcentagem_marcos ) {
						
							equipe2.push("fred");
							porc_equipe2.push(porcentagem_fred);
													
						}
						if ( porcentagem_fred == porcentagem_marcos ) {
							for ( var i=0 ; i <= equipe1.length; i++){
								
								if ((equipe1[i] =='marcos')){
									mid=1;
								}
								
							}
							if (mid==0){
								equipe1.push("fred");
								porc_equipe1.push(porcentagem_fred);
								
							}
							if (mid==1){
								equipe2.push("fred");
								porc_equipe2.push(porcentagem_fred);
							}
						}
					
					}
					
					mid=0;
					if ((porcentagem_marcos>0) && (marcospode==1)){
						
						if ( porcentagem_marcos > porcentagem_fred ){
							equipe1.push("marcos");
							porc_equipe1.push(porcentagem_marcos);
							
						}
						if ( porcentagem_marcos < porcentagem_fred ) {
						
							equipe2.push("marcos");
							porc_equipe2.push(porcentagem_marcos);
													
						}		
					
						if ( porcentagem_marcos == porcentagem_fred ) {
							for ( var i=0 ; i <= equipe1.length; i++){
								
								if ((equipe1[i] =='fred')){
									mid=1;
								}
								
							}
							if (mid==0){
								equipe1.push("marcos");
								porc_equipe1.push(porcentagem_marcos);
								
							}
							if (mid==1){
								equipe2.push("marcos");
								porc_equipe2.push(porcentagem_marcos);
							}
						}
					}
					var sen=0;
					//correcao feita em 12/08: apenas 1 senior  por equipe
					if ((porcentagem_alice>0) && (alicepode==1)){
						
						if ( porcentagem_alice > porcentagem_julia ){
							equipe1.push("alice");
							porc_equipe1.push(porcentagem_alice);
							
						}
						if ( porcentagem_alice < porcentagem_julia ) {
						
							equipe2.push("alice");
							porc_equipe2.push(porcentagem_alice);
													
						}
						if ( porcentagem_alice == porcentagem_julia ) {
							for ( var i=0 ; i <= equipe1.length; i++){
								
								if ((equipe1[i] =='julia')){
									sen=1;
								}
								
							}
							if (sen==0){
								equipe1.push("alice");
								porc_equipe1.push(porcentagem_alice);
								
							}
							if (sen==1){
								equipe2.push("alice");
								porc_equipe2.push(porcentagem_alice);
							}
						}
					
					}
					sen=0;
					if ((porcentagem_julia>0) && (juliapode==1)){
						
						if ( porcentagem_julia > porcentagem_alice ){
							equipe1.push("julia");
							porc_equipe1.push(porcentagem_julia);
							
						}
						if ( porcentagem_julia < porcentagem_alice ) {
						
							equipe2.push("julia");
							porc_equipe2.push(porcentagem_julia);
													
						}		
					
						if ( porcentagem_julia == porcentagem_alice ) {
							for ( var i=0 ; i <= equipe1.length; i++){
								
								if ((equipe1[i] =='alice')){
									sen=1;
								}
								
							}
							if (sen==0){
								equipe1.push("julia");
								porc_equipe1.push(porcentagem_julia);
								
							}
							if (sen==1){
								equipe2.push("julia");
								porc_equipe2.push(porcentagem_julia);
							}
						}
					}
					
					var jun=0;
					//correcao feita em 12/08: apenas 1 senior  por equipe
					if ((porcentagem_dave>0) && (davepode==1)){
						
						if ( porcentagem_dave > porcentagem_nick ){
							equipe1.push("dave");
							porc_equipe1.push(porcentagem_dave);
							
						}
						if ( porcentagem_dave < porcentagem_nick ) {
						
							equipe2.push("dave");
							porc_equipe2.push(porcentagem_dave);
													
						}
						if ( porcentagem_dave == porcentagem_nick ) {
							for ( var i=0 ; i <= equipe1.length; i++){
								
								if ((equipe1[i] =='nick')){
									jun=1;
								}
								
							}
							if (jun==0){
								equipe1.push("dave");
								porc_equipe1.push(porcentagem_dave);
								
							}
							if (jun==1){
								equipe2.push("dave");
								porc_equipe2.push(porcentagem_dave);
							}
						}
					
					}
					jun=0;
					if ((porcentagem_nick>0) && (nickpode==1)){
						
						if ( porcentagem_nick > porcentagem_dave ){
							equipe1.push("nick");
							porc_equipe1.push(porcentagem_nick);
							
						}
						if ( porcentagem_nick < porcentagem_dave ) {
						
							equipe2.push("nick");
							porc_equipe2.push(porcentagem_nick);
													
						}		
					
						if ( porcentagem_nick == porcentagem_dave ) {
							for ( var i=0 ; i <= equipe1.length; i++){
								
								if ((equipe1[i] =='dave')){
									jun=1;
								}
								
							}
							if (jun==0){
								equipe1.push("nick");
								porc_equipe1.push(porcentagem_nick);
								
							}
							if (jun==1){
								equipe2.push("nick");
								porc_equipe2.push(porcentagem_nick);
							}
						}
					}
					
					//var aux=0;
					//var pessoa=0;
					
					//for (var i=0; i<porc_equipe1.length; i++){
						
						//for (var j=0; j<porc_equipe1.length; j++){
							
							//if ((porc_equipe1[i] > porc_equipe1[j])  ){
							
								
								//aux = porc_equipe1[j];
								//pessoa = equipe1[j];
								
								//porc_equipe1[j] = porc_equipe1[i];
								//equipe1[j] = equipe1[i];
								
								//porc_equipe1[i] = aux;
								//equipe1[i] = pessoa;	
							//}	
						//}	
					//}
					//alert("equipe 1 antes: "+equipe1);
					//alert("equipe 2 antes: "+equipe2);
					
					
					<!--coloca o extra do tamanho na na equipe 2-->
					
					//var auxi=0;
					//auxi= equipe1.length - tamanho;
					//alert("auxi: "+auxi);
					
					//for (var j=0; j<auxi; j++){
						
						
					//	equipe2[j] = equipe1[tamanho];
					//	porc_equipe2[j] = porc_equipe1[tamanho];
					//	
					//	equipe1.splice(tamanho, 1);
					//	porc_equipe1.splice(tamanho, 1);
						
					//}
					
					//alert("equipe 1: "+equipe1);
					//alert("equipe 2: "+equipe2);
					//alert("Porcentagem equipe 2: "+porc_equipe2);
					
					
					
				
					
					for ( var i=0 ; i <= equipe1.length; i++){
							
							if ((equipe1[i]=='kiran') && (kiranpode==1)){
								$("#kiran").css("display", "block");
							}
							
							if ((equipe1[i]=='fred') && (fredpode==1)){
								$("#fred").css("display", "block");
							}
							
							if ((equipe1[i]=='alice') && (alicepode==1)){
								$("#alice").css("display", "block");
							}
							
							if ((equipe1[i]=='dave') && (davepode==1)){
								$("#dave").css("display", "block");
							}
							
							if ((equipe1[i]=='nick') && (nickpode==1)){
								$("#nick").css("display", "block");
							}
							
							
							if ((equipe1[i]=='bob') && (bobpode==1)){
								$("#bob").css("display", "block");
								
							}
							
							if ((equipe1[i]=='marcos') && (marcospode==1)){
								$("#marcos").css("display", "block");
							}
							
							if ((equipe1[i]=='julia') && (juliapode==1)){
								$("#julia").css("display", "block");
							}
							
							if ((equipe1[i]=='nick') && (nickpode==1)){
								$("#nick").css("display", "block");
							}
					}
					
					porcentagem_sugestao1 = 0;
					
					
					for ( var i=0 ; i <= equipe1.length; i++){
						
						if ((equipe1[i]=='kiran') && ($('#kiran').css('display') == 'block')){
							porcentagem_sugestao1 = (porcentagem_sugestao1 + porcentagem_kiran);
						}
						
						if ((equipe1[i]=='fred') && ($('#fred').css('display') == 'block')){
							porcentagem_sugestao1 = (porcentagem_sugestao1 + porcentagem_fred);
						}
						
						if ((equipe1[i]=='alice') && ($('#alice').css('display') == 'block')){
							porcentagem_sugestao1 = (porcentagem_sugestao1 + porcentagem_alice);
						}
						
						if ((equipe1[i]=='dave') && ($('#dave').css('display') == 'block')){
							porcentagem_sugestao1 = (porcentagem_sugestao1 + porcentagem_dave);
						}
					
						
						if ((equipe1[i]=='bob') && ($('#bob').css('display') == 'block')){
							porcentagem_sugestao1 = (porcentagem_sugestao1 + porcentagem_bob);
						}
						
						if ((equipe1[i]=='marcos') && ($('#marcos').css('display') == 'block')){
							porcentagem_sugestao1 = (porcentagem_sugestao1 + porcentagem_marcos);
						}
						
						if ((equipe1[i]=='julia') && ($('#julia').css('display') == 'block')){
							porcentagem_sugestao1 = (porcentagem_sugestao1 + porcentagem_julia);
						}
						
						if ((equipe1[i]=='nick') && ($('#nick').css('display') == 'block')){
							porcentagem_sugestao1 = (porcentagem_sugestao1 + porcentagem_nick);
						}
					}
					
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe1.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}	
					
					
					for ( var i=0 ; i <= equipe2.length; i++){
					
							if ((equipe2[i]=='kiran') && (kiranpode==1)){
								$("#kiran2").css("display", "block");
							}
							
							if ((equipe2[i]=='fred') && (fredpode==1)){
								$("#fred2").css("display", "block");
							}
							
							if ((equipe2[i]=='alice') && (alicepode==1)){
								$("#alice2").css("display", "block");
							}
							
							if ((equipe2[i]=='dave') && (davepode==1)){
								$("#dave2").css("display", "block");
							}
							
							
							if ((equipe2[i]=='bob') && (bobpode==1)){
								$("#bob2").css("display", "block");
								
							}
							
							if ((equipe2[i]=='marcos') && (marcospode==1)){
								$("#marcos2").css("display", "block");
							}
							
							if ((equipe2[i]=='julia') && (juliapode==1)){
								$("#julia2").css("display", "block");
							}
							
							if ((equipe2[i]=='nick') && (nickpode==1)){
								$("#nick2").css("display", "block");
							}
					
					}
					
	
					
					porcentagem_sugestao2 = 0;
					
					
					for ( var i=0 ; i <= equipe2.length; i++){
						
						if ((equipe2[i]=='kiran') && ($('#kiran2').css('display') == 'block')){
							porcentagem_sugestao2 = (porcentagem_sugestao2 + porcentagem_kiran);
						}
						
						if ((equipe2[i]=='fred') && ($('#fred2').css('display') == 'block')){
							porcentagem_sugestao2 = (porcentagem_sugestao2 + porcentagem_fred);
						}
						
						if ((equipe2[i]=='alice') && ($('#alice2').css('display') == 'block')){
							porcentagem_sugestao2 = (porcentagem_sugestao2 + porcentagem_alice);
						}
						
						if ((equipe2[i]=='dave') && ($('#dave2').css('display') == 'block')){
							porcentagem_sugestao2 = (porcentagem_sugestao2 + porcentagem_dave);
						}
					
						
						if ((equipe2[i]=='bob') && ($('#bob2').css('display') == 'block')){
							porcentagem_sugestao2 = (porcentagem_sugestao2 + porcentagem_bob);
						}
						
						if ((equipe2[i]=='marcos') && ($('#marcos2').css('display') == 'block')){
							porcentagem_sugestao2 = (porcentagem_sugestao2 + porcentagem_marcos);
						}
						
						if ((equipe2[i]=='julia') && ($('#julia2').css('display') == 'block')){
							porcentagem_sugestao2 = (porcentagem_sugestao2 + porcentagem_julia);
						}
						
						if ((equipe2[i]=='nick') && ($('#nick2').css('display') == 'block')){
							porcentagem_sugestao2 = (porcentagem_sugestao2 + porcentagem_nick);
						}
					}
					
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
						
					}
					if (porcentagem_sugestao2>49){
							
							
							$("#percentual_equipe2").css("background-color", "#008000");
						
	
						
					}
					if (porcentagem_sugestao2<40){
								$("#percentual_equipe2").css("background-color", "#ae0000");
						
					}
					
				
					
					
					
					$("#sugestao1").css("display", "block");
					$("#sugestao2").css("display", "block");
					
					
					
					
				});		
				$( "#salvarequipe" ).click(function() {	
						
						localStorage.setItem('valueTexto', equipe1);
						localStorage.setItem('valueText', ig);
						
						
				});
		
		
		
		$("#kiran").draggable();
		$("#kiran2").draggable();
		
		$("#fred").draggable();
		$("#fred2").draggable();
		
		$("#alice").draggable();
		$("#alice2").draggable();
		
		$("#dave").draggable();
		$("#dave2").draggable();
		
		//---------------------//
		
		$("#bob").draggable();
		$("#bob2").draggable();
		
		$("#marcos").draggable();
		$("#marcos2").draggable();
		
		$("#julia").draggable();
		$("#julia2").draggable();
		
		$("#nick").draggable();
		$("#nick2").draggable();
		
		
		
		
        $("#sugest2").droppable({
		
            drop: function(event, ui) {
				//---------------Verifica se kiran foi movido para sugestao 2----------------------//
				if (($("#kiran").is('.ui-draggable-dragging')) && (kiran_sugest1==1) ){
					$("#kiran").css("z-index", a++);
					kiran_sugest1=0;
					for (var j=0; j<equipe1.length; j++){
						
						if(equipe1[j]=='kiran'){
							equipe2.push('kiran');
							porc_equipe2.push(porcentagem_kiran);
							
							equipe1.splice(j, 1);
							porc_equipe1.splice(j, 1);
						}
						
					}
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe1.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe1[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe1.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}	
					
					porcentagem_sugestao2=0;
					
					for (var i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
						
						
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}	
				}
				//-------------------------------------------------------------------//
				//---------------Verifica se fred foi movido para sugestao 2----------------------//
				if (($("#fred").is('.ui-draggable-dragging')) && (fred_sugest1==1) ){
					$("#fred").css("z-index", a++);
					fred_sugest1=0;
					for (var j=0; j<equipe1.length; j++){
						
						if(equipe1[j]=='fred'){
							equipe2.push('fred');
							porc_equipe2.push(porcentagem_fred);
							
							equipe1.splice(j, 1);
							porc_equipe1.splice(j, 1);
						}
						
					}
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe1.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe1[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe1.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}	
					
					porcentagem_sugestao2=0;
					
					for (var i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
						
						
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}	
				}
				//-------------------------------------------------------------------//
				//---------------Verifica se ALICE foi movido para sugestao 2----------------------//
				if (($("#alice").is('.ui-draggable-dragging')) && (alice_sugest1==1) ){
					$("#alice").css("z-index", a++);
					alice_sugest1=0;
					for (var j=0; j<equipe1.length; j++){
						
						if(equipe1[j]=='alice'){
							equipe2.push('alice');
							porc_equipe2.push(porcentagem_alice);
							
							equipe1.splice(j, 1);
							porc_equipe1.splice(j, 1);
						}
						
					}
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe1.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe1[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe1.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}	
					
					porcentagem_sugestao2=0;
					
					for (var i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
						
						
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}	
				}
				//-------------------------------------------------------------------//
				
				//---------------Verifica se DAVE foi movido para sugestao 2----------------------//
				if (($("#dave").is('.ui-draggable-dragging')) && (dave_sugest1==1) ){
					$("#dave").css("z-index", a++);
					dave_sugest1=0;
					for (var j=0; j<equipe1.length; j++){
						
						if(equipe1[j]=='dave'){
							equipe2.push('dave');
							porc_equipe2.push(porcentagem_dave);
							
							equipe1.splice(j, 1);
							porc_equipe1.splice(j, 1);
						}
						
					}
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe1.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe1[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe1.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}	
					
					porcentagem_sugestao2=0;
					
					for (var i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
						
						
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}	
				}
				//-------------------------------------------------------------------//
				//-------------------------------------------------------------------//
				//-------------------------------------------------------------------//
				//---------------Verifica se BOB foi movido para sugestao 2----------------------//
				if (($("#bob").is('.ui-draggable-dragging')) && (bob_sugest1==1) ){
					$("#bob").css("z-index", a++);
					bob_sugest1=0;
					for (var j=0; j<equipe1.length; j++){
						
						if(equipe1[j]=='bob'){
							equipe2.push('bob');
							porc_equipe2.push(porcentagem_bob);
							
							equipe1.splice(j, 1);
							porc_equipe1.splice(j, 1);
						}
						
					}
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe1.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe1[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe1.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}	
					
					porcentagem_sugestao2=0;
					
					for (var i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
						
						
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}	
				}
				//-------------------------------------------------------------------//		
				//---------------Verifica se MARCOS foi movido para sugestao 2----------------------//
				if (($("#marcos").is('.ui-draggable-dragging')) && (marcos_sugest1==1) ){
					$("#marcos").css("z-index", a++);
					marcos_sugest1=0;
					for (var j=0; j<equipe1.length; j++){
						
						if(equipe1[j]=='marcos'){
							equipe2.push('marcos');
							porc_equipe2.push(porcentagem_marcos);
							
							equipe1.splice(j, 1);
							porc_equipe1.splice(j, 1);
						}
						
					}
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe1.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe1[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe1.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}	
					
					porcentagem_sugestao2=0;
					
					for (var i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
						
						
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}	
				}
				//-------------------------------------------------------------------//				
				//---------------Verifica se JULIA foi movido para sugestao 2----------------------//
				if (($("#julia").is('.ui-draggable-dragging')) && (julia_sugest1==1) ){
					$("#julia").css("z-index", a++);
					julia_sugest1=0;
					for (var j=0; j<equipe1.length; j++){
						
						if(equipe1[j]=='julia'){
							equipe2.push('julia');
							porc_equipe2.push(porcentagem_julia);
							
							equipe1.splice(j, 1);
							porc_equipe1.splice(j, 1);
						}
						
					}
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe1.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe1[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe1.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}	
					
					porcentagem_sugestao2=0;
					
					for (var i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
						
						
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}	
				}
				//-------------------------------------------------------------------//			
				//---------------Verifica se NICK foi movido para sugestao 2-------------------//
				if (($("#nick").is('.ui-draggable-dragging')) && (nick_sugest1==1) ){
					$("#nick").css("z-index", a++);
					nick_sugest1=0;
					for (var j=0; j<equipe1.length; j++){
						
						if(equipe1[j]=='nick'){
							equipe2.push('nick');
							porc_equipe2.push(porcentagem_nick);
							
							equipe1.splice(j, 1);
							porc_equipe1.splice(j, 1);
						}
						
					}
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe1.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe1[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe1.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}	
					
					porcentagem_sugestao2=0;
					
					for (var i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
						
						
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}	
				}
				//-------------------------------------------------------------------//				
				
            },
            over: function(event, ui) {
			
            },
            out: function(event, ui) {
				//-----------------verifica se kiran voltou para sugestao 1 -----------------//
				if (($("#kiran").is('.ui-draggable-dragging')) && (kiran_sugest1==0) ){
					$("#kiran").css("z-index", a++);
					kiran_sugest1=1;	
					for (var j=0; j<equipe2.length; j++){
						
						if(equipe2[j]=='kiran'){
							equipe1.push('kiran');
							porc_equipe1.push(porcentagem_kiran);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe1.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe1[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe1.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}	
					
					porcentagem_sugestao2=0;
					
					for (var i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}	
				}
				//--------------------------------------------------------------------//
				//-----------------verifica se fred voltou para sugestao 1 -----------------//
				if (($("#fred").is('.ui-draggable-dragging')) && (fred_sugest1==0) ){
					$("#fred").css("z-index", a++);
					fred_sugest1=1;	
					for (var j=0; j<equipe2.length; j++){
						
						if(equipe2[j]=='fred'){
							equipe1.push('fred');
							porc_equipe1.push(porcentagem_fred);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe1.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe1[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe1.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}	
					
					porcentagem_sugestao2=0;
					
					for (var i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}	
				}
				//--------------------------------------------------------------------//
				//-----------------verifica se alice voltou para sugestao 1 -----------------//
				if (($("#alice").is('.ui-draggable-dragging')) && (alice_sugest1==0) ){
					$("#alice").css("z-index", a++);
					alice_sugest1=1;	
					for (var j=0; j<equipe2.length; j++){
						
						if(equipe2[j]=='alice'){
							equipe1.push('alice');
							porc_equipe1.push(porcentagem_alice);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe1.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe1[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe1.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}
					
					porcentagem_sugestao2=0;
					
					for (var i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}
				}
				//--------------------------------------------------------------------//
				
				//-----------------verifica se DAVE voltou para sugestao 1 -----------------//
				if (($("#dave").is('.ui-draggable-dragging')) && (dave_sugest1==0) ){
						$("#dave").css("z-index", a++);
						dave_sugest1=1;	
					for (var j=0; j<equipe2.length; j++){
						
						if(equipe2[j]=='dave'){
							equipe1.push('dave');
							porc_equipe1.push(porcentagem_dave);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe1.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe1[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe1.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}
					
					porcentagem_sugestao2=0;
					
					for (var i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}
				}
				//--------------------------------------------------------------------//
				//--------------------------------------------------------------------//
				//--------------------------------------------------------------------//
				//-----------------verifica se bob voltou para sugestao 1 -----------------//
				if (($("#bob").is('.ui-draggable-dragging')) && (bob_sugest1==0) ){
					$("#bob").css("z-index", a++);
					bob_sugest1=1;	
					for (var j=0; j<equipe2.length; j++){
						
						if(equipe2[j]=='bob'){
							equipe1.push('bob');
							porc_equipe1.push(porcentagem_bob);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe1.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe1[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe1.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}
					
					porcentagem_sugestao2=0;
					
					for (var i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}
				}
				//--------------------------------------------------------------------//
				//-----------------verifica se MARCOS voltou para sugestao 1 -----------------//
				if (($("#marcos").is('.ui-draggable-dragging')) && (marcos_sugest1==0) ){
					$("#marcos").css("z-index", a++);
					marcos_sugest1=1;	
					for (var j=0; j<equipe2.length; j++){
						
						if(equipe2[j]=='marcos'){
							equipe1.push('marcos');
							porc_equipe1.push(porcentagem_marcos);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe1.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe1[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe1.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}
					
					porcentagem_sugestao2=0;
					
					for (var i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}
				}
				//--------------------------------------------------------------------//
				//-----------------verifica se julia voltou para sugestao 1 -----------------//
				if (($("#julia").is('.ui-draggable-dragging')) && (julia_sugest1==0) ){
					$("#julia").css("z-index", a++);
					julia_sugest1=1;	
					for (var j=0; j<equipe2.length; j++){
						
						if(equipe2[j]=='julia'){
							equipe1.push('julia');
							porc_equipe1.push(porcentagem_julia);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe1.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe1[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe1.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}
					
					porcentagem_sugestao2=0;
					
					for (var i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}
				}
				//--------------------------------------------------------------------//
				//-----------------verifica se NICK voltou para sugestao 1 -----------------//
				if (($("#nick").is('.ui-draggable-dragging')) && (nick_sugest1==0) ){
					$("#nick").css("z-index", a++);
					nick_sugest1=1;	
					for (var j=0; j<equipe2.length; j++){
						
						if(equipe2[j]=='nick'){
							equipe1.push('nick');
							porc_equipe1.push(porcentagem_nick);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe1.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe1[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe1.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}
					
					porcentagem_sugestao2=0;
					
					for (var i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}
				}
				//--------------------------------------------------------------------//
			}
			
			 });
         

				 
				
            //---------------- ARRASTAVEIS 2 da SUGESTAO 2 p sugest 1 --------------------------------//
			
       $("#sugest1").droppable({
		
            drop: function(event, ui) {
				//---------------Verifica se kiran foi movido para sugestao 1-----------------//
				if (($("#kiran2").is('.ui-draggable-dragging')) && (kiran2_sugest1==1) ){
					$("#kiran2").css("z-index", a++);
					kiran2_sugest1=0;
					for (var j=0; j<equipe2.length; j++){
						
						if(equipe2[j]=='kiran'){
							equipe1.push('kiran');
							porc_equipe1.push(porcentagem_kiran);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe1.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe1[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe1.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}
					
					porcentagem_sugestao2=0;
					
					for (var i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
						
						
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}
				}
				//-------------------------------------------------------------------//
				//---------------Verifica se fred foi movido para sugestao 1------------------//
				if (($("#fred2").is('.ui-draggable-dragging')) && (fred2_sugest1==1) ){
					$("#fred2").css("z-index", a++);
					fred2_sugest1=0;
					for (var j=0; j<equipe2.length; j++){
						
						if(equipe2[j]=='fred'){
							equipe1.push('fred');
							porc_equipe1.push(porcentagem_fred);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe1.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe1[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe1.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}
					
					porcentagem_sugestao2=0;
					
					for (var i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
						
						
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}
				}
				//-------------------------------------------------------------------//
				//---------------Verifica se ALICE foi movido para sugestao 1-------------//
				if (($("#alice2").is('.ui-draggable-dragging')) && (alice2_sugest1==1) ){
					$("#alice2").css("z-index", a++);
					alice2_sugest1=0;
					for (var j=0; j<equipe2.length; j++){
						
						if(equipe2[j]=='alice'){
							equipe1.push('alice');
							porc_equipe1.push(porcentagem_alice);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe1.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe1[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe1.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}
					
					porcentagem_sugestao2=0;
					
					for (var i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
						
						
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}
				}
				//-------------------------------------------------------------------//
				
				//---------------Verifica se DAVE foi movido para sugestao 2----------------------//
				if (($("#dave2").is('.ui-draggable-dragging')) && (dave2_sugest1==1) ){
					$("#dave2").css("z-index", a++);
					dave2_sugest1=0;
					for (var j=0; j<equipe2.length; j++){
						
						if(equipe2[j]=='dave'){
							equipe1.push('dave');
							porc_equipe1.push(porcentagem_dave);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe1.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe1[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe1.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}
					
					porcentagem_sugestao2=0;
					
					for (var i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
						
						
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}
				}
				//-------------------------------------------------------------------//
				//-------------------------------------------------------------------//
				//-------------------------------------------------------------------//
				//---------------Verifica se BOB foi movido para sugestao 2----------------------//
				if (($("#bob2").is('.ui-draggable-dragging')) && (bob2_sugest1==1) ){
					$("#bob2").css("z-index", a++);
					bob2_sugest1=0;
					for (var j=0; j<equipe2.length; j++){
						
						if(equipe2[j]=='bob'){
							equipe1.push('bob');
							porc_equipe1.push(porcentagem_bob);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe1.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe1[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe1.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}
					
					porcentagem_sugestao2=0;
					
					for (var i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
						
						
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}
				}
				//-------------------------------------------------------------------//		
				//---------------Verifica se MARCOS foi movido para sugestao 2----------------------//
				if (($("#marcos2").is('.ui-draggable-dragging')) && (marcos2_sugest1==1) ){
					$("#marcos2").css("z-index", a++);
					marcos2_sugest1=0;
					for (var j=0; j<equipe2.length; j++){
						
						if(equipe2[j]=='marcos'){
							equipe1.push('marcos');
							porc_equipe1.push(porcentagem_marcos);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe1.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe1[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe1.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}
					
					porcentagem_sugestao2=0;
					
					for (var i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
						
						
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}
				}
				//-------------------------------------------------------------------//				
				//---------------Verifica se JULIA foi movido para sugestao 2----------------------//
				if (($("#julia2").is('.ui-draggable-dragging')) && (julia2_sugest1==1) ){
					$("#julia2").css("z-index", a++);
					julia2_sugest1=0;
					for (var j=0; j<equipe2.length; j++){
						
						if(equipe2[j]=='julia'){
							equipe1.push('julia');
							porc_equipe1.push(porcentagem_julia);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe1.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe1[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe1.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}
					
					porcentagem_sugestao2=0;
					
					for (var i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
						
						
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}
				}
				//-------------------------------------------------------------------//			
				//---------------Verifica se NICK foi movido para sugestao 2----------------------//
				if (($("#nick2").is('.ui-draggable-dragging')) && (nick2_sugest1==1) ){
					$("#nick2").css("z-index", a++);
					nick2_sugest1=0;
					for (var j=0; j<equipe2.length; j++){
						
						if(equipe2[j]=='nick'){
							equipe1.push('nick');
							porc_equipe1.push(porcentagem_nick);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe1.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe1[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe1.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}
					
					porcentagem_sugestao2=0;
					
					for (var i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
						
						
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}
				}
				//-------------------------------------------------------------------//				
				
            },
            over: function(event, ui) {
			
            },
            out: function(event, ui) {
				//-----------------verifica se kiran2 voltou para sugestao 2 -----------------//
				if (($("#kiran2").is('.ui-draggable-dragging')) && (kiran2_sugest1==0) ){
					$("#kiran2").css("z-index", a++);	
					kiran2_sugest1=1;	
					for (var j=0; j<equipe1.length; j++){
						
						if(equipe1[j]=='kiran'){
							equipe2.push('kiran');
							porc_equipe2.push(porcentagem_kiran);
							
							equipe1.splice(j, 1);
							porc_equipe1.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe1.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe1[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe1.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}
					
					
					
					porcentagem_sugestao2=0;
					
					for (var i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}
				}
				//--------------------------------------------------------------------//
				//-----------------verifica se fred2 voltou para sugestao 2 -----------------//
				if (($("#fred2").is('.ui-draggable-dragging')) && (fred2_sugest1==0) ){
					$("#fred2").css("z-index", a++);	
					fred2_sugest1=1;	
					for (var j=0; j<equipe1.length; j++){
						
						if(equipe1[j]=='fred'){
							equipe2.push('fred');
							porc_equipe2.push(porcentagem_fred);
							
							equipe1.splice(j, 1);
							porc_equipe1.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe1.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe1[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe1.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}
					
					
					porcentagem_sugestao2=0;
					
					for (var i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}
				}
				//--------------------------------------------------------------------//
				//-----------------verifica se alice2 voltou para sugestao 2 -----------------//
				if (($("#alice2").is('.ui-draggable-dragging')) && (alice2_sugest1==0) ){
					$("#alice2").css("z-index", a++);	
					alice2_sugest1=1;	
					for (var j=0; j<equipe1.length; j++){
						
						if(equipe1[j]=='alice'){
							equipe2.push('alice');
							porc_equipe2.push(porcentagem_alice);
							
							equipe1.splice(j, 1);
							porc_equipe1.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe1.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe1[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe1.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}
					
					
					porcentagem_sugestao2=0;
					
					for (var i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}
				}
				//--------------------------------------------------------------------//
				
				//-----------------verifica se DAVE2 voltou para sugestao 2 -----------------//
				if (($("#dave2").is('.ui-draggable-dragging')) && (dave2_sugest1==0) ){
					$("#dave2").css("z-index", a++);
					dave2_sugest1=1;	
					for (var j=0; j<equipe1.length; j++){
						
						if(equipe1[j]=='dave'){
							equipe2.push('dave');
							porc_equipe2.push(porcentagem_dave);
							
							equipe1.splice(j, 1);
							porc_equipe1.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe1.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe1[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe1.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}
					
					
					porcentagem_sugestao2=0;
					
					for (var i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}
				}
				//--------------------------------------------------------------------//
				//--------------------------------------------------------------------//
				//--------------------------------------------------------------------//
				//-----------------verifica se bob2 voltou para sugestao 2 -----------------//
				if (($("#bob2").is('.ui-draggable-dragging')) && (bob2_sugest1==0) ){
					$("#bob2").css("z-index", a++);
					bob2_sugest1=1;	
					for (var j=0; j<equipe1.length; j++){
						
						if(equipe1[j]=='bob'){
							equipe2.push('bob');
							porc_equipe2.push(porcentagem_bob);
							
							equipe1.splice(j, 1);
							porc_equipe1.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe1.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe1[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe1.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}
					
					porcentagem_sugestao2=0;
					
					for (var i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}
				}
				//--------------------------------------------------------------------//
				//-----------------verifica se MARCOS2 voltou para sugestao 2 -----------------//
				if (($("#marcos2").is('.ui-draggable-dragging')) && (marcos2_sugest1==0) ){
					$("#marcos2").css("z-index", a++);
					marcos2_sugest1=1;	
					for (var j=0; j<equipe1.length; j++){
						
						if(equipe1[j]=='marcos'){
							equipe2.push('marcos');
							porc_equipe2.push(porcentagem_marcos);
							
							equipe1.splice(j, 1);
							porc_equipe1.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe1.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe1[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe1.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}
					porcentagem_sugestao2=0;
					
					for (var i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}
				}
				//--------------------------------------------------------------------//
				//-----------------verifica se julia 2voltou para sugestao 2 -----------------//
				if (($("#julia2").is('.ui-draggable-dragging')) && (julia2_sugest1==0) ){
					$("#julia2").css("z-index", a++);
					julia2_sugest1=1;	
					for (var j=0; j<equipe1.length; j++){
						
						if(equipe1[j]=='julia'){
							equipe2.push('julia');
							porc_equipe2.push(porcentagem_julia);
							
							equipe1.splice(j, 1);
							porc_equipe1.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe1.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe1[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe1.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}
					
					porcentagem_sugestao2=0;
					
					for (var i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}
				}
				//--------------------------------------------------------------------//
				//-----------------verifica se NICK voltou para sugestao 2 -----------------//
				if (($("#nick2").is('.ui-draggable-dragging')) && (nick2_sugest1==0) ){
					$("#nick2").css("z-index", a++);
					nick2_sugest1=1;	
					for (var j=0; j<equipe1.length; j++){
						
						if(equipe1[j]=='nick'){
							equipe2.push('nick');
							porc_equipe2.push(porcentagem_nick);
							
							equipe1.splice(j, 1);
							porc_equipe1.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe1.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe1[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe1.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}
					
					porcentagem_sugestao2=0;
					
					for (var i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}
				}
				//--------------------------------------------------------------------//
			}
			
			 });
		
		
			 
		
			
});