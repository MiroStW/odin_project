import {initial_page} from "./initial_page.js";
initial_page();

import {nav} from "./nav.js";
nav();

import {restaurant_page} from "./our_restaurant.js";
import {menu_page} from "./our_menu.js";

const navItems = document.querySelectorAll(".nav div");

for (let i = 0; i < navItems.length; i++) {
    const item = navItems[i];
    item.addEventListener("click",() => {showContent(i)});
}

function showContent (index) {
    console.log("item clicked: " + index);
    switch (index) {
        case 0:
            clearContent();
            restaurant_page();
            break;
            
        case 1:
            clearContent();
            menu_page();
            break;

        case 2:
            clearContent();
            break;

        case 3:
            clearContent();
            break;

        case 4:
            clearContent();
            break;
    
        default:
            break;
    }
}

function clearContent () {
    const content = document.querySelector(".main").childNodes;
    content.forEach(child => {child.remove()});
}