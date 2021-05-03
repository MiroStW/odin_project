const closeNav = () => {
  const nav = document.querySelector("#nav");
  const visibleNavElements = document.querySelectorAll(
    "#nav.visible, #nav .visible"
  );
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

const carousellContent = document.querySelector(".carousellContent");
let carousellActive = carousellContent.firstElementChild;
carousellActive.classList.add("visible");

const carousellLeft = document.querySelector(".carousellLeft");
carousellLeft.addEventListener("click", () => {carousellShowPrevious()});

const carousellRight = document.querySelector(".carousellRight");
carousellRight.addEventListener("click", () => carousellShowNext());

const carousellSetActive = (newActiveElement) => {
  carousellNav.querySelector(".active").classList.remove("active");
  carousellActive.classList.remove("visible");
  carousellActive = newActiveElement;
  carousellActive.classList.add("visible");
  carousellActive.parentElement.children.length;
  const indexOfActive = Array.prototype.indexOf.call(
    carousellContent.children,
    carousellActive
  );
  const activeNavItem = carousellNav.children.item(indexOfActive);
  activeNavItem.classList.add("active");
};

const carousellShowPrevious = () => {
  if (carousellActive.previousElementSibling) {
    carousellSetActive(carousellActive.previousElementSibling);
  } else {
    carousellSetActive(carousellActive.parentElement.lastElementChild);
  }
};

const carousellShowNext = () => {
  if (carousellActive.nextElementSibling) {
    carousellSetActive(carousellActive.nextElementSibling);
  } else {
    carousellSetActive(carousellActive.parentElement.firstElementChild);
  }
};

const carousellAutoAdvance = setInterval(carousellShowNext, 5000);

const carousellNav = document.querySelector(".carousellNav");
for (let i = 0; i < carousellContent.children.length; i++) {
  const content = carousellContent.children[i];
  const navItem = document.createElement("div");
  if (i == 0) {
    navItem.classList.add('active');
  }
  navItem.classList.add("carousellNavItem");
  // if(i=0) {navItem.classList.add("active");}
  navItem.addEventListener("click", () => {
    // carousellNav.querySelector('.active').classList.toggle('active');
    carousellSetActive(content);
    clearInterval(carousellAutoAdvance);
    navItem.classList.add("active");
  });

  carousellNav.appendChild(navItem);
}
