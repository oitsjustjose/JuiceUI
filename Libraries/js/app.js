const toggleSubMenu = (el) => {
    $(`[for="${el.getAttribute("from")}"`).toggle("slide", "down");

    // TODO: do something with these
};

const toggleMenu = () => {
    $(".mobile-menu").toggle("slide", "left");
};

$(document).ready(() => {
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