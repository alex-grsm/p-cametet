import Swiper, { Keyboard, Autoplay } from 'swiper';
Swiper.use([Keyboard, Autoplay]);

const brandSwiper = () => {

  const swiperBrand = new Swiper('.brand__swiper', {
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
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  });

};

export default brandSwiper;
