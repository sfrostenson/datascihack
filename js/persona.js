$(document).ready(function() {
	$('#jack').click(function() {
		$('.hardcode-highlight-fr').html('He is calling for a ban on the free drinks served by Magaluf’s hotels to attract visitors there on 10-day, $500 all-inclusive packages.')
	})
	$('#daisy').click(function() {
		$('.hardcode-highlight-fr').html('Some of the incidents go beyond carelessness and show a lack of respect for local mores.')
	})
	$('#locke').click(function() {
		$('.hardcode-highlight-fr').html('Some of the acts can also be self-destructive, as seen in the proliferation in Magaluf and other resort towns of “balconing” — when inebriated tourists jump between balconies or dive into courtyard pools, often resulting in injury or even death.')
	})

	$('.everyone').click(function() {
		$('.text').css("display", "none");
		$('.text2').css("display", "inline-block");
		$('.text2').append("<img src='img/jack.png' style='width: 20%;' />");
		$('.text2').append('They could do better than this');
	})
	$('.friends').click(function() {
		$('.text2').css("display", "none");
		$('.text').css("display", "inline-block");
		$('.text').append("<img src='img/locke.png' style='width: 20%;' />");
		$('.text').append('Kids these days');
		$('.text').append('<br>');
		$('.text').append("<img src='img/daisy.png' style='width: 20%;' />");
		$('.text').append('So narcissistic');
		
	})
});
