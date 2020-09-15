new Swiper('.promo-slider', {
    speed: 400,
    navigation: {
        prevEl: '.promo-slider-nav .swiper-btn-prev',
        nextEl: '.promo-slider-nav .swiper-btn-next'
    },
    pagination: {
        el: '.promo-swiper-pagination',
        clickable: true
    }
});

new Swiper('.last-news-slider', {
    speed: 400,
    spaceBetween: 30,
    slidesPerView: 2,
    navigation: {
        prevEl: '.last-news-block .prev-btn1',
        nextEl: '.last-news-block .next-btn1'
    },
})

new Swiper('.company-years-slider', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 2009) + '</span>';
        }
    },
})

new Swiper('.catalog-item-tabs-slider', {
    slidesPerView: 'auto',
    normalizeSlideIndex: false,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-btn-next',
        prevEl: '.swiper-btn-prev',
    },
})

new Swiper('.geo-slider', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
        el: '.geo-swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-btn-next',
        prevEl: '.swiper-btn-prev',
    },
})
