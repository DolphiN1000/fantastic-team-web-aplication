const ourServices = [
  {
    title: "КОРПОРАТИВНИЙ САЙТ",
    text: "Корпоративний сайт — це інтернет-ресурс компанії, який представляє її послуги, продукти та місію. Він допомагає встановити довіру, залучити клієнтів і підтримувати імідж бренду. Такий сайт зазвичай містить розділи про компанію, контакти, новини, портфоліо та форми для зворотного зв’язку.",
    buttonText: "ЗАМОВИТИ",
  },
  {
    title: "ІНТЕРНЕТ-МАГАЗИН",
    text: "Інтернет-магазин — це платформа для онлайн-продажу товарів чи послуг. Він дозволяє клієнтам переглядати каталог, додавати товари в кошик, здійснювати покупки та оплачувати замовлення онлайн. Важливими елементами є зручний пошук, фільтри, система відгуків та інтеграція з платіжними сервісами.",
    buttonText: "ЗАМОВИТИ",
  },
  {
    title: "LANDING PAGE",
    text: "Landing Page — цільова вебсторінка, створена для перетворення відвідувачів на клієнтів. Її завдання — сфокусувати увагу користувача на одному продукті, послузі чи дії, як-от залишення заявки, підписка або покупка. Лендінги мають чіткий дизайн, мінімум відволікаючих елементів і сильний заклик до дії.",
    buttonText: "ЗАМОВИТИ",
  },
  {
    title: "РЕДИЗАЙН САЙТУ",
    text: "Редизайн сайту — це оновлення його зовнішнього вигляду, структури та функціоналу. Він може включати зміну дизайну, покращення юзабіліті, оптимізацію швидкості та адаптацію під мобільні пристрої. Це допомагає зробити сайт сучасним, зручним і більш ефективним у залученні клієнтів.",
    buttonText: "ЗАМОВИТИ",
  },
  {
    title: "ВЕБ-ДОДАТОК",
    text: "Веб-додаток — це інтерактивний онлайн-сервіс, що працює у браузері. Він може виконувати різні функції, наприклад, керування проєктами, бронювання, комунікацію або обробку даних. Веб-додатки часто розробляються з використанням JavaScript, React, Node.js та інших сучасних технологій.",
    buttonText: "ЗАМОВИТИ",
  },
  {
    title: "SaaS-ПЛАТФОРМА",
    text: "SaaS-платформа (Software as a Service) — це програмне забезпечення, доступне через хмару без необхідності встановлення на пристрої користувача. Вона дозволяє компаніям використовувати потужні інструменти для управління бізнесом, обробки даних або автоматизації процесів без витрат на інфраструктуру.",
    buttonText: "ЗАМОВИТИ",
  },
  {
    title: "ПЕРСОНАЛЬНИЙ БЛОГ",
    text: "Персональний блог — це вебсайт для публікації статей, думок, новин або особистих історій. Він може використовуватися як для професійного розвитку, так і для хобі чи розважального контенту. Блоги часто включають можливість коментування, підписку на оновлення та інтеграцію з соцмережами.",
    buttonText: "ЗАМОВИТИ",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  let currentIndex = 0;
  const subtitles = document.querySelectorAll(".ourServices__subtitle");
  const prevButton = document.querySelector(".ourServices__swiperButtonLeft");
  const nextButton = document.querySelector(".ourServices__swiperButtonRight");
  const subtext = document.querySelector(".ourServices__subtext");

  function updateSubtitles() {
    subtitles.forEach((subtitle, index) => {
      subtitle.classList.remove("ourServices__subtitle-change");
      const serviceIndex = (currentIndex + index) % ourServices.length;
      subtitle.textContent = ourServices[serviceIndex].title;
      console.log(`Оновлення: ${index} -> ${ourServices[serviceIndex].title}`);
    });

    subtext.textContent = ourServices[currentIndex].text;

    requestAnimationFrame(() => {
      subtitles[0].classList.add("ourServices__subtitle-change");
    });
  }

  function moveSubtitle(direction) {
    subtitles[0].classList.remove("ourServices__subtitle-change");

    if (direction === 1) {
      currentIndex = (currentIndex + 1) % ourServices.length;
    } else {
      currentIndex =
        (currentIndex - 1 + ourServices.length) % ourServices.length;
    }

    requestAnimationFrame(() => updateSubtitles());
  }

  nextButton.addEventListener("click", () => moveSubtitle(1));
  prevButton.addEventListener("click", () => moveSubtitle(-1));

  updateSubtitles();
});
