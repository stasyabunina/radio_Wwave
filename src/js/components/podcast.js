const podcastBtn = document.querySelectorAll('.podcast__btn');

podcastBtn.forEach(function (podBtn) {
  podBtn.addEventListener('click', function () {
    podBtn.classList.toggle('podcast__btn--toggle');
  });
});
