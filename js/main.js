var menuBtn = document.querySelector(".menu-btn");
var bars = document.querySelector(".bars");
var nav = document.querySelector(".nav");
var menuNav = document.querySelector(".menu-nav");
var navItems = document.querySelectorAll(".menu-nav-item");
var showMenu = false;

menuBtn.addEventListener("click", change);

function change() {

    if (!showMenu) {
        bars.classList.add('open');
        nav.classList.add("open");
        menuNav.classList.add("open");
        navItems.forEach(item => item.classList.add("open"));
        showMenu = true;
    } else {
        bars.classList.remove('open');
        nav.classList.remove("open");
        menuNav.classList.remove("open");
        navItems.forEach(item => item.classList.remove("open"));
        showMenu = false;
    }
}