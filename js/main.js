$(document).ready(function() {
	$('.submit').click(function (event){
		event.preventDefault()
		console.log('done')
		
		var email = $('.email').val()
		var name = $('.name').val()
		var lastname = $('.lastname').val()
		var date = $('.date').val()
		var country = $('.country').val()
		var subscribe = $('.subscribe').val()
		
		if(email.length > 5 && email.includes('@') && email.includes('.')) {
			console.log('yes')
		}else{
			console.log('no')
		}
		}
	})
})
