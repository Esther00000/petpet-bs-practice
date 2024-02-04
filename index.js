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
// Params
const mainSliderSelector = ".main-slider";
const thumbSliderSelector = ".thumb-slider";
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

// service page
const serviceStart = document.querySelector("#start");
const serviceEnd = document.querySelector("#end");

function datePicker(targetStart, targetEnd) {
  const startDate = flatpickr(targetStart, {
    enableTime: false,
    dateFormat: "Y-m-d", // 設定日期格式為 '年-月-日'
    defaultDate: "today", // 預設日期為今天
    minDate: "today", // 設定最小日期為今天
    // 當開始日期改變時，更新結束日期的最小允許日期
    onChange: function (selectedDates, dateStr, instance) {
      // 取得開始日期的後一天
      const nextDay = new Date(dateStr);
      nextDay.setDate(nextDay.getDate() + 1);
      flatpickr("#end", {
        minDate: nextDay, // 結束日期的最小允許日期，dateStr : 選擇開始日期的日期
        defaultDate: nextDay,
      });
    },
  });
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const endDate = flatpickr(targetEnd, {
    enableTime: false, // 不啟用時間選擇
    dateFormat: "Y-m-d", // 設定日期格式為 '年-月-日'
    defaultDate: tomorrow, // 預設日期為明天
    minDate: tomorrow, // 設定最小日期為明天
  });
}
const reserveModal = document.getElementById("reserveModa1");

reserveModal.addEventListener("shown.bs.modal", () => {
  // detail page
  const detailStart = document.querySelector("#detailStart");
  const detailEnd = document.querySelector("#detailEnd");
  console.log(detailStart, detailEnd);
  datePicker(detailStart, detailEnd);
});

datePicker(serviceStart, serviceEnd);
