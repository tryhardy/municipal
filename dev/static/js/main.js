/*нажатие на кнопку поиска
(function () {
    let searchBtn = $('.search__button');
    $('.search').on('submit', function(e){
        e.preventDefault();
        
        if(searchBtn.attr('data-status') == 'open') {
            $('.search').addClass('active');
            searchBtn.attr('data-status', 'find');
        } else if (searchBtn.attr('data-status') == 'find') {
            let formData = $(this).serialize();
            window.location.href = '/search/?'+formData;
        }
    });

    $('body').keydown(function(e) {
        if (e.keyCode == 27 && $('.search').hasClass('active')) {
            $('.search').removeClass('active');
            searchBtn.attr('data-status', 'open');
        }
    });

    $('body').on('click', function(e){
        if(e.target === $('.header__search') || e.target === $('.search__input')) {
            console.log(e.target);
        }
    });
})();*/

/*нажатие на кнопку поиска*/
(function () {
    let searchBtn = $('.search__button');
    searchBtn.on('click', function(e){
        e.preventDefault();       
        if(searchBtn.attr('data-status') == 'open') {
            $('.search').addClass('active');
            searchBtn.attr('data-status', 'close');
        } else if (searchBtn.attr('data-status') == 'close') {
            let formData = $(this).serialize();
            searchBtn.attr('data-status', 'open');
        }
    });

    $('body').keydown(function(e) {
        if (e.keyCode == 27 && $('.search').hasClass('active')) {
            $('.search').removeClass('active');
            searchBtn.attr('data-status', 'open');
        }
    });

    $('body').on('click', function(e){
        if(e.target == $('.header__search') || e.target == $('.search__input')) {
            console.log(e.target);
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

(function () {
    $('.news-slider__list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
    });
})();

(function () {
    $('.slides').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: $('.banners__arrows-prev'),
        nextArrow: $('.banners__arrows-next'),
        draggable: true
    });
})();

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