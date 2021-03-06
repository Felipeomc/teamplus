
			let timeline;
			$(document).ready(timeline_init);
			
			let ano;
			
			let ano_inicio;
			let ano_fim;
			let data;
			let options;
			let nome;
			let texto_team;
			let tech;
			let natureza;
			let inicio; 
		    let fim ; 
			let tag1 ; 
			let tag2 ;
			let equipe;
			function timeline_init() {
			
			
			   
				 options = {
					phases: [
						{ start: 2020, end: 2022, indicatorsEvery: 1, share: .3 },
						{ start: 2022, end: 2023, indicatorsEvery: 1, share: .3, className: 'timeline-unused-phase' },
						{ start: 2023, end: 2024, indicatorsEvery: 1, share: .3 }
					],
					//formatHeader: function (v) {
						//if(v < 0) return -v + ' BC';
						//if(v > 0) return v + ' AD';
						//return 'AD';
					//},					
					barHeight: 36,
					fontSize: 16
				};
				
				// note: item 'Lonely' has a popup text attached
				 data = [
					[{ id: 'Project A', start:2020, end:2021, className: 'styleB' , popup_html: '<b>Project A:</b><br>Nature: New Technology<br> Date begin: 2020 <br> Date end: 2021 <br> Team: Claudio, Evelyn, John, Gregory <br> Technologies: <div class="row" style="justify-content: center;"> <p class="skill  btn btn-primary btn-rounded"  style="font-size: 14px"> Java </p>&ensp; <p class="skill btn btn-primary btn-rounded" style="font-size: 14px"> MVC </p>&ensp; <p class="skill  btn btn-primary btn-rounded" style="font-size: 14px"> Spring </p>&ensp;  </div> </div>  </div> Soft Skills: Initiative, Communication '  }],
					 
					 
					
					
					
					
					[{ id: 'Project B', start:2020, end:2022, className: 'styleC' , popup_html: '<b>Project B:</b><br>Nature: New Technology<br> Date begin: 2020 <br> Date end: 2022 <br> Team: Oliver O., Pedro P., Roberta <br> Technologies: <div class="row" style="justify-content: center;"> <p class="skill  btn btn-primary btn-rounded"  style="font-size: 14px"> Java </p>&ensp; <p class="skill btn btn-primary btn-rounded" style="font-size: 14px"> Web </p>&ensp; <p class="skill  btn btn-primary btn-rounded" style="font-size: 14px"> Spring </p>&ensp;   </div> </div>  </div> Soft Skills: Creativity, Proactivity  '  }],
					 
					 
					 
					 
				];
				
				timeline = $('#timeline');
				timeline.simpleTimeline(options, data);				
				timeline.on('timeline:barclick', timeline_clicked);
				
				
				
			
				
			}	
			function timeline_clicked(e) {
				let clicked_item = $(e.target);
				
				let sel = $('.selected');
				sel.removeClass('selected');
				$('#clicked-item').empty();
				
				if(sel.length == 0 || sel.data('id') != clicked_item.data('id')) {
					clicked_item.addClass('selected');
					$('#clicked-item').text("You clicked " + clicked_item.data('id'));
				}					
			}
			
			function add_item() {
				ano_inicio;
				ano_fim;
				data = timeline.getTimelineData();
				nome = $("#title").val();
				texto_team = localStorage.getItem('valueTexto');
				tech =  localStorage.getItem('valueText');
				
				natureza;
				if ($("#natureza").val() == 0){
					natureza='Similar technology';
				}
				if ($("#natureza").val() == 1){
					natureza='Project already done';
				}
				if ($("#natureza").val() == 2){
					natureza='New technology';
				}
				
				
				 inicio = $("#usr1").val(); 
				fim = $("#usr2").val(); 
				 tag1 = $("#entrada").val(); 
				 tag2 = $("#entrada2").val(); 
				
				
				if(inicio.indexOf('2021') != -1) {
					ano_inicio = '2021';
				}
				if(inicio.indexOf('2022') != -1) {
					ano_inicio = '2022';
				}
				if(inicio.indexOf('2023') != -1) {
					ano_inicio = '2023';
				}
				if(inicio.indexOf('2024') != -1) {
					ano_inicio = '2024';
				}
				if(fim.indexOf('2021') != -1) {
					ano_fim = '2021';
				}
				if(fim.indexOf('2022') != -1) {
					ano_fim = '2022';
				}
				if(fim.indexOf('2023') != -1) {
					ano_fim = '2023';
				}
				if(fim.indexOf('2024') != -1) {
					ano_fim = '2024';
				}
				
				
  
				data.push([
					{
						id:nome, 
						start: ano_inicio, 
						end: ano_fim, 
						className: 'styleA', 
						
					
						popup_html: '<b>'+nome+'</b><br>Nature: '+natureza+'<br> Date Begin:&ensp;'+ inicio+'<br>  Date end:&ensp;'+ fim+'<br> Team:&ensp;'+texto_team+' <br>  <br>  Technolgies: '+tag1+'  <br>  Soft Skills: '+tag2+' '
					
					
						
					
						
					}
				]);
				
				
				//alert('nova equipe salva! '+texto_team);
				
				
								if (natureza.indexOf("Similar") != -1){
									localStorage.setItem('nature_update', 0);
								}
								if (natureza.indexOf("done") != -1){
									localStorage.setItem('nature_update', 1);
								}
								if (natureza.indexOf("New") != -1){
									localStorage.setItem('nature_update', 2);
								}
								
									
									localStorage.setItem('name_update', nome);
									
									localStorage.setItem('date_begin_update', inicio);
									localStorage.setItem('date_end_update', fim);	


								
									localStorage.setItem('technoogies_update', tag1);
									localStorage.setItem('soft_skill_update', tag2);
									
									
									localStorage.setItem('team_update', texto_team);
									
				
				timeline.setTimelineData(data).refreshTimeline();
									
			}
			
			function update_project_o() {
				
						let sel_item_id = $('.selected').data('id');
							let data = timeline.getTimelineData();
							for(let l = 0; l < data.length; l++) {
								for(let i = 0; i < data[l].length; i++) {
									if(data[l][i].id == sel_item_id) {
										data[l].splice(i,1);
										if(data[l].length == 0)
											data.splice(l,1);
										timeline.setTimelineData(data).refreshTimeline();
										
									}
								}
							}		
						
							ano_inicio;
				ano_fim;
				data = timeline.getTimelineData();
				nome = $("#title").val();
				texto_team = localStorage.getItem('valueTexto');
				tech =  localStorage.getItem('valueText');
				
				natureza;
				if ($("#natureza").val() == 0){
					natureza='Similar technology';
				}
				if ($("#natureza").val() == 1){
					natureza='Project already done';
				}
				if ($("#natureza").val() == 2){
					natureza='New technology';
				}
				
				
				 inicio = $("#usr1").val(); 
				fim = $("#usr2").val(); 
				 tag1 = $("#entrada").val(); 
				 tag2 = $("#entrada2").val(); 
				
				
				if(inicio.indexOf('2021') != -1) {
					ano_inicio = '2021';
				}
				if(inicio.indexOf('2022') != -1) {
					ano_inicio = '2022';
				}
				if(inicio.indexOf('2023') != -1) {
					ano_inicio = '2023';
				}
				if(inicio.indexOf('2024') != -1) {
					ano_inicio = '2024';
				}
				if(fim.indexOf('2021') != -1) {
					ano_fim = '2021';
				}
				if(fim.indexOf('2022') != -1) {
					ano_fim = '2022';
				}
				if(fim.indexOf('2023') != -1) {
					ano_fim = '2023';
				}
				if(fim.indexOf('2024') != -1) {
					ano_fim = '2024';
				}
				
				
  
				data.push([
					{
						id:nome, 
						start: ano_inicio, 
						end: ano_fim, 
						className: 'styleA', 
						
					
						popup_html: '<b>'+nome+'</b><br>Nature: '+natureza+'<br> Date Begin:&ensp;'+ inicio+'<br>  Date end:&ensp;'+ fim+'<br> Team:&ensp;'+texto_team+' <br>  <br>  Technolgies: '+tag1+'  <br>  Soft Skills: '+tag2+' '
					
					
						
					
						
					}
				]);
				
				
				if (natureza.indexOf("Similar") != -1){
									localStorage.setItem('nature_update', 0);
								}
								if (natureza.indexOf("done") != -1){
									localStorage.setItem('nature_update', 1);
								}
								if (natureza.indexOf("New") != -1){
									localStorage.setItem('nature_update', 2);
								}
								
									
									localStorage.setItem('name_update', nome);
									
									localStorage.setItem('date_begin_update', inicio);
									localStorage.setItem('date_end_update', fim);	


								
									localStorage.setItem('technoogies_update', tag1);
									localStorage.setItem('soft_skill_update', tag2);
									
									
									localStorage.setItem('team_update', texto_team);
				
				
						timeline.setTimelineData(data).refreshTimeline();
					alert("Project updated sucessfull! ");	
						
						
						
			}
			
			
			
			
			function remove_selected_item() {
				let sel_item_id = $('.selected').data('id');
				let data = timeline.getTimelineData();
				for(let l = 0; l < data.length; l++) {
					for(let i = 0; i < data[l].length; i++) {
						if(data[l][i].id == sel_item_id) {
							data[l].splice(i,1);
							if(data[l].length == 0)
								data.splice(l,1);
							timeline.setTimelineData(data).refreshTimeline();
							return;
						}
					}
				}					
			}
			
			function bind_popup() {
				let sel_item_id = $('.selected').data('id');
				if(typeof sel_item_id == 'undefined') {
					alert('Ain\'t nothin\' selected, yo!');
					return;
				}
				
				timeline.bindPopup(sel_item_id, '<p><b>Yo it\</p>');
			}
			
			
		
   
