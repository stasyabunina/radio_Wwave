const primaryBtn = document.querySelectorAll('.primary-broadcast__button');
const secondaryBtn = document.querySelectorAll('.secondary-broadcast__button');
const broadcastBtn = document.querySelectorAll('.header__broadcast-btn');

secondaryBtn.forEach(function (secBtn) {
  secBtn.addEventListener('click', function () {
    secBtn.classList.toggle('broadcast-btn--toggle');
  });
});

primaryBtn.forEach(function (priBtn) {
  priBtn.addEventListener('click', function () {
    priBtn.classList.toggle('broadcast-btn--toggle');
  });
});

broadcastBtn.forEach(function (broBtn) {
  broBtn.addEventListener('click', function () {
    broBtn.classList.toggle('broadcast-btn--toggle');
  });
});
