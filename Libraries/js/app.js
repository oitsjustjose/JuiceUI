const rotate = ($elem, angle) => {
    $({ deg: 0 }).animate({ deg: angle }, {
        duration: 150,
        step: function (now) {
            $elem.css({
                transform: 'rotate(' + now + 'deg)'
            });
        }
    });
};

const unrotate = ($elem, angle) => {
    $({ deg: angle }).animate({ deg: 0 }, {
        duration: 150,
        step: function (now) {
            $elem.css({
                transform: 'rotate(' + now + 'deg)'
            });
        }
    });
};

const toggleSubMenu = (el) => {
    $(`[for="${el.getAttribute("from")}"`).toggle("slide", "down");

    let icon = el.querySelector("i.fa");
    let isOpen = icon.hasAttribute("submenuOpen") ? parseInt(icon.getAttribute("submenuOpen")) : 0;

    if (isOpen == 1) {
        unrotate($(icon), 90);
        icon.setAttribute("submenuOpen", 0);
    } else { // Not open..
        rotate($(icon), 90);
        icon.setAttribute("submenuOpen", 1);
    }
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