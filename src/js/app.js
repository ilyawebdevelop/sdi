import * as flsFunctions from "./modules/functions.js";
import "./modules/jquery-3.7.1.min.js";

import "./modules/bootstrap.bundle.min.js";
import { Fancybox } from "./modules/fancybox.esm.js";
import './components.js';

flsFunctions.isWebp();

Fancybox.bind("[data-fancybox]", {
  closeButton: false,
});

// Import swiper
import Swiper, { Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar]);

// Инициализация слайдера complectSlider
document.querySelectorAll('.complectSlider').forEach(n => {
  const mySwiperComplect = new Swiper(n, {
    slidesPerView: 1,
    spaceBetween: 13,
    speed: 600,
    watchSlidesProgress: true,
    autoplay: true,
    // autoHeight: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: n.querySelector('.complectSlider .navArrowNext'),
      prevEl: n.querySelector('.complectSlider .navArrowPrev'),
    },
    pagination: {
      el: n.querySelector('.complectSlider .swiper-pagination'),
      clickable: true,
      type: 'bullets',
    },
  });
});


// Инициализация слайдера partnersSlider
const partnersSlider = document.querySelector('.partnersSlider');
var mySwiperPartners = new Swiper(partnersSlider, {
  slidesPerView: 'auto',
  speed: 800,
  spaceBetween: 70,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: document.querySelector('.partnersSliderW .navArrowNext'),
    prevEl: document.querySelector('.partnersSliderW .navArrowPrev'),
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
    1400: {
      slidesPerView: 'auto',
    },
  },
});

// Инициализация слайдера productSlider
document.querySelectorAll('.productSlider').forEach(n => {
  const mySwiperProduct = new Swiper(n, {
    slidesPerView: 4,
    spaceBetween: 24,
    speed: 600,
    navigation: {
      prevEl: n?.closest('.productSliderW').querySelector('.navArrowPrev'),
      nextEl: n?.closest('.productSliderW').querySelector('.navArrowNext'),
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
});

// Инициализация слайдера productPageSlider
document.querySelectorAll('.productPageSlider').forEach(n => {
  const mySwiperProductPage = new Swiper(n, {
    slidesPerView: 1,
    spaceBetween: 13,
    speed: 600,
    freeMode: false,
    watchSlidesProgress: true,
    mousewheel: false,
    navigation: {
      prevEl: n?.closest('.productSliderPageW').querySelector('.navArrowPrev'),
      nextEl: n?.closest('.productSliderPageW').querySelector('.navArrowNext'),
    },
    thumbs: { // указываем на превью слайдер
      swiper: {
        el: document.querySelector('.productThumbSlider'),
        slidesPerView: 5,
        spaceBetween: 14,
        speed: 600,
        watchSlidesProgress: true,
        breakpoints: {
          0: {
            spaceBetween: 5,
          },
          1200: {
            spaceBetween: 15,
          },
        },
      }
    },
  });
});

// Инициализация слайдера teamSlider
document.querySelectorAll('.teamSlider').forEach(n => {
  const mySwiperProduct = new Swiper(n, {
    slidesPerView: 4,
    spaceBetween: 24,
    speed: 600,
    navigation: {
      prevEl: n?.closest('.teamSliderW').querySelector('.navArrowPrev'),
      nextEl: n?.closest('.teamSliderW').querySelector('.navArrowNext'),
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
});

// Инициализация слайдера galSlider
const galSlider = document.querySelector('.galSlider');
var mySwiperGal = new Swiper(galSlider, {
  slidesPerView: 2,
  speed: 800,
  spaceBetween: 24,
  navigation: {
    nextEl: document.querySelector('.galSliderW .navArrowNext'),
    prevEl: document.querySelector('.galSliderW .navArrowPrev'),
  },
  scrollbar: {
    el: document.querySelector('.galSliderW .swiper-scrollbar'),
    draggable: true,
  },
});

jQuery('.bapf_head').click(function () {
  jQuery(this).toggleClass('active');
  jQuery(this).toggleClass('hidden');
  jQuery(this).siblings('.bapf_body').slideToggle();
  // jQuery(this).siblings('.bapf_body').toggleClass('hidden');
});

// filter hide not first element 
jQuery('.shopFilter .berocket_single_filter_widget:not(:first) .bapf_head').addClass('hidden');
jQuery('.shopFilter .berocket_single_filter_widget:not(:first) .bapf_body').addClass('hidden');

// Burger
const btnMenu = document.querySelector('#toggle');
const menu = document.querySelector('.headerNav');
const bodyEl = document.querySelector('body');
const btnClose = document.querySelector('.headerNavCloseBtn');
const mobMenuOverlay = document.querySelector('.mob-menu-overlay');

const toggleMenu = function () {
  menu.classList.toggle('active');
}
const toggleBurger = function () {
  btnMenu.classList.toggle('active');
}
const bodyOverflow = function () {
  bodyEl.classList.toggle('hidden');
}
const overlayToggle = function () {
  mobMenuOverlay.classList.toggle('active');
}
const menuClose = function () {
  toggleBurger();
  bodyOverflow();
  toggleMenu();
  overlayToggle();
}

btnMenu?.addEventListener('click', function (e) {
  e.stopPropagation();
  toggleMenu();
  toggleBurger();
  bodyOverflow();
  overlayToggle();
});

btnClose?.addEventListener('click', function (e) {
  menuClose();
});

document.addEventListener('click', e => {
  let target = e.target;
  let its_nav = target == menu || menu.contains(target);
  let overlay_is_active = mobMenuOverlay.classList.contains('active');

  if (!its_nav && overlay_is_active) {
    toggleMenu();
    toggleBurger();
    bodyOverflow();
    overlayToggle();
  }
});

