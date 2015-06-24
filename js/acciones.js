// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	
 audio = window.plugins.LowLatencyAudio;
 audio.preloadFX ('btnorquideas', 'audio/ruiseñor.mp3', function () {}, function(msg) {alert("Error " + msg);});
	    
}); 
});




