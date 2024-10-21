(function(){
  const countrySlider = new Swiper('.country-slider__container', {
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 32,
    loop: true,
    grabCursor: true,
    autoplay: {
      delay: 7000,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    keyboard: {
      enabled: true,
    },
  });
})();
