(function ($) {
    "use strict"

    //navbar scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });

    //typed indicate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: false
        });
    }
    
    //volume
    
    document.getElementByTagName("video").volume = 0.5;

    //portfolio

    $(document).ready(function () {
        $('.carousel').carousel({ interval: 10000 })
        $('#carouselExampleDark').on('slide.bs.carousel', function (args) {
            var videoList = document.getElementsByTagName("video");
            switch (args.from) {
                case 0:
                    videoList[0].pause();
                    break;
                case 1:
                    videoList[1].pause();
                    break;
                case 2:
                    videoList[2].pause();
                    break;
            }
            switch (args.to) {
                case 0:
                    videoList[0].play();

                    break;
                case 1:
                    videoList[1].play();
                    break;
                case 2:
                    videoList[2].play();
                    break;
            }
        })

    });

}) (jQuery);
