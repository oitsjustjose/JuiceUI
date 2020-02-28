$(document).ready(() => {
    // Close when clicking on *not* the modal-contents
    window.onclick = (event) => {
        if (event.target.classList.contains("modal")) {
            $(event.target).slideUp(150);
            document.body.classList.remove("no-scroll");
        }
    };

    document.querySelectorAll(".modal .close").forEach((closeBtn) => {
        closeBtn.addEventListener('click', (evt) => {
            $(closeBtn.parentElement.parentElement).slideUp(150);
            // closeBtn.parentElement.parentElement.style.display = 'none';
            document.body.classList.remove("no-scroll");
        });
    });

    document.querySelectorAll("[for-modal]").forEach((modalTrigerEl) => {
        modalTrigerEl.addEventListener('click', (evt) => {
            $(`#${modalTrigerEl.getAttribute("for-modal")}`).slideDown(150);
            // document.getElementById().style.display = "block";
            document.body.classList.add("no-scroll");
        });
    });
});

