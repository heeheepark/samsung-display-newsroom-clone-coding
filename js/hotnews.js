// hot-news swiper
let hotNewsData;
const hotNewsXhttp = new XMLHttpRequest();
hotNewsXhttp.onreadystatechange = function (event) {
  const req = event.target;
  if (req.readyState === XMLHttpRequest.DONE) {
    hotNewsData = JSON.parse(req.response);
    makeHotNewsSlide();
  }
};
hotNewsXhttp.open("GET", "hotnewsdata.json");
hotNewsXhttp.send();

function makeHotNewsSlide() {
  let hotNewsHtml = ``;
  for (let i = 0; i < hotNewsData.hotNews_count; i++) {
    let obj = hotNewsData[`hotNews_${i + 1}`];
    let temp = `
    <div class="swiper-slide">
      <a href="${obj.link}" class="hot-news-content">
        <div class="hot-news-img">
          <img
            src="images/hot-news/${obj.img}"
            alt="${obj.alt}"
          />
        </div>
        <div class="hot-news-text">
          <p class="news-title">
            ${obj.title}
          </p>
          <p class="news-main">
            ${obj.main}
          </p>
        </div>
      </a>
    </div>`;
    hotNewsHtml += temp;
  }

  let hotNewsWrapper = document.querySelector(".sw-hot-news .swiper-wrapper");
  hotNewsWrapper.innerHTML = hotNewsHtml;

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
}
