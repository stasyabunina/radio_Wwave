import Burger from './Burger';
import Header from './Header';
import PodcastController from './PodcastController';
import Tabs from './Tabs';
import Modal from './Modal';
import FormValidator from './FormValidator';

export default class App {
  constructor(element) {
    this.element = element;
  }

  bindToDOM() {
    this.accordion = this.element.querySelector('.accordion-container');
    this.guestsAccordion = this.element.querySelector('.guests__ac-container');
    this.header = this.element.querySelector('.header');
    this.burger = this.header.querySelector('.burger');
    this.burgerMenu = this.header.querySelector('.header__nav-wrapper');
    this.podcastsSection = this.element.querySelector('.podcasts');
    this.playlistsSwiper = this.element.querySelector('.playlists__swiper');
    this.aboutSwiper = this.element.querySelector('.about__swiper');
    this.guestsSection = this.element.querySelector('.guests');
    this.modal = this.element.querySelector('.pop-up');
    this.modalOpenBtn = this.header.querySelector('.header__desktop-btn');
    this.aboutForm = this.element.querySelector('.about__form');
    this.broadcastSelect = this.element.querySelector('.broadcasts__select');
  }

  init() {
    this.bindToDOM();

    new Accordion(this.accordion, {
      duration: 400,
    });
    new Accordion(this.guestsAccordion, {
      duration: 400,
      openOnInit: [0],
    });

    new Burger(this.burger, this.burgerMenu);

    new Header(this.header);

    new PodcastController(this.podcastsSection);

    new Swiper(this.playlistsSwiper, {
      slidesPerView: 'auto',
      grabCursor: true,
      spaceBetween: 16,
    });
    new Swiper(this.aboutSwiper, {
      slidesPerView: 4,
      grabCursor: true,
      spaceBetween: 30,
      breakpoints: {
        1281: {
          slidesPerView: 4
        },
        577: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        320: {
          slidesPerView: 'auto',
          spaceBetween: 20,
        },
      },
      navigation: {
        nextEl: '.about__slider-btn--next',
        prevEl: '.about__slider-btn--prev',
      },
      a11y: {
        prevSlideMessage: 'К предыдущему слайду',
        nextSlideMessage: 'К следующему слайду',
      },
    });

    new Tabs(this.guestsSection);

    new Modal(this.modal, this.modalOpenBtn);

    this.formValidator();

    new Choices(this.broadcastSelect, {
      searchEnabled: false,
      itemSelectText: '',
      allowHTML: true,
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
        id: '#name', rules: [
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
        ]
      },
      {
        id: '#email', rules: [
          {
            rule: 'required',
            errorMessage: 'Вы не ввели e-mail',
          },
          {
            rule: 'email',
            errorMessage: 'Пожалуйста, введите действительный e-mail',
          },
        ]
      },
      {
        id: '#agree', rules: [
          {
            rule: 'required',
            errorMessage: 'Обязательное согласие',
          },
        ]
      },
    ];

    const onSuccess = () => {
      this.aboutForm.reset();
    };

    new FormValidator(this.aboutForm, options, fields, onSuccess)
  }
}
