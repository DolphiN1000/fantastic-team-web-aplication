const pricingPlans = [
  {
    title: "КОРПОРАТИВНИЙ САЙТ",
    price: "ВІД 900 $",
    features: [
      "Експрес-аналіз конкурентів",
      "E-commerce дизайн",
      "3-5 основних веб сторінок (без врахування службових сторінок та сторінок товарів)",
      "Каталог товарів",
      "Сторінка категорій товарів",
      "Налаштування та повне заповнення першими товарами (до 20 товарів, з можливістю збільшувати їх кількість)",
      "Функціонал кошику",
      "Особистий кабінет",
      "Інтеграція з платіжними системами",
      "Форма зворотного зв’язку",
      "Інтеграції з соціальними мережами",
      "Адаптивні версії (комп'ютер, планшет, смартфон)",
      "Публікація, допомога з доменом та хостінгом",
      "Базова SEO оптимізація",
      "12 місяців тех. підримки",
    ],
    buttonText: "ЗАМОВИТИ",
  },
  {
    title: "ІНТЕРНЕТ-МАГАЗИН",
    price: "ВІД 1500 $",
    features: [
      "Експрес-аналіз конкурентів",
      "Комерціний дизайн у фірмовому стилі",
      "6-7 основних веб сторінок",
      "Адаптивні версії (комп'ютер, планшет, смартфон)",
      "Базова SEO оптимізація",
      "Розгалуджена SEO-орієнтована структура",
      "Інтеграції з соціальними мережами",
      "Інтеграція з CRM",
      "Форма зворотного зв’язку",
      "Блог / Розділ зі статтями",
      "Публікація, допомога з доменом та хостінгом",
      "12 місяців тех. підримки",
    ],
    buttonText: "ЗАМОВИТИ",
  },
  {
    title: "LANDING PAGE",
    price: "ВІД 500 $",
    features: [
      "Унікальний адаптивний дизайн",
      "SEO-оптимізація",
      "Форма збору лідів",
      "Анімація та інтерактивність",
      "Інтеграція з CRM",
      "Швидке завантаження сторінки",
    ],
    buttonText: "ЗАМОВИТИ",
  },
  {
    title: "РЕДИЗАЙН САЙТУ",
    price: "ВІД 700 $",
    features: [
      "Оновлення UX/UI дизайну",
      "Оптимізація швидкості завантаження",
      "Адаптивна верстка",
      "Покращення SEO",
      "Оптимізація для мобільних пристроїв",
      "Впровадження сучасних технологій",
    ],
    buttonText: "ЗАМОВИТИ",
  },
  {
    title: "ВЕБ-ДОДАТОК",
    price: "ВІД 2500 $",
    features: [
      "Інтерактивний веб-додаток",
      "React / Vue / Angular",
      "Node.js / Python / PHP",
      "Інтеграція з базами даних",
      "Особисті кабінети користувачів",
      "Підтримка API",
    ],
    buttonText: "ЗАМОВИТИ",
  },
  {
    title: "SaaS-ПЛАТФОРМА",
    price: "ВІД 5000 $",
    features: [
      "Хмарне рішення для бізнесу",
      "Автоматичне масштабування",
      "Система підписки",
      "Інтеграція з платіжними системами",
      "Високий рівень безпеки",
      "Панель адміністрування",
    ],
    buttonText: "ЗАМОВИТИ",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const pricingList = document.querySelector(".pricing__list");
  const pricingSwiper = document.querySelector(".pricing__swiper");

  let startX = 0;
  let isDragging = false;
  let index = 0;
  let slidesPerView = getSlidesPerView();
  let autoSlideInterval;
  let totalSlides = Math.ceil(pricingPlans.length / slidesPerView);

  function getSlidesPerView() {
    if (window.innerWidth >= 1280) return "desktop";
    return window.innerWidth >= 768 ? 2 : 1;
  }

  function updateSlidesPerView() {
    slidesPerView = getSlidesPerView();
    totalSlides = Math.ceil(pricingPlans.length / slidesPerView);
    index = 0;
    setPositionByIndex();
  }

  window.addEventListener("resize", updateSlidesPerView);

  pricingPlans.forEach((plan) => {
    const li = document.createElement("li");
    li.classList.add("pricing__item");

    li.innerHTML = `
      <h3 class="pricing__subtitle">${plan.title}</h3>
      <p class="pricing__price">${plan.price}</p>
    `;

    plan.features.forEach((feature) => {
      const p = document.createElement("p");
      p.classList.add("pricing__text");
      p.textContent = feature;
      li.appendChild(p);
    });

    const button = document.createElement("a");
    button.href = "#";
    button.classList.add("pricing__btn", "link");
    button.textContent = plan.buttonText;
    li.appendChild(button);

    pricingList.appendChild(li);
  });

  function setPositionByIndex() {
    if (slidesPerView === "desktop") {
      pricingList.style.transition = "none";
      pricingList.style.transform = "none";
    } else {
      pricingList.style.transition = "transform 0.5s ease-in-out";
      pricingList.style.transform = `translateX(-${(index * 100) / slidesPerView}%)`;
    }
  }

  function startAutoSlide() {
    if (slidesPerView === "desktop") return;
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => {
      if (index < totalSlides - 1) {
        index++;
      } else {
        index = 0;
      }
      setPositionByIndex();
    }, 5000);
  }

  function resetAutoSlide() {
    if (slidesPerView === "desktop") return;
    clearInterval(autoSlideInterval);
    startAutoSlide();
  }

  pricingSwiper.addEventListener("touchstart", (event) => {
    if (slidesPerView === "desktop") return;
    startX = event.touches[0].clientX;
    isDragging = true;
    pricingList.style.transition = "none";
    clearInterval(autoSlideInterval);
  });

  pricingSwiper.addEventListener("touchmove", (event) => {
    if (!isDragging || slidesPerView === "desktop") return;
    const currentX = event.touches[0].clientX;
    const moveX = currentX - startX;
    pricingList.style.transform = `translateX(calc(-${(index * 100) / slidesPerView}% + ${moveX}px))`;
  });

  pricingSwiper.addEventListener("touchend", (event) => {
    if (slidesPerView === "desktop") return;
    isDragging = false;
    const endX = event.changedTouches[0].clientX;
    const diff = startX - endX;

    if (diff > 50 && index < totalSlides - 1) {
      index++;
    } else if (diff < -50 && index > 0) {
      index--;
    }

    setPositionByIndex();
    resetAutoSlide();
  });

  setPositionByIndex();
  startAutoSlide();
});
