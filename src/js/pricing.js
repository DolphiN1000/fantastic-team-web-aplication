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

  if (!pricingList || !pricingSwiper) return;

  let startX = 0;
  let isDragging = false;
  let index = 0;
  let slidesPerView = getSlidesPerView();
  let autoSlideInterval;
  let totalSlides = pricingPlans.length - (slidesPerView - 1);

  function getSlidesPerView() {
    if (window.innerWidth >= 1280) return "desktop";
    return window.innerWidth >= 768 ? 2 : 1;
  }

  function updateSlidesPerView() {
    slidesPerView = getSlidesPerView();
    totalSlides = pricingPlans.length - (slidesPerView - 1);
    index = 0;

    if (slidesPerView === "desktop") {
      pricingList.style.transition = "none";
      pricingList.style.transform = "none";
    }

    setPositionByIndex();
    resetAutoSlide();
  }

  window.addEventListener("resize", updateSlidesPerView);

  pricingPlans.forEach((plan) => {
    const li = document.createElement("li");
    li.classList.add("pricing__item");

    const title = document.createElement("h3");
    title.classList.add("pricing__subtitle");
    title.textContent = plan.title;

    const price = document.createElement("p");
    price.classList.add("pricing__price");
    price.textContent = plan.price;

    li.append(title, price);

    plan.features.forEach((feature) => {
      const p = document.createElement("p");
      p.classList.add("pricing__text");
      p.textContent = feature;
      li.appendChild(p);
    });

    const button = document.createElement("a");
    button.href = "#contact-us";
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
      requestAnimationFrame(() => {
        const slideWidth = pricingList.firstElementChild.offsetWidth + 20;
        const moveX = index * slideWidth;
        pricingList.style.transition = "transform 0.5s ease-in-out";
        pricingList.style.transform = `translateX(-${moveX}px)`;
      });
    }
  }

  function startAutoSlide() {
    if (slidesPerView === "desktop") return;
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => {
      if (index + slidesPerView >= pricingPlans.length) {
        index = 0;
      } else {
        index += slidesPerView;
      }
      setPositionByIndex();
    }, 5000);
  }

  function resetAutoSlide() {
    if (autoSlideInterval) clearInterval(autoSlideInterval);
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
    const slideWidth = pricingList.firstElementChild.offsetWidth + 20;
    const baseMoveX = index * slideWidth;
    pricingList.style.transform = `translateX(calc(-${baseMoveX}px + ${moveX}px))`;
  });

  pricingSwiper.addEventListener("touchend", (event) => {
    if (slidesPerView === "desktop") return;
    isDragging = false;
    const endX = event.changedTouches[0].clientX;
    const diff = startX - endX;
    const slideWidth = pricingList.firstElementChild.offsetWidth + 20;

    if (diff > 50 && index + slidesPerView < pricingPlans.length) {
      index += slidesPerView;
    } else if (diff < -50 && index > 0) {
      index -= slidesPerView;
    }

    setPositionByIndex();
    resetAutoSlide();
  });

  updateSlidesPerView();
  setPositionByIndex();
  startAutoSlide();
});
