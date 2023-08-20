let openSearch = document.querySelector('.search__btn');
let searchForm = document.querySelector('.search__form');

openSearch.addEventListener('click', function () {
  searchForm.classList.add('search__form--active');
  this.classList.add('search__btn--active');
});

document.addEventListener('click', function (e) {
  let target = e.target;
  if (!target.closest('.search__form') && !target.closest('.search__btn')) {
    searchForm.classList.remove('search__form--active');
    openSearch.classList.remove('search__btn--active');
  }
});
