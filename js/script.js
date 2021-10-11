const hambuger = document.getElementById("hamburger");
const navUL = document.getElementById("nav-ul");
const navContainer = document.getElementById("fixed");

hamburger.addEventListener('click', () => {
  navUL.classList.toggle("show");
  navContainer.classList.toggle("fixed");
});