const search = () => {
  const boxSearch = document.querySelector('.search-box'),
    btnSearch = document.querySelector('.btn-search'),
    inputSearch = document.querySelector('.input-search'),
    // closeSearch = document.querySelector('.search-close'),
    resultSearch = document.querySelector('.search-result');

  const toggleSearch = () => {
    boxSearch.classList.toggle('active');
    if (boxSearch.classList.contains('active')) {
      inputSearch.focus();
    } else {
      inputSearch.blur();
      resultSearch.classList.remove('active');
    }
  };

  btnSearch.addEventListener('click', () => {
    toggleSearch();
  });

  document.addEventListener('click', e => {
    let target = e.target;
    let itsBoxSearch = target == boxSearch || boxSearch.contains(target);
    let boxSearchIsActive = boxSearch.classList.contains('active');

    if (!itsBoxSearch && boxSearchIsActive) {
      toggleSearch();
    }
  });

  document.addEventListener('keyup', function (e) {
    if (e.keyCode == 27) {
      // escape key maps to keycode `27`
      toggleSearch();
    }
  });

  inputSearch.addEventListener('input', function () {
    inputSearch.value.length > 2 ? resultSearch.classList.add('active') : resultSearch.classList.remove('active');
  });

  window.addEventListener('scroll', (e) => {
    // console.log(document.documentElement.scrollTop);
    if (document.documentElement.scrollTop > 550) {
      boxSearch.classList.remove('active');
      inputSearch.blur();
      resultSearch.classList.remove('active');
    }
  });
};

export default search;
