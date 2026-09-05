(function () {
    "use strict";

    // Count calendar days in China time, regardless of the device's timezone.
    const examDay = Date.parse("2026-12-06T00:00:00+08:00");
    const dayLength = 24 * 60 * 60 * 1000;
    const labels = document.querySelectorAll(".tool-countdown .countdown-copy");
    if (!labels.length) return;

    function updateCountdown() {
        const days = Math.ceil((examDay - Date.now()) / dayLength);
        const copy = days > 0
            ? `试炼还有 ${days} 天降临`
            : days === 0 ? "试炼今日降临" : "本轮试炼已降临";
        labels.forEach((label) => {
            if (label.textContent !== copy) label.textContent = copy;
        });
    }

    updateCountdown();
    window.setInterval(updateCountdown, 60 * 1000);
    window.addEventListener("pageshow", updateCountdown);
    document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "visible") updateCountdown();
    });
})();
