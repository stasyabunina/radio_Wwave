const aboutValidation = new JustValidate('.about__form', {
  successFieldCssClass: 'is-valid',
  errorFieldCssClass: 'is-invalid',
  errorLabelCssClass: 'is-label-invalid',
  errorLabelStyle: {
    color: '#D52B1E',
  },
});

aboutValidation
  .addField('#name', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели имя',
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Поле должно содержать минимум :value символов',
    },
    {
      rule: 'maxLength',
      value: 12,
      errorMessage: 'Поле должно содержать максимум :value символов',
    },
    {
      rule: 'customRegexp',
      value: '^[a-zA-Zа-яА-Я -]+$',
      errorMessage: 'Недопустимый формат',
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели e-mail',
    },
    {
      rule: 'email',
      errorMessage: 'Пожалуйста, введите действительный e-mail',
    },
  ])
  .addField('#agree', [
    {
      rule: 'required',
      errorMessage: 'Обязательное согласие',
    },
  ]);




const modalValidation = new JustValidate('.pop-up__form', {
  successFieldCssClass: 'is-valid',
  errorFieldCssClass: 'is-invalid',
  errorLabelCssClass: 'is-label-invalid',
  errorLabelStyle: {
    color: '#D52B1E',
  },
});

modalValidation
  .addField('#login', [
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
  ])
  .addField('#password', [
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
  ]);
