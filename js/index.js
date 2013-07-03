$(document).ready(function(){
	//FB, Twitter, gplus logos mouse hover events
	$("#fblogo").mouseenter(function(){$(this).attr('src','images/Logos/fb_logo2.png').animate(1000);});
	$("#fblogo").mouseleave(function(){$(this).attr('src','images/Logos/fb_logo.png').animate(1000);});
	$("#gpluslogo").mouseenter(function(){$(this).attr('src','images/Logos/gplus_logo2.png').animate(1000);});
	$("#gpluslogo").mouseleave(function(){$(this).attr('src','images/Logos/gplus_logo.png').animate(1000);});
	$("#youtubelogo").mouseenter(function(){$(this).attr('src','images/Logos/youtube_logo2.png').animate(1000);});
	$("#youtubelogo").mouseleave(function(){$(this).attr('src','images/Logos/youtube_logo.png').animate(1000);});
});