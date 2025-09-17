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
      "Оптимізація для рекламних кампаній (Google Ads, Facebook Ads)",
      "Можливість A/B тестування блоків",
      "Встановлення аналітики (Google Analytics, Pixel)",
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
      "Аналіз поведінки користувачів",
      "Оновлення графіки та ілюстрацій",
      "Покращення структури навігації",
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
      "Можливість інтеграції з мобільним додатком",
      "Розмежування прав доступу",
      "Журнал активності користувачів",
      "Масштабованість для зростання бізнесу",
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
      "Багатокористувацький доступ",
      "Мобільна адаптація та PWA",
      "Інструменти аналітики та звітності",
      "Можливість інтеграції сторонніх сервісів",
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
  let GAP = getGap(); 

  function getSlidesPerView() {
    if (window.innerWidth >= 1280) return 3;
    return window.innerWidth >= 768 ? 2 : 1;
  }

  function getGap() {
    const cs = getComputedStyle(pricingList);
    const g = parseFloat(cs.gap || cs.rowGap || cs.columnGap || "20");
    return Number.isFinite(g) ? g : 20;
  }

  function getSlideWidth() {
    const el = pricingList.firstElementChild;
    if (!el) return 0;
    return el.offsetWidth + GAP;
  }

  function getMaxIndex() {
    return Math.max(0, pricingPlans.length - slidesPerView);
  }

  function clamp(v, min, max) {
    return Math.min(max, Math.max(min, v));
  }

  function setPositionByIndex(animate = true) {
    const slideWidth = getSlideWidth();
    const moveX = index * slideWidth;
    pricingList.style.transition = animate ? "transform 0.5s ease-in-out" : "none";
    pricingList.style.transform = `translate3d(-${moveX}px,0,0)`;
  }

  function startAutoSlide() {
    if (slidesPerView >= 3) return;
    clearInterval(autoSlideInterval);
    const step = slidesPerView;
    autoSlideInterval = setInterval(() => {
      const maxIndex = getMaxIndex();
      index = (index + step) % (maxIndex + 1);
      setPositionByIndex(true);
    }, 5000);
  }

  function resetAutoSlide() {
    if (autoSlideInterval) clearInterval(autoSlideInterval);
    startAutoSlide();
  }

  function updateSlidesPerView() {
    slidesPerView = getSlidesPerView();
    GAP = getGap();
    index = 0;
    setPositionByIndex(false);
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
    button.classList.add("pricing__btn", "btn");
    button.textContent = plan.buttonText;
    const span = document.createElement("span");
    button.appendChild(span);
    li.appendChild(button);

    pricingList.appendChild(li);
  });


  function onPointerDown(e) {
    if (slidesPerView >= 3) return;
    isDragging = true;
    startX = e.clientX;
    pricingSwiper.setPointerCapture?.(e.pointerId);
    pricingList.style.transition = "none";
    document.body.style.userSelect = "none";
  }

  function onPointerMove(e) {
    if (!isDragging || slidesPerView >= 3) return;
    e.preventDefault(); 
    const currentX = e.clientX;
    const delta = currentX - startX;
    const base = index * getSlideWidth();
    pricingList.style.transform = `translate3d(${-(base - delta)}px,0,0)`;
  }

  function onPointerUp(e) {
    if (slidesPerView >= 3) return;
    if (!isDragging) return;
    isDragging = false;
    document.body.style.userSelect = "";

    const endX = e.clientX;
    const diff = startX - endX;
    const slideWidth = getSlideWidth();
    const threshold = Math.max(30, slideWidth * 0.2);
    const step = slidesPerView; 

    if (diff > threshold) {
      index = clamp(index + step, 0, getMaxIndex());
    } else if (diff < -threshold) {
      index = clamp(index - step, 0, getMaxIndex());
    }

    setPositionByIndex(true);
    resetAutoSlide();
  }

  pricingSwiper.addEventListener("pointerdown", onPointerDown, { passive: true });
  pricingSwiper.addEventListener("pointermove", onPointerMove, { passive: false });
  pricingSwiper.addEventListener("pointerup", onPointerUp, { passive: true });
  pricingSwiper.addEventListener("pointercancel", onPointerUp, { passive: true });
  pricingSwiper.addEventListener("lostpointercapture", onPointerUp, { passive: true });


  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      if (autoSlideInterval) clearInterval(autoSlideInterval);
    } else {
      startAutoSlide();
    }
  });


  pricingSwiper.addEventListener("keydown", (e) => {
    if (slidesPerView >= 3) return;
    const step = slidesPerView;
    if (e.key === "ArrowRight") {
      index = clamp(index + step, 0, getMaxIndex());
      setPositionByIndex(true);
      resetAutoSlide();
    } else if (e.key === "ArrowLeft") {
      index = clamp(index - step, 0, getMaxIndex());
      setPositionByIndex(true);
      resetAutoSlide();
    }
  });

  updateSlidesPerView();
  setPositionByIndex(false);
  startAutoSlide();

  function debounce(func, wait) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }
});

