(function () {
    "use strict";

    const links = Array.from(document.querySelectorAll("#appearanceIndexList .wc-index-link"));
    const sections = links
        .map((link) => {
            const id = (link.getAttribute("href") || "").replace(/^#/, "");
            return id ? document.getElementById(id) : null;
        })
        .filter(Boolean);

    if (!links.length || !sections.length) return;

    function setActive(id) {
        links.forEach((link) => {
            const active = link.getAttribute("href") === `#${id}`;
            link.classList.toggle("is-active", active);
            if (active) {
                link.setAttribute("aria-current", "location");
            } else {
                link.removeAttribute("aria-current");
            }
        });
    }

    links.forEach((link) => {
        link.addEventListener("click", () => {
            const id = (link.getAttribute("href") || "").replace(/^#/, "");
            if (id) setActive(id);
        });
    });

    const observer = new IntersectionObserver((entries) => {
        const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length) setActive(visible[0].target.id);
    }, {
        rootMargin: "-18% 0px -68% 0px",
        threshold: 0
    });

    sections.forEach((section) => observer.observe(section));

    const initialId = window.location.hash.replace(/^#/, "");
    if (initialId && sections.some((section) => section.id === initialId)) {
        setActive(initialId);
    } else {
        setActive(sections[0].id);
    }
})();
