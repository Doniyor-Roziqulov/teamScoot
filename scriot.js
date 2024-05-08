const elHamburgerBtn = document.querySelector("#hamburger"),
  elFilter = document.querySelector(".filter"),
  elHeaderList = document.querySelector("#navbar");

elHamburgerBtn.addEventListener("click", () => {
  document.body.classList.toggle("overflow");
  elHeaderList.classList.toggle("hidden");
  elFilter.classList.toggle("hidden");
  elHamburgerBtn.classList.toggle("cross");
});
