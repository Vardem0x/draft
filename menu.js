let burger = document.querySelector(".burger__menu");
let burgerShow = true;
let overlay = document.querySelector(".overlay");
let close = document.querySelector(".close");
let closeShow = false;
let closeShowForm = false;
let shadow = document.querySelector(".background__shadow");
let body = document.querySelector("body");
let applicationClose = document.querySelector(".application__close");
let applicationShadow = document.querySelector(".application__shadow");

burger.addEventListener("click", () => {
  if (burgerShow == false) {
    burger.style.backgroundImage = "url('./svgs/burger.svg')";
    burgerShow = true;
    overlay.style.transform = "scale(0)";
    shadow.classList.remove("shadow");
    body.style.overflow = "auto";
    body.style.height = "auto";
  } else if (burgerShow == true) {
    burger.style.backgroundImage = "url('./svgs/burger-menu.svg')";
    burgerShow = false;
    overlay.style.transform = "scale(1)";
    shadow.classList.add("shadow");
    body.style.overflow = "hidden";
    body.style.height = "100%";
  }
});

close.addEventListener("click", () => {
  if (closeShow == false) {
    burgerShow = true;
    overlay.style.transform = "scale(0)";
    burger.style.backgroundImage = "url('./svgs/burger.svg')";
    shadow.classList.remove("shadow");
    body.style.overflow = "auto";
    body.style.height = "auto";
  } else {
    burgerShow = false;
    overlay.style.transform = "scale(1)";
    shadow.classList.add("shadow");
    body.style.overflow = "hidden";
    body.style.height = "100%";
  }
});

shadow.addEventListener("click", () => {
  if (closeShow == false) {
    burgerShow = true;
    overlay.style.transform = "scale(0)";
    burger.style.backgroundImage = "url('./svgs/burger.svg')";
    shadow.classList.remove("shadow");
    body.style.overflow = "auto";
    body.style.height = "auto";
  } else {
    burgerShow = false;
    overlay.style.transform = "scale(1)";
    shadow.classList.add("shadow");
    body.style.overflow = "hidden";
    body.style.height = "100%";
  }
});

document.querySelectorAll(".dialog").forEach((item) =>
  item.addEventListener("click", function () {
    closeShowForm = false;
    applicationShadow.style.transform = "scale(1)";
  })
);

applicationClose.addEventListener("click", () => {
  if (closeShow == false) {
    applicationShadow.style.transform = "scale(0)";
    closeShowForm = true;
  } else {
    applicationShadow.style.transform = "scale(1)";
    closeShowForm = false;
  }
});
