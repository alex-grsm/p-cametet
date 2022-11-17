import Swiper, { Keyboard, Autoplay, FreeMode } from 'swiper';
Swiper.use([Keyboard, Autoplay, FreeMode]);

const brandSwiper = () => {

  const swiperBrand = new Swiper('.brand__swiper', {
    grabCursor: true,
    speed: 5000,
    freeMode: true,
    slidesPerView: 5,
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
  });

};

export default brandSwiper;
