let recentNewsArea = document.querySelectorAll(".recent-news-img-area");
let recentBlackBox = document.querySelectorAll(".r-n-black-box");
let recentNewsImg = document.querySelectorAll(".recent-news-img");

for (let i = 0; i < recentNewsArea.length; i++) {
  recentNewsArea[i].addEventListener("mouseover", function () {
    recentNewsImg[i].style.scale = "1.1";
    recentBlackBox[i].style.display = "block";
  });
  recentNewsArea[i].addEventListener("mouseout", function () {
    recentNewsImg[i].style.scale = "1.0";
    recentBlackBox[i].style.display = "none";
  });
}

let hotClipArea = document.querySelector(".hot-clip-img-area");
let hotClipBlackBox = document.querySelector(".h-c-black-box");
let hotClipImg = document.querySelector(".hot-clip-thumb");

hotClipArea.addEventListener("mouseover", function () {
  hotClipImg.style.scale = "1.1";
  hotClipBlackBox.style.display = "block";
});
hotClipArea.addEventListener("mouseout", function () {
  hotClipImg.style.scale = "1.0";
  hotClipBlackBox.style.display = "none";
});
