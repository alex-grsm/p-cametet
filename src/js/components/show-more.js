const showMoreBtn = () => {
  try {
    const showMore = document.querySelector('#more-products');
    const productsLength = document.querySelectorAll('.products-catalog__item').length;
    let items = 12;

    showMore.addEventListener('click', () => {
      items += 4;
      const array = Array.from(document.querySelector('.products-catalog__inner').children);
      const visItems = array.slice(0, items);

      visItems.forEach(el => el.classList.add('is-visible'));
      if (visItems.length === productsLength) {
        showMore.style.display = 'none';
      }
    });
  } catch (error) {}
};

export default showMoreBtn;
