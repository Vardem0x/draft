let upSwiper = null;
const mediaSize = window.matchMedia("(max-width: 768px)");
function initializeSwiper() {
  if (mediaSize.matches && !upSwiper) {
    upSwiper = new Swiper(".swiper", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      slidesPerView: "auto",
    });
  } else if (!mediaSize.matches && upSwiper) {
    upSwiper.destroy(true, true);
    upSwiper = null;
  }
}
initializeSwiper();
window.addEventListener("resize", initializeSwiper);
