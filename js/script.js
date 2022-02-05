$(document).ready(function() {
    $('.carousel__inner').slick({
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        // adaptiveHeight: true,
        // autoplay: true,
        // autoplaySpeed: 10000
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    infinite: true,
                    dots: true
                }
            }

        ]
    });
});



