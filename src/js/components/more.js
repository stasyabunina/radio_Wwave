const btnMore = document.querySelector('.podcasts__btn');
const items = document.querySelectorAll('.podcasts__item');

btnMore.addEventListener('click', function () {
  items.forEach(function (item) {
    item.classList.add('podcasts__item--visible');
    btnMore.classList.add('podcasts__btn--hidden');
  });
});
