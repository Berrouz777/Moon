'use strict';
let navButton = document.querySelector('.nav__button');
let navList = document.querySelector('.nav__list');
let pageBody = document.querySelector('.page__body');
let inputTel = document.querySelector('input[type="tel"]');
let menuLinks = document.querySelectorAll('a[href^="#"]');

navButton.classList.remove('nav__button--without-js');
navList.classList.remove('nav-__list--without-js');
document.querySelector('.header').classList.remove('header--without-js');
document.querySelector('.header__logo').classList.remove('header__logo--without-js');

inputTel.addEventListener('input', () => {
  inputTel.value = inputTel.value.replace(/[^\d]/g, '');
});

navButton.addEventListener('click', () => {
  navButton.classList.toggle('nav__button--open');
  navList.classList.toggle('nav__list--open');

  if (navList.classList.contains('nav__list--open')) {
    pageBody.classList.add('page__body--overflow-hidden');
  } else {
    pageBody.classList.remove('page__body--overflow-hidden');
  }
});

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', () => {
    if (pageBody.classList.contains('page__body--overflow-hidden')) {
      pageBody.classList.remove('page__body--overflow-hidden');
    }
  });
});
