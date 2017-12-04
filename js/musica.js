// JavaScript Document

var scroll = new SmoothScroll('a[href*="#"]');

$(document).ready(function () {

	'use strict';

	var boton = $('.btn-play-pause');
	var celda = $('.cont');
	var medio = $('.medio');

	var play = '../imagenes/iconos/play.svg';
	var pause = '../imagenes/iconos/pause.svg';
	var k = true;
	var ind;

	function thisPlay(i) {
		medio[i].play();
		boton[i].src = pause;
		playStyle(i);
		$(celda[i]).css('margin-top', '135px');
		$(celda[i]).css('box-shadow', '0 -3px 15px #000');
	}

	function backStop(b) {
		medio[b].pause();
		medio[b].currentTime = 0;
		boton[b].src = play;
		pauseStyle(b);
		$(celda[b]).css('margin-top', '140px');
		$(boton[b]).css('border', '3px solid #000');
		$(celda[b]).css('box-shadow', '0 0 0 #000');
	}

	function thisPause(i) {
		medio[i].pause();
		boton[i].src = play;
		playStyle(i);
	}

	//Estilos del botón...
	function pauseStyle(i) {
		$(boton[i]).css('box-shadow', '0 0 10px #000');
		$(boton[i]).css('padding', '25px');
	}

	function playStyle(i) {
		$(boton[i]).css('box-shadow', '0 0 50px #f53');
		$(boton[i]).css('border', '3px solid #f53');
		$(boton[i]).css('padding', '30px');
	}

	var prog = $('.prog');
	var maximo = 100;

	function estado() {
		if (medio[ind].ended) {
			$(prog[ind]).css('width', '0%');
			boton[ind].src = play;
			clearTimeout(bucle);
		} else if (medio.paused) {
			clearTimeout(bucle);
		} else {
			var total = medio[ind].currentTime * maximo / medio[ind].duration + '%';
			$(prog[ind]).css('width', total);
			var bucle = setTimeout(estado, 500);
		}
	}

	$(boton).click(function () {
		var n = $(this).parent().index();
		if (medio[n].paused) {
			if (k) {
				thisPlay(n);
				k = false;
			} else {
				if (ind !== n) {
					backStop(ind);
				}
				thisPlay(n);
			}
		} else {
			thisPause(n);
		}
		ind = n;
		estado();
	});

	$('.send').click(function () {
		alert('Lo revisaremos para agregarla :)');
	});

	var bot = $('#up');
	var alt = 120;
	$(window).scroll(function () {
		if (window.pageYOffset > alt) {
			$(bot).css('bottom', '30px');
		} else {
			$(bot).css('bottom', '-80px');
		}
	});

	$('#txt-busqueda').keyup(function () {
		var value = $(this).val().toLowerCase();
		$(".arti").filter(function () {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
		});
	});

	$('#btn-busqueda').click(function () {
		if ($('#txt-busqueda').val() !== '') {
			var value = $('#txt-busqueda').val().toLowerCase();
			$(".arti").filter(function () {
				$(this).toggle($(this).text().toLowerCase().indexOf(value));
				$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
				$(this).toggle($(this).text().toLowerCase().indexOf(value));
			});
			$('#txt-busqueda').val('');
		}

	});

});
