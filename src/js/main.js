document.addEventListener('DOMContentLoaded', () => {
   const menuButton = document.querySelector('.header__nav__btn');
const menuList = document.querySelector('.header__nav__list');
const logo = document.querySelector('.header__logo');
const transitionDuration = parseFloat(
  getComputedStyle(menuList).getPropertyValue('--transition-duration')
); // Отримуємо тривалість transition у мс

menuButton.addEventListener('click', () => {
  if (menuButton.classList.contains('header__nav__btn--active')) {
    // Якщо меню відкрите - закриваємо і показуємо логотип після затримки
    menuButton.classList.remove('header__nav__btn--active');
    menuList.classList.remove('header__nav__list--active');
    setTimeout(() => {
      logo.classList.remove('header__logo--hidden');
    }, transitionDuration);
  } else {
    // Якщо меню закрите - відкриваємо і ховаємо логотип одразу
    menuButton.classList.add('header__nav__btn--active');
    menuList.classList.add('header__nav__list--active');
    logo.classList.add('header__logo--hidden');
  }
});
});

