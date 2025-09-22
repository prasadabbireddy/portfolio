const hamburger = document.querySelector('.hamburger');
    const menu_Bar = document.querySelector('.navbar-menu .menu-bar');
    hamburger.addEventListener("click", () => {
        menu_Bar.classList.toggle("show");
    });