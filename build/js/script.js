// 'use strict';
// var pageHeader = document.querySelector('.page-header');
// var headerToggle = document.querySelector('.page-header__toggle');

// pageHeader.classList.remove('page-header--nojs');

// headerToggle.addEventListener('click', function () {
//   if (pageHeader.classList.contains('page-header--closed')) {
//     pageHeader.classList.remove('page-header--closed');
//     pageHeader.classList.add('page-header--opened');
//   } else {
//     pageHeader.classList.add('page-header--closed');
//     pageHeader.classList.remove('page-header--opened');
//   }
// });
let navButton = document.querySelector('.nav__button');
let navList = document.querySelector('.nav__list');
let pageBody = document.querySelector('.page__body');
let inputTel = document.querySelector('input[type="tel"]')

navButton.classList.remove('nav__button--without-js');
navList.classList.remove('nav-__list--without-js');
document.querySelector('.header').classList.remove('header--without-js');
document.querySelector('.header__logo').classList.remove('header__logo--without-js');

inputTel.addEventListener('input', () => {
  inputTel.value = inputTel.value.replace(/[^\d]/g, '');
})

navButton.addEventListener('click', () => {
  navButton.classList.toggle('nav__button--open');
  navList.classList.toggle('nav__list--open');

  if (navList.classList.contains('nav__list--open')) {
    pageBody.classList.add('page__body--overflow-hidden');
  } else {
    pageBody.classList.remove('page__body--overflow-hidden');
  }
})
