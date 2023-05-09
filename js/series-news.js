new Swiper(".sn-series-news", {
  // 제일 작을때
  slidesPerView: 2,
  spaceBetween: 12,
  simulateTouch: false,
  navigation: {
    nextEl: ".series-news .sn-next-bt",
    prevEl: ".series-news .sn-prev-bt",
  },
  // 스크롤바 설정하기
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },

  // pagination : { // 페이징 설정
  // 	el : '.sn-series-news',
  // 	clickable : true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
  // },
  on: {
    activeIndexChange: function () {
      // let prevBtn = document.querySelector(".sn-prev-bt");
      // let nextBtn = document.querySelector(".sn-next-bt");
      // if (this.realIndex == 0) {
      //   prevBtn.style.display = "none";
      // } else if (this.realIndex == 14) {
      //   nextBtn.style.display = "none";
      // } else {
      //   prevBtn.style.display = "block";
      //   nextBtn.style.display = "block";
      // }
    },
  },

  breakpoints: {
    750: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1035: {
      slidesPerView: 4,
      spaceBetween: 47,
    },
    1240: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});
