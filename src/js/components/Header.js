import Search from './Search';

export default class Header {
  constructor(element) {
    this.element = element;

    this.init()
  }

  bindToDOM() {
    this.primaryBtn = this.element.querySelectorAll('.primary-broadcast__button');
    this.secondaryBtn = this.element.querySelectorAll('.secondary-broadcast__button');
    this.broadcastBtn = this.element.querySelectorAll('.header__broadcast-btn');
    this.search = this.element.querySelector('.search');
  }

  init() {
    this.bindToDOM();
    this.addEventListeners();

    new Search(this.search);
  }

  addEventListeners() {
    this.secondaryBtn.forEach((secBtn) => {
      secBtn.addEventListener('click', () => {
        secBtn.classList.toggle('broadcast-btn--toggle');
      });
    });

    this.primaryBtn.forEach((priBtn) => {
      priBtn.addEventListener('click', () => {
        priBtn.classList.toggle('broadcast-btn--toggle');
      });
    });

    this.broadcastBtn.forEach((broBtn) => {
      broBtn.addEventListener('click', () => {
        broBtn.classList.toggle('broadcast-btn--toggle');
      });
    });
  }
}
