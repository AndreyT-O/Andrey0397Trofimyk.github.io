$(() => {
    // translate menu header to sidebar
    $('.sidebar__footer').append($('.list').html());
    $('.sidebar__language').append($('.menu__language').html());
    $('.sidebar__tel').append($('.menu__tel').html());
    // Method click to burger menu
    $('.menu__burger').click(() => {
        $('.menu__burger').toggleClass('active');
        $('.menu__sidebar').toggleClass('active');
    });
    // See height windows
    window.scrollY != 0?
        $('.header__nav').addClass('scroll-down').parent()
        .find('.header__button-up').addClass('scroll-up'):
        $('.header__nav').removeClass('scroll-down').parent()
        .find('.header__button-up').removeClass('scroll-up');
    // Methods scroll down 
    $(window).scroll((e) => {
        window.scrollY != 0?
        $('.header__nav').addClass('scroll-down').parent().find('.header__button-up').addClass('scroll-up'):
        $('.header__nav').removeClass('scroll-down').parent().find('.header__button-up').removeClass('scroll-up');
    });
    // Input mask
    $('#tel').inputmask("+38 (999) 999-99-99");
    // Method click on arrows
    $('.products__arrows').click((e) => {
        // $('.info__image').not($(`.info__image-${e.target.id}`)).removeClass('read-info');
        $(`.info__image-${e.target.id}`).toggleClass('read-info');
    });
    // Method click on images products
    $('.info__image').click(function() {
        // $('.info__image').not($(this)).removeClass('read-info');
        $(this).toggleClass('read-info');
    });
    // Method click on buttons
    $('.btn').click(function() {
        let sectionTo = $(this).find("a").attr("href");
        $('html, body').animate({
          scrollTop: $(sectionTo).offset().top - 100
        }, 1100);
    });
    // Method click on button to scroll up
    $('.header__button-up').click(() => {
        $('body,html').animate({scrollTop:0},700);
    })
    // Method change language
    function checkLanguage(className) {
        $('.menu__language span').removeClass('active');
        $('.sidebar__language span').removeClass('active');
        $(`.${className}`).addClass('active');
    }
    $('.menu__language,.sidebar__language').click((e) => {
        checkLanguage(e.target.className);
    });
    // Swiper
    let mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        slidesPerView: 'auto',
        spaceBetween: -10,
        loop:true,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            0: {
				spaceBetween: -20
            },
            620: {
				spaceBetween: -10
            }
        }
    });

    AOS.init();
})