let upSwiper = null;
const mediaSize = window.matchMedia("(max-width: 768px)");

function initializeUpSwiper() {
  if (!upSwiper) {
    upSwiper = new Swiper(".swiper", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        sliderCardPerView: "auto",
      },
    });
  } else {
    upSwiper.disable();
    upSwiper = null;
  }
}

let downSwiper = null;
function initializeDownSwiper() {
  if (!downSwiper) {
    downSwiper = new Swiper(".swiper-2", {
      pagination: {
        el: ".swiper-pagination-2",
        clickable: true,
        sliderCardPerView: "auto",
      },
    });
  } else {
    downSwiper.disable();
    downSwiper = null;
  }
}

window.addEventListener("DOMContentLoaded", function () {
  if (this.window.matchMedia("(max-width: 768px)").matches) {
    initializeUpSwiper();
    initializeDownSwiper();
  } else if (window.matchMedia("(max-width: 1280px)").matches) {
    initializeDownSwiper();
    upSwiper = null;
  } else {
    upSwiper = null;
    downSwiper = null;
  }
});
