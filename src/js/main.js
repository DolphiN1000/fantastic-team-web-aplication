document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.header__nav__btn');
    const menu = document.querySelector('.header__nav__list');
    const logo = document.querySelector('.header__logo'); // Вибір логотипа

    console.log(menuBtn);

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('header__nav__btn--active');
            menu.classList.toggle('header__nav__list--active');
            logo.classList.toggle('header__logo--hidden'); // Додаємо/знімаємо клас
        });
    } else {
        console.error('menuBtn не знайдено');
    }
});

