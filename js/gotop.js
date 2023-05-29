window.addEventListener("load", function () {
  const goTop = document.querySelector(".goTop");
  goTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
