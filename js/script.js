document.addEventListener('click', function(event) {
    if (event.target.closest('.c-o-one')) {
        let catalog = document.querySelector('.catalog-two');
        catalog.classList.toggle('c-one')
    }
    if (event.target.closest('.catalog-two-item')) {
        let catalog = document.querySelector('.catalog-three');
        catalog.classList.toggle('catalog-two-active')
    }

    let city = document.querySelector('.city');
    if (event.target.closest('.city-open')) {
        city.classList.toggle('city-active')
    } else if (!event.target.closest('.pop-up-city') && city.closest('.city-active')) {
        city.classList.remove('city-new');
        city.classList.remove('city-active')
    }

    if (event.target.closest('.city-revers')) {
        city.classList.toggle('city-new');
    } else if (event.target.closest('.city-revers') && city.closest('.city-new')) {
        city.classList.remove('city-new');
    }

    let tel = document.querySelector('.tel')
    if (event.target.closest('.tel-open')) {
        tel.classList.toggle('tel-active')
    } else if (!event.target.closest('.pop-up-city') && tel.closest('.tel-active')) {
        tel.classList.remove('tel-new');
        tel.classList.remove('tel-active')
    }
    if (event.target.closest('.tel-thanks')) {
        tel.classList.toggle('tel-new')
    }else if (event.target.closest('.tel-open') && tel.closest('.tel-new')) {
        tel.classList.remove('tel-new');
        tel.classList.remove('tel-active')
    }

    let use = document.querySelector('.use')
    if (event.target.closest('.use-open')) {
        use.classList.toggle('use-active')
    } else if (!event.target.closest('.pop-up-city') && use.closest('.use-active')) {
        use.classList.remove('use-new');
        use.classList.remove('use-active')
    }
    if (event.target.closest('.use-btn')) {
        use.classList.toggle('use-new')
    } else if (!event.target.closest('.pop-up-city') && use.closest('.use-new')) {
        use.classList.remove('use-new');
        use.classList.remove('use-active')
    }

    if (event.target.closest('.reg-btn')) {
        use.classList.toggle('reg-new')
    } else if (!event.target.closest('.pop-up-city') && use.closest('.reg-new')) {
        use.classList.remove('reg-new');
        use.classList.remove('use-active')
    }
    let shop = document.querySelector('.shop');
    if (event.target.closest('.shop-open')) {
        shop.classList.toggle('shop-active');
    } else if (!event.target.closest('.shop')) {
        shop.classList.remove('shop-active');
    }

    let catalog = document.querySelector('.header-end-catalog');
    if (event.target.closest('.header-end-catalog-btn')) {
        let catalogBtn = document.querySelector('.header-end-catalog-btn');
        catalogBtn.classList.toggle('catalog-btn-active');
        catalog.classList.toggle('catalog-big-active');
    }
    if (event.target.closest('.header-end-link-search')) {
        let headerSearch = document.querySelector('.header-end-search');
        headerSearch.classList.toggle('header-end-search-active')
    }
    if (event.target.closest('.catalog-open')) {
        let menuCatalog = document.querySelector('.catlog-menu');
        menuCatalog.classList.toggle('catalog-active');
    }

    if (event.target.closest('.catalog-one-item') || event.target.closest('.catalog-two-open')) {
        let menuCatalog = document.querySelector('.catlog-menu');
        menuCatalog.classList.toggle('two-active');
    }
    if (event.target.closest('.catalog-two-item') || event.target.closest('.catalog-three-open')) {
        let menuCatalog = document.querySelector('.catlog-menu');
        menuCatalog.classList.toggle('three-active');
    }
    let searchItems = document.querySelector('.header-end-search-items');
    if (event.target.closest('.header-end-search-content')) {
        searchItems.classList.toggle('header-end-search-active')
    } else if (!event.target.closest('.header-end-search') && searchItems.closest('.header-end-search-active')) {
        searchItems.classList.remove('header-end-search-active')
    }
})
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})