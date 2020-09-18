/*нажатие на кнопку поиска*/
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