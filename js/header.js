let searchBtn = document.querySelector(".search-btn");
let searchCloseBtn = document.querySelector(".search-close-btn");
let blackBg = document.querySelector(".black-box");
let searchArea = document.querySelector(".search-area");
let mainMenu = document.querySelector(".main-menu");
let subMenu = document.querySelectorAll(".submenu");
let header = document.querySelector(".header");
let menuBtn = document.querySelector(".menu-btn");
let gnb = document.querySelector(".gnb");
let sideMenu = document.querySelector(".side-menu");

searchBtn.addEventListener("click", function () {
  blackBg.classList.add("black-box-active");
  searchBtn.style.display = "none";
  searchCloseBtn.style.display = "block";
  searchArea.classList.add("search-area-active");
  menuBtn.style.display = "none";
});

searchCloseBtn.addEventListener("click", function () {
  blackBg.classList.remove("black-box-active");
  searchBtn.style.display = "block";
  searchCloseBtn.style.display = "none";
  searchArea.classList.remove("search-area-active");
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

menuBtn.addEventListener("click", function () {
  let checkHeaderActive = header.classList.contains("header-active");
  if (checkHeaderActive === false) {
    header.classList.add("header-active");
    menuBtn.classList.add("manu-btn-active");
    gnb.classList.add("gnb-active");
    sideMenu.classList.add("side-menu-active");
  } else {
    header.classList.remove("header-active");
    menuBtn.classList.remove("manu-btn-active");
    gnb.classList.remove("gnb-active");
    sideMenu.classList.remove("side-menu-active");
  }
});
