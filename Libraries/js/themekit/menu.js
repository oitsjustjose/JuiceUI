/**
 * Uses ZERO Jquery!!
 */

let menuOpen = false;

const toggleSubMenu = (el) => {
    $(`[for="${el.getAttribute("from")}"`).toggle("slide", "down");

    let icon = el.querySelector("i.fa");
    let isOpen = icon.hasAttribute("submenuOpen") ? parseInt(icon.getAttribute("submenuOpen")) : 0;

    if (isOpen == 1) {
        icon.style.transition = "transform ease-in-out 250ms";
        icon.style.transform = "rotate(0deg)";
        icon.setAttribute("submenuOpen", 0);
    } else { // Not open..
        icon.style.transition = "transform ease-in-out 250ms";
        icon.style.transform = "rotate(90deg)";
        icon.setAttribute("submenuOpen", 1);
    }
};

const toggleMenu = () => {
    let menu = document.querySelector(".mobile-menu");
    menuOpen = !menuOpen;

    if (menuOpen) {
        menu.classList.add("visible");
        document.body.classList.add("no-scroll");
    } else {
        menu.classList.remove("visible");
        document.body.classList.remove("no-scroll");
    }
};

window.addEventListener("DOMContentLoaded", (evt) => {
    document.querySelectorAll(".compact.submenu.item").forEach((el) => {
        let id = `subMenu_${new Date().getMilliseconds()}`;
        el.setAttribute("from", id);

        el.querySelectorAll(".compact.sub.item").forEach((child) => {
            child.setAttribute("for", id);
            child.style.display = "none";
            child.textContent = `${child.textContent}`;
            el.parentElement.appendChild(child);
        });
    });
});