const initial_page = () => {
    const container = document.querySelector("#content");

    //header
    const headerDiv = document.createElement("div");
    headerDiv.classList.add("header");
    const header = document.createElement("h1");
    header.textContent = "Restaurant";
    headerDiv.appendChild(header);
    container.appendChild(headerDiv);

    //nav
    const nav = document.createElement("div");
    nav.classList.add("nav");
    container.appendChild(nav);

    //main
    const main = document.createElement("div");
    main.classList.add("main");
    container.appendChild(main);

}

export {initial_page}