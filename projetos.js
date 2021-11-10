
			var timeline;
			$(document).ready(timeline_init);
			
			function timeline_init() {
			
			
			   
				var options = {
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
				var data = [
					[{ id: 'Project A', start: 2020, end: 2021, className: 'styleB' , popup_html: '<b>Project A:</b><br>Nature: New Technology<br> Date begin: 01/01/2020 <br> Date end: 10/12/2022 <br> Team: Claud, Evelyn, Funny, Gregory <br> Technologies: <div class="row" style="justify-content: center;"> <p class="skill  btn btn-primary btn-rounded"  style="font-size: 14px"> Java </p>&ensp; <p class="skill btn btn-primary btn-rounded" style="font-size: 14px"> MVC </p>&ensp; <p class="skill  btn btn-primary btn-rounded" style="font-size: 14px"> Spring </p>&ensp;  </div> </div>  </div> Soft Skills: Initiative, Communication '  }],
					 
					 
					
					
					
					
					[{ id: 'Project B', start: 2020, end: 2022, className: 'styleC' , popup_html: '<b>Project B:</b><br>Nature: New Technology<br> Date begin: 01/01/2020 <br> Date end: 10/12/2022 <br> Team: Oliver O., Pedro P., Roberta <br> Technologies: <div class="row" style="justify-content: center;"> <p class="skill  btn btn-primary btn-rounded"  style="font-size: 14px"> Java </p>&ensp; <p class="skill btn btn-primary btn-rounded" style="font-size: 14px"> Web </p>&ensp; <p class="skill  btn btn-primary btn-rounded" style="font-size: 14px"> Spring </p>&ensp;   </div> </div>  </div> Soft Skills: Creativity, Proactivity  '  }],
					 
					 
					 
					 
				];
				
				timeline = $('#timeline');
				timeline.simpleTimeline(options, data);				
				timeline.on('timeline:barclick', timeline_clicked);
			
			}	
			function timeline_clicked(e) {
				var clicked_item = $(e.target);
				
				var sel = $('.selected');
				sel.removeClass('selected');
				$('#clicked-item').empty();
				
				if(sel.length == 0 || sel.data('id') != clicked_item.data('id')) {
					clicked_item.addClass('selected');
					$('#clicked-item').text("You clicked " + clicked_item.data('id'));
				}					
			}
			
			function add_item() {
				var ano_inicio;
				var ano_fim;
				var data = timeline.getTimelineData();
				var nome = $("#title").val();
				var texto = localStorage.getItem('valueTexto');
				var tech =  localStorage.getItem('valueText');
				
				var natureza;
				if ($("#natureza").val() == 0){
					natureza='Similar technology';
				}
				if ($("#natureza").val() == 1){
					natureza='Project already done';
				}
				if ($("#natureza").val() == 2){
					natureza='New technology';
				}
				
				
				var inicio = $("#usr1").val(); 
				var fim = $("#usr2").val(); 
				var tag1 = $("#entrada").val(); 
				var tag2 = $("#entrada2").val(); 
				
				
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
						
					
						popup_html: '<b>'+nome+'</b><br>Nature: '+natureza+'<br> Date Begin:&ensp;'+ inicio+'<br>  Date end:&ensp;'+ fim+'<br> Team:&ensp;'+texto+' <br>  <br>  Technolgies: '+tag1+'  <br>  Soft Skills: '+tag2+' '
					
					
						
					
						
					}
				]);
				timeline.setTimelineData(data).refreshTimeline();
				
			}
			
			function remove_selected_item() {
				var sel_item_id = $('.selected').data('id');
				var data = timeline.getTimelineData();
				for(var l = 0; l < data.length; l++) {
					for(var i = 0; i < data[l].length; i++) {
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
				var sel_item_id = $('.selected').data('id');
				if(typeof sel_item_id == 'undefined') {
					alert('Ain\'t nothin\' selected, yo!');
					return;
				}
				
				timeline.bindPopup(sel_item_id, '<p><b>Yo it\</p>');
			}
			
			
		
   
