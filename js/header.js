let searchBtn = document.querySelector(".search-btn");
let searchCloseBtn = document.querySelector(".search-close-btn");
let blackBg = document.querySelector(".black-box");
let searchArea = document.querySelector(".search-area");
let mainMenu = document.querySelector(".main-menu");
let subMenu = document.querySelectorAll(".submenu");
let header = document.querySelector(".header");
let menuBtn = document.querySelector(".menu-btn");
let gnb = document.querySelector(".gnb");

// 윈도우 너비
let winW = window.innerWidth;
window.addEventListener("resize", function () {
  winW = window.innerWidth;
});

// side-menu(뉴스룸 구독 버튼) hover
let sideMenuLeft = document.querySelector(".side-menu-left");
let subscribeBtn = document.querySelector(".subscribe-btn");
sideMenuLeft.addEventListener("mouseenter", function () {
  subscribeBtn.classList.add("subscribe-btn-active");
  sideMenuLeft.classList.add("side-menu-left-active");
});
sideMenuLeft.addEventListener("mouseleave", function () {
  subscribeBtn.classList.remove("subscribe-btn-active");
  sideMenuLeft.classList.remove("side-menu-left-active");
});

// m-side-menu (뉴스룸 구독 버튼) hover
let mSideMenuLeft = document.querySelector(".m-side-menu-left");
let mSubscribeBtn = document.querySelector(".m-subscribe-btn");
mSideMenuLeft.addEventListener("mouseenter", function () {
  mSubscribeBtn.classList.add("m-subscribe-btn-active");
  mSideMenuLeft.classList.add("m-side-menu-left-active");
});
mSideMenuLeft.addEventListener("mouseleave", function () {
  mSubscribeBtn.classList.remove("m-subscribe-btn-active");
  mSideMenuLeft.classList.remove("m-side-menu-left-active");
});

// 검색 버튼 클릭 시
searchBtn.addEventListener("click", function () {
  blackBg.classList.add("black-box-active");
  searchBtn.style.display = "none";
  searchCloseBtn.style.display = "block";
  searchArea.classList.add("search-area-active");
  menuBtn.style.display = "none";
  if (winW < 1024) {
    document.querySelector("body").style.overflow = "hidden";
  }
});
searchCloseBtn.addEventListener("click", function () {
  blackBg.classList.remove("black-box-active");
  searchBtn.style.display = "block";
  searchCloseBtn.style.display = "none";
  searchArea.classList.remove("search-area-active");
  menuBtn.style.display = "block";
  if (winW < 1024) {
    document.querySelector("body").style.overflow = "visible";
  }
});

// gnb hover
mainMenu.addEventListener("mouseenter", function () {
  header.classList.add("header-active");
  blackBg.classList.add("black-box-active");
  mainMenu.classList.add("main-menu-active");
  if (winW > 1024) {
    for (let i = 0; i < subMenu.length; i++) {
      subMenu[i].classList.add("submenu-active");
    }
  }
});
mainMenu.addEventListener("mouseleave", function () {
  if (winW > 1024) {
    header.classList.remove("header-active");
    blackBg.classList.remove("black-box-active");
    mainMenu.classList.remove("main-menu-active");
  }
  for (let i = 0; i < subMenu.length; i++) {
    subMenu[i].classList.remove("submenu-active");
  }
});

// menu 버튼 클릭 시
menuBtn.addEventListener("click", function () {
  let checkHeaderActive = header.classList.contains("header-active");
  let mobileGnb = document.querySelector(".m-gnb-area");
  if (checkHeaderActive === false) {
    header.classList.add("header-active");
    menuBtn.classList.add("menu-btn-active");
    document.querySelector("body").style.overflow = "hidden";
    searchBtn.style.display = "none";
    mobileGnb.classList.add("m-gnb-area-active");
  } else {
    header.classList.remove("header-active");
    menuBtn.classList.remove("menu-btn-active");
    document.querySelector("body").style.overflow = "visible";
    searchBtn.style.display = "block";
    mobileGnb.classList.remove("m-gnb-area-active");
  }
});

// 모바일 버전(max-width: 1024px) gnb
let mMenuList = document.querySelectorAll(".m-menu > li");
let mSubMenu = document.querySelectorAll(".m-submenu");
let mNowFocus;
for (let i = 0; i < mMenuList.length; i++) {
  mMenuList[i].addEventListener("click", function () {
    changeFocus(i);
  });
}
function changeFocus(_index) {
  mMenuList.forEach(function (item) {
    item.classList.remove("li-active");
  });
  mSubMenu.forEach(function (item) {
    item.classList.remove("m-submenu-active");
  });

  if (mNowFocus !== _index) {
    mMenuList[_index].classList.add("li-active");
    mSubMenu[_index].classList.add("m-submenu-active");
    mNowFocus = _index;
  } else {
    mNowFocus = 1000;
  }
}
