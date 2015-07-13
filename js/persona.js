$(document).ready(function() {
	// top friend highlights
	var quotes = {
		daisy: 'He is calling for a ban on the free drinks served by Magaluf’s hotels to attract visitors there on 10-day, $500 all-inclusive packages.',
		jack: 'Some of the incidents go beyond carelessness and show a lack of respect for local mores.',
		locke:'Some of the acts can also be self-destructive, as seen in the proliferation in Magaluf and other resort towns of “balconing” — when inebriated tourists jump between balconies or dive into courtyard pools, often resulting in injury or even death.'
	};

	var comments = {
		'everyone': {
			person: [
				["<p><img src='img/jack.png' style='width: 20%; padding-right:5px; padding-top:5px;' /> They could do better than this</p>"]
			]
		},
		'friends': {
			person: [
				["<p><img src='img/locke.png' style='width: 20%; padding-right:5px; padding-top:5px;' /> Kids these days</p>" +
				"<p><img src='img/daisy.png' style='width: 20%; padding-right:5px; padding-top:5px;' /> So narcissistic</p>"]
			]
		}
	};
	// on click of img, return top friend highlight
	$('img.persona').click(function() {
		var $target = $(this).attr('id');
		$('.hardcode-highlight-fr').html(quotes[$target]);
	});

	// on click of friends/everyone toggle display comments & icons
	$('button').click(function() {
		$('.text').css('display', 'block');
		var $target= $(this).attr('id');
		var array = comments[$target].person;
		for(var i = 0; i < array.length; i++) {
			$('.text').html(array[i]);
		}
	});
});
