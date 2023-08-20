function getWindowWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.body.clientWidth,
    document.documentElement.clientWidth
  );
}

function scrollToContent(link, isMobile) {
  if (isMobile && getWindowWidth() > 576) {
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
