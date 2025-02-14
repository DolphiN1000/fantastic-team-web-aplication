import brovkoDesktop1x from "../images/portfolio/screenSquoosh/brovkodesktop.jpg";
import brovkoDesktop2x from "../images/portfolio/screenSquoosh/brovkodesktop@2x.webp";
import brovkoDesktop3x from "../images/portfolio/screenSquoosh/brovkodesktop@3x.webp";

import brovkoTablet1x from "../images/portfolio/tabletSquoosh/brovkotablet.jpg";
import brovkoTablet2x from "../images/portfolio/tabletSquoosh/brovkotablet@2x.webp";
import brovkoTablet3x from "../images/portfolio/tabletSquoosh/brovkotablet@3x.webp";

import brovkoMobile1x from "../images/portfolio/mobilSquoosh/brovkomobile.jpg";
import brovkoMobile2x from "../images/portfolio/mobilSquoosh/brovkomobile@2x.webp";
import brovkoMobile3x from "../images/portfolio/mobilSquoosh/brovkomobile@3x.webp";

import brovkoProdDesktop1x from "../images/portfolio/screenSquoosh/brovkoproddesktop.jpg";
import brovkoProdDesktop2x from "../images/portfolio/screenSquoosh/brovkoproddesktop@2x.webp";
import brovkoProdDesktop3x from "../images/portfolio/screenSquoosh/brovkoproddesktop@3x.webp";

import brovkoProdTablet1x from "../images/portfolio/tabletSquoosh/brovkoprodtablet.jpg";
import brovkoProdTablet2x from "../images/portfolio/tabletSquoosh/brovkoprodtablet@2x.webp";
import brovkoProdTablet3x from "../images/portfolio/tabletSquoosh/brovkoprodtablet@3x.webp";

import brovkoProdMobile1x from "../images/portfolio/mobilSquoosh/brovkoprodmobile.jpg";
import brovkoProdMobile2x from "../images/portfolio/mobilSquoosh/brovkoprodmobile@2x.webp";
import brovkoProdMobile3x from "../images/portfolio/mobilSquoosh/brovkoprodmobile@3x.webp";

import filmDesktop1x from "../images/portfolio/screenSquoosh/filmdesktop.jpg";
import filmDesktop2x from "../images/portfolio/screenSquoosh/filmdesktop@2x.webp";
import filmDesktop3x from "../images/portfolio/screenSquoosh/filmdesktop@3x.webp";

import filmTablet1x from "../images/portfolio/tabletSquoosh/filmtablet.jpg";
import filmTablet2x from "../images/portfolio/tabletSquoosh/filmtablet@2x.webp";
import filmTablet3x from "../images/portfolio/tabletSquoosh/filmtablet@3x.webp";

import filmMobile1x from "../images/portfolio/mobilSquoosh/filmmobile.jpg";
import filmMobile2x from "../images/portfolio/mobilSquoosh/filmmobile@2x.webp";
import filmMobile3x from "../images/portfolio/mobilSquoosh/filmmobile@3x.webp";

import petsDesktop1x from "../images/portfolio/screenSquoosh/petsdesktop.jpg";
import petsDesktop2x from "../images/portfolio/screenSquoosh/petsdesktop@2x.webp";
import petsDesktop3x from "../images/portfolio/screenSquoosh/petsdesktop@3x.webp";

import petsTablet1x from "../images/portfolio/tabletSquoosh/petstablet.jpg";
import petsTablet2x from "../images/portfolio/tabletSquoosh/petstablet@2x.webp";
import petsTablet3x from "../images/portfolio/tabletSquoosh/petstablet@3x.webp";

import petsMobile1x from "../images/portfolio/mobilSquoosh/petsmobile.jpg";
import petsMobile2x from "../images/portfolio/mobilSquoosh/petsmobile@2x.webp";
import petsMobile3x from "../images/portfolio/mobilSquoosh/petsmobile@3x.webp";

import yourPetDesktop1x from "../images/portfolio/screenSquoosh/yourpetdesktop.jpg";
import yourPetDesktop2x from "../images/portfolio/screenSquoosh/yourpetdesktop@2x.webp";
import yourPetDesktop3x from "../images/portfolio/screenSquoosh/yourpetdesktop@3x.webp";

import yourPetTablet1x from "../images/portfolio/tabletSquoosh/yourpettablet.jpg";
import yourPetTablet2x from "../images/portfolio/tabletSquoosh/yourpettablet@2x.webp";
import yourPetTablet3x from "../images/portfolio/tabletSquoosh/yourpettablet@3x.webp";

import yourPetMobile1x from "../images/portfolio/mobilSquoosh/yourpetmobil.jpg";
import yourPetMobile2x from "../images/portfolio/mobilSquoosh/yourpetmobil@2x.webp";
import yourPetMobile3x from "../images/portfolio/mobilSquoosh/yourpetmobil@3x.webp";

const projects = [
  {
    desktop: [brovkoDesktop1x, brovkoDesktop2x, brovkoDesktop3x],
    tablet: [brovkoTablet1x, brovkoTablet2x, brovkoTablet3x],
    mobile: [brovkoMobile1x, brovkoMobile2x, brovkoMobile3x],
    alt: "Brovko",
    link: "https://brovko.fun/",
  },
  {
    desktop: [brovkoProdDesktop1x, brovkoProdDesktop2x, brovkoProdDesktop3x],
    tablet: [brovkoProdTablet1x, brovkoProdTablet2x, brovkoProdTablet3x],
    mobile: [brovkoProdMobile1x, brovkoProdMobile2x, brovkoProdMobile3x],
    alt: "Brovko Prod",
    link: "https://brovko.fun/",
  },
  {
    desktop: [filmDesktop1x, filmDesktop2x, filmDesktop3x],
    tablet: [filmTablet1x, filmTablet2x, filmTablet3x],
    mobile: [filmMobile1x, filmMobile2x, filmMobile3x],
    alt: "Film",
    link: "https://orddreamer.github.io/filmoteka-first-command/",
  },
  {
    desktop: [petsDesktop1x, petsDesktop2x, petsDesktop3x],
    tablet: [petsTablet1x, petsTablet2x, petsTablet3x],
    mobile: [petsMobile1x, petsMobile2x, petsMobile3x],
    alt: "Pets",
    link: "https://patron4u-pet-app.netlify.app/",
  },
  {
    desktop: [yourPetDesktop1x, yourPetDesktop2x, yourPetDesktop3x],
    tablet: [yourPetTablet1x, yourPetTablet2x, yourPetTablet3x],
    mobile: [yourPetMobile1x, yourPetMobile2x, yourPetMobile3x],
    alt: "Your Pet",
    link: "https://patron4u-pet-app.netlify.app/",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const portfolioList = document.querySelector(".portfolio__list");

  if (!portfolioList) {
    console.warn("Элемент .portfolio__list не найден!");
    return;
  }

  projects.forEach((project) => {
    const listItem = document.createElement("li");
    listItem.classList.add("portfolio__item");

    const link = document.createElement("a");
    link.href = project.link;
    link.target = "_blank"; // Открытие в новой вкладке
    link.rel = "noopener noreferrer"; // Безопасность

    const picture = document.createElement("picture");

    const sourceDesktop = document.createElement("source");
    sourceDesktop.srcset = `${project.desktop[0]} 1x, ${project.desktop[1]} 2x, ${project.desktop[2]} 3x`;
    sourceDesktop.media = "(min-width: 1200px)";

    const sourceTablet = document.createElement("source");
    sourceTablet.srcset = `${project.tablet[0]} 1x, ${project.tablet[1]} 2x, ${project.tablet[2]} 3x`;
    sourceTablet.media = "(min-width: 768px)";

    const sourceMobile = document.createElement("source");
    sourceMobile.srcset = `${project.mobile[0]} 1x, ${project.mobile[1]} 2x, ${project.mobile[2]} 3x`;
    sourceMobile.media = "(max-width: 767px)";

    const img = document.createElement("img");
    img.classList.add("portfolio__img");
    img.src = project.mobile[0]; // По умолчанию загружается мобильное изображение
    img.alt = project.alt;
    img.loading = "lazy"; // Ленивое подгружение

    picture.appendChild(sourceDesktop);
    picture.appendChild(sourceTablet);
    picture.appendChild(sourceMobile);
    picture.appendChild(img);

    link.appendChild(picture);
    listItem.appendChild(link);
    portfolioList.appendChild(listItem);
  });
});
