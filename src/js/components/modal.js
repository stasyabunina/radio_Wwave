const openPopUp = document.querySelectorAll('.js-header-btn');
const closePopUp = document.querySelector('.pop-up__close-btn');
const popUp = document.querySelector('.pop-up');
const popUpWrapper = document.querySelector('.pop-up__wrapper');

openPopUp.forEach(function (open) {
  open.addEventListener('click', function () {
    popUp.classList.toggle('pop-up--visible');
    popUpWrapper.classList.toggle('pop-up__wrapper--visible');
    document.body.classList.toggle('stop-scroll');
  });
});

closePopUp.addEventListener('click', function () {
  popUp.classList.remove('pop-up--visible');
  popUpWrapper.classList.remove('pop-up__wrapper--visible');
  document.body.classList.remove('stop-scroll')
});
