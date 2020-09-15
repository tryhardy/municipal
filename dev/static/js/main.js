// Выбор активной вкладки в хедере
(function () {
    const url = window.location.href;
    const navLinks = document.querySelectorAll(".header-menu__item");
    navLinks.forEach(item => {
        const link = item.querySelector('.header-menu__link');
        if (url === link.href) {
            item.classList.add('header-menu__item--active');
        }
    });
})();

// Mobile Header
const headerBurger = document.querySelector('.header-menu-mobile');
const closeHeaderNav = document.querySelector('.header-nav-close-mobile');
const headerNav = document.querySelector('nav.header-nav');
headerBurger.addEventListener('click', () => {
    headerNav.classList.add('header-nav-mobile--shown')
})

closeHeaderNav.addEventListener('click', () => {
    headerNav.classList.remove('header-nav-mobile--shown')
})

// Выбор фильтров на /catalog
const filterList = document.querySelectorAll('.filters-list .filter-item');
filterList.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('filter-item--active');
    })
})

// Переключение между категориями в /catalog-item
const catalogTabs = document.querySelectorAll('.catalog-tab');
const catalogBlocks = document.querySelectorAll('.drug-about-content');
catalogTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        let p = e.target.closest('.catalog-tab');
        for (let k = 0; k < catalogTabs.length; k++) {
            catalogTabs[k].classList.remove('catalog-tab--active');
        }
        p.classList.add('catalog-tab--active');
        const index = p.dataset.tab;
        catalogBlocks.forEach(block => {
            block.classList.remove('drug-about-content--shown');
            if (index == block.dataset.tab) {
                block.classList.add("drug-about-content--shown");
            }
        })
    })
})