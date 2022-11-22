import Swiper, { Keyboard, Autoplay, FreeMode } from 'swiper';
Swiper.use([Keyboard, Autoplay, FreeMode]);

const brandSwiper = () => {

  const swiperBrand = new Swiper('.brand__swiper', {
    grabCursor: true,
    speed: 5000,
    freeMode: true,
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    autoplay: {
      delay: 0,
      disableOnInteraction: false
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      }
    }
  });

};

export default brandSwiper;
