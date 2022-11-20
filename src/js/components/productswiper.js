import Swiper, { Thumbs, EffectCreative, Keyboard } from 'swiper';
Swiper.use([Thumbs, EffectCreative, Keyboard]);

const productSwiper = () => {
  const productSwiperThumbs = new Swiper('.product-card__swiperThumbs', {
    loop: true,
    grabCursor: true,
    spaceBetween: 15,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    speed: 500,
  });
  const productSwiper = new Swiper('.product-card__swiper', {
    loop: true,
    thumbs: {
      swiper: productSwiperThumbs,
    },
    grabCursor: true,
    speed: 500,
    effect: 'creative',
    creativeEffect: {
      prev: {
        shadow: true,
        origin: 'left center',
        translate: ['-5%', 0, -200],
        rotate: [0, 50, 0],
      },
      next: {
        origin: 'right center',
        translate: ['5%', 0, -200],
        rotate: [0, -50, 0],
      },
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });
};

export default productSwiper;
