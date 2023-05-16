// new Swiper(".sn-series-news", {
//   // 제일 작을때
//   slidesPerView: 2,
//   spaceBetween: 12,
//   simulateTouch: false,
//   navigation: {
//     nextEl: ".series-news .sn-next-bt",
//     prevEl: ".series-news .sn-prev-bt",
//   },

//   breakpoints: {
//     750: {
//       slidesPerView: 4,
//       spaceBetween: 30,
//     },
//     1035: {
//       slidesPerView: 4,
//       spaceBetween: 47,
//     },
//     1240: {
//       slidesPerView: 5,
//       spaceBetween: 20,
//     },
//   },
// });

new Swiper(".sn-series-news", {
  // 제일 작을때
  slidesPerView: 2,
  spaceBetween: 12,
  // simulateTouch: false,
  navigation: {
    nextEl: ".series-news .sn-next-bt",
    prevEl: ".series-news .sn-prev-bt",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  // pagination : {
  //   el : '.sn-series-news',
  //   clickable : true,
  // 	},
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
