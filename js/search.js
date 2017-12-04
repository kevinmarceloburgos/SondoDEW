// JavaScript Document
var medio = document.getElementsByClassName('medio');

function buscar(){
	var valor = document.getElementById('busca').value;
	if (valor == "" || valor == " "){
		return;
	}else {
		alert('entró.');
		var expreg = newRegExp('valor', 'ig');
		for (var i = 0; i < medio.lenght; i++){
			
			/**
			var cha = medio[i].getAttribute('src');
			if (expreg.test(cha)){
				alert(true);
			} else {
				alert(false);
			}**/
			
		}
	}
	
}
