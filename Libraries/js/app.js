const isMobile = () => {
    return window.innerWidth < 767;
};


$(document).ready(() => {

    if (isMobile()) {
        // alert("'Detected' mobile device; fixing things up");
        let titlebars = document.querySelectorAll(".titlebar");

        titlebars.forEach((titlebar) => {

            // titlebar.childNodes.forEach((child)) => {

            // };
        });
    }

});

