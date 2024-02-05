import "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

// Params
const mainSliderSelector = ".main-slider";
const thumbSliderSelector = ".thumb-slider";

const swiper = new Swiper(".nannySwiper", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30,
  breakpoints: {
    992: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// Main Slider
const thumbSlider = new Swiper(thumbSliderSelector, {
  slidesPerView: 4,
  spaceBetween: 10,
});
const mainSlider = new Swiper(mainSliderSelector, {
  thumbs: {
    swiper: thumbSlider,
  },
});
