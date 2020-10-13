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

/*Всплывашка в разделе "Структура"*/
(function(){
    let links = $(".structure__link");
    let closeBtns = $(".structure__popup-close");
    let popup = $(".structure__popup");

    links.on("click", function(e){
        e.preventDefault();
        let $this = $(this);
        let id = $this.attr("data-id");
       if($(".structure__popup-id-"+ id).hasClass("active")) {
        $(".structure__popup-id-"+ id).removeClass("active");
       } else {
        $(".structure__popup-id-"+ id).addClass("active");
       }
    });

    closeBtns.on("click", function(e){
        let $this = $(this);
        let parent = $this.closest(".structure__popup");
        if(parent.hasClass("active")) {
            parent.removeClass("active");
        }
    });

    popup.on("click", function(e){
        let $this = $(this);
        if(e.target === $this[0]) {
            $this.removeClass("active");
        }
    });

    $('body').keydown(function(e) {
        if (e.keyCode == 27) {
            popup.each(function() {
                if($(this).hasClass("active")){
                    $(this).removeClass("active");
                }
            });
        }
    });

})();

/*Всплывашка в разделе "Трансляции"*/
(function(){
    let links = $(".translation__info");
    let closeBtns = $(".translation__popup-close");
    let popup = $(".translation__popup");

    $(".translation__info").on("click", function(e){
        let $this = $(this);
        if($(".translation__popup").hasClass("active")) {
            $(".translation__popup").removeClass("active");
        } else {
            $(".translation__popup").addClass("active");
        }
    });

    closeBtns.on("click", function(e){
        let $this = $(this);
        let parent = $this.closest(".translation__popup");
        if(parent.hasClass("active")) {
            parent.removeClass("active");
        }
    });

    popup.on("click", function(e){
        let $this = $(this);
        if(e.target === $this[0]) {
            $this.removeClass("active");
        }
    });

    $('body').keydown(function(e) {
        if (e.keyCode == 27) {
            popup.each(function() {
                if($(this).hasClass("active")){
                    $(this).removeClass("active");
                }
            });
        }
    });

})();


/*Форма обратной связи*/
(function () {
    let radio = $('input[type=radio]');

    radio.on("click", function(){
        radio.each(function(){
            let $this = $(this);
            let parent = $this.closest("label.radio");

                if($this.is(':checked')){
                    parent.addClass("active");
                } else {
                    parent.removeClass("active");
                }
        });
    });

    $(document).on('input', 'textarea[name=form__message]', function () {
        let symbols = $(this).val().length;
        $("#symbol-counter").text(symbols);
    });

    $("#files").on("change", function(){
        let files = $(this)[0].files;

        if(files.length == 1) {
            $("#file-name").text(files[0].name);
        } else {
            $("#file-name").text("Выбрано файлов: "+ files.length);
        }
    });
})();

/*Выравниваем блоки (Главное) в новостях по высоте*/
(function () {
    let pics = $('.news-pics__important');
    if(pics) {
        let itemsCount = $('.news-pics__important .news-pics__item').length;
        let height = pics[0].scrollHeight - (itemsCount-1)*20;
        let itemHeight = height/itemsCount;
        $('.news-pics__important .news-pics__item').each(function(e){
            $(this).css('height', itemHeight+'px');
        });
    }
})();






