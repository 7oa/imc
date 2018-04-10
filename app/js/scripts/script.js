// js jquery
$(document).ready(function() {
    var swiper1 = new Swiper('.big-slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        watchOverflow: true,
        navigation: {
            nextEl: '.big-slider__next',
            prevEl: '.big-slider__prev'
        }
    });
    var swiper2 = new Swiper('.services-slider', {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 0,
        autoHeight: true,
        watchOverflow: true,
        pagination: {
            el: '.services-slider__pagination',
            clickable: true
        },
        breakpoints: {
            940: {
                slidesPerView: 2,
                slidesPerGroup: 2
            },
            730: {
                slidesPerView: 1,
                slidesPerGroup: 1
            }
        }
    });
    var portfolio = new Swiper('.portfolio', {
        slidesPerView: 3,
        spaceBetween: 0,
        watchOverflow: true,
        navigation: {
            nextEl: '.next',
            prevEl: '.prev'
        },
        scrollbar: {
            el: '.slider-scrollbar',
            draggable: true,
            hide: false,
            snapOnRelease: false,
            dragSize: 30
        },
        breakpoints: {
            1050: {
                slidesPerView: 2
            },
            640: {
                slidesPerView: 1
            }
        },
        on: {
            init: function(){
                $('.js-current-slide').text(this.realIndex+1);
                $('.js-all-slide').text(this.slides.length);
            },
            slideChange: function(){
                console.log('slideChange');
                $('.js-current-slide').text(this.realIndex+1);
            }
        }
    });

    var blog = new Swiper('.blog', {
        slidesPerView: 'auto',
        spaceBetween: 0,
        freeMode: true,
        watchOverflow: true,
        navigation: {
            nextEl: '.next',
            prevEl: '.prev'
        },
        scrollbar: {
            el: '.slider-scrollbar',
            draggable: true,
            hide: false,
            snapOnRelease: false,
            dragSize: 30
        }
    });
    var services = new Swiper('.services', {
        slidesPerView: 'auto',
        spaceBetween: 0,
        freeMode: true,
        watchOverflow: true,
        navigation: {
            nextEl: '.next',
            prevEl: '.prev'
        },
        scrollbar: {
            el: '.slider-scrollbar',
            draggable: true,
            hide: false,
            snapOnRelease: false,
            dragSize: 30
        }
    });
    //menu
    $('.js-open-menu').click(function () {
        $('.js-menu').addClass('open').show("slide", {direction: "right"}, 500);
    });
    $('.js-close-menu').click(function () {
        $('.js-menu').removeClass('open').hide("slide", {direction: "right"}, 500);
    });

    //form
    if($('.js-movePh').length>0){
        $('.js-movePh').each(function() {
            if($(this).val()) $(this).next('span').addClass('moveUp');
        });
        $('.js-movePh').on('focus', function() {
            $(this).next('span').addClass('moveUp');
        });
        $('.js-movePh').on('focusout', function() {
            if(!$(this).val()) $(this).next('span').removeClass('moveUp');
        });
        $("#phone").mask("+7 999 999 99 99");
    }
    $('.js-submit').hover(
        function(){
            $(this).parents('.js-form').addClass('hover');
        },
        function(){
            $(this).parents('.js-form').removeClass('hover');
        }
    );
    $('.js-open-form').click(function () {
        if (window.matchMedia('(max-width: 1000px)').matches) {
            $('.js-menu').removeClass('open').hide("slide", {direction: "right"}, 500);
        }
        $('.js-form').addClass('open').show("slide", {direction: "right"}, 500);
    });
    $('.js-close-form').click(function () {
        $('.js-form').addClass('open').hide("slide", {direction: "right"}, 500);
    });
});
//menu
$(window).on('load resize', function(){
    if (!window.matchMedia('(max-width: 1000px)').matches) {
        $(".js-menu").show().removeClass("open");
    }
    else{
        $(".js-menu").hide().removeClass("open");
    }
});

//form
$(document).mouseup(function (e){
    var div = $(".js-form");
    if (!div.is(e.target)
        && div.has(e.target).length === 0) {
        $('.js-form').removeClass('open').hide("slide", {direction: "right"}, 500);
    }
});