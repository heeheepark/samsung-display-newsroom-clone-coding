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

// 윈도우 너비
let winW = window.innerWidth;
window.addEventListener("resize", function () {
  winW = window.innerWidth;
});

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

// gnb hover
gnb.addEventListener("mouseenter", function () {
  header.classList.add("header-active");
  if (winW > 1024) {
    for (let i = 0; i < subMenu.length; i++) {
      subMenu[i].classList.add("submenu-active");
    }
  }
});

gnb.addEventListener("mouseleave", function () {
  if (winW > 1024) {
    header.classList.remove("header-active");
  }
  for (let i = 0; i < subMenu.length; i++) {
    subMenu[i].classList.remove("submenu-active");
  }
});

menuBtn.addEventListener("click", function () {
  let checkHeaderActive = header.classList.contains("header-active");
  if (checkHeaderActive === false) {
    header.classList.add("header-active");
    menuBtn.classList.add("menu-btn-active");
    document.querySelector("body").style.overflow = "hidden";
    searchBtn.style.display = "none";
    gnb.classList.add("gnb-active");
  } else {
    header.classList.remove("header-active");
    menuBtn.classList.remove("menu-btn-active");
    document.querySelector("body").style.overflow = "";
    searchBtn.style.display = "block";
    gnb.classList.remove("gnb-active");
  }
});

// 모바일 메뉴
// let moreMenuList = document.querySelectorAll(".main-menu > li");
// for (let i = 0; i < moreMenuList.length; i++) {

//   moreMenuList[i].addEventListener("click", function () {
//     for(let i = 0; i)
//     subMenu[i].classList.add("submenu-active");
//   });
// }
// console.log(moreMenuList);
