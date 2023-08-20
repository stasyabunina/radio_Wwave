const playlistsSwiper = new Swiper('.playlists__swiper', {
  slidesPerView: 'auto',
  grabCursor: true,
  spaceBetween: 16,
});

const aboutSwiper = new Swiper('.about__swiper', {
  slidesPerView: 4,
  grabCursor: true,
  spaceBetween: 30,
  breakpoints: {
    1281: {
      slidesPerView: 4
    },
    577: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    320: {
      slidesPerView: 'auto',
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: '.about__slider-btn--next',
    prevEl: '.about__slider-btn--prev',
  },
  a11y: {
    prevSlideMessage: 'К предыдущему слайду',
    nextSlideMessage: 'К следующему слайду',
  },
});
