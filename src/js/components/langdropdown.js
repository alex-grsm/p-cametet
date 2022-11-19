import $ from 'jquery';

const langDropDown = () => {
  const selected = $('.selected');
  const dropdown = $('.dropdown-list');
  const optionList = $('.dropdown-list li');

  selected.on('click', function () {
    dropdown.toggleClass('active');
    selected.toggleClass('active');

    if (dropdown.hasClass('active') && selected.hasClass('active')) {
      optionList.on('click', function () {
        if (optionList.hasClass('active')) {
          $(this).siblings().removeClass('active');
        } else {
          $(this).addClass('active');
        }
        dropdown.removeClass('active');
        selected.removeClass('active');
        selected.children('span').html($(this).html());
      });
    }
  });

  document.addEventListener('keyup', function (e) {
    if (e.keyCode == 27) {
      // escape key maps to keycode `27`
      selected.trigger('click');
    }
  });

};

export default langDropDown;
