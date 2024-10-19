let burger = document.querySelector(".burger__menu");
let burgerShow = false;
let overlay = document.querySelector(".overlay");
let close = document.querySelector(".close");
let closeShow = false;
let shadow = document.querySelector(".background__shadow");

burger.addEventListener("click", () => {
  if (burgerShow == false) {
    burger.style.backgroundImage = "url('./svgs/burger.svg')";
    burgerShow = true;
    overlay.style.transform = "scale(0)";
    shadow.classList.remove("shadow");
  } else {
    burger.style.backgroundImage = "url('./svgs/burger-menu.svg')";
    burgerShow = false;
    overlay.style.transform = "scale(1)";
    shadow.classList.add("shadow");
  }
});

close.addEventListener("click", () => {
  if (closeShow == false) {
    burgerShow = true;
    overlay.style.transform = "scale(0)";
    burger.style.backgroundImage = "url('./svgs/burger.svg')";
    shadow.classList.remove("shadow");
  } else {
    burgerShow = false;
    overlay.style.transform = "scale(1)";
    shadow.classList.add("shadow");
  }
});
