const closeNav = () => {
  const nav = document.querySelector("#nav");
  const visibleNavElements = document.querySelectorAll("#nav.visible, #nav .visible");
  visibleNavElements.forEach((element) => {
    element.classList.remove("visible");
  });
};

const openNav = () => {
  const nav = document.querySelector("#nav");
  nav.classList.add("visible");
};

const navItems = document.querySelectorAll(".navItem");
navItems.forEach((item) => {
  const subItems = item.querySelectorAll(".subNavItem");
  item.addEventListener("click", () => {
    // close all other submenus
    const visibleSubItems = document.querySelectorAll(".subNavItem.visible");
    visibleSubItems.forEach((subItem) => {
      subItem.classList.toggle("visible");
    });
    // open this submenu
    subItems.forEach((subItem) => {
      subItem.classList.toggle("visible");
      subItem.addEventListener("click", () => {
        closeNav();
        console.log("subitem clicked");
      });
    });
  });
});

const navIcon = document.querySelector(".navIcon");
navIcon.addEventListener("click", () => {
  openNav();
  console.log("navicon clicked");
});

const navCloseBtn = document.querySelector(".navCloseBtn");
navCloseBtn.addEventListener("click", () => {
  closeNav();
  console.log("navCloseBtn clicked");
});

const carousellContent = document.querySelector('.carousellContent')
let carousellActive = carousellContent.firstElementChild;
carousellActive.classList.add('visible');

const carousellLeft = document.querySelector('.carousellLeft');
carousellLeft.addEventListener('click', () => {
  carousellActive.classList.remove('visible');
  if (carousellActive.previousElementSibling) {
    carousellActive = carousellActive.previousElementSibling;
  } else {
    carousellActive = carousellActive.parentElement.lastElementChild;
  }
  carousellActive.classList.add('visible');
});

const carousellRight = document.querySelector('.carousellRight');
carousellRight.addEventListener('click', () => {
  carousellActive.classList.remove('visible');
  if (carousellActive.nextElementSibling) {
    carousellActive = carousellActive.nextElementSibling;
  } else {
    carousellActive = carousellActive.parentElement.firstElementChild;
  }
  carousellActive.classList.add('visible');
});