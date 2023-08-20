let tabsBtns = document.querySelectorAll('.guests__ac-item-btn');
let tabsItems = document.querySelectorAll('.guests__tab');

tabsBtns.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtns.forEach(function (btn) {
      btn.classList.remove('guests__ac-item-btn--active')
    });
    e.currentTarget.classList.add('guests__ac-item-btn--active');

    tabsItems.forEach(function (item) {
      item.classList.remove('guests__tab--active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('guests__tab--active');

    scrollToContent(this, true);
  });
});
