var superboxImages = new Array(
    "images/superbox/4.jpg",
    "images/superbox/1.jpg",
    "home/img/1.jpg",
    "home/img/2.jpg",
    "home/img/3.jpg",
    "home/img/4.jpg",
    "home/img/5.jpg",
    "home/img/6.jpg",
    "home/img/7.jpg",
    "home/img/8.jpg",
    "home/img/9.jpg",
    "home/img/10.jpg",
    "home/img/11.jpg",
    "home/img/12.jpg",
    "facilities/images/computercenter/1.jpg",
    "facilities/images/computercenter/2.jpg",
    "facilities/images/computercenter/3.jpg",
    "facilities/images/computercenter/4.jpg",
    "facilities/images/computercenter/5.jpg",
    "facilities/images/computercenter/6.jpg",
    "facilities/images/guesthouse/1.jpg",
    "facilities/images/guesthouse/2.jpg",
    "facilities/images/guesthouse/3.jpg",
    "facilities/images/guesthouse/4.jpg",
    "facilities/images/guesthouse/5.jpg",
    "facilities/images/hosteloffice/1.jpg",
    "facilities/images/hosteloffice/2.jpg",
    "facilities/images/hosteloffice/3.jpg",
    "facilities/images/hosteloffice/4.jpg",
    "facilities/images/hosteloffice/5.jpg",
    "facilities/images/hosteloffice/6.jpg",
    "facilities/images/residences/1.jpg",
    "facilities/images/residences/11.jpg",
    "facilities/images/residences/3.jpg",
    "facilities/images/residences/4.jpg",
    "facilities/images/residences/5.jpg",
    "facilities/images/residences/7.jpg",
    "facilities/images/residences/6.jpg"
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