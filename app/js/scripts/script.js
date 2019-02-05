// js jquery
$(document).ready(function() {
    var swiper1 = new Swiper('.big-slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        preventClicks: false,
        preventClicksPropagation: false,
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
        preventClicks: false,
        preventClicksPropagation: false,
        autoHeight: true,
        watchOverflow: true,
        mousewheel: true,
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
                slidesPerGroup: 1,
                autoHeight: false
            }
        }
    });
    var portfolio = new Swiper('.portfolio', {
        slidesPerView: 3,
        spaceBetween: 0,
        preventClicks: false,
        preventClicksPropagation: false,
        watchOverflow: true,
        mousewheel: true,
        navigation: {
            nextEl: '.next',
            prevEl: '.prev'
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
            }
        }
    });
    var portfolioDetail = new Swiper('.detail-portfolio__slider', {
        slidesPerView: 'auto',
        watchOverflow: true,
        spaceBetween: 50,
        centeredSlides: true,
        navigation: {
            nextEl: '.next',
            prevEl: '.prev'
        },
        breakpoints: {
            768: {
                spaceBetween: 30
            },
            425: {
                spaceBetween: 0
            }
        },
        on: {
            init: function(){
                $('.js-current-slide').text(this.realIndex+1);
                $('.js-all-slide').text(this.slides.length);
                var activeIndex = this.activeIndex;
                var activeTtl = $(this.slides[activeIndex]).data('ttl');
                $('.js-current-ttl').text(activeTtl);
            },
            slideChange: function(){
                $('.js-current-slide').text(this.realIndex+1);
                var activeIndex = this.activeIndex;
                var activeTtl = $(this.slides[activeIndex]).data('ttl');
                $('.js-current-ttl').text(activeTtl);
            }
        }
    });

    var blog = new Swiper('.blog', {
        slidesPerView: 'auto',
        spaceBetween: 0,
        preventClicks: false,
        preventClicksPropagation: false,
        freeMode: true,
        watchOverflow: true,
        mousewheel: true,
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
        preventClicks: false,
        preventClicksPropagation: false,
        freeMode: true,
        watchOverflow: true,
        mousewheel: true,
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

    var price = new Swiper('.price', {
        slidesPerView: 'auto',
        spaceBetween: 0,
        preventClicks: false,
        preventClicksPropagation: false,
        freeMode: true,
        watchOverflow: true,
        mousewheel: true,
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
    if(($('.about').length>0) && ($('.about-thumbs').length>0)) {
        var about = new Swiper('.about', {
            slidesPerView: 'auto',
            spaceBetween: 0,
            freeMode: true,
            watchOverflow: true,
            mousewheel: true,
            navigation: {
                nextEl: '.next',
                prevEl: '.prev'
            },
            breakpoints: {
                425: {
                    autoHeight: true
                }
            },
            on: {
                init: function(){
                    var activeIndex = this.activeIndex;
                    var year = $(this.slides[activeIndex]).data('year');
                    $('.js-selected-year').text(year);
                },
                slideChange: function(){
                    var activeIndex = this.activeIndex;
                    var year = $(this.slides[activeIndex]).data('year');
                    var curYear = $('.js-selected-year').text();
                    if(year!=curYear){
                        $('.js-selected-year').hide()
                            .text(year).fadeTo("slow", 0.1);
                    }
                    if(year!=""){
                        $('.js-slideto-year[data-year="'+year+'"]').addClass('active').siblings().removeClass('active');
                    }
                    else $('.js-slideto-year').removeClass('active');
                }
            }
        });
    }

    //izimodal
    if($('.popup').length>0){
        var popup =  $('.popup').iziModal({
            radius: 0,
            width: 780,
            overlayColor: 'rgba(255, 255, 255, 0.7)',
            transitionIn: 'comingIn',
            transitionOut: 'comingOut',
            transitionInOverlay: 'fadeIn',
            transitionOutOverlay: 'fadeOut'
        });
    }

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

    // портфолио по группам/по городам
    var portfolioCategory = $('.js-show-category.active').data('category');
    $('#c-'+portfolioCategory).show();

    $('.js-show-category').click(function(){
        $(this).addClass('active')
            .siblings().removeClass('active');
        var portfolioCategory = $(this).data('category');
        $('#c-'+portfolioCategory).fadeIn()
            .siblings().hide();
    });

    $('.js-slideto-year').click(function(){
        var year = $(this).data('year');
        var yearSlide = $('.about__item[data-year1="'+year+'"]');
        var slideIndex = $('.about__item').index(yearSlide);
        about.slideTo(slideIndex);

    });
});
//menu
$(window).on('load resize', function(){
    if (!window.matchMedia('(max-width: 1080px)').matches) {
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