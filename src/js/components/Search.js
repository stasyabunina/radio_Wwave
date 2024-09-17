export default class Search {
  constructor(element) {
    this.element = element;

    this.init();
  }

  bindToDOM() {
    this.openSearch = this.element.querySelector('.search__btn');
    this.form = this.element.querySelector('.search__form');
  }

  init() {
    this.bindToDOM();
    this.addEventListeners();
  }

  addEventListeners() {
    this.openSearch.addEventListener('click', () => {
      this.form.classList.add('search__form--active');
      this.openSearch.classList.add('search__btn--active');
    });

    document.addEventListener('click', (e) => {
      let target = e.target;
      if (!target.closest('.search__form') && !target.closest('.search__btn')) {
        this.form.classList.remove('search__form--active');
        this.openSearch.classList.remove('search__btn--active');
      }
    });
  }
}
