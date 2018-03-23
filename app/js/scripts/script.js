// js jquery
$(document).ready(function() {
    var swiper = new Swiper('.big-slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        preventClicks: false,
        preventClicksPropagation: false,
        navigation: {
            nextEl: '.big-slider__next',
            prevEl: '.big-slider__prev'
        }
    });
    var swiper = new Swiper('.services-slider', {
        slidesPerView: 3,
        spaceBetween: 0,
        slidesPerGroup: 3,
        autoHeight: true,
        preventClicks: false,
        preventClicksPropagation: false,
        pagination: {
            el: '.services-slider__pagination',
            clickable: true
        },
        breakpoints: {
            940: {
                slidesPerView: 2,
                slidesPerGroup: 2
            },
            640: {
                slidesPerView: 1,
                slidesPerGroup: 1
            }
        }
    });
    $('.js-open-menu').click(function () {
        $('.js-menu').addClass('open').show("slide", {direction: "right"}, 500);
    });
    $('.js-close-menu').click(function () {
        $('.js-menu').removeClass('open').hide("slide", {direction: "right"}, 500);
    });
});
$(window).on('load resize', function(){
    if (!window.matchMedia('(max-width: 1000px)').matches) {
        $(".js-menu").show().removeClass("open");
    }
    else{
        $(".js-menu").hide().removeClass("open");
    }
});