var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle && navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain && navMain.classList.remove('main-nav--closed');
    navMain && navMain.classList.add('main-nav--opened');
  } else {
    navMain && navMain.classList.add('main-nav--closed');
    navMain && navMain.classList.remove('main-nav--opened');
  }
});

