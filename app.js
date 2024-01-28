const menuEl = document.getElementById("menu");
const hamEl = document.getElementById("hamburger");
const closeEl = document.getElementById("close");
const Nav = document.getElementById("mobileNav");
const connectEl = document.getElementById("connect");
const connectMenu = document.getElementById("connectMenu");
const menuItem = document.querySelectorAll(".menu-Item");

hamEl.onclick = () => {
  hamEl.classList.toggle("hidden");
  closeEl.classList.remove("hidden");
  Nav.classList.remove("hidden");
};

closeEl.onclick = () => {
  closeEl.classList.toggle("hidden");
  hamEl.classList.remove("hidden");
  Nav.classList.add("hidden");
};

menuItem.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.target.parentElement.nextElementSibling.classList.toggle("hidden");
  });
});
