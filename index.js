const openNav = document.getElementById("mobile-nav-menu");
const navMenu = document.getElementById("nav-menu");

openNav.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  openNav.classList.toggle("show");
});
