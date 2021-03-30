const nav = () => {
    const nav = document.querySelector(".nav");
    
    const navItems = [];
    for (let i = 0; i < 5; i++) {
        const item = document.createElement("div");
        item.textContent = "item " + (i + 1);
        navItems.push(item);
    }
    navItems[0].textContent = "Our restaurant";
    navItems[1].textContent = "Our menu";
    navItems[2].textContent = "Contact";
    navItems.forEach(item => { nav.appendChild(item);});
}


export {nav}