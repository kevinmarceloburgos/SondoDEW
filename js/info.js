// JavaScript Document


$(document).ready(function () {
	'use strict';
	var fondos = ['url(../imagenes/bgindex.jpg)', 'url(../imagenes/bgindex2.jpg)', 'url(../imagenes/bgindex3.jpg)'];
	var body = $('.box');
	var i = 0;
	
	function carrusel() {

		if (i < fondos.length) {
			$(body).css('background-image', fondos[i]);
			i++;
		} else {
			i = 0;
			$(body).css('background-image', fondos[i]);
			i++;
		}
		setTimeout(carrusel, 3000);
	}

	carrusel();
});
