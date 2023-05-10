let hotnewsswiper = new Swiper(".sw-hot-news", {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".hot-news-next-btn",
    prevEl: ".hot-news-prev-btn",
  },
  scrollbar: {
    el: ".hot-news-pg",
  },
  breakpoints: {
    750: {
      slidesPerView: 3,
    },
  },
});
