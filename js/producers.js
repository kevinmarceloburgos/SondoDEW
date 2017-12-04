// JavaScript Document

var colores = ['#CFEFE5', '#93C86D', '#F3FF97', '#C3F3BE', '#FBBA49', '#B0C8B7'];
var scroll = new SmoothScroll('a[href*="#"]');
$(document).ready(function () {
	
	$(window).scroll(function () {
		if (window.pageYOffset > 120) {
			$('#up').css('bottom', '30px');
		} else {
			$('#up').css('bottom', '-80px');
		}
	});

	function random(menor, mayor) {
		var nPos = mayor - menor;
		var aleat = Math.random() * nPos;
		aleat = Math.floor(aleat);
		return parseInt(menor) + aleat;
	}
	var arti = $('.artdj');
	for (var i = 0; i < arti.length; i++){
		//$(arti[i]).css('background-color', colores[random(1,5)]);
	}
	
	$('.phot').click(function(){
		
	});
});
