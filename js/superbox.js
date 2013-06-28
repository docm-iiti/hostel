var superboxImages = new Array(
    "images/superbox/5.jpg",
    "images/superbox/5.jpg",
    "http://dummyimage.com/600x400/000/fff&text=BKC",
    "http://dummyimage.com/600x400/9c0/fff&text=What",
    "http://dummyimage.com/600x400/09F/000&text=Sri",
    "http://dummyimage.com/600x400/09F/000&text=Ram",
    "images/superbox/4.jpg",
    "http://dummyimage.com/600x400/000/C00&text=Yeah!",
    "images/superbox/1.jpg",
    "images/superbox/4.jpg",
    "images/superbox/5.jpg",
    "images/superbox/5.jpg",
    "http://dummyimage.com/600x400/000/fff&text=BKC",
    "images/superbox/5.jpg",
    "http://dummyimage.com/600x400/9c0/fff&text=What",
    "images/superbox/4.jpg",
    "http://dummyimage.com/600x400/000/C00&text=Yeah!",
    "images/superbox/1.jpg",
    "images/superbox/4.jpg",
    "images/superbox/1.jpg",
    "images/superbox/4.jpg",
    "images/superbox/5.jpg",
    "images/superbox/5.jpg",
    "http://dummyimage.com/600x400/000/fff&text=BKC",
    "http://dummyimage.com/600x400/9c0/fff&text=What",
    "images/superbox/4.jpg",
    "http://dummyimage.com/600x400/000/C00&text=Yeah!",
    "images/superbox/1.jpg",
    "images/superbox/4.jpg"
    );

$(document).ready(function() {

    for (var i = 0; i < superboxImages.length; i++) {
        $(".superbox").append('<div class="superbox-list"><img src="'+superboxImages[i]+'" data-img="'+superboxImages[i]+'" alt="" class="superbox-img"></div>');
    };

    $('.superbox').SuperBox();

});


;(function($) {
        
    $.fn.SuperBox = function(options) {
        
        var superbox      = $('<div class="superbox-show"></div>');
        var superboximg   = $('<img src="" class="superbox-current-img">');
        var superboxclose = $('<div class="superbox-close"></div>');
        
        superbox.append(superboximg).append(superboxclose);
        $(".superbox").append(superbox);
        superbox.css('display','hidden');
        
        return this.each(function() {
            
            $('.superbox-list').click(function() {
                var clickedImage = $(this);
                var currentimg = $(this).find('.superbox-img');
                var imgData = currentimg.data('img');

                $('.superbox-current-img').animate({opacity: 0}, 100, function(){
                    superboximg.attr('src', imgData);

                    if(clickedImage.next().hasClass('superbox-show')){
                        superbox.slideToggle();
                        if ($('.superbox-current-img').css('opacity', 0))
                            $('.superbox-current-img').animate({opacity: 1}, 100);
                        else
                            $('.superbox-current-img').animate({opacity: 0}, 100);

                    } else {
                        $(".superbox-show").remove();
                        superbox.insertAfter(clickedImage);
                        $('.superbox-current-img').animate({opacity: 1}, 100);
                        superbox.slideDown();
                    }
                
                    $('html, body').animate({
                        scrollTop:superbox.position().top - currentimg.width()
                    }, 'medium');

                });
            
            });
                        
            $('.superbox').on('click', '.superbox-close', function() {
                $('.superbox-current-img').animate({opacity: 0}, 200, function() {
                    $('.superbox-show').slideUp();
                });
            });
            
        });
    };
})(jQuery);