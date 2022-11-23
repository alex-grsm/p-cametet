const breadCrumbs = () => {
  if (window.matchMedia('(max-width: 575.98px)').matches) {
    const breadcrumbs = document.querySelector('#breadcrumbs'),
      breadCrumbsBtn = document.querySelector('.bread-home__btn'),
      breadCrumbsLi = document.querySelectorAll('.breadcrumbs li:not(:first-child)');

    breadCrumbsBtn.addEventListener('click', () => {
      breadcrumbs.classList.toggle('is-show');

      breadCrumbsLi.forEach(li => {
        li.classList.toggle('fadeIn');
      });
    });
  }
};

export default breadCrumbs;
