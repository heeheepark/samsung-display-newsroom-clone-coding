window.addEventListener("load", function () {
  let cardNewsSwiper1 = new Swiper(".cn-card-news-left", {
    slidesPerView: 1,
    spaceBetween: 24,
    speed: 1000,
    simulateTouch: false,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: ".cn-next-bt",
      prevEl: ".cn-prev-bt",
    },
    pagination: {
      el: ".card-news-pg",
      clickable: true,
    },
  });

  // 오른쪽 슬라이드
  let cardNewsSwiper2 = new Swiper(".cn-card-news-right", {
    slidesPerView: 1,
    spaceBetween: 24,
    speed: 1000,
    simulateTouch: false,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: ".cn-next-bt",
      prevEl: ".cn-prev-bt",
    },
    pagination: {
      el: ".card-news-pg",
      clickable: true,
    },
  });
}); // 왼쪽슬라이드
