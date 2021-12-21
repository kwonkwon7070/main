const swiper = new Swiper('.swiper-container', {
  loop: true,

  spaceBetween: 0,
        effect: 'fade',
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
});

lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
      'fitImagesInViewport': true
    })
