let searchBtn = document.querySelector(".search-btn");
let searchCloseBtn = document.querySelector(".search-close-btn");
let blackBg = document.querySelector(".black-box");
let searchArea = document.querySelector(".search-area");
let mainMenu = document.querySelector(".main-menu");
let subMenu = document.querySelectorAll(".submenu");
let header = document.querySelector(".header");
let menuBtn = document.querySelector(".menu-btn");

searchBtn.addEventListener("click", function () {
  blackBg.style.display = "block";
  searchBtn.style.display = "none";
  searchCloseBtn.style.display = "block";
  searchArea.classList.add("search-area-active");
  searchArea.style.boxShadow = "3px 3px 5px rgba(0, 0, 0, 0.15)";
  menuBtn.style.display = "none";
});

searchCloseBtn.addEventListener("click", function () {
  blackBg.style.display = "none";
  searchBtn.style.display = "block";
  searchCloseBtn.style.display = "none";
  searchArea.classList.remove("search-area-active");
  searchArea.style.boxShadow = "none";
  menuBtn.style.display = "block";
});

mainMenu.addEventListener("mouseover", function () {
  header.classList.add("header-active");
  for (let i = 0; i < subMenu.length; i++) {
    subMenu[i].style.display = "block";
  }
});

mainMenu.addEventListener("mouseout", function () {
  header.classList.remove("header-active");
  for (let i = 0; i < subMenu.length; i++) {
    subMenu[i].style.display = "none";
  }
});
