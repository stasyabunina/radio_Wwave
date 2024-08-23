export default class PodcastController {
  constructor(element) {
    this.element = element;

    this.init();
  }

  bindToDOM() {
    this.btns = this.element.querySelectorAll('.podcast__btn');
    this.items = this.element.querySelectorAll('.podcasts__item');
    this.btnMore = this.element.querySelector('.podcasts__btn');
  }

  init() {
    this.bindToDOM();
    this.addEventListeners();
  }

  addEventListeners() {
    this.btns.forEach((btn) => {
      btn.addEventListener('click', () => {
        btn.classList.toggle('podcast__btn--toggle');
      });
    });

    this.btnMore.addEventListener('click', () => {
      this.items.forEach((item) => {
        item.classList.add('podcasts__item--visible');
        this.btnMore.classList.add('podcasts__btn--hidden');
      });
    });
  }
}
