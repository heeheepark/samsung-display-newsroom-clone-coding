let searchBtn = document.querySelector(".search-btn");
let searchCloseBtn = document.querySelector(".search-close-btn");
let blackBg = document.querySelector(".black-box");
let searchArea = document.querySelector(".search-area");
let mainMenu = document.querySelector(".main-menu");
let subMenu = document.querySelectorAll(".submenu");
let header = document.querySelector(".header");

console.log(subMenu);

searchBtn.addEventListener("click", function () {
  blackBg.style.display = "block";
  searchBtn.style.display = "none";
  searchCloseBtn.style.display = "block";
  searchArea.style.top = "0px";
});

searchCloseBtn.addEventListener("click", function () {
  blackBg.style.display = "block";
  searchBtn.style.display = "block";
  searchCloseBtn.style.display = "none";
  searchArea.style.top = "-208px";
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
