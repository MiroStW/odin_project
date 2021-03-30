const restaurant_page = () => {
    const main = document.querySelector(".main");
    
    const img = document.createElement("img");
    img.setAttribute("src", "restaurant.png");
    main.appendChild(img);
}

export {restaurant_page}