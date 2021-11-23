


$(document).ready(function() {
  $('.tipe').next().hide(); 
		
		//===================================
				var kiran_perc_hard=0;
				var bob_perc_hard=0;

				var fred_perc_hard=0;
				var marcos_perc_hard=0;

				var alice_perc_hard=0;
				var julia_perc_hard=0;

				var dave_perc_hard=0;
				var nick_perc_hard=0;
								
				var porcentagens_hard = [];
				var pessoas = [];
				var niveis = [];
				var qtd_soft_skills = [];


				var porc_equipe =[];
				var porc_equipe2 =[];
				var menor_dist_hard;
				var menor_dist_soft;

				var maior_dist_hard;
				var maior_dist_soft;

				var novos_niveis = [];
				var novos_soft_skills = [];
				
				var novos_niveis2 = [];
				var novos_soft_skills2 = [];
				var indice_i, indice_j;


				var menor_hard;
				var menor_soft;

				var maior_hard;
				var maior_soft;

				var p,f;
				var pode=0;
				var pode_niveis=0;

				//alert('porcentagens_hard '+porcentagens_hard );
					
				var qtd_master=0;
				var qtd_senior=0;
				var qtd_pleno=0;
				var qtd_junior=0;
		//===================================


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
				var equipe = [];
				var nova_equipe1  = [];
				var nova_equipe2  = [];
					var porc_equipe1 = [];
					
					var equipe2 = [];
					var porc_equipe2 = [];
					
					var texts = [];
				
				$( "#botao" ).click(function() {
					
					
				//restart var

				//===================================
				 kiran_perc_hard=0;
				 bob_perc_hard=0;

				 fred_perc_hard=0;
				 marcos_perc_hard=0;

				 alice_perc_hard=0;
				 julia_perc_hard=0;

				 dave_perc_hard=0;
				 nick_perc_hard=0;
								
				 porcentagens_hard = [];
				 pessoas = [];
				 niveis = [];
				 qtd_soft_skills = [];


				 porc_equipe =[];
				 porc_equipe2 =[];
				 menor_dist_hard=0;
				 menor_dist_soft=0;

				 maior_dist_hard=0;
				 maior_dist_soft=0;

				 novos_niveis = [];
				 novos_soft_skills = [];
				
				 novos_niveis2 = [];
				 novos_soft_skills2 = [];
				


				
				 pode=0;
				 pode_niveis=0;

				//alert('porcentagens_hard '+porcentagens_hard );
					
				 qtd_master=0;
				 qtd_senior=0;
				 qtd_pleno=0;
				 qtd_junior=0;
		//===================================


				
   
				 a=1;
				
				
				
				
				 kiran_sugest1=1;
				 fred_sugest1=1;
				 alice_sugest1=1;
				 dave_sugest1=1;
				
				 bob_sugest1=1;
				 marcos_sugest1=1;
				 julia_sugest1=1;
				 nick_sugest1=1;
				
				 kiran2_sugest1=1;
				 fred2_sugest1=1;
				 alice2_sugest1=1;
				 dave2_sugest1=1;
				
				 bob2_sugest1=1;
				 marcos2_sugest1=1;
				 julia2_sugest1=1;
				 nick2_sugest1=1;
				
				
				 equipe1 = [];
				 equipe = [];
				 nova_equipe1  = [];
				 nova_equipe2  = [];
					 porc_equipe1 = [];
					
					 equipe2 = [];
					 porc_equipe2 = [];
					
					
					
				
				 texts = [];
				
						
				document.getElementById("similarprojects").style.display = "none";
				
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
						
						$('#txtdigitado').val(ig+' \n');
						
						
						soft = $('#entrada2').val();
						alert("Technologies: "+ig+"\nSoft Skills: "+soft);
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
					
					
					var softskills_kiran = ["Creativity","Communication","Initiative"];	
					var softskills_fred = ["Communication","Initiative","Leadership"];
					var softskills_alice = ["Creativity","Communication","Interaction"];
					var softskills_dave = ["Initiative", "Interaction", "Proactivity" ];


					var softskills_bob = ["Interaction","Leadership", "Proactivity" ];
					var softskills_marcos = ["Creativity","Interaction", "Proactivity"];
					var softskills_julia = ["Initiative","Leadership", "Proactivity" ];
					var softskills_nick = ["Creativity","Communication","Initiative"];
					
					
					
					
					
					
					
					var lines = $('#txtdigitado').val().split(/,/);
					
					
					
					var softs = $('#txtdigitado2').val().split(/,/);
					var arraysoft = [];
					var equipe1_comparacao =[];
					
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
					
//=======================================================
//             VERIFICA AS  QUANTIDADES DE SOFT Skills


// =================================================					
					
					
				var qtd_sof_kiran=0;
				var qtd_sof_fred=0;
				var qtd_sof_alice=0;
				var qtd_sof_dave=0;
				
				var qtd_sof_bob=0;
				var qtd_sof_marcos=0;
				var qtd_sof_julia=0;
				var qtd_sof_nick=0;
				
				
				var array_qtd_soft = []; 
			
				
					
					
					
							
							for (var i=0; i < softskills_kiran.length; i++) {
								for (var x=0; x < arraysoft.length; x++){
									
									if (softskills_kiran[i] == arraysoft[x]){
										qtd_sof_kiran = qtd_sof_kiran +1;
										
										
											
									}
								}
							}
							array_qtd_soft.push(qtd_sof_kiran);
							
						
							
							for (var i=0; i < softskills_fred.length; i++) {
								for (var x=0; x < arraysoft.length; x++){
									
									if (softskills_fred[i] == arraysoft[x]){
										qtd_sof_fred =qtd_sof_fred  +1;
										
										
											
									}
								}
							}
							array_qtd_soft.push(qtd_sof_fred);
							
						
							
							for (var i=0; i < softskills_alice.length; i++) {
								for (var x=0; x < arraysoft.length; x++){
									
									if (softskills_alice[i] == arraysoft[x]){
										qtd_sof_alice = qtd_sof_alice +1;
										
										
											
									}
								}
							}
							array_qtd_soft.push(qtd_sof_alice);
							
						
							
							for (var i=0; i < softskills_dave.length; i++) {
								for (var x=0; x < arraysoft.length; x++){
									
									if (softskills_dave[i] == arraysoft[x]){
										qtd_sof_dave = qtd_sof_dave +1;
										
										
											
									}
								}
							}
							array_qtd_soft.push(qtd_sof_dave);
							
						
							
							for (var i=0; i < softskills_bob.length; i++) {
								for (var x=0; x < arraysoft.length; x++){
									
									if (softskills_bob[i] == arraysoft[x]){
										qtd_sof_bob = qtd_sof_bob +1;
										
										
											
									}
								}
							}
							array_qtd_soft.push(qtd_sof_bob);
							
						
							
							for (var i=0; i < softskills_marcos.length; i++) {
								for (var x=0; x < arraysoft.length; x++){
									
									if (softskills_marcos[i] == arraysoft[x]){
										qtd_sof_marcos = qtd_sof_marcos +1;
										
										
											
									}
								}
							}
							array_qtd_soft.push(qtd_sof_marcos);
							
						
						
						
							
							for (var i=0; i < softskills_julia.length; i++) {
								for (var x=0; x < arraysoft.length; x++){
									
									if (softskills_julia[i] == arraysoft[x]){
										qtd_sof_julia = qtd_sof_julia +1;
										
										
											
									}
								}
							}
							array_qtd_soft.push(qtd_sof_julia);
							
						
						
						
							
							for (var i=0; i < softskills_nick.length; i++) {
								for (var x=0; x < arraysoft.length; x++){
									
									if (softskills_nick[i] == arraysoft[x]){
										qtd_sof_nick = qtd_sof_nick +1;
										
										
											
									}
								}
							}
							array_qtd_soft.push(qtd_sof_nick);
				
//===================================================================================================================

// ======================================================================				
// ======================================================================				



// ==================
if (kiranpode==1){
	kiran_perc_hard=1;
}
if (bobpode==1){
	bob_perc_hard=1;
}
if (fredpode==1){
	fred_perc_hard=1;
}
if (marcospode==1){
	marcos_perc_hard=1;
}
if (alicepode==1){
	alice_perc_hard=1;
}
if (juliapode==1){
	julia_perc_hard=1;
}
if (davepode==1){
	dave_perc_hard=1;
}
if (nickpode==1){
	nick_perc_hard=1;
}
//=================



for (var ppors = 0; ppors<tamanho; ppors++){
	
	if (kiran_perc_hard==1){ 
		porcentagens_hard.push(porcentagem_kiran);
		pessoas.push('kiran');
		niveis.push('master');
		qtd_soft_skills.push(qtd_sof_kiran);
		kiran_perc_hard=0; 
	}
	if (bob_perc_hard==1){ 
		porcentagens_hard.push(porcentagem_bob);
		pessoas.push('bob');
		niveis.push('master');
		qtd_soft_skills.push(qtd_sof_bob);
		bob_perc_hard=0; 
	}
	if (fred_perc_hard==1){ 
		porcentagens_hard.push(porcentagem_fred); 
		pessoas.push('fred');
		niveis.push('pleno');
		qtd_soft_skills.push(qtd_sof_fred);
		fred_perc_hard=0; 
	}
	if (marcos_perc_hard==1){ 
		porcentagens_hard.push(porcentagem_marcos);
		pessoas.push('marcos');
		niveis.push('pleno');
		qtd_soft_skills.push(qtd_sof_marcos);
		marcos_perc_hard=0; 
	}
	if (alice_perc_hard==1){ 
		porcentagens_hard.push(porcentagem_alice); 
		pessoas.push('alice');
		niveis.push('senior');
		qtd_soft_skills.push(qtd_sof_alice);
		alice_perc_hard=0; 
	}
	if (julia_perc_hard==1){ 
		porcentagens_hard.push(porcentagem_julia);
		pessoas.push('julia');
		niveis.push('senior');
		qtd_soft_skills.push(qtd_sof_julia);
		julia_perc_hard=0; 
	}
	if (dave_perc_hard==1){ 
		porcentagens_hard.push(porcentagem_dave); 
		pessoas.push('dave');
		niveis.push('junior');
		qtd_soft_skills.push(qtd_sof_dave);
		dave_perc_hard=0; 
	}
	if (nick_perc_hard==1){ 
		porcentagens_hard.push(porcentagem_nick);
		pessoas.push('nick');
		niveis.push('junior');
		qtd_soft_skills.push(qtd_sof_nick);
		nick_perc_hard=0; 
	}
	
}
						
//alert('pessoas: '+pessoas+ '\nporcen hard: '+porcentagens_hard+ '\nQuantidade de soft:'+qtd_soft_skills);					
						
					
		
//variaveis
//var porcentagens_hard = [13,25,50,45,9,80,17,30];
//var pessoas =        ['kiran','fred','dave','alex','helena', 'bob', 'marcos','nick'];
//var niveis =      ['master','master','senior','pleno','senior','pleno','junior','junior'];
//var qtd_soft_skills = [3,2,4,3,2,7,3,2];
  


				
					
					
				//TIPO DE AGRUPAMENTO HARD skill		
				var type_grouping1;
				checar();
				function checar()
				{
				 var botoes1 = document.getElementsByName("gridRadios1");

				 for (var i = 0 in botoes1) 
						if (botoes1[i].checked){
							
							 type_grouping1 = botoes1[i].value;
						}
				}						
				//TIPO DE AGRUPAMENTO soft skill		
				var type_grouping2;
				checar2();
				function checar2()
				{
				 var botoes2 = document.getElementsByName("gridRadios2");

				 for (var i = 0 in botoes2) 
						if (botoes2[i].checked){
							
							 type_grouping2 = botoes2[i].value;
						}
				}
				
			
				
			
				
				
				// 1. verifica se é homogeneo e homogeneo
				if ((type_grouping1 == "option1") && (type_grouping2=="option3")){
					
					//alert('homogeneo e homogeneo');
						while (equipe.length <tamanho){	
							
							//pega distancia entre valores maximo e minimo no array das porcentagens_hard 
							const min = Math.min(...porcentagens_hard);
							const max = Math.max(...porcentagens_hard);	
											
							menor_hard=Math.abs(max-min);
							
							//pega distancia entre valores maximo e minimo no array das SOFT SKILLS
							const min2 = Math.min(...qtd_soft_skills);
							const max2 = Math.max(...qtd_soft_skills);	
											
							menor_soft = Math.abs(max2-min2);
							
							
							
							//varre o array para encontrar menor_hard distancia entre pares
							for (var i =0; i < porcentagens_hard.length; i++){
								for ( var j=0; j < porcentagens_hard.length; j++) {
											
										//alert ('tamanho '+equipe.length);
										if (equipe.length == 0 ) {
											if ((i!=j) && (niveis[i] != niveis[j])) {
												
												
												menor_dist_hard = Math.abs(porcentagens_hard[i] - porcentagens_hard[j]);
												
												menor_dist_soft = Math.abs(qtd_soft_skills[i] - qtd_soft_skills[j]);
													
													//verifica se nao ja tem o nivel no novo array de niveis
													var ver = novos_niveis.includes(niveis[i]);
													var ver2 = novos_niveis.includes(niveis[j]);
													
													
													//alert ('a menor_hard distancia = '+menor_dist_hard+ ' entre '+porcentagens_hard[i]+ ' e '+porcentagens_hard[j]+ ' eh menor ou igual que  ' +menor+ ' ? ');
													if ((menor_dist_hard <= menor_hard) && (menor_dist_soft <= menor_soft) && (ver==false) && (ver2==false) ){
														
														
														menor_hard = menor_dist_hard;
														menor_soft = menor_dist_soft;
														//salva o indice dos valores com menor_hard distancia 
														indice_i = i;
														indice_j = j;
													}
											}
										}	
										if (equipe.length > 0 ){
											if ((i!=j) && (niveis[i] != niveis[j])) {
												menor_dist_hard = Math.abs(porcentagens_hard[i] - porcentagens_hard[j]);
												
												menor_dist_soft = Math.abs(qtd_soft_skills[i] - qtd_soft_skills[j]);						
												
													//verifica se nao ja tem o nivel no novo array de niveis
													var ver = novos_niveis.includes(niveis[i]);
													var ver2 = novos_niveis.includes(niveis[j]);
													
													
													
													//alert ('a menor_hard distancia = '+menor_dist_hard+ ' entre '+porcentagens_hard[i]+ ' e '+porcentagens_hard[j]+ ' eh menor ou igual que  ' +menor+ ' ? ');
													if ((menor_dist_hard <= menor_hard) && (menor_dist_soft <= menor_soft) && (ver==false) && (ver2==false) ){
														
														
														menor_hard = menor_dist_hard;
														
														//salva o indice dos valores com menor_hard distancia 
														indice_i = i;
														indice_j = j;
													}
											}
										}
								}
							}	
														//se equipe já tiver alguem
														if (equipe.length > 0 ) {
															
															//varre array para confirmar que  a pessoa não foi inserida ja na equipe
															for (p=0;p<=equipe.length;p++){
															
																if ((pessoas[indice_i]  != equipe[p]) && (pessoas[indice_j]  != equipe[p])) {
																	pode=1;
																}
																
																
															}
															
															
														
																		
																
														
															
															//alert(novos_niveis);
																
																
															
															
															
															
															if (pode==1){
																	
																	
																	
																	
																
																		novos_niveis.push(niveis[indice_i]);
																		novos_niveis.push(niveis[indice_j]);
																		
																		novos_soft_skills.push(qtd_soft_skills[indice_i]);
																		novos_soft_skills.push(qtd_soft_skills[indice_j]);
																		
																	
																		//coloca a pessoa de incice i
																		//alert('colocando  '+pessoas[indice_i]);
																		equipe.push(pessoas[indice_i]);
																		//coloca a porcentagem da pessoa de incice i
																		
																		//alert('colocando  '+porcentagens_hard[indice_i]);
																		porc_equipe.push(porcentagens_hard[indice_i]);
																		
																		//coloca a pessoa de incice j
																		//alert('colocando   '+pessoas[indice_j]);
																		equipe.push(pessoas[indice_j]);
																		//coloca a porcentagem da pessoa de incice j
																		//alert('colocando   '+porcentagens_hard[indice_j]);
																		porc_equipe.push(porcentagens_hard[indice_j]);
																		
																		
																		//retira a pessoa de incice i e de indice j
																		//alert('retirando '+pessoas[indice_i]);
																		pessoas.splice(indice_i,1);
																		
																		
																		//alert('retirando '+pessoas[indice_j]);
																		pessoas.splice(indice_j,1);
																		
																		
																		
																		
																			
																		//alert('retirando '+porcentagens_hard[indice_i]);
																		porcentagens_hard.splice(indice_i,1);	
																		
																		//retira a porcentagem da pessoa de incice i e de indice j
																		//alert('retirando '+porcentagens_hard[indice_j]);
																		porcentagens_hard.splice(indice_j,1);
																	
																		//retira niveis
																		niveis.splice(indice_j,1);
																		niveis.splice(indice_i,1);
																		
																		
																		//retira soft skilss
																		qtd_soft_skills.splice(indice_j,1);
																		qtd_soft_skills.splice(indice_i,1);
																		
																		pode=0;
																		
																		
																	
																	
																}
															
																
														}
													
													//se equipe ainda for vazia
													if (equipe.length == 0 ) {
																		
																		novos_niveis.push(niveis[indice_i]);
																		novos_niveis.push(niveis[indice_j]);
																		
																		novos_soft_skills.push(qtd_soft_skills[indice_i]);
																		novos_soft_skills.push(qtd_soft_skills[indice_j]);
														
																//coloca a pessoa de incice i
																		//alert('colocando  '+pessoas[indice_i]);
																		equipe.push(pessoas[indice_i]);
																		//coloca a porcentagem da pessoa de incice i
																		
																		//alert('colocando  '+porcentagens_hard[indice_i]);
																		porc_equipe.push(porcentagens_hard[indice_i]);
																		
																		//coloca a pessoa de incice j
																		//alert('colocando   '+pessoas[indice_j]);
																		equipe.push(pessoas[indice_j]);
																		//coloca a porcentagem da pessoa de incice j
																		//alert('colocando   '+porcentagens_hard[indice_j]);
																		porc_equipe.push(porcentagens_hard[indice_j]);
																		
																		
																		//retira a pessoa de incice i e de indice j
																		//alert('retirando '+pessoas[indice_i]);
																		pessoas.splice(indice_i,1);
																		
																		
																		//alert('retirando '+pessoas[indice_j]);
																		pessoas.splice(indice_j,1);
																		
																		
																		
																		
																		//alert('retirando '+porcentagens_hard[indice_i]);
																		porcentagens_hard.splice(indice_i,1);	
																		
																		//retira a porcentagem da pessoa de incice i e de indice j
																		//alert('retirando '+porcentagens_hard[indice_j]);
																		porcentagens_hard.splice(indice_j,1);
																	
																		
																		//retira niveis
																		niveis.splice(indice_j,1);
																		niveis.splice(indice_i,1);
																		
																		//retira soft skilss
																		qtd_soft_skills.splice(indice_j,1);
																		qtd_soft_skills.splice(indice_i,1);
																		
																		pode_niveis=0;
																		pode=0;
																		
																
																
														
													}
						}
						
						
						while (equipe2.length <tamanho){	
							
							//pega distancia entre valores maximo e minimo no array das porcentagens_hard 
							const min = Math.min(...porcentagens_hard);
							const max = Math.max(...porcentagens_hard);	
											
							menor_hard=Math.abs(max-min);
							
							//pega distancia entre valores maximo e minimo no array das SOFT SKILLS
							const min2 = Math.min(...qtd_soft_skills);
							const max2 = Math.max(...qtd_soft_skills);	
											
							menor_soft = Math.abs(max2-min2);
							
							
							
							//varre o array para encontrar menor_hard distancia entre pares
							for (var i =0; i < porcentagens_hard.length; i++){
								for ( var j=0; j < porcentagens_hard.length; j++) {
											
										//alert ('tamanho '+equipe2.length);
										if (equipe2.length == 0 ) {
											if ((i!=j) && (niveis[i] != niveis[j])) {
												
												
												menor_dist_hard = Math.abs(porcentagens_hard[i] - porcentagens_hard[j]);
												
												menor_dist_soft = Math.abs(qtd_soft_skills[i] - qtd_soft_skills[j]);
													
													//verifica se nao ja tem o nivel no novo array de niveis
													var ver = novos_niveis2.includes(niveis[i]);
													var ver2 = novos_niveis2.includes(niveis[j]);
													
													
													//alert ('a menor_hard distancia = '+menor_dist_hard+ ' entre '+porcentagens_hard[i]+ ' e '+porcentagens_hard[j]+ ' eh menor ou igual que  ' +menor+ ' ? ');
													if ((menor_dist_hard <= menor_hard) && (menor_dist_soft <= menor_soft) && (ver==false) && (ver2==false) ){
														
														
														menor_hard = menor_dist_hard;
														menor_soft = menor_dist_soft;
														//salva o indice dos valores com menor_hard distancia 
														indice_i = i;
														indice_j = j;
													}
											}
										}	
										if (equipe2.length > 0 ){
											if ((i!=j) && (niveis[i] != niveis[j])) {
												menor_dist_hard = Math.abs(porcentagens_hard[i] - porcentagens_hard[j]);
												
												menor_dist_soft = Math.abs(qtd_soft_skills[i] - qtd_soft_skills[j]);						
												
													//verifica se nao ja tem o nivel no novo array de niveis
													var ver = novos_niveis2.includes(niveis[i]);
													var ver2 = novos_niveis2.includes(niveis[j]);
													
													
													
													//alert ('a menor_hard distancia = '+menor_dist_hard+ ' entre '+porcentagens_hard[i]+ ' e '+porcentagens_hard[j]+ ' eh menor ou igual que  ' +menor+ ' ? ');
													if ((menor_dist_hard <= menor_hard) && (menor_dist_soft <= menor_soft) && (ver==false) && (ver2==false) ){
														
														
														menor_hard = menor_dist_hard;
														
														//salva o indice dos valores com menor_hard distancia 
														indice_i = i;
														indice_j = j;
													}
											}
										}
								}
							}	
														//se equipe2 já tiver alguem
														if (equipe2.length > 0 ) {
															
															//varre array para confirmar que  a pessoa não foi inserida ja na equipe2
															for (p=0;p<=equipe2.length;p++){
															
																if ((pessoas[indice_i]  != equipe2[p]) && (pessoas[indice_j]  != equipe2[p])) {
																	pode=1;
																}
																
																
															}
															
															
														
																		
																
														
															
															//alert(novos_niveis2
																
																
															
															
															
															
															if (pode==1){
																	
																	
																	
																	
																
																		novos_niveis2.push(niveis[indice_i]);
																		novos_niveis2.push(niveis[indice_j]);
																		
																		novos_soft_skills2.push(qtd_soft_skills[indice_i]);
																		novos_soft_skills2.push(qtd_soft_skills[indice_j]);
																		
																	
																		//coloca a pessoa de incice i
																		//alert('colocando  '+pessoas[indice_i]);
																		equipe2.push(pessoas[indice_i]);
																		//coloca a porcentagem da pessoa de incice i
																		
																		//alert('colocando  '+porcentagens_hard[indice_i]);
																		porc_equipe2.push(porcentagens_hard[indice_i]);
																		
																		//coloca a pessoa de incice j
																		//alert('colocando   '+pessoas[indice_j]);
																		equipe2.push(pessoas[indice_j]);
																		//coloca a porcentagem da pessoa de incice j
																		//alert('colocando   '+porcentagens_hard[indice_j]);
																		porc_equipe2.push(porcentagens_hard[indice_j]);
																		
																		
																		//retira a pessoa de incice i e de indice j
																		//alert('retirando '+pessoas[indice_i]);
																		pessoas.splice(indice_i,1);
																		
																		
																		//alert('retirando '+pessoas[indice_j]);
																		pessoas.splice(indice_j,1);
																		
																		
																		
																		
																			
																		//alert('retirando '+porcentagens_hard[indice_i]);
																		porcentagens_hard.splice(indice_i,1);	
																		
																		//retira a porcentagem da pessoa de incice i e de indice j
																		//alert('retirando '+porcentagens_hard[indice_j]);
																		porcentagens_hard.splice(indice_j,1);
																	
																		//retira niveis
																		niveis.splice(indice_j,1);
																		niveis.splice(indice_i,1);
																		
																		
																		//retira soft skilss
																		qtd_soft_skills.splice(indice_j,1);
																		qtd_soft_skills.splice(indice_i,1);
																		
																		pode=0;
																		
																		
																	
																	
																}
															
																
														}
													
													//se equipe2 ainda for vazia
													if (equipe2.length == 0 ) {
																		
																		novos_niveis2.push(niveis[indice_i]);
																		novos_niveis2.push(niveis[indice_j]);
																		
																		novos_soft_skills2.push(qtd_soft_skills[indice_i]);
																		novos_soft_skills2.push(qtd_soft_skills[indice_j]);
														
																//coloca a pessoa de incice i
																		//alert('colocando  '+pessoas[indice_i]);
																		equipe2.push(pessoas[indice_i]);
																		//coloca a porcentagem da pessoa de incice i
																		
																		//alert('colocando  '+porcentagens_hard[indice_i]);
																		porc_equipe2.push(porcentagens_hard[indice_i]);
																		
																		//coloca a pessoa de incice j
																		//alert('colocando   '+pessoas[indice_j]);
																		equipe2.push(pessoas[indice_j]);
																		//coloca a porcentagem da pessoa de incice j
																		//alert('colocando   '+porcentagens_hard[indice_j]);
																		porc_equipe2.push(porcentagens_hard[indice_j]);
																		
																		
																		//retira a pessoa de incice i e de indice j
																		//alert('retirando '+pessoas[indice_i]);
																		pessoas.splice(indice_i,1);
																		
																		
																		//alert('retirando '+pessoas[indice_j]);
																		pessoas.splice(indice_j,1);
																		
																		
																		
																		
																		//alert('retirando '+porcentagens_hard[indice_i]);
																		porcentagens_hard.splice(indice_i,1);	
																		
																		//retira a porcentagem da pessoa de incice i e de indice j
																		//alert('retirando '+porcentagens_hard[indice_j]);
																		porcentagens_hard.splice(indice_j,1);
																	
																		
																		//retira niveis
																		niveis.splice(indice_j,1);
																		niveis.splice(indice_i,1);
																		
																		//retira soft skilss
																		qtd_soft_skills.splice(indice_j,1);
																		qtd_soft_skills.splice(indice_i,1);
																		
																		pode_niveis=0;
																		pode=0;
																		
																
																
														
													}
						}
						
						
										
				}
				
				// 2. verifica se é homogeneo e heterogeneo
				if ((type_grouping1 == "option1") && (type_grouping2=="option4")){
					
					
					//alert('homogeneo e heterogeneo ');
						while (equipe.length <tamanho){	
							
							//pega distancia entre valores maximo e minimo no array das porcentagens_hard 
							const min = Math.min(...porcentagens_hard);
							const max = Math.max(...porcentagens_hard);	
											
							menor_hard=Math.abs(max-min);
							
							//pega distancia entre valores maximo e minimo no array das SOFT SKILLS
							const min2 = Math.min(...qtd_soft_skills);
							//const max2 = Math.max(...qtd_soft_skills);	
											
							menor_soft = Math.abs(min2);
							
							
							
							//varre o array para encontrar menor_hard distancia entre pares
							for (var i =0; i < porcentagens_hard.length; i++){
								for ( var j=0; j < porcentagens_hard.length; j++) {
											
										//alert ('tamanho '+equipe.length);
										if (equipe.length == 0 ) {
											if ((i!=j) && (niveis[i] != niveis[j])) {
												
												
												menor_dist_hard = Math.abs(porcentagens_hard[i] - porcentagens_hard[j]);
												
												menor_dist_soft = Math.abs(qtd_soft_skills[i] - qtd_soft_skills[j]);
													
													//verifica se nao ja tem o nivel no novo array de niveis
													var ver = novos_niveis.includes(niveis[i]);
													var ver2 = novos_niveis.includes(niveis[j]);
													
													
													//alert ('a menor_hard distancia = '+menor_dist_hard+ ' entre '+porcentagens_hard[i]+ ' e '+porcentagens_hard[j]+ ' eh menor ou igual que  ' +menor+ ' ? ');
													if ((menor_dist_hard <= menor_hard) && (menor_dist_soft >= menor_soft) && (ver==false) && (ver2==false) ){
														
														
														menor_hard = menor_dist_hard;
														menor_soft = menor_dist_soft;
														//salva o indice dos valores com menor_hard distancia 
														indice_i = i;
														indice_j = j;
													}
											}
										}	
										if (equipe.length > 0 ){
											if ((i!=j) && (niveis[i] != niveis[j])) {
												menor_dist_hard = Math.abs(porcentagens_hard[i] - porcentagens_hard[j]);
												
												menor_dist_soft = Math.abs(qtd_soft_skills[i] - qtd_soft_skills[j]);						
												
													//verifica se nao ja tem o nivel no novo array de niveis
													var ver = novos_niveis.includes(niveis[i]);
													var ver2 = novos_niveis.includes(niveis[j]);
													
													
													
													//alert ('a menor_hard distancia = '+menor_dist_hard+ ' entre '+porcentagens_hard[i]+ ' e '+porcentagens_hard[j]+ ' eh menor ou igual que  ' +menor+ ' ? ');
													if ((menor_dist_hard <= menor_hard) && (menor_dist_soft >= menor_soft) && (ver==false) && (ver2==false) ){
														
														
														menor_hard = menor_dist_hard;
														
														//salva o indice dos valores com menor_hard distancia 
														indice_i = i;
														indice_j = j;
													}
											}
										}
								}
							}	
														//se equipe já tiver alguem
														if (equipe.length > 0 ) {
															
															//varre array para confirmar que  a pessoa não foi inserida ja na equipe
															for (p=0;p<=equipe.length;p++){
															
																if ((pessoas[indice_i]  != equipe[p]) && (pessoas[indice_j]  != equipe[p])) {
																	pode=1;
																}
																
																
															}
															
															
														
																		
																
														
															
															//alert(novos_niveis);
																
																
															
															
															
															
															if (pode==1){
																	
																	
																	
																	
																
																		novos_niveis.push(niveis[indice_i]);
																		novos_niveis.push(niveis[indice_j]);
																		
																		novos_soft_skills.push(qtd_soft_skills[indice_i]);
																		novos_soft_skills.push(qtd_soft_skills[indice_j]);
																		
																	
																		//coloca a pessoa de incice i
																		//alert('colocando  '+pessoas[indice_i]);
																		equipe.push(pessoas[indice_i]);
																		//coloca a porcentagem da pessoa de incice i
																		
																		//alert('colocando  '+porcentagens_hard[indice_i]);
																		porc_equipe.push(porcentagens_hard[indice_i]);
																		
																		//coloca a pessoa de incice j
																		//alert('colocando   '+pessoas[indice_j]);
																		equipe.push(pessoas[indice_j]);
																		//coloca a porcentagem da pessoa de incice j
																		//alert('colocando   '+porcentagens_hard[indice_j]);
																		porc_equipe.push(porcentagens_hard[indice_j]);
																		
																		
																		//retira a pessoa de incice i e de indice j
																		//alert('retirando '+pessoas[indice_i]);
																		pessoas.splice(indice_i,1);
																		
																		
																		//alert('retirando '+pessoas[indice_j]);
																		pessoas.splice(indice_j,1);
																		
																		
																		
																		
																			
																		//alert('retirando '+porcentagens_hard[indice_i]);
																		porcentagens_hard.splice(indice_i,1);	
																		
																		//retira a porcentagem da pessoa de incice i e de indice j
																		//alert('retirando '+porcentagens_hard[indice_j]);
																		porcentagens_hard.splice(indice_j,1);
																	
																		//retira niveis
																		niveis.splice(indice_j,1);
																		niveis.splice(indice_i,1);
																		
																		
																		//retira soft skilss
																		qtd_soft_skills.splice(indice_j,1);
																		qtd_soft_skills.splice(indice_i,1);
																		
																		pode=0;
																		
																		
																	
																	
																}
															
																
														}
													
													//se equipe ainda for vazia
													if (equipe.length == 0 ) {
																		
																		novos_niveis.push(niveis[indice_i]);
																		novos_niveis.push(niveis[indice_j]);
																		
																		novos_soft_skills.push(qtd_soft_skills[indice_i]);
																		novos_soft_skills.push(qtd_soft_skills[indice_j]);
														
																//coloca a pessoa de incice i
																		//alert('colocando  '+pessoas[indice_i]);
																		equipe.push(pessoas[indice_i]);
																		//coloca a porcentagem da pessoa de incice i
																		
																		//alert('colocando  '+porcentagens_hard[indice_i]);
																		porc_equipe.push(porcentagens_hard[indice_i]);
																		
																		//coloca a pessoa de incice j
																		//alert('colocando   '+pessoas[indice_j]);
																		equipe.push(pessoas[indice_j]);
																		//coloca a porcentagem da pessoa de incice j
																		//alert('colocando   '+porcentagens_hard[indice_j]);
																		porc_equipe.push(porcentagens_hard[indice_j]);
																		
																		
																		//retira a pessoa de incice i e de indice j
																		//alert('retirando '+pessoas[indice_i]);
																		pessoas.splice(indice_i,1);
																		
																		
																		//alert('retirando '+pessoas[indice_j]);
																		pessoas.splice(indice_j,1);
																		
																		
																		
																		
																		//alert('retirando '+porcentagens_hard[indice_i]);
																		porcentagens_hard.splice(indice_i,1);	
																		
																		//retira a porcentagem da pessoa de incice i e de indice j
																		//alert('retirando '+porcentagens_hard[indice_j]);
																		porcentagens_hard.splice(indice_j,1);
																	
																		
																		//retira niveis
																		niveis.splice(indice_j,1);
																		niveis.splice(indice_i,1);
																		
																		//retira soft skilss
																		qtd_soft_skills.splice(indice_j,1);
																		qtd_soft_skills.splice(indice_i,1);
																		
																		pode_niveis=0;
																		pode=0;
																		
																
																
														
													}
						}
						
						
						
						
							pode=0;
				            pode_niveis=0;

				
					
						
						
						
						
						while (equipe2.length <tamanho){	
							
							//pega distancia entre valores maximo e minimo no array das porcentagens_hard 
							const min = Math.min(...porcentagens_hard);
							const max = Math.max(...porcentagens_hard);	
											
							menor_hard=Math.abs(max-min);
							
							//pega distancia entre valores maximo e minimo no array das SOFT SKILLS
							const min2 = Math.min(...qtd_soft_skills);
							//const max2 = Math.max(...qtd_soft_skills);	
											
							menor_soft = Math.abs(min2);
							
							
							
							//varre o array para encontrar menor_hard distancia entre pares
							for (var i =0; i < porcentagens_hard.length; i++){
								for ( var j=0; j < porcentagens_hard.length; j++) {
											
										//alert ('tamanho '+equipe2.length);
										if (equipe2.length == 0 ) {
											if ((i!=j) && (niveis[i] != niveis[j])) {
												
												
												menor_dist_hard = Math.abs(porcentagens_hard[i] - porcentagens_hard[j]);
												
												menor_dist_soft = Math.abs(qtd_soft_skills[i] - qtd_soft_skills[j]);
													
													//verifica se nao ja tem o nivel no novo array de niveis
													var ver = novos_niveis2.includes(niveis[i]);
													var ver2 = novos_niveis2.includes(niveis[j]);
													
													
													//alert ('a menor_hard distancia = '+menor_dist_hard+ ' entre '+porcentagens_hard[i]+ ' e '+porcentagens_hard[j]+ ' eh menor ou igual que  ' +menor+ ' ? ');
													if ((menor_dist_hard <= menor_hard) && (menor_dist_soft >= menor_soft) && (ver==false) && (ver2==false) ){
														
														
														menor_hard = menor_dist_hard;
														menor_soft = menor_dist_soft;
														//salva o indice dos valores com menor_hard distancia 
														indice_i = i;
														indice_j = j;
													}
											}
										}	
										if (equipe2.length > 0 ){
											if ((i!=j) && (niveis[i] != niveis[j])) {
												menor_dist_hard = Math.abs(porcentagens_hard[i] - porcentagens_hard[j]);
												
												menor_dist_soft = Math.abs(qtd_soft_skills[i] - qtd_soft_skills[j]);						
												
													//verifica se nao ja tem o nivel no novo array de niveis
													var ver = novos_niveis2.includes(niveis[i]);
													var ver2 = novos_niveis2.includes(niveis[j]);
													
													
													
													//alert ('a menor_hard distancia = '+menor_dist_hard+ ' entre '+porcentagens_hard[i]+ ' e '+porcentagens_hard[j]+ ' eh menor ou igual que  ' +menor+ ' ? ');
													if ((menor_dist_hard <= menor_hard) && (menor_dist_soft >= menor_soft) && (ver==false) && (ver2==false) ){
														
														
														menor_hard = menor_dist_hard;
														
														//salva o indice dos valores com menor_hard distancia 
														indice_i = i;
														indice_j = j;
													}
											}
										}
								}
							}	
														//se equipe2 já tiver alguem
														if (equipe2.length > 0 ) {
															
															//varre array para confirmar que  a pessoa não foi inserida ja na equipe2
															for (p=0;p<=equipe2.length;p++){
															
																if ((pessoas[indice_i]  != equipe2[p]) && (pessoas[indice_j]  != equipe2[p])) {
																	pode=1;
																}
																
																
															}
															
															
														
																		
																
														
															
															//alert(novos_niveis2
																
																
															
															
															
															
															if (pode==1){
																	
																	
																	
																	
																
																		novos_niveis2.push(niveis[indice_i]);
																		novos_niveis2.push(niveis[indice_j]);
																		
																		novos_soft_skills2.push(qtd_soft_skills[indice_i]);
																		novos_soft_skills2.push(qtd_soft_skills[indice_j]);
																		
																	
																		//coloca a pessoa de incice i
																		//alert('colocando  '+pessoas[indice_i]);
																		equipe2.push(pessoas[indice_i]);
																		//coloca a porcentagem da pessoa de incice i
																		
																		//alert('colocando  '+porcentagens_hard[indice_i]);
																		porc_equipe2.push(porcentagens_hard[indice_i]);
																		
																		//coloca a pessoa de incice j
																		//alert('colocando   '+pessoas[indice_j]);
																		equipe2.push(pessoas[indice_j]);
																		//coloca a porcentagem da pessoa de incice j
																		//alert('colocando   '+porcentagens_hard[indice_j]);
																		porc_equipe2.push(porcentagens_hard[indice_j]);
																		
																		
																		//retira a pessoa de incice i e de indice j
																		//alert('retirando '+pessoas[indice_i]);
																		pessoas.splice(indice_i,1);
																		
																		
																		//alert('retirando '+pessoas[indice_j]);
																		pessoas.splice(indice_j,1);
																		
																		
																		
																		
																			
																		//alert('retirando '+porcentagens_hard[indice_i]);
																		porcentagens_hard.splice(indice_i,1);	
																		
																		//retira a porcentagem da pessoa de incice i e de indice j
																		//alert('retirando '+porcentagens_hard[indice_j]);
																		porcentagens_hard.splice(indice_j,1);
																	
																		//retira niveis
																		niveis.splice(indice_j,1);
																		niveis.splice(indice_i,1);
																		
																		
																		//retira soft skilss
																		qtd_soft_skills.splice(indice_j,1);
																		qtd_soft_skills.splice(indice_i,1);
																		
																		pode=0;
																		
																		
																	
																	
																}
															
																
														}
													
													//se equipe2 ainda for vazia
													if (equipe2.length == 0 ) {
																		
																		novos_niveis2.push(niveis[indice_i]);
																		novos_niveis2.push(niveis[indice_j]);
																		
																		novos_soft_skills2.push(qtd_soft_skills[indice_i]);
																		novos_soft_skills2.push(qtd_soft_skills[indice_j]);
														
																//coloca a pessoa de incice i
																		//alert('colocando  '+pessoas[indice_i]);
																		equipe2.push(pessoas[indice_i]);
																		//coloca a porcentagem da pessoa de incice i
																		
																		//alert('colocando  '+porcentagens_hard[indice_i]);
																		porc_equipe2.push(porcentagens_hard[indice_i]);
																		
																		//coloca a pessoa de incice j
																		//alert('colocando   '+pessoas[indice_j]);
																		equipe2.push(pessoas[indice_j]);
																		//coloca a porcentagem da pessoa de incice j
																		//alert('colocando   '+porcentagens_hard[indice_j]);
																		porc_equipe2.push(porcentagens_hard[indice_j]);
																		
																		
																		//retira a pessoa de incice i e de indice j
																		//alert('retirando '+pessoas[indice_i]);
																		pessoas.splice(indice_i,1);
																		
																		
																		//alert('retirando '+pessoas[indice_j]);
																		pessoas.splice(indice_j,1);
																		
																		
																		
																		
																		//alert('retirando '+porcentagens_hard[indice_i]);
																		porcentagens_hard.splice(indice_i,1);	
																		
																		//retira a porcentagem da pessoa de incice i e de indice j
																		//alert('retirando '+porcentagens_hard[indice_j]);
																		porcentagens_hard.splice(indice_j,1);
																	
																		
																		//retira niveis
																		niveis.splice(indice_j,1);
																		niveis.splice(indice_i,1);
																		
																		//retira soft skilss
																		qtd_soft_skills.splice(indice_j,1);
																		qtd_soft_skills.splice(indice_i,1);
																		
																		pode_niveis=0;
																		pode=0;
																		
																
																
														
													}
						}
						
					
					
					
					
					
										
				}
				// 3.  verifica se é heterogeneo e heterogeneo
				if ((type_grouping1 == "option2") && (type_grouping2=="option4")){
					
					//alert('heterogeneo e heterogeneo escolhido');

					// repetir enquanto o tamanho da equipe não é atingido
					while (equipe.length <tamanho){	
						
						//pega distancia entre valores maximo e minimo no array das porcentagens_hard 
						const min = Math.min(...porcentagens_hard);
						//const max = Math.max(...porcentagens_hard);	
										
						maior_hard = Math.abs(min);
						
						//pega distancia entre valores maximo e minimo no array das SOFT SKILLS
						const min2 = Math.min(...qtd_soft_skills);
						//const max2 = Math.max(...qtd_soft_skills);	
										
						maior_soft = Math.abs(min2);
						
						
						
						//varre o array para encontrar maior_hard distancia entre pares
						for (var i =0; i < porcentagens_hard.length; i++){
							for ( var j=0; j < porcentagens_hard.length; j++) {
										
									//alert ('tamanho '+equipe.length);
									if (equipe.length == 0 ) {
										if ((i!=j) && (niveis[i] != niveis[j])) {
											
											
											maior_dist_hard = Math.abs(porcentagens_hard[i] - porcentagens_hard[j]);
											
											maior_dist_soft = Math.abs(qtd_soft_skills[i] - qtd_soft_skills[j]);
												
												//verifica se nao ja tem o nivel no novo array de niveis
												var ver = novos_niveis.includes(niveis[i]);
												var ver2 = novos_niveis.includes(niveis[j]);
												
												
												//alert ('a maior_hard distancia = '+maior_dist_hard+ ' entre '+porcentagens_hard[i]+ ' e '+porcentagens_hard[j]+ ' eh menor ou igual que  ' +menor+ ' ? ');
												if ((maior_dist_hard >= maior_hard) && (maior_dist_soft >= maior_soft) && (ver==false) && (ver2==false) ){
													
													
													maior_hard = maior_dist_hard;
													maior_soft = maior_dist_soft;
													//salva o indice dos valores com maior_hard distancia 
													indice_i = i;
													indice_j = j;
												}
										}
									}	
									if (equipe.length > 0 ){
										if ((i!=j) && (niveis[i] != niveis[j])) {
											maior_dist_hard = Math.abs(porcentagens_hard[i] - porcentagens_hard[j]);
												
											maior_dist_soft = Math.abs(qtd_soft_skills[i] - qtd_soft_skills[j]);
											
											//verifica se nao ja tem o nivel no novo array de niveis
												var ver = novos_niveis.includes(niveis[i]);
												var ver2 = novos_niveis.includes(niveis[j]);
												
												
												
												//alert ('a maior_hard distancia = '+maior_dist_hard+ ' entre '+porcentagens_hard[i]+ ' e '+porcentagens_hard[j]+ ' eh menor ou igual que  ' +menor+ ' ? ');
												if ((maior_dist_hard >= maior_hard) && (maior_dist_soft >= maior_soft) && (ver==false) && (ver2==false) ){
													
													
													maior_hard = maior_dist_hard;
													maior_soft = maior_dist_soft;
													
													//salva o indice dos valores com maior_hard distancia 
													indice_i = i;
													indice_j = j;
												}
										}
									}
							}
						}	
													//se equipe já tiver alguem
													if (equipe.length > 0 ) {
														
														//varre array para confirmar que  a pessoa não foi inserida ja na equipe
														for (p=0;p<=equipe.length;p++){
														
															if ((pessoas[indice_i]  != equipe[p]) && (pessoas[indice_j]  != equipe[p])) {
																pode=1;
															}
															
															
														}
														
														
													
																	
															
													
														
														//alert(novos_niveis);
															
															
														
														
														
														
														if (pode==1){
																
																
																
																
															
																	novos_niveis.push(niveis[indice_i]);
																	novos_niveis.push(niveis[indice_j]);
																	
																	novos_soft_skills.push(qtd_soft_skills[indice_i]);
																	novos_soft_skills.push(qtd_soft_skills[indice_j]);
																	
																
																	//coloca a pessoa de incice i
																	//alert('colocando  '+pessoas[indice_i]);
																	equipe.push(pessoas[indice_i]);
																	//coloca a porcentagem da pessoa de incice i
																	
																	//alert('colocando  '+porcentagens_hard[indice_i]);
																	porc_equipe.push(porcentagens_hard[indice_i]);
																	
																	//coloca a pessoa de incice j
																	//alert('colocando   '+pessoas[indice_j]);
																	equipe.push(pessoas[indice_j]);
																	//coloca a porcentagem da pessoa de incice j
																	//alert('colocando   '+porcentagens_hard[indice_j]);
																	porc_equipe.push(porcentagens_hard[indice_j]);
																	
																	
																	//retira a pessoa de incice i e de indice j
																	//alert('retirando '+pessoas[indice_i]);
																	pessoas.splice(indice_i,1);
																	
																	
																	//alert('retirando '+pessoas[indice_j]);
																	pessoas.splice(indice_j,1);
																	
																	
																	
																	
																		
																	//alert('retirando '+porcentagens_hard[indice_i]);
																	porcentagens_hard.splice(indice_i,1);	
																	
																	//retira a porcentagem da pessoa de incice i e de indice j
																	//alert('retirando '+porcentagens_hard[indice_j]);
																	porcentagens_hard.splice(indice_j,1);
																
																	//retira niveis
																	niveis.splice(indice_j,1);
																	niveis.splice(indice_i,1);
																	
																	
																	//retira soft skilss
																	qtd_soft_skills.splice(indice_j,1);
																	qtd_soft_skills.splice(indice_i,1);
																	
																	pode=0;
																	
																	
																
																
															}
														
															
													}
												
												//se equipe ainda for vazia
												if (equipe.length == 0 ) {
																	
																	novos_niveis.push(niveis[indice_i]);
																	novos_niveis.push(niveis[indice_j]);
																	
																	novos_soft_skills.push(qtd_soft_skills[indice_i]);
																	novos_soft_skills.push(qtd_soft_skills[indice_j]);
													
															//coloca a pessoa de incice i
																	//alert('colocando  '+pessoas[indice_i]);
																	equipe.push(pessoas[indice_i]);
																	//coloca a porcentagem da pessoa de incice i
																	
																	//alert('colocando  '+porcentagens_hard[indice_i]);
																	porc_equipe.push(porcentagens_hard[indice_i]);
																	
																	//coloca a pessoa de incice j
																	//alert('colocando   '+pessoas[indice_j]);
																	equipe.push(pessoas[indice_j]);
																	//coloca a porcentagem da pessoa de incice j
																	//alert('colocando   '+porcentagens_hard[indice_j]);
																	porc_equipe.push(porcentagens_hard[indice_j]);
																	
																	
																	//retira a pessoa de incice i e de indice j
																	//alert('retirando '+pessoas[indice_i]);
																	pessoas.splice(indice_i,1);
																	
																	
																	//alert('retirando '+pessoas[indice_j]);
																	pessoas.splice(indice_j,1);
																	
																	
																	
																	
																	//alert('retirando '+porcentagens_hard[indice_i]);
																	porcentagens_hard.splice(indice_i,1);	
																	
																	//retira a porcentagem da pessoa de incice i e de indice j
																	//alert('retirando '+porcentagens_hard[indice_j]);
																	porcentagens_hard.splice(indice_j,1);
																
																	
																	//retira niveis
																	niveis.splice(indice_j,1);
																	niveis.splice(indice_i,1);
																	
																	//retira soft skilss
																	qtd_soft_skills.splice(indice_j,1);
																	qtd_soft_skills.splice(indice_i,1);
																	
																	pode_niveis=0;
																	pode=0;
																	
															
															
													
												}
					}
					
					while (equipe2.length <tamanho){	
							
							//pega distancia entre valores maximo e minimo no array das porcentagens_hard 
							const min = Math.min(...porcentagens_hard);
							//const max = Math.max(...porcentagens_hard);	
											
							menor_hard=Math.abs(min);
							
							//pega distancia entre valores maximo e minimo no array das SOFT SKILLS
							const min2 = Math.min(...qtd_soft_skills);
							//const max2 = Math.max(...qtd_soft_skills);	
											
							menor_soft = Math.abs(min2);
							
							
							
							//varre o array para encontrar menor_hard distancia entre pares
							for (var i =0; i < porcentagens_hard.length; i++){
								for ( var j=0; j < porcentagens_hard.length; j++) {
											
										//alert ('tamanho '+equipe2.length);
										if (equipe2.length == 0 ) {
											if ((i!=j) && (niveis[i] != niveis[j])) {
												
												
												menor_dist_hard = Math.abs(porcentagens_hard[i] - porcentagens_hard[j]);
												
												menor_dist_soft = Math.abs(qtd_soft_skills[i] - qtd_soft_skills[j]);
													
													//verifica se nao ja tem o nivel no novo array de niveis
													var ver = novos_niveis2.includes(niveis[i]);
													var ver2 = novos_niveis2.includes(niveis[j]);
													
													
													//alert ('a menor_hard distancia = '+menor_dist_hard+ ' entre '+porcentagens_hard[i]+ ' e '+porcentagens_hard[j]+ ' eh menor ou igual que  ' +menor+ ' ? ');
													if ((menor_dist_hard >= menor_hard) && (menor_dist_soft >= menor_soft) && (ver==false) && (ver2==false) ){
														
														
														menor_hard = menor_dist_hard;
														menor_soft = menor_dist_soft;
														//salva o indice dos valores com menor_hard distancia 
														indice_i = i;
														indice_j = j;
													}
											}
										}	
										if (equipe2.length > 0 ){
											if ((i!=j) && (niveis[i] != niveis[j])) {
												menor_dist_hard = Math.abs(porcentagens_hard[i] - porcentagens_hard[j]);
												
												menor_dist_soft = Math.abs(qtd_soft_skills[i] - qtd_soft_skills[j]);						
												
													//verifica se nao ja tem o nivel no novo array de niveis
													var ver = novos_niveis2.includes(niveis[i]);
													var ver2 = novos_niveis2.includes(niveis[j]);
													
													
													
													//alert ('a menor_hard distancia = '+menor_dist_hard+ ' entre '+porcentagens_hard[i]+ ' e '+porcentagens_hard[j]+ ' eh menor ou igual que  ' +menor+ ' ? ');
													if ((menor_dist_hard >= menor_hard) && (menor_dist_soft >= menor_soft) && (ver==false) && (ver2==false) ){
														
														
														menor_hard = menor_dist_hard;
														
														//salva o indice dos valores com menor_hard distancia 
														indice_i = i;
														indice_j = j;
													}
											}
										}
								}
							}	
														//se equipe2 já tiver alguem
														if (equipe2.length > 0 ) {
															
															//varre array para confirmar que  a pessoa não foi inserida ja na equipe2
															for (p=0;p<=equipe2.length;p++){
															
																if ((pessoas[indice_i]  != equipe2[p]) && (pessoas[indice_j]  != equipe2[p])) {
																	pode=1;
																}
																
																
															}
															
															
														
																		
																
														
															
															//alert(novos_niveis2
																
																
															
															
															
															
															if (pode==1){
																	
																	
																	
																	
																
																		novos_niveis2.push(niveis[indice_i]);
																		novos_niveis2.push(niveis[indice_j]);
																		
																		novos_soft_skills2.push(qtd_soft_skills[indice_i]);
																		novos_soft_skills2.push(qtd_soft_skills[indice_j]);
																		
																	
																		//coloca a pessoa de incice i
																		//alert('colocando  '+pessoas[indice_i]);
																		equipe2.push(pessoas[indice_i]);
																		//coloca a porcentagem da pessoa de incice i
																		
																		//alert('colocando  '+porcentagens_hard[indice_i]);
																		porc_equipe2.push(porcentagens_hard[indice_i]);
																		
																		//coloca a pessoa de incice j
																		//alert('colocando   '+pessoas[indice_j]);
																		equipe2.push(pessoas[indice_j]);
																		//coloca a porcentagem da pessoa de incice j
																		//alert('colocando   '+porcentagens_hard[indice_j]);
																		porc_equipe2.push(porcentagens_hard[indice_j]);
																		
																		
																		//retira a pessoa de incice i e de indice j
																		//alert('retirando '+pessoas[indice_i]);
																		pessoas.splice(indice_i,1);
																		
																		
																		//alert('retirando '+pessoas[indice_j]);
																		pessoas.splice(indice_j,1);
																		
																		
																		
																		
																			
																		//alert('retirando '+porcentagens_hard[indice_i]);
																		porcentagens_hard.splice(indice_i,1);	
																		
																		//retira a porcentagem da pessoa de incice i e de indice j
																		//alert('retirando '+porcentagens_hard[indice_j]);
																		porcentagens_hard.splice(indice_j,1);
																	
																		//retira niveis
																		niveis.splice(indice_j,1);
																		niveis.splice(indice_i,1);
																		
																		
																		//retira soft skilss
																		qtd_soft_skills.splice(indice_j,1);
																		qtd_soft_skills.splice(indice_i,1);
																		
																		pode=0;
																		
																		
																	
																	
																}
															
																
														}
													
													//se equipe2 ainda for vazia
													if (equipe2.length == 0 ) {
																		
																		novos_niveis2.push(niveis[indice_i]);
																		novos_niveis2.push(niveis[indice_j]);
																		
																		novos_soft_skills2.push(qtd_soft_skills[indice_i]);
																		novos_soft_skills2.push(qtd_soft_skills[indice_j]);
														
																//coloca a pessoa de incice i
																		//alert('colocando  '+pessoas[indice_i]);
																		equipe2.push(pessoas[indice_i]);
																		//coloca a porcentagem da pessoa de incice i
																		
																		//alert('colocando  '+porcentagens_hard[indice_i]);
																		porc_equipe2.push(porcentagens_hard[indice_i]);
																		
																		//coloca a pessoa de incice j
																		//alert('colocando   '+pessoas[indice_j]);
																		equipe2.push(pessoas[indice_j]);
																		//coloca a porcentagem da pessoa de incice j
																		//alert('colocando   '+porcentagens_hard[indice_j]);
																		porc_equipe2.push(porcentagens_hard[indice_j]);
																		
																		
																		//retira a pessoa de incice i e de indice j
																		//alert('retirando '+pessoas[indice_i]);
																		pessoas.splice(indice_i,1);
																		
																		
																		//alert('retirando '+pessoas[indice_j]);
																		pessoas.splice(indice_j,1);
																		
																		
																		
																		
																		//alert('retirando '+porcentagens_hard[indice_i]);
																		porcentagens_hard.splice(indice_i,1);	
																		
																		//retira a porcentagem da pessoa de incice i e de indice j
																		//alert('retirando '+porcentagens_hard[indice_j]);
																		porcentagens_hard.splice(indice_j,1);
																	
																		
																		//retira niveis
																		niveis.splice(indice_j,1);
																		niveis.splice(indice_i,1);
																		
																		//retira soft skilss
																		qtd_soft_skills.splice(indice_j,1);
																		qtd_soft_skills.splice(indice_i,1);
																		
																		pode_niveis=0;
																		pode=0;
																		
																
																
														
													}
						}
					
										
				}
				// verifica se é heterogeneo e homogeneo
				if ((type_grouping1 == "option2") && (type_grouping2=="option3")){
					
						
						
						//alert('heterogeneo e homogeneo escolhido');

					// repetir enquanto o tamanho da equipe não é atingido
					while (equipe.length <tamanho){	
						
						//pega distancia entre valores maximo e minimo no array das porcentagens_hard 
						const min = Math.min(...porcentagens_hard);
						//const max = Math.max(...porcentagens_hard);	
										
						maior_hard = Math.abs(min);
						
						//pega distancia entre valores maximo e minimo no array das SOFT SKILLS
						const min2 = Math.min(...qtd_soft_skills);
						const max2 = Math.max(...qtd_soft_skills);	
										
						maior_soft = Math.abs(max2-min2);
						
						
						
						//varre o array para encontrar maior_hard distancia entre pares
						for (var i =0; i < porcentagens_hard.length; i++){
							for ( var j=0; j < porcentagens_hard.length; j++) {
										
									//alert ('tamanho '+equipe.length);
									if (equipe.length == 0 ) {
										if ((i!=j) && (niveis[i] != niveis[j])) {
											
											
											maior_dist_hard = Math.abs(porcentagens_hard[i] - porcentagens_hard[j]);
											
											maior_dist_soft = Math.abs(qtd_soft_skills[i] - qtd_soft_skills[j]);
												
												//verifica se nao ja tem o nivel no novo array de niveis
												var ver = novos_niveis.includes(niveis[i]);
												var ver2 = novos_niveis.includes(niveis[j]);
												
												
												//alert ('a maior_hard distancia = '+maior_dist_hard+ ' entre '+porcentagens_hard[i]+ ' e '+porcentagens_hard[j]+ ' eh menor ou igual que  ' +menor+ ' ? ');
												if ((maior_dist_hard >= maior_hard) && (maior_dist_soft <= maior_soft) && (ver==false) && (ver2==false) ){
													
													
													maior_hard = maior_dist_hard;
													maior_soft = maior_dist_soft;
													//salva o indice dos valores com maior_hard distancia 
													indice_i = i;
													indice_j = j;
												}
										}
									}	
									if (equipe.length > 0 ){
										if ((i!=j) && (niveis[i] != niveis[j])) {
											maior_dist_hard = Math.abs(porcentagens_hard[i] - porcentagens_hard[j]);
												
											maior_dist_soft = Math.abs(qtd_soft_skills[i] - qtd_soft_skills[j]);
											
											//verifica se nao ja tem o nivel no novo array de niveis
												var ver = novos_niveis.includes(niveis[i]);
												var ver2 = novos_niveis.includes(niveis[j]);
												
												
												
												//alert ('a maior_hard distancia = '+maior_dist_hard+ ' entre '+porcentagens_hard[i]+ ' e '+porcentagens_hard[j]+ ' eh menor ou igual que  ' +menor+ ' ? ');
												if ((maior_dist_hard >= maior_hard) && (maior_dist_soft <= maior_soft) && (ver==false) && (ver2==false) ){
													
													
													maior_hard = maior_dist_hard;
													maior_soft = maior_dist_soft;
													
													//salva o indice dos valores com maior_hard distancia 
													indice_i = i;
													indice_j = j;
												}
										}
									}
							}
						}	
													//se equipe já tiver alguem
													if (equipe.length > 0 ) {
														
														//varre array para confirmar que  a pessoa não foi inserida ja na equipe
														for (p=0;p<=equipe.length;p++){
														
															if ((pessoas[indice_i]  != equipe[p]) && (pessoas[indice_j]  != equipe[p])) {
																pode=1;
															}
															
															
														}
														
														
													
																	
															
													
														
														//alert(novos_niveis);
															
															
														
														
														
														
														if (pode==1){
																
																
																
																
															
																	novos_niveis.push(niveis[indice_i]);
																	novos_niveis.push(niveis[indice_j]);
																	
																	novos_soft_skills.push(qtd_soft_skills[indice_i]);
																	novos_soft_skills.push(qtd_soft_skills[indice_j]);
																	
																
																	//coloca a pessoa de incice i
																	//alert('colocando  '+pessoas[indice_i]);
																	equipe.push(pessoas[indice_i]);
																	//coloca a porcentagem da pessoa de incice i
																	
																	//alert('colocando  '+porcentagens_hard[indice_i]);
																	porc_equipe.push(porcentagens_hard[indice_i]);
																	
																	//coloca a pessoa de incice j
																	//alert('colocando   '+pessoas[indice_j]);
																	equipe.push(pessoas[indice_j]);
																	//coloca a porcentagem da pessoa de incice j
																	//alert('colocando   '+porcentagens_hard[indice_j]);
																	porc_equipe.push(porcentagens_hard[indice_j]);
																	
																	
																	//retira a pessoa de incice i e de indice j
																	//alert('retirando '+pessoas[indice_i]);
																	pessoas.splice(indice_i,1);
																	
																	
																	//alert('retirando '+pessoas[indice_j]);
																	pessoas.splice(indice_j,1);
																	
																	
																	
																	
																		
																	//alert('retirando '+porcentagens_hard[indice_i]);
																	porcentagens_hard.splice(indice_i,1);	
																	
																	//retira a porcentagem da pessoa de incice i e de indice j
																	//alert('retirando '+porcentagens_hard[indice_j]);
																	porcentagens_hard.splice(indice_j,1);
																
																	//retira niveis
																	niveis.splice(indice_j,1);
																	niveis.splice(indice_i,1);
																	
																	
																	//retira soft skilss
																	qtd_soft_skills.splice(indice_j,1);
																	qtd_soft_skills.splice(indice_i,1);
																	
																	pode=0;
																	
																	
																
																
															}
														
															
													}
												
												//se equipe ainda for vazia
												if (equipe.length == 0 ) {
																	
																	novos_niveis.push(niveis[indice_i]);
																	novos_niveis.push(niveis[indice_j]);
																	
																	novos_soft_skills.push(qtd_soft_skills[indice_i]);
																	novos_soft_skills.push(qtd_soft_skills[indice_j]);
													
															//coloca a pessoa de incice i
																	//alert('colocando  '+pessoas[indice_i]);
																	equipe.push(pessoas[indice_i]);
																	//coloca a porcentagem da pessoa de incice i
																	
																	//alert('colocando  '+porcentagens_hard[indice_i]);
																	porc_equipe.push(porcentagens_hard[indice_i]);
																	
																	//coloca a pessoa de incice j
																	//alert('colocando   '+pessoas[indice_j]);
																	equipe.push(pessoas[indice_j]);
																	//coloca a porcentagem da pessoa de incice j
																	//alert('colocando   '+porcentagens_hard[indice_j]);
																	porc_equipe.push(porcentagens_hard[indice_j]);
																	
																	
																	//retira a pessoa de incice i e de indice j
																	//alert('retirando '+pessoas[indice_i]);
																	pessoas.splice(indice_i,1);
																	
																	
																	//alert('retirando '+pessoas[indice_j]);
																	pessoas.splice(indice_j,1);
																	
																	
																	
																	
																	//alert('retirando '+porcentagens_hard[indice_i]);
																	porcentagens_hard.splice(indice_i,1);	
																	
																	//retira a porcentagem da pessoa de incice i e de indice j
																	//alert('retirando '+porcentagens_hard[indice_j]);
																	porcentagens_hard.splice(indice_j,1);
																
																	
																	//retira niveis
																	niveis.splice(indice_j,1);
																	niveis.splice(indice_i,1);
																	
																	//retira soft skilss
																	qtd_soft_skills.splice(indice_j,1);
																	qtd_soft_skills.splice(indice_i,1);
																	
																	pode_niveis=0;
																	pode=0;
																	
															
															
													
												}
					}
					
					
					while (equipe2.length <tamanho){	
							
							//pega distancia entre valores maximo e minimo no array das porcentagens_hard 
							const min = Math.min(...porcentagens_hard);
							//const max = Math.max(...porcentagens_hard);	
											
							menor_hard=Math.abs(min);
							
							//pega distancia entre valores maximo e minimo no array das SOFT SKILLS
							const min2 = Math.min(...qtd_soft_skills);
							const max2 = Math.max(...qtd_soft_skills);	
											
							menor_soft = Math.abs(max2-min2);
							
							
							
							//varre o array para encontrar menor_hard distancia entre pares
							for (var i =0; i < porcentagens_hard.length; i++){
								for ( var j=0; j < porcentagens_hard.length; j++) {
											
										//alert ('tamanho '+equipe2.length);
										if (equipe2.length == 0 ) {
											if ((i!=j) && (niveis[i] != niveis[j])) {
												
												
												menor_dist_hard = Math.abs(porcentagens_hard[i] - porcentagens_hard[j]);
												
												menor_dist_soft = Math.abs(qtd_soft_skills[i] - qtd_soft_skills[j]);
													
													//verifica se nao ja tem o nivel no novo array de niveis
													var ver = novos_niveis2.includes(niveis[i]);
													var ver2 = novos_niveis2.includes(niveis[j]);
													
													
													//alert ('a menor_hard distancia = '+menor_dist_hard+ ' entre '+porcentagens_hard[i]+ ' e '+porcentagens_hard[j]+ ' eh menor ou igual que  ' +menor+ ' ? ');
													if ((menor_dist_hard >= menor_hard) && (menor_dist_soft <= menor_soft) && (ver==false) && (ver2==false) ){
														
														
														menor_hard = menor_dist_hard;
														menor_soft = menor_dist_soft;
														//salva o indice dos valores com menor_hard distancia 
														indice_i = i;
														indice_j = j;
													}
											}
										}	
										if (equipe2.length > 0 ){
											if ((i!=j) && (niveis[i] != niveis[j])) {
												menor_dist_hard = Math.abs(porcentagens_hard[i] - porcentagens_hard[j]);
												
												menor_dist_soft = Math.abs(qtd_soft_skills[i] - qtd_soft_skills[j]);						
												
													//verifica se nao ja tem o nivel no novo array de niveis
													var ver = novos_niveis2.includes(niveis[i]);
													var ver2 = novos_niveis2.includes(niveis[j]);
													
													
													
													//alert ('a menor_hard distancia = '+menor_dist_hard+ ' entre '+porcentagens_hard[i]+ ' e '+porcentagens_hard[j]+ ' eh menor ou igual que  ' +menor+ ' ? ');
													if ((menor_dist_hard >= menor_hard) && (menor_dist_soft <= menor_soft) && (ver==false) && (ver2==false) ){
														
														
														menor_hard = menor_dist_hard;
														
														//salva o indice dos valores com menor_hard distancia 
														indice_i = i;
														indice_j = j;
													}
											}
										}
								}
							}	
														//se equipe2 já tiver alguem
														if (equipe2.length > 0 ) {
															
															//varre array para confirmar que  a pessoa não foi inserida ja na equipe2
															for (p=0;p<=equipe2.length;p++){
															
																if ((pessoas[indice_i]  != equipe2[p]) && (pessoas[indice_j]  != equipe2[p])) {
																	pode=1;
																}
																
																
															}
															
															
														
																		
																
														
															
															//alert(novos_niveis2
																
																
															
															
															
															
															if (pode==1){
																	
																	
																	
																	
																
																		novos_niveis2.push(niveis[indice_i]);
																		novos_niveis2.push(niveis[indice_j]);
																		
																		novos_soft_skills2.push(qtd_soft_skills[indice_i]);
																		novos_soft_skills2.push(qtd_soft_skills[indice_j]);
																		
																	
																		//coloca a pessoa de incice i
																		//alert('colocando  '+pessoas[indice_i]);
																		equipe2.push(pessoas[indice_i]);
																		//coloca a porcentagem da pessoa de incice i
																		
																		//alert('colocando  '+porcentagens_hard[indice_i]);
																		porc_equipe2.push(porcentagens_hard[indice_i]);
																		
																		//coloca a pessoa de incice j
																		//alert('colocando   '+pessoas[indice_j]);
																		equipe2.push(pessoas[indice_j]);
																		//coloca a porcentagem da pessoa de incice j
																		//alert('colocando   '+porcentagens_hard[indice_j]);
																		porc_equipe2.push(porcentagens_hard[indice_j]);
																		
																		
																		//retira a pessoa de incice i e de indice j
																		//alert('retirando '+pessoas[indice_i]);
																		pessoas.splice(indice_i,1);
																		
																		
																		//alert('retirando '+pessoas[indice_j]);
																		pessoas.splice(indice_j,1);
																		
																		
																		
																		
																			
																		//alert('retirando '+porcentagens_hard[indice_i]);
																		porcentagens_hard.splice(indice_i,1);	
																		
																		//retira a porcentagem da pessoa de incice i e de indice j
																		//alert('retirando '+porcentagens_hard[indice_j]);
																		porcentagens_hard.splice(indice_j,1);
																	
																		//retira niveis
																		niveis.splice(indice_j,1);
																		niveis.splice(indice_i,1);
																		
																		
																		//retira soft skilss
																		qtd_soft_skills.splice(indice_j,1);
																		qtd_soft_skills.splice(indice_i,1);
																		
																		pode=0;
																		
																		
																	
																	
																}
															
																
														}
													
													//se equipe2 ainda for vazia
													if (equipe2.length == 0 ) {
																		
																		novos_niveis2.push(niveis[indice_i]);
																		novos_niveis2.push(niveis[indice_j]);
																		
																		novos_soft_skills2.push(qtd_soft_skills[indice_i]);
																		novos_soft_skills2.push(qtd_soft_skills[indice_j]);
														
																//coloca a pessoa de incice i
																		//alert('colocando  '+pessoas[indice_i]);
																		equipe2.push(pessoas[indice_i]);
																		//coloca a porcentagem da pessoa de incice i
																		
																		//alert('colocando  '+porcentagens_hard[indice_i]);
																		porc_equipe2.push(porcentagens_hard[indice_i]);
																		
																		//coloca a pessoa de incice j
																		//alert('colocando   '+pessoas[indice_j]);
																		equipe2.push(pessoas[indice_j]);
																		//coloca a porcentagem da pessoa de incice j
																		//alert('colocando   '+porcentagens_hard[indice_j]);
																		porc_equipe2.push(porcentagens_hard[indice_j]);
																		
																		
																		//retira a pessoa de incice i e de indice j
																		//alert('retirando '+pessoas[indice_i]);
																		pessoas.splice(indice_i,1);
																		
																		
																		//alert('retirando '+pessoas[indice_j]);
																		pessoas.splice(indice_j,1);
																		
																		
																		
																		
																		//alert('retirando '+porcentagens_hard[indice_i]);
																		porcentagens_hard.splice(indice_i,1);	
																		
																		//retira a porcentagem da pessoa de incice i e de indice j
																		//alert('retirando '+porcentagens_hard[indice_j]);
																		porcentagens_hard.splice(indice_j,1);
																	
																		
																		//retira niveis
																		niveis.splice(indice_j,1);
																		niveis.splice(indice_i,1);
																		
																		//retira soft skilss
																		qtd_soft_skills.splice(indice_j,1);
																		qtd_soft_skills.splice(indice_i,1);
																		
																		pode_niveis=0;
																		pode=0;
																		
																
																
														
													}
						}
						
						
						
										
				}

	


//alert('equipe:   '+equipe+ '\nporc_equipe:    '+porc_equipe+ '\nniveis_equipe:    '+novos_niveis+ '\nqtd de soft skills '+novos_soft_skills);	

	//for (var tame = 0; tame < tamanho; tame++){
																			//coloca a pessoa de incice i
		
		//equipe2.push(pessoas[tame]);
		
																	
		
	
		
		
	//}
			
				
				
					
					for ( var i=0 ; i <= equipe.length; i++){
							
							if ((equipe[i]=='kiran') && (kiranpode==1)){
								$("#kiran").css("display", "block");
							}
							
							if ((equipe[i]=='fred') && (fredpode==1)){
								$("#fred").css("display", "block");
							}
							
							if ((equipe[i]=='alice') && (alicepode==1)){
								$("#alice").css("display", "block");
							}
							
							if ((equipe[i]=='dave') && (davepode==1)){
								$("#dave").css("display", "block");
							}
							
							if ((equipe[i]=='nick') && (nickpode==1)){
								$("#nick").css("display", "block");
							}
							
							
							if ((equipe[i]=='bob') && (bobpode==1)){
								$("#bob").css("display", "block");
								
							}
							
							if ((equipe[i]=='marcos') && (marcospode==1)){
								$("#marcos").css("display", "block");
							}
							
							if ((equipe[i]=='julia') && (juliapode==1)){
								$("#julia").css("display", "block");
							}
							
							if ((equipe[i]=='nick') && (nickpode==1)){
								$("#nick").css("display", "block");
							}
					}
					
					porcentagem_sugestao1 = 0;
					
					
					for ( var i=0 ; i <= equipe.length; i++){
						
						if ((equipe[i]=='kiran') && ($('#kiran').css('display') == 'block')){
							porcentagem_sugestao1 = (porcentagem_sugestao1 + porcentagem_kiran);
						}
						
						if ((equipe[i]=='fred') && ($('#fred').css('display') == 'block')){
							porcentagem_sugestao1 = (porcentagem_sugestao1 + porcentagem_fred);
						}
						
						if ((equipe[i]=='alice') && ($('#alice').css('display') == 'block')){
							porcentagem_sugestao1 = (porcentagem_sugestao1 + porcentagem_alice);
						}
						
						if ((equipe[i]=='dave') && ($('#dave').css('display') == 'block')){
							porcentagem_sugestao1 = (porcentagem_sugestao1 + porcentagem_dave);
						}
					
						
						if ((equipe[i]=='bob') && ($('#bob').css('display') == 'block')){
							porcentagem_sugestao1 = (porcentagem_sugestao1 + porcentagem_bob);
						}
						
						if ((equipe[i]=='marcos') && ($('#marcos').css('display') == 'block')){
							porcentagem_sugestao1 = (porcentagem_sugestao1 + porcentagem_marcos);
						}
						
						if ((equipe[i]=='julia') && ($('#julia').css('display') == 'block')){
							porcentagem_sugestao1 = (porcentagem_sugestao1 + porcentagem_julia);
						}
						
						if ((equipe[i]=='nick') && ($('#nick').css('display') == 'block')){
							porcentagem_sugestao1 = (porcentagem_sugestao1 + porcentagem_nick);
						}
					}
					
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
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
					
					
					//verifica se há projetos similares e exibe o botao ver similar projects
					
					for (var j=0; j < texts.length; j++) {
							var tecnolo = texts[j];
							if ((tecnolo == 'Java') || (tecnolo == 'Web') || (tecnolo == 'MVC')){
								 document.getElementById("similarprojects").style.display = "block";
							}
					}
					
				
						
	
	$("#defaultdemo").click(function() {
				var projetoa=0;
				var projetob=0;
				for (var j=0; j < texts.length; j++) {
					 
					 
					 var tecnolo = texts[j];
						
					if ((tecnolo == 'Java') || (tecnolo == 'MVC') || (tecnolo == 'Spring') ){
						projetoa=1;
					}
					if ((tecnolo == 'Java') || (tecnolo == 'Web') || (tecnolo == 'Spring') ){
						projetob=1;
					}
					if((projetoa>0) && (projetob==0)){
						
						simplePopup({
					
							'pop-title':'Similar Projects', 
							'pop-body':'&nbsp;&nbsp;<b>PROJECT A:</b><br>&nbsp;&nbsp; Nature: Similar Technology <br>&nbsp;&nbsp; Date begin: 01/01/2020  &nbsp;&nbsp; Date end: 10/12/2022 &nbsp;&nbsp;<br>&nbsp;&nbsp;  Team: Claud, Evelyn, Funny, Gregory <br> <br>&nbsp;&nbsp;Technologies: Java, MVC, Spring &nbsp;&nbsp; <br><br> &nbsp;&nbsp;Soft Skills: Initiative, Communication &nbsp;&nbsp;', 
							'btn-text':'Close',
							'body-align':'left',
							'auto-break': 35,
					
						});
						
					}	
					if ((projetob>0) && (projetoa==0)){
						
						simplePopup({
					
							'pop-title':'Similar Projects', 
							'pop-body':'&nbsp;&nbsp;<b>PROJECT B:</b><br>&nbsp;&nbsp;Nature: Similar Technology <br>&nbsp;&nbsp; Date begin: 01/01/2020  &nbsp;&nbsp;Date end: 10/12/2022 &nbsp;&nbsp; <br>&nbsp;&nbsp; Team: Oliver O., Pedro P., Roberta <br> <br>&nbsp;&nbsp;Technologies: Java, WEB, Spring &nbsp;&nbsp;&nbsp;&nbsp;Soft Skills: Creativity, Proactivity &nbsp;&nbsp;', 
							'btn-text':'Close',
							'body-align':'left',
							'auto-break': 35,
					
						});
						
					}
					if ((projetoa>0) && (projetob>0)){
						
						simplePopup({
					
							'pop-title':'Similar Projects', 
							'pop-body':'&nbsp;&nbsp;<b>PROJECT A:</b><br>&nbsp;&nbsp; Nature: Similar Technology <br>&nbsp;&nbsp; Date begin: 01/01/2020 &nbsp;&nbsp; Date end: 10/12/2022 &nbsp;&nbsp;<br>&nbsp;&nbsp;  Team: Claud, Evelyn, Funny, Gregory <br> <br>&nbsp;&nbsp;Technologies: Java, MVC, Spring &nbsp;&nbsp;  &nbsp;&nbsp;Soft Skills: Initiative, Communication &nbsp;&nbsp; <br><br> &nbsp;&nbsp;<b>PROJECT B:</b><br>&nbsp;&nbsp;Nature: Similar Technology <br>&nbsp;&nbsp; Date begin: 01/01/2020 &nbsp;&nbsp;Date end: 10/12/2022 &nbsp;&nbsp;<br>&nbsp;&nbsp; Team: Oliver O., Pedro P., Roberta &nbsp;&nbsp;<br><br>&nbsp;&nbsp;Technologies: Java, WEB, Spring &nbsp;&nbsp; &nbsp;&nbsp;Soft Skills: Creativity, Proactivity &nbsp;&nbsp;', 
							'btn-text':'Close',
							'body-align':'left',
							'auto-break': 35,
					
						});
						
					}			
					
					
						
						
				}
					
					
					
				function sampleExitTask() {
				$("#exitTaskOutput").html("Action on Popup Dismissal.<br>This event fired at the time the popup was dismissed based on the function assigned to the 'click-fn' option.");
				$("#exitTaskOutput").css({padding: "4px", background: "#ff8080"});
				$("#exitTaskOutput").fadeIn();
				setTimeout(function(){
					$("#exitTaskOutput").fadeOut();
				},6000);
			}	
				
				
			});
					
					
						
					
					
				

		
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
					for (var j=0; j<equipe.length; j++){
						
						if(equipe[j]=='kiran'){
							equipe2.push('kiran');
							porc_equipe2.push(porcentagem_kiran);
							
							equipe.splice(j, 1);
							porc_equipe.splice(j, 1);
						} 
						
					}
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
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
					for (var j=0; j<equipe.length; j++){
						
						if(equipe[j]=='fred'){
							equipe2.push('fred');
							porc_equipe2.push(porcentagem_fred);
							
							equipe.splice(j, 1);
							porc_equipe.splice(j, 1);
						}
						
					}
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
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
					for (var j=0; j<equipe.length; j++){
						
						if(equipe[j]=='alice'){
							equipe2.push('alice');
							porc_equipe2.push(porcentagem_alice);
							
							equipe.splice(j, 1);
							porc_equipe.splice(j, 1);
						}
						
					}
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
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
					for (var j=0; j<equipe.length; j++){
						
						if(equipe[j]=='dave'){
							equipe2.push('dave');
							porc_equipe2.push(porcentagem_dave);
							
							equipe.splice(j, 1);
							porc_equipe.splice(j, 1);
						}
						
					}
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
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
					for (var j=0; j<equipe.length; j++){
						
						if(equipe[j]=='bob'){
							equipe2.push('bob');
							porc_equipe2.push(porcentagem_bob);
							
							equipe.splice(j, 1);
							porc_equipe.splice(j, 1);
						}
						
					}
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
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
					for (var j=0; j<equipe.length; j++){
						
						if(equipe[j]=='marcos'){
							equipe2.push('marcos');
							porc_equipe2.push(porcentagem_marcos);
							
							equipe.splice(j, 1);
							porc_equipe.splice(j, 1);
						}
						
					}
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
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
					for (var j=0; j<equipe.length; j++){
						
						if(equipe[j]=='julia'){
							equipe2.push('julia');
							porc_equipe2.push(porcentagem_julia);
							
							equipe.splice(j, 1);
							porc_equipe.splice(j, 1);
						}
						
					}
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
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
					for (var j=0; j<equipe.length; j++){
						
						if(equipe[j]=='nick'){
							equipe2.push('nick');
							porc_equipe2.push(porcentagem_nick);
							
							equipe.splice(j, 1);
							porc_equipe.splice(j, 1);
						}
						
					}
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
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
							equipe.push('kiran');
							equipe.push(porcentagem_kiran);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
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
							equipe.push('fred');
							porc_equipe.push(porcentagem_fred);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
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
							equipe.push('alice');
							porc_equipe.push(porcentagem_alice);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
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
							equipe.push('dave');
							porc_equipe.push(porcentagem_dave);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
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
							equipe.push('bob');
							porc_equipe.push(porcentagem_bob);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
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
							equipe.push('marcos');
							porc_equipe.push(porcentagem_marcos);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
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
							equipe.push('julia');
							porc_equipe.push(porcentagem_julia);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
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
							equipe.push('nick');
							porc_equipe.push(porcentagem_nick);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
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
							equipe.push('kiran');
							porc_equipe.push(porcentagem_kiran);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
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
							equipe.push('fred');
							porc_equipe.push(porcentagem_fred);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
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
							equipe.push('alice');
							porc_equipe.push(porcentagem_alice);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
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
							equipe.push('dave');
							porc_equipe.push(porcentagem_dave);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
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
							equipe.push('bob');
							porc_equipe.push(porcentagem_bob);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
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
							equipe.push('marcos');
							porc_equipe.push(porcentagem_marcos);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
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
							equipe.push('julia');
							porc_equipe.push(porcentagem_julia);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
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
							equipe.push('nick');
							porc_equipe.push(porcentagem_nick);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
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
					for (var j=0; j<equipe.length; j++){
						
						if(equipe[j]=='kiran'){
							equipe2.push('kiran');
							porc_equipe2.push(porcentagem_kiran);
							
							equipe.splice(j, 1);
							porc_equipe.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
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
					for (var j=0; j<equipe.length; j++){
						
						if(equipe[j]=='fred'){
							equipe2.push('fred');
							porc_equipe2.push(porcentagem_fred);
							
							equipe.splice(j, 1);
							porc_equipe.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
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
					for (var j=0; j<equipe.length; j++){
						
						if(equipe[j]=='alice'){
							equipe2.push('alice');
							porc_equipe2.push(porcentagem_alice);
							
							equipe.splice(j, 1);
							porc_equipe.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
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
					for (var j=0; j<equipe.length; j++){
						
						if(equipe[j]=='dave'){
							equipe2.push('dave');
							porc_equipe2.push(porcentagem_dave);
							
							equipe.splice(j, 1);
							porc_equipe.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
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
					for (var j=0; j<equipe.length; j++){
						
						if(equipe[j]=='bob'){
							equipe2.push('bob');
							porc_equipe2.push(porcentagem_bob);
							
							equipe.splice(j, 1);
							porc_equipe.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
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
					for (var j=0; j<equipe.length; j++){
						
						if(equipe[j]=='marcos'){
							equipe2.push('marcos');
							porc_equipe2.push(porcentagem_marcos);
							
							equipe.splice(j, 1);
							porc_equipe.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
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
					for (var j=0; j<equipe.length; j++){
						
						if(equipe[j]=='julia'){
							equipe2.push('julia');
							porc_equipe2.push(porcentagem_julia);
							
							equipe.splice(j, 1);
							porc_equipe.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
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
					for (var j=0; j<equipe.length; j++){
						
						if(equipe[j]=='nick'){
							equipe2.push('nick');
							porc_equipe2.push(porcentagem_nick);
							
							equipe.splice(j, 1);
							porc_equipe.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (var i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
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
			
	}); //equipe1
		
		
		
		
		
    


			
				
				
	$( "#salvarequipe" ).click(function() {	
						
						localStorage.setItem('valueTexto', equipe);
						localStorage.setItem('valueText', ig);
						
						
				});	
		
		
			 
		
			
});


