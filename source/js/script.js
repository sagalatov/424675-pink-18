var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var pageHeaderLogo = document.querySelector('.page-header__logo');
var aboutApplicationContainer = document.querySelector('.about-application__container');
var aboutApplicationSlogan = document.querySelector('.about-application__slogan');
var aboutApplicationPhoto = document.querySelector('.about-application__photo');


navMain.classList.remove('main-nav--nojs');

navToggle && navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain && navMain.classList.remove('main-nav--closed');
    navMain && navMain.classList.add('main-nav--opened');
    pageHeaderLogo && pageHeaderLogo.classList.remove('page-header__logo--closed');
    aboutApplicationContainer && aboutApplicationContainer.classList.remove('about-application__container--closed');
    aboutApplicationSlogan && aboutApplicationSlogan.classList.remove('about-application__slogan--closed');
    aboutApplicationPhoto && aboutApplicationPhoto.classList.remove('about-application__photo--closed');

  } else {
    navMain && navMain.classList.add('main-nav--closed');
    navMain && navMain.classList.remove('main-nav--opened');
    pageHeaderLogo && pageHeaderLogo.classList.add('page-header__logo--closed');
    aboutApplicationContainer && aboutApplicationContainer.classList.add('about-application__container--closed');
    aboutApplicationSlogan && aboutApplicationSlogan.classList.add('about-application__slogan--closed');
    aboutApplicationPhoto && aboutApplicationPhoto.classList.add('about-application__photo--closed');
  }
});

