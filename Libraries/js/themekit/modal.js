$(document).ready(() => {
    // Close when clicking on *not* the modal-contents
    window.onclick = (event) => {
        if (event.target.classList.contains("modal")) {
            $(event.target).hide("fade", {
                direction: "out",
            }, 300);
            document.body.classList.remove("no-scroll");
        }
    };

    document.querySelectorAll(".modal .close").forEach((closeBtn) => {
        closeBtn.addEventListener('click', (evt) => {
            $(closeBtn.parentElement.parentElement).hide("fade", {
                direction: "out",
            }, 300);
            document.body.classList.remove("no-scroll");
        });
    });

    document.querySelectorAll("[for-modal]").forEach((modalTrigerEl) => {
        modalTrigerEl.addEventListener('click', (evt) => {
            // document.getElementById(modalTrigerEl.getAttribute("for-modal")).style.display = "flex";
            $(`#${modalTrigerEl.getAttribute("for-modal")}`).show("fade", {
                direction: "in",
            }, 300);
            document.body.classList.add("no-scroll");
        });
    });
});

$(document).ready(() => {
    document.querySelectorAll("[for-modal]").forEach((modalTrigerEl) => {
        $(`#${modalTrigerEl.getAttribute("for-modal")}`).hide();
    });
});

