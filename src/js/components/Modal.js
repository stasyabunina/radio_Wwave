import FormValidator from './FormValidator';

export default class Modal {
  constructor(element, openBtn) {
    this.element = element;
    this.openPopUp = openBtn;

    this.init()
  }

  bindToDOM() {
    this.closePopUp = this.element.querySelector('.pop-up__close-btn');
    this.wrapper = this.element.querySelector('.pop-up__wrapper');
    this.form = this.element.querySelector('.pop-up__form')
  }

  init() {
    this.bindToDOM();
    this.addEventListeners();
    this.formValidator();
  }

  addEventListeners() {
    this.openPopUp.addEventListener('click', () => {
      this.element.classList.toggle('pop-up--visible');
      this.wrapper.classList.toggle('pop-up__wrapper--visible');
      document.body.classList.toggle('stop-scroll');
    });

    this.closePopUp.addEventListener('click', () => {
      this.element.classList.remove('pop-up--visible');
      this.wrapper.classList.remove('pop-up__wrapper--visible');
      document.body.classList.remove('stop-scroll')
    });
  }

  formValidator() {
    const options = {
      successFieldCssClass: 'is-valid',
      errorFieldCssClass: 'is-invalid',
      errorLabelCssClass: 'is-label-invalid',
      errorLabelStyle: {
        color: '#D52B1E',
      },
    };

    const fields = [
      {
        id: '#login', rules: [
          {
            rule: 'required',
            errorMessage: 'Вы не ввели логин',
          },
          {
            rule: 'minLength',
            value: 2,
            errorMessage: 'Поле должно содержать минимум :value символов',
          },
          {
            rule: 'maxLength',
            value: 30,
            errorMessage: 'Поле должно содержать максимум :value символов',
          },
        ]
      },
      {
        id: '#password', rules: [
          {
            rule: 'required',
            errorMessage: 'Вы не ввели пароль',
          },
          {
            rule: 'minLength',
            value: 5,
            errorMessage: 'Пароль должен содержать минимум :value символов',
          },
          {
            rule: 'maxLength',
            value: 30,
            errorMessage: 'Пароль должен содержать максимум :value символов',
          },
          {
            rule: 'password',
            errorMessage: 'Пароль должен содержать не меньше одной буквы или цифры',
          },
        ]
      },
    ];

    const onSuccess = () => {
      this.form.reset();
    };

    new FormValidator(this.form, options, fields, onSuccess)
  }
}
