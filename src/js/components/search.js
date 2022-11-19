const search = () => {
  const boxSearch = document.querySelector('.search-box'),
    btnSearch = document.querySelector('.btn-search'),
    inputSearch = document.querySelector('.input-search'),
    resultSearch = document.querySelector('.search-result'),
    pageBody = document.querySelector('.page__body');

  const toggleSearch = () => {
    boxSearch.classList.toggle('active');
    if (boxSearch.classList.contains('active')) {
      inputSearch.focus();
    } else {
      inputSearch.blur();
      inputSearch.value = '';
      resultSearch.classList.remove('active');
      pageBody.classList.remove('openSearchResult');
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
      boxSearch.classList.remove('active');
      inputSearch.blur();
      resultSearch.classList.remove('active');
      pageBody.classList.remove('openSearchResult');
    }
  });

  inputSearch.addEventListener('input', function () {
    if (inputSearch.value.length > 2) {
      resultSearch.classList.add('active');
      pageBody.classList.add('openSearchResult');
    } else {
      resultSearch.classList.remove('active');
      pageBody.classList.remove('openSearchResult');
    }
  });

  window.addEventListener('scroll', e => {
    // console.log(document.documentElement.scrollTop);
    if (document.documentElement.scrollTop > 550) {
      boxSearch.classList.remove('active');
      inputSearch.blur();
      resultSearch.classList.remove('active');
      pageBody.classList.remove('openSearchResult');
    }
  });
};

export default search;
