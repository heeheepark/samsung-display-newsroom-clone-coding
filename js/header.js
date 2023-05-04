let searchBtn = document.querySelector(".search-btn");
let searchCloseBtn = document.querySelector(".search-close-btn");
let blackBg = document.querySelector(".black-box");
let searchArea = document.querySelector(".search-area");
let mainMenu = document.querySelector(".main-menu");
let subMenu = document.querySelectorAll(".submenu");
let header = document.querySelector(".header");

searchBtn.addEventListener("click", function () {
  blackBg.style.display = "block";
  searchBtn.style.display = "none";
  searchCloseBtn.style.display = "block";
  searchArea.style.top = "0px";
  searchArea.style.boxShadow = "3px 3px 5px rgba(0, 0, 0, 0.15)";
});

searchCloseBtn.addEventListener("click", function () {
  blackBg.style.display = "none";
  searchBtn.style.display = "block";
  searchCloseBtn.style.display = "none";
  searchArea.style.top = "-208px";
  searchArea.style.boxShadow = "none";
});

mainMenu.addEventListener("mouseover", function () {
  header.style.height = "280px";
  for (let i = 0; i < subMenu.length; i++) {
    subMenu[i].style.display = "block";
  }
});

mainMenu.addEventListener("mouseout", function () {
  header.style.height = "95px";
  for (let i = 0; i < subMenu.length; i++) {
    subMenu[i].style.display = "none";
  }
});
