import Mmenu from '../../../node_modules/mmenu-js/src/mmenu';

const mobileMenu = () => {
  const button = document.querySelector('.burger-btn');
  const mMenu = new Mmenu('#mobmenu', {
    theme: 'white',
    offCanvas: {
      position: 'top',
    },
    navbar: {
      title: 'Menu',
    },
    navbars: [
      {
        position: 'top',
        content: [
          '<a class="mm-btn--close" aria-label="Close menu" href="#mm-8"><svg class="burger-btn burger-btn--inMmenu active" width="16" height="16" viewBox="0 0 40 26" xmlns="https://www.w3.org/2000/svg"><rect class="burger-btn--1" width="40" height="6" rx="3" ry="3" /><rect class="burger-btn--2" width="40" height="6" y="10" rx="3" ry="3" /><rect class="burger-btn--3" width="40" height="6" y="20" rx="3" ry="3" /></svg></a>',
        ],
      },
    ],
  });

  let spanLogo = document.createElement('span');
  spanLogo.classList.add('span-logo');
  spanLogo.innerHTML = `<img loading="lazy" src="/img/logo-white-mob.svg" class="image" width="40" height="40" alt="Cametet">`;

  document.querySelector('.mm-navbar__title').append(spanLogo);

  // button.addEventListener('click', () => {
  //   button.classList.toggle('active');
  // });
};

export default mobileMenu;
