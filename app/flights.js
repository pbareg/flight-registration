$(function(){
	$('tr').click(function(){
		if($(this).hasClass('open-form')){
			let departure=$(this).find('#departure').text();
			let arrival=$(this).find('#arrival').text();
			let clazz=$(this).find('#clazz option:selected').text();
			let value=$(this).find('#clazz option:selected').val();
			$('.tr-booking').remove();
			var passengerhtml="<tr class='tr-booking' >"+
									"<td colspan='9'>"+
									"<form id='booking' action='/booking' method='post'>"+
										"<div class='container'>"+
											"<div class='row'>"+
												"<div class='col-4'>"+
													"<div class='form-group'>"+
														"<lable>Email</lable>"+
														"<input class='form-control email' id='email' type='email'  name='email' >"+
													"</div>"+
												"</div>"+
												"<div class='col-2'>"+
													"<div class='form-group'>"+
														"<lable>Passengers</lable>"+
														"<input class='form-control' id='passengers' type='number' onchange='updateTotalFare()' name='noPeople'>"+
													"</div>"+
												"</div>"+
												"<div class='col-2 offset-4'>"+
													"<div class='form-group'>"+
														"<lable>Total Fare</lable>"+
														"<input class='form-control' type='number' value='"+departure+"' name='totalfare'>"+
													"</div>"+
												"</div>"+
											"</div>"+
											"<div class='row'>"+
												"<input id='class' name='class' value='"+clazz+"' type='hidden'>"+
												"<input id='from' name='from' value='"+departure+"' type='hidden'>"+
												"<input id='destination' name='destination' value='"+arrival+"' type='hidden'>"+
												"<input id='bookticket' class='btn btn-block btn-primary' type='submit' value='Book Ticket'>"+
											"</div>"+
									"</form>"+										
									"</td>"+
	   						  "</tr>";

	   		$(passengerhtml).insertAfter($(this).closest('tr'));			
			$(this).removeClass('open-form')
		}
	});

	function updateTotalFare(){
		console.log('updateTotalFare');
	}

	$('#passengers').change(function() {
		console.log('submitting')
	});


  // your code here
});




 