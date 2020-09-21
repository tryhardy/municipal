/*нажатие на кнопку поиска*/
(function () {
    let searchBtn = $('.search__button');

    searchBtn.on('click', function(e){
        e.preventDefault();       
        if(searchBtn.attr('data-status') == 'open') {
            $('.search').addClass('active');
            searchBtn.attr('data-status', 'close');
        } else if(searchBtn.attr('data-status') == 'close') {
            searchBtn.attr('data-status', 'open');
            $('.search').removeClass('active');
        }
    });

    $('.search__find').on('click', function(e){
        e.preventDefault();       
        if(searchBtn.attr('data-status') == 'open') {
            $('.search').addClass('active');
            searchBtn.attr('data-status', 'close');
        } else if(searchBtn.attr('data-status') == 'close') {
            searchBtn.attr('data-status', 'open');
            $('.search').removeClass('active');
        }
    });

    $('body').keydown(function(e) {
        if (e.keyCode == 27 && $('.search').hasClass('active')) {
            $('.search').removeClass('active');
            searchBtn.attr('data-status', 'open');
        }
    });

    $('body').on('click', function(e){
        $('.search').each(function(){
            if(!$('.search__input input').is(e.target) && searchBtn.attr('data-status') == 'close' && !$('.search__button svg').is(e.target)) {
                searchBtn.attr('data-status', 'open');
                $('.search').removeClass('active');
            }
        })
    });
})();

(function () {
    $('.menu-mobile').on('click', function(){
        if(!$('.header__nav').hasClass('active')) {
            $('.header__nav').addClass('active');
        } 
    });

    $('.menu-mobile__close-m').on('click', function(){
        if($('.header__nav').hasClass('active')) {
            $('.header__nav').removeClass('active');
        } 
    });
})();

/*Работа мобильного меню*/
(function () {
    $('.menu__submenu-icon').on('click', function(){
        let parent = $(this).closest(".menu__item");
        let submenu = parent.find(".menu__submenu-list");
        let height = submenu.prop('scrollHeight');
        console.log(parent, submenu, height)
        if(parent.hasClass("menu__item--active")){
            parent.removeClass("menu__item--active");
            submenu.css('height', '0px');
            $(this).css('transform', 'rotate(90deg)');
        } else {
            parent.addClass("menu__item--active");
            submenu.css('height', height);
            $(this).css('transform', 'rotate(0deg)');
        }
    });

})();

/*Подписка на новости*/
(function () {
    $("#sendmail").on('click', function(e){
        e.preventDefault();
        $('.popup').addClass('active');
    });

    $('.popup__close').on('click', function(e){
        e.preventDefault();
        $('.popup').removeClass('active');
    });

    $('.overlay').on('click', function(e){
        e.preventDefault();
        $('.popup').removeClass('active');
    });

    $('body').keydown(function(e) {
        if (e.keyCode == 27 && $('.popup').hasClass('active')) {
            $('.popup').removeClass('active');
        }
    });
})();

/*Слайдер новостей на главной*/
(function () {
    $('.news-slider__list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
    });
})();

/*Слайдер баннеров на главной*/
(function () {
    $('.slides').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: $('.banners__arrows-prev'),
        nextArrow: $('.banners__arrows-next'),
        draggable: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
            {
              breakpoint: 676,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
          ]
    });
})();

/*Слайдер в деталке новостей*/
(function () {
    $('.news-detail__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: $('.buttons__prev'),
        nextArrow: $('.buttons__next'),
        draggable: true,
        responsive: [
            {
                breakpoint: 720,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false,
                }
              },
          ]
    });
})();

/*Работа меню разделов(левое подменю)*/
(function () {
    $('.sidebar-menu__open-submenu').click(function(){
        let parent = $(this).parent(".sidebar-menu__item");
        let submenu = parent.children(".sidebar-menu__submenu");
        let height = submenu.prop('scrollHeight');

        if(parent.hasClass("sidebar-menu__item--active")){
            parent.removeClass("sidebar-menu__item--active");
            parent.children(".sidebar-menu__submenu").css('height', '0px');
            $(this).css('transform', 'rotate(45deg)');
        } else {
            parent.addClass("sidebar-menu__item--active");
            parent.children(".sidebar-menu__submenu").css('height', height);
            $(this).css('transform', 'rotate(90deg)');
        }
    })

})();

/*Работа меню разделов(левое подменю)*/
(function () {
    $(document).ready(function() {
        $('.fancybox').fancybox();
    });
})();

/*Выравниваем блоки (Главное) в новостях по высоте*/
(function () {
    if($('.news-pics__important')[0].scrollHeight) {
        let itemsCount = $('.news-pics__important .news-pics__item').length;
        let height = $('.news-pics__important')[0].scrollHeight - (itemsCount-1)*20;
        let itemHeight = height/itemsCount;
        $('.news-pics__important .news-pics__item').each(function(e){
            $(this).css('height', itemHeight+'px');
        });
    }
})();





