// JavaScript Document
$(document).ready(function(e) {
//document.addEventListener("deviceready",function(){
	
$('#btnorquideas').on('tap',function(){
		 navigator.vibrate(1000);
		 
		 $('#btnorquideas').on('tap', function(){
		 var pantalla = $.mobile.getScreenHeight();
		var encabezado = $('.ui-header').outerHeight();
		var pie = $('.ui-footer').outerHeight();
		var contenido = $('ui.content').outerHeight();
		var alto = (pantalla - encabezado - pie)/2;
		$('.btnorquideas').height(alto);
		});

});
});
 
//});




