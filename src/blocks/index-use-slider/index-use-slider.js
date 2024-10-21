(function(){
  const indexUse = new Swiper('.index-use-slider__container', {
    speed: 400,
    spaceBetween: 32,
    slidesPerView: 1,
    //loop: true,
    grabCursor: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 1.2,
        spaceBetween: 32
      },
      1024: {
        slidesPerView: 1.4,
        spaceBetween: 32
      },
      1280: {
        slidesPerView: 1.68,
        spaceBetween: 32
      }
    }
  });
}());
