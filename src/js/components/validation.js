import { validateForms } from '../functions/validate-forms';

const rules = [
  {
    ruleSelector: '.input-name',
    rules: [
      {
        rule: 'minLength',
        value: 3
      },
      {
        rule: 'maxLength',
        value: 30,
      },
      {
        rule: 'required',
        errorMessage: 'Field is required'
      },
    ]
  },
  {
    ruleSelector: '.input-email',
    rules: [
      {
        rule: 'required',
        errorMessage: 'Email is required',
      },
      {
        rule: 'email',
        errorMessage: 'Email is invalid!',
      }
    ]
  },
  {
    ruleSelector: '.input-company',
    rules: [
      {
        rule: 'minLength',
        value: 3
      },
      {
        rule: 'maxLength',
        value: 30,
      },
      {
        rule: 'required',
        errorMessage: 'Field is required'
      }
    ]
  },
  {
    ruleSelector: '.input-message',
    rules: [
      {
        rule: 'required',
        errorMessage: 'Field is required'
      }
    ]
  },
];

const rulesModal = [
  {
    ruleSelector: '.input-name',
    rules: [
      {
        rule: 'minLength',
        value: 3
      },
      {
        rule: 'maxLength',
        value: 30,
      },
      {
        rule: 'required',
        errorMessage: 'Field is required'
      },
    ]
  },
  {
    ruleSelector: '.input-email',
    rules: [
      {
        rule: 'required',
        errorMessage: 'Email is required',
      },
      {
        rule: 'email',
        errorMessage: 'Email is invalid!',
      }
    ]
  },
  {
    ruleSelector: '.input-company',
    rules: [
      {
        rule: 'minLength',
        value: 3
      },
      {
        rule: 'maxLength',
        value: 30,
      },
      {
        rule: 'required',
        errorMessage: 'Field is required'
      }
    ]
  },
  {
    ruleSelector: '.input-message',
    rules: [
      {
        rule: 'required',
        errorMessage: 'Field is required'
      }
    ]
  },
  {
    ruleSelector: '.input-tel',
    tel: true,
    telError: 'Введіть правильний телефон',
    rules: [
      {
        rule: 'required',
        errorMessage: 'Заповніть телефон'
      }
    ]
  },
];


const afterForm = () => {
  // console.log('Произошла отправка, тут можно писать любые действия');
  // window.location.replace("url");
};

if (document.querySelector('#contact__form')) {
  validateForms('#contact__form', rules, afterForm);
}
if (document.querySelector('#contact__form--modal')) {
  validateForms('#contact__form--modal', rulesModal, afterForm);
}

// validateForms('#modal-callback form', rules2, afterForm);
