let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav-wrapper');
let menuLinks = menu.querySelectorAll('.nav-top__link');
let closeNav = document.querySelector('.nav-top__close');

burger.addEventListener('click',
  function () {
    menu.classList.toggle('header__nav-wrapper--active');
    document.body.classList.toggle('stop-scroll');
  });

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    menu.classList.remove('header__nav-wrapper--active');
    document.body.classList.remove('stop-scroll');
  })
});

closeNav.addEventListener('click', function () {
  menu.classList.remove('header__nav-wrapper--active');
  document.body.classList.remove('stop-scroll');
});
