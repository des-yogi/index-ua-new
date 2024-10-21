/*(function(){
  const header = document.querySelector('.page-header--sticky');

  function throttle(fn, delay) {
    let last = undefined;
    let timer = undefined;
    return function () {
      const now = +new Date();
      if (last && now < last + delay) {
        clearTimeout(timer);
        timer = setTimeout(function () {
          last = now;
          fn();
        }, delay);
      } else {
        last = now;
        fn();
      }
    };
  }

  function onScroll() {
    if (window.pageYOffset) {
      header.classList.add('is-active');
    } else {
      header.classList.remove('is-active');
    }
  }

  //if (window.matchMedia('(min-width: 768px)').matches){
  // do functionality on screens bigger than 1366px
  //}

  window.addEventListener('scroll', throttle(onScroll, 25), {passive: true});
}());

*/
(function (){
  let new_scroll_position = 0;
  let last_scroll_position;
  const header = document.getElementById('header');
  const scrollHandler = function(e) {
    last_scroll_position = window.scrollY;

    // Scrolling down
    if (new_scroll_position < last_scroll_position && last_scroll_position > 80) {
      // header.removeClass('slideDown').addClass('slideUp');
      header.classList.remove('page-header--slideDown');
      header.classList.add('page-header--slideUp');

    // Scrolling up
    } else if (new_scroll_position > last_scroll_position) {
      // header.removeClass('slideUp').addClass('slideDown');
      header.classList.remove('page-header--slideUp');
      header.classList.add('page-header--slideDown');
    }

    new_scroll_position = last_scroll_position;
  };

  window.addEventListener('scroll', scrollHandler, { passive: true });
})()
