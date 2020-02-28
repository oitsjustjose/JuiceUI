$(document).ready(() => {
    // Close when clicking on *not* the modal-contents
    window.onclick = (event) => {
        if (event.target.classList.contains("modal")) {
            event.target.style.visibility = 'hidden';
            event.target.style.opacity = 0;
            document.body.classList.remove("no-scroll");
        }
    };

    document.querySelectorAll(".modal .close").forEach((closeBtn) => {
        closeBtn.addEventListener('click', (evt) => {
            closeBtn.parentElement.parentElement.style.visibility = 'hidden';
            closeBtn.parentElement.parentElement.style.opacity = 0;
            document.body.classList.remove("no-scroll");
        });
    });

    document.querySelectorAll("[for-modal]").forEach((modalTrigerEl) => {
        modalTrigerEl.addEventListener('click', (evt) => {
            document.getElementById(modalTrigerEl.getAttribute("for-modal")).style.visibility = "visible";
            document.getElementById(modalTrigerEl.getAttribute("for-modal")).style.opacity = 1;
            document.body.classList.add("no-scroll");
        });
    });
});

