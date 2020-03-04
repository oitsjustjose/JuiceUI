let currentDisplayMode = "dark";

const updateDisplayModeIcons = () => {
    document.querySelectorAll(".display-mode-icon").forEach((el) => {
        if (currentDisplayMode == "dark") {
            el.innerHTML = "☀️";
        } else {
            el.innerHTML = "🌑";
        }
    });
};

const toggleDisplayMode = () => {
    if (currentDisplayMode == "dark") {
        window.localStorage.setItem("displayMode", "light");
        currentDisplayMode = "light";
        document.getElementById("themekit-css").href = "Libraries/css/themekit/main-light.css";
    } else {
        window.localStorage.setItem("displayMode", "dark");
        currentDisplayMode = "dark";
        document.getElementById("themekit-css").href = "Libraries/css/themekit/main-dark.css";
    }
    updateDisplayModeIcons();
};

window.addEventListener("DOMContentLoaded", (evt) => {
    if (window.localStorage.getItem("displayMode") != null) {
        currentDisplayMode = window.localStorage.getItem("displayMode");
    } else {
        window.localStorage.setItem("displayMode", "dark");
    }

    if (currentDisplayMode == "dark") {
        document.getElementById("themekit-css").href = "Libraries/css/themekit/main-dark.css";
    } else {
        document.getElementById("themekit-css").href = "Libraries/css/themekit/main-light.css";
    }
    updateDisplayModeIcons();
});