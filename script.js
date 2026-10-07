const openMenu = document.querySelector("#openMenu");
const closeMenu = document.querySelector("#closeMenu");
const mobileMenu = document.querySelector("#mobileMenu");

openMenu.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});
