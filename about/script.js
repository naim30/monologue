let closeMenuButton = document.querySelector(".close-button");
let menuButton = document.querySelector(".menu-button");
let menu = document.querySelector(".menu");

function openMenu() {
  console.log("openMenu");
  menu.classList.remove("hideMenu");
  menu.classList.add("showMenu");
}

function closeMenu() {
  console.log("closeMenu");
  menu.classList.remove("showMenu");
  menu.classList.add("hideMenu");
}

closeMenuButton.addEventListener("click", closeMenu);
menuButton.addEventListener("click", openMenu);

let wrapper = document.querySelector(".wrapper");
wrapper.classList.add("showAbout");
