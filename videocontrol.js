/**
*  jQuery listen for clicks and interaction	
* 
*/	
$(document).ready(function(){
	
var video = document.querySelector('#one'),
    video2 = document.querySelector('#two'),
    togglePlay = document.querySelector('#play'),
    position = document.querySelector('#position'),
    ready = false,
    controls = document.querySelector('#controls'),
    scrub = document.querySelector('#scrub');
	video.playbackRate = 1;
	video2.playbackRate = 1;	
	$("#play").click(function(e) {
		e.preventDefault(e);

		video.play();
		video2.play();
	
	});

	$("#50slowmotion").click(function(e) {
		e.preventDefault(e);
		video.playbackRate = 0.5;
		video2.playbackRate =0.5;	
	
	});	


	$("#25slowmotion").click(function(e) {
		e.preventDefault(e);
		video.playbackRate = 0.25;
		video2.playbackRate =0.25;	
	
	});
	
	
	$("#normalmotion").click(function(e) {
		e.preventDefault(e);
		video.playbackRate = 1.0;
		video2.playbackRate = 1.0;	
	
	});
	
});