import Burger from './Burger.js';
import Header from './Header.js';
import PodcastController from './PodcastController.js';
import Tabs from './Tabs.js';
import Modal from './Modal.js';
import FormValidator from './FormValidator.js';

export default class App {
  constructor(element) {
    this.element = element;
  }

  bindToDOM() {
    this.accordionEl = this.element.querySelector('.accordion-container');
    this.guestsAccordionEl = this.element.querySelector('.guests__ac-container');
    this.headerEl = this.element.querySelector('.header');
    this.burgerEl = this.headerEl.querySelector('.burger');
    this.burgerMenu = this.headerEl.querySelector('.header__nav-wrapper');
    this.podcastsSection = this.element.querySelector('.podcasts');
    this.playlistsSwiperEl = this.element.querySelector('.playlists__swiper');
    this.aboutSwiperEl = this.element.querySelector('.about__swiper');
    this.guestsSection = this.element.querySelector('.guests');
    this.modalEl = this.element.querySelector('.pop-up');
    this.modalOpenBtn = this.headerEl.querySelector('.header__desktop-btn');
    this.aboutForm = this.element.querySelector('.about__form');
    this.broadcastSelect = this.element.querySelector('.broadcasts__select');
  }

  init() {
    this.bindToDOM();

    this.accordion = new Accordion(this.accordionEl, {
      duration: 400,
    });
    this.guestsAccordion = new Accordion(this.guestsAccordionEl, {
      duration: 400,
      openOnInit: [0],
    });

    this.burger = new Burger(this.burgerEl, this.burgerMenu);

    this.header = new Header(this.headerEl);

    this.podcast = new PodcastController(this.podcastsSection);

    this.playlistsSwiper = new Swiper(this.playlistsSwiperEl, {
      slidesPerView: 'auto',
      grabCursor: true,
      spaceBetween: 16,
    });
    this.aboutSwiper = new Swiper(this.aboutSwiperEl, {
      slidesPerView: 4,
      grabCursor: true,
      spaceBetween: 30,
      breakpoints: {
        1281: {
          slidesPerView: 4,
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

    this.tabs = new Tabs(this.guestsSection);

    this.modal = new Modal(this.modalEl, this.modalOpenBtn);

    this.formValidator();

    this.choices = new Choices(this.broadcastSelect, {
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
          }
        ],
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
          }
        ],
      },
      {
        id: '#agree', rules: [
          {
            rule: 'required',
            errorMessage: 'Обязательное согласие',
          }
        ],
      }
    ];

    const onSuccess = () => {
      this.aboutForm.reset();
    };

    this.aboutValidator = new FormValidator(this.aboutForm, options, fields, onSuccess);
  }
}
