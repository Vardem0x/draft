let swiperButton = document.querySelector(".swiper__button");
let advantages = document.querySelectorAll(".swiper-slide");
let showAdvantages = true;
const mediaLaptop = window.matchMedia("(max-width: 1150px)");
swiperButton.addEventListener("click", () => {
  if (showAdvantages == false) {
    showAdvantages = true;
    swiperButton.style.transform = "rotate(0deg)";
    advantages[3].style.display = "none";
    advantages[4].style.display = "none";
    advantages[5].style.display = "none";
  } else if (showAdvantages == true) {
    showAdvantages = false;
    swiperButton.style.transform = "rotate(180deg)";
    advantages[3].style.display = "block";
    advantages[4].style.display = "block";
    advantages[5].style.display = "block";
  }
});

swiperButton.addEventListener("click", () => {
  if (mediaLaptop.matches && showAdvantages == true) {
    showAdvantages = true;
    swiperButton.style.transform = "rotate(0deg)";
    advantages[2].style.display = "block";
    advantages[3].style.display = "block";
    advantages[4].style.display = "block";
    advantages[5].style.display = "block";
  } else if (showAdvantages == false && mediaLaptop.matches) {
    showAdvantages = false;
    swiperButton.style.transform = "rotate(180deg)";
    advantages[2].style.display = "none";
    advantages[3].style.display = "none";
    advantages[4].style.display = "none";
    advantages[5].style.display = "none";
  }
});
