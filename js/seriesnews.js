window.addEventListener("load", function () {
  new Swiper(".sn-series-news", {
    slidesPerView: 2,
    spaceBetween: 12,
    navigation: {
      nextEl: ".series-news .sn-next-bt",
      prevEl: ".series-news .sn-prev-bt",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
    breakpoints: {
      750: {
        slidesPerView: 4,
        spaceBetween: 30,
      },

      1200: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  });
});
