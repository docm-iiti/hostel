// JavaScript Document
$(document).ready(function(){
	//Indicator's at the bottom
	$('.marquee_panels .marquee_panel').each(function(index){
		$('.marquee_nav').append('<a class="marquee_nav_item" ></a>');
	});
	
	
	// Generate PhotoStrip
	var no_of_photos;
	$('img.marquee_panel_photo').each(function(index){
		var photoWidth = $('.marquee_container').width();
		var photoPosition = index * photoWidth;
		$('.marquee_photos').append('<img class="marquee_photo" style="left: '+photoPosition+'" src="'+$(this).attr('src')+'" alt="'+$(this).attr('alt')+'" width="1200" height="400" />');
		$('.marquee_photos').css('width', photoPosition+photoWidth);
		no_of_photos=index;
	});

	
	
	//This is my AutoPlay Code
	var photoChangeInterval=5000;
	var marqueeIndex=0;
	var navHandle=document.getElementsByClassName("marquee_nav_item");
	function autoPlay(){
		if(marqueeIndex==no_of_photos)
			marqueeIndex=0;
		else marqueeIndex++;	
		$('.marquee_nav a.marquee_nav_item').removeClass('selected');
		$(navHandle[marqueeIndex]).addClass('selected');		
		var marqueeWidth = $('.marquee_container').width();
		var distanceToMove = marqueeWidth*(-1);
		var newPhotoPosition = marqueeIndex*distanceToMove + 'px';
		var newCaption = $('.marquee_panel_caption').get(marqueeIndex);
		$('.marquee_photos').animate({left: newPhotoPosition}, 1000);
		$('.marquee_caption').animate({top: '400px'}, 500, function(){
			var newHTML = $(newCaption).html();
			$('.marquee_caption_content').html(newHTML);
			setCaption();
		});
	}
	var autoPlay_handle=setInterval(autoPlay,photoChangeInterval);
	$('.marquee_container').mouseenter(function(){
			clearInterval(autoPlay_handle);
	});
	$('.marquee_container').mouseleave(function(){
		autoPlay_handle=setInterval(autoPlay,photoChangeInterval);
	});
	

		
	
	
		// Set up Navigation Links	
		$('.marquee_nav a.marquee_nav_item').click(function(){
		//This is for changing the navigaion orb at the bottom
		$('.marquee_nav a.marquee_nav_item').removeClass('selected');
		$(this).addClass('selected');
		
		var navClicked = $(this).index();
		var marqueeWidth = $('.marquee_container').width();
		var distanceToMove = marqueeWidth*(-1);
		var newPhotoPosition = navClicked*distanceToMove + 'px';
		var newCaption = $('.marquee_panel_caption').get(navClicked);
		
	
		
		// Animate the photos and caption
		$('.marquee_photos').animate({left: newPhotoPosition}, 1000);
		
		
		$('.marquee_caption').animate({top: '400px'}, 500, function(){
			var newHTML = $(newCaption).html();
			$('.marquee_caption_content').html(newHTML);
			setCaption();
		});
	});
	
	//Preload Plugin from the Internet 
	$('.marquee_panels img').imgpreload(function(){
		initializeMarquee();
	});

});

function initializeMarquee(){
	$('.marquee_caption_content').html(
		$('.marquee_panels .marquee_panel:first .marquee_panel_caption').html());
	$('.marquee_nav a.marquee_nav_item:first').addClass('selected');
	$('.marquee_photos').fadeIn(1500);
	setCaption();
}

function setCaption(){
	var captionHeight = $('.marquee_caption').height();
	var marqueeHeight = $('.marquee_container').height();
	var newCaptionTop =marqueeHeight - captionHeight - 15;
	$('.marquee_caption').delay(100).animate({top: newCaptionTop}, 500);
}
