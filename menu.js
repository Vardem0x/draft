let burger = document.querySelector(".burger__menu");
let burgerShow = false;
let overlay = document.querySelector(".overlay");
let close = document.querySelector(".close");
let closeShow = false;

burger.addEventListener("click", () => {
  if (burgerShow == false) {
    burger.style.backgroundImage = "url('./svgs/burger.svg')";
    burgerShow = true;
    overlay.style.transform = "scale(0)";
  } else {
    burger.style.backgroundImage = "url('./svgs/burger-menu.svg')";
    burgerShow = false;
    overlay.style.transform = "scale(1)";
  }
});

close.addEventListener("click", () => {
  if (closeShow == false) {
    burgerShow = true;
    overlay.style.transform = "scale(0)";
    burger.style.backgroundImage = "url('./svgs/burger.svg')";
  } else {
    burgerShow = false;
    overlay.style.transform = "scale(1)";
  }
});
