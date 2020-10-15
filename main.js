// const burgerBtn = document.querySelector(".burger");
// const header = document.querySelector(".header");
// const logo = document.querySelector(".logo");
// const bodyElem = document.querySelector("body");
// const headerMobile = document.querySelector(".header__mobile");
// const hideForMobileElems = document.querySelectorAll(".hide-for-mobile");
// burgerBtn.addEventListener("click", function (e) {
//   // burgerBtn.src = "./images/icon-close.svg";
//   header.classList.toggle("open");
//   if (header.classList.contains("open")) {
//     burgerBtn.src = "./images/icon-close.svg";
//     logo.src = "./images/logo-bookmark-white.svg";
//     bodyElem.classList.add("noscroll");
//     bodyElem.classList.add("overlay");
//     hideForMobileElems.forEach(function (element) {
//       element.classList.remove("hide-for-mobile");
//     });
//   } else {
//     burgerBtn.src = "./images/icon-hamburger.svg";
//     logo.src = "./images/logo-bookmark.svg";
//     bodyElem.classList.remove("noscroll");
//     bodyElem.classList.remove("overlay");
//     hideForMobileElems.forEach(function (element) {
//       element.classList.add("hide-for-mobile");
//     });
//   }
//   e.preventDefault;
// });

// const navSlide = () => {
//   const burger = document.querySelector(".burger");
//   const nav = document.querySelector(".header__navbar");

//   burger.addEventListener("click", () => {
//     nav.classList.toggle("nav-active");
//   });
// };

// navSlide();

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  const burgerDiv = document.querySelectorAll(".burger div");
  const logo = document.querySelector(".logoImg");
  const bodyElem = document.querySelector("body");
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
    bodyElem.classList.toggle("noscroll");
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.6
        }s`;
      }
    });

    if (nav.classList.contains("nav-active")) {
      logo.src = "./images/logo-bookmark-white.svg";
    } else {
      logo.src = "./images/logo-bookmark.svg";
    }
    burgerDiv.forEach((div) => {
      div.classList.toggle("burger-active");
      if (div.classList.contains("burger-active")) {
        div.style.backgroundColor = "white";
      } else {
        div.style.backgroundColor = "#252B46";
      }
    });
  });
};

navSlide();
