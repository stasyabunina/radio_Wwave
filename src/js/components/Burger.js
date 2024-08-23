export default class Burger {
  constructor(element, menu) {
    this.element = element;
    this.menu = menu;

    this.init()
  }

  bindToDOM() {
    this.burgerClose = this.menu.querySelector('.nav-top__close');
    this.menuLinks = this.menu.querySelectorAll('.nav-top__link');
  }

  init() {
    this.bindToDOM();
    this.addEventListeners();
  }

  addEventListeners() {
    this.element.addEventListener('click', () => {
      this.menu.classList.toggle('header__nav-wrapper--active');
      document.body.classList.toggle('stop-scroll');
    });

    this.menuLinks.forEach((el) => {
      el.addEventListener('click', () => {
        this.menu.classList.remove('header__nav-wrapper--active');
        document.body.classList.remove('stop-scroll');
      })
    });

    this.burgerClose.addEventListener('click', () => {
      this.menu.classList.remove('header__nav-wrapper--active');
      document.body.classList.remove('stop-scroll');
    });
  }
}
