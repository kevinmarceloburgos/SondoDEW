// JavaScript Document

var titulos = [];
var artistas = [];

var audio = [
	'Yellow Claw - Catch Me (feat. Naaz)',
	'Yellow Claw - Good Day (feat. DJ Snake & Elliphant)',
	'KSHMR & Crossnaders - Back To Me (feat. Mickey Blue)',
	'Lucas & Steve - Up Till Dawn (On the Move)',
	'Martin Garrix - Now That I\'ve Found You',
	'Robin Schulz & David Guetta - Shed a Light (feat. Cheat Codes)',
	'Tiësto & KSHMR - Harder (feat. Talay Riley)',
	'Steve Aoki & Boehm - Back 2 U (feat. Walk the Moon)',
	'Sophie Francis - Lovedrunk (Extended Mix)',
	'Marshmello & Ookay - Chasing Color (feat. Noah Cyrus)',
	'Major Lazer & Showtek - Believer',
	'Mike Perry - The Ocean (feat. Shy Martin)',
	'DVBBS - Wicked Ways (feat. Stella Rio)',
	'Armin van Buuren Ft. Mr. Probz - Another You (Headhunterz Remix)',
	'David Guetta & Showtek Ft. Vassy - Bad (Radio Edit)',
	'Different Heaven &  EH!DE - My Heart',
	'Don Diablo - Back to Life',
	'Hardwell Ft. Amba Shepherd - Apollo (Original Mix)',
	'Sebastian Ingrosso - Reload (Vocal Version  Radio Edit)',
	'Zomboy - Nuclear (Hands Up)',
	'G-Eazy x Bebe Rexha - Me, Myself & I (Oliver Heldens Remix)',
	'Gareth Emery & Ian Standerwick - Saving Light (feat. HALIENE) [Radio Edit]',
	'Breathe Carolina & Dropgun Ft. Kaleena Zanders - Rhythm Is A Dancer',
	'Zomboy - Lights Out (Original Mix)',
	'KSHMR & Bassjackers - Memories (feat. Sirah)',
	'Panda Eyes - Nostalgia 64',
	'Skrillex Ft. Sirah - Bangarang',
	'Skrillex & Diplo - Mind (feat. Kai)',
];
audio = audio.sort();
audio = audio.reverse();

for (var i = 0; i < audio.length; i++) {
	var pat = /.* -/ig;
	var pat2 = / -.*/ig;
	var ntitulo = audio[i];
	var nartista = audio[i];
	ntitulo = ntitulo.replace(pat, "");
	nartista = nartista.replace(pat2, "");
	titulos[i] = ntitulo;
	artistas[i] = nartista;
}

$(document).ready(function () {
	'use strict';
	var medio = $('.medio');
	var titulo = $('.titulo');
	var artista = $('.artista');
	var port_i = $('.port_i');
	var arti = $('.arti');

	var a = 0;

	while (a < audio.length) {
		$(medio[a]).attr('src', '../audios/' + audio[a] + '.mp3');
		$(titulo[a]).html(titulos[a]);
		$(artista[a]).html(artistas[a]);
		$(port_i[a]).attr('src', '../imagenes/portada/' + audio[a] + '.jpg');
		$(arti[a]).css('opacity', '1');
		a++;
	}
});
