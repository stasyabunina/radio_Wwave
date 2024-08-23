export default class Tabs {
  constructor(element) {
    this.element = element;

    this.init()
  }

  bindToDOM() {
    this.items = this.element.querySelectorAll('.guests__tab');
    this.btns = this.element.querySelectorAll('.guests__ac-item-btn');
  }

  init() {
    this.bindToDOM();
    this.addEventListeners();
  }

  addEventListeners() {
    this.btns.forEach((element) => {
      element.addEventListener('click', (e) => {
        const path = e.currentTarget.dataset.path;

        this.btns.forEach((btn) => {
          btn.classList.remove('guests__ac-item-btn--active')
        });
        e.currentTarget.classList.add('guests__ac-item-btn--active');

        this.items.forEach((item) => {
          item.classList.remove('guests__tab--active')
        });
        this.element.querySelector(`[data-target="${path}"]`).classList.add('guests__tab--active');

        this.scrollToContent(this, true);
      });
    });
  }

  scrollToContent(link, isMobile) {
    if (isMobile && this.getWindowWidth() > 576) {
      return;
    }

    const href = link.dataset.scroll;
    const scrollTarget = document.getElementById(href);
    const elementPosition = scrollTarget.getBoundingClientRect().top;

    window.scrollBy({
      top: elementPosition,
      behavior: 'smooth'
    });
  }

  getWindowWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.body.clientWidth,
      document.documentElement.clientWidth
    );
  }
}
