(function () {
    "use strict";

    const links = Array.from(document.querySelectorAll(".wc-index-link"));
    const sections = links
        .map(link => document.querySelector(link.getAttribute("href")))
        .filter(Boolean);

    function setActive(id) {
        links.forEach(link => {
            const active = link.getAttribute("href") === "#" + id;
            link.classList.toggle("is-active", active);
            if (active) link.setAttribute("aria-current", "location");
            else link.removeAttribute("aria-current");
        });
    }

    links.forEach(link => {
        link.addEventListener("click", () => {
            const id = link.getAttribute("href").slice(1);
            setActive(id);
        });
    });

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(entries => {
            const visible = entries
                .filter(entry => entry.isIntersecting)
                .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
            if (visible[0]) setActive(visible[0].target.id);
        }, {
            rootMargin: "-18% 0px -68% 0px",
            threshold: [0, 0.1]
        });
        sections.forEach(section => observer.observe(section));
    }

    const initial = window.location.hash.slice(1);
    if (initial && document.getElementById(initial)) setActive(initial);

    const counterDialog = document.getElementById("quantityCounterDialog");
    const counterDialogTrigger = document.querySelector("[data-counter-table-trigger]");
    const counterDialogClose = counterDialog && counterDialog.querySelector(".wc-counter-dialog-close");

    if (counterDialog && counterDialogTrigger && counterDialogClose) {
        counterDialogTrigger.addEventListener("click", () => {
            counterDialog.showModal();
        });

        counterDialogClose.addEventListener("click", () => {
            counterDialog.close();
        });

        counterDialog.addEventListener("click", event => {
            if (event.target === counterDialog) counterDialog.close();
        });
    }
})();
