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
      "Налаштування та заповнення першими товарами (до 20 товарів, з можливістю збільшувати їх кількість)",
      "Функціонал кошику",
      "Особистий кабінет",
      "Інтеграція з платіжними системами",
      "Форма зворотного зв’язку",
      "Інтеграції з соціальними мережами",
      "Адаптивні версії (комп'ютер, планшет, смартфон)",
      "Публікація, допомога з доменом та хостингом",
      "Базова SEO оптимізація",
      "12 місяців тех. підтримки",
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
      "Розгалужена SEO-орієнтована структура",
      "Інтеграції з соціальними мережами",
      "Інтеграція з CRM",
      "Форма зворотного зв’язку",
      "Блог / Розділ зі статтями",
      "Публікація, допомога з доменом та хостингом",
      "12 місяців тех. підтримки",
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
    if (window.innerWidth >= 1280) return 3;
    return window.innerWidth >= 768 ? 2 : 1;
  }

  function updateSlidesPerView() {
    slidesPerView = getSlidesPerView();
    totalSlides = pricingPlans.length - (slidesPerView - 1);
    index = 0;

    pricingList.style.transition = "none";
    pricingList.style.transform = "none";

    setPositionByIndex();
    resetAutoSlide();
  }

  window.addEventListener("resize", debounce(updateSlidesPerView, 200));

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
    button.classList.add("pricing__btn",
      "btn"
      // ,"link"
      );
    button.textContent = plan.buttonText;
    const span = document.createElement("span");
    button.appendChild(span);    
    li.appendChild(button);

    pricingList.appendChild(li);
  });

  function setPositionByIndex() {
    requestAnimationFrame(() => {
      const slideWidth = pricingList.firstElementChild.offsetWidth + 20;
      const moveX = index * slideWidth;
      pricingList.style.transition = "transform 0.5s ease-in-out";
      pricingList.style.transform = `translateX(-${moveX}px)`;
    });
  }

  function startAutoSlide() {
    if (slidesPerView >= 3) return;
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => {
      index = (index + 1) % (pricingPlans.length - slidesPerView + 1);
      setPositionByIndex();
    }, 5000);
  }

  function resetAutoSlide() {
    if (autoSlideInterval) clearInterval(autoSlideInterval);
    startAutoSlide();
  }

  function startDrag(event) {
    if (slidesPerView >= 3) return;
    startX = event.touches ? event.touches[0].clientX : event.clientX;
    isDragging = true;
    pricingList.style.transition = "none";
    pricingList.style.pointerEvents = "none";
    clearInterval(autoSlideInterval);
  }

  function moveDrag(event) {
    if (!isDragging || slidesPerView >= 3) return;
    const currentX = event.touches ? event.touches[0].clientX : event.clientX;
    const moveX = currentX - startX;
    const slideWidth = pricingList.firstElementChild.offsetWidth + 20;
    const baseMoveX = index * slideWidth;
    pricingList.style.transform = `translateX(calc(-${baseMoveX}px + ${moveX}px))`;
  }

  function endDrag(event) {
    if (slidesPerView >= 3) return;
    isDragging = false;
    pricingList.style.pointerEvents = "auto";

    const endX = event.changedTouches
      ? event.changedTouches[0].clientX
      : event.clientX;
    const diff = startX - endX;
    const slideWidth = pricingList.firstElementChild.offsetWidth + 20;

    if (diff > 50 && index + slidesPerView < pricingPlans.length) {
      index += slidesPerView;
    } else if (diff < -50 && index > 0) {
      index -= slidesPerView;
    }

    setPositionByIndex();
    resetAutoSlide();
  }

  pricingSwiper.addEventListener("touchstart", startDrag);
  pricingSwiper.addEventListener("touchmove", moveDrag);
  pricingSwiper.addEventListener("touchend", endDrag);

  // Добавляем поддержку мыши (drag на ПК)
  pricingSwiper.addEventListener("mousedown", startDrag);
  document.addEventListener("mousemove", moveDrag);
  document.addEventListener("mouseup", endDrag);

  updateSlidesPerView();
  setPositionByIndex();
  startAutoSlide();

  // Debounce для resize
  function debounce(func, wait) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }
});
