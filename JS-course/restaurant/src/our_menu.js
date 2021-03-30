const menu_page = () => {
    const main = document.querySelector(".main");
    
    const img = document.createElement("img");
    img.setAttribute("src", "food.jpg");
    main.appendChild(img);
}

export {menu_page}