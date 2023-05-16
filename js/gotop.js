window.onload = function () {
  const goTop = document.querySelector(".goTop");
  console.log(goTop);
  console.log(typeof goTop);
  goTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
};
