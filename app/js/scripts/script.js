// js jquery
$(document).ready(function() {
    var swiper1 = new Swiper('.big-slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        preventClicks: false,
        preventClicksPropagation: false,
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
            730: {
                slidesPerView: 1,
                slidesPerGroup: 1
            }
        }
    });
    var portfolio = new Swiper('.portfolio', {
        slidesPerView: 3,
        spaceBetween: 0,
        preventClicks: false,
        preventClicksPropagation: false,
        // pagination: {
        //     el: '.slider-progress',
        //     type: 'progressbar'
        // },
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
                $('.js-current-slide').text(this.realIndex+1);
            },
            setTranslate: function(){
                var progress = translateVal(this.scrollbar.dragEl);
                $('.slider-progress2').css('width',progress+'px');
            },
            slideChangeTransitionEnd: function(){
                var progress = translateVal(this.scrollbar.dragEl);
                $('.slider-progress2').css('width',progress+'px');
            }
        }
    });
    var blog = new Swiper('.blog', {
        slidesPerView: 'auto',
        spaceBetween: 0,
        freeMode: true,
        preventClicks: false,
        preventClicksPropagation: false,
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
        on: {
            setTranslate: function(){
                var progress = translateVal(this.scrollbar.dragEl);
                $('.slider-progress2').css('width',progress+'px');
            },
            slideChangeTransitionEnd: function(){
                var progress = translateVal(this.scrollbar.dragEl);
                $('.slider-progress2').css('width',progress+'px');
            }
        }
    });
    var services = new Swiper('.services', {
        slidesPerView: 'auto',
        spaceBetween: 0,
        freeMode: true,
        preventClicks: false,
        preventClicksPropagation: false,
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

    });
    function translateVal(el) {
        var progress = el.style.transform.match(/translate3d\((.+)px,(.+)px,(.+)px\)/);
        return progress[1];
    }

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