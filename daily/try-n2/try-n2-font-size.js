(() => {
  "use strict";

  const storageKey = "tryN2ReadingFontPercentV1";
  const control = document.getElementById("reading-font-control");
  const toggle = document.getElementById("reading-font-toggle");
  const panel = document.getElementById("reading-font-panel");
  const range = document.getElementById("reading-font-range");
  const output = document.getElementById("reading-font-value");
  const reset = document.getElementById("reading-font-reset");
  if (!control || !toggle || !panel || !range || !output || !reset) return;

  function normalizePercent(value) {
    const number = Number(value);
    if (!Number.isFinite(number) || value === null || value === "") return 100;
    return Math.max(85, Math.min(150, Math.round(number / 5) * 5));
  }

  function applySize(value, persist = true) {
    const percent = normalizePercent(value);
    document.documentElement.style.setProperty("--try-n2-reading-scale", String(percent / 100));
    document.documentElement.setAttribute("data-reading-large-type", String(percent > 115));
    range.value = String(percent);
    range.setAttribute("aria-valuetext", `${percent}%`);
    output.textContent = `${percent}%`;
    if (persist) {
      try { localStorage.setItem(storageKey, String(percent)); } catch (_) { /* Private browsing can disable storage. */ }
    }
    window.dispatchEvent(new CustomEvent("try-n2:font-size-change"));
  }

  function setOpen(open, restoreFocus = false) {
    panel.hidden = !open;
    toggle.setAttribute("aria-expanded", String(open));
    if (open) range.focus({ preventScroll: true });
    else if (restoreFocus) toggle.focus({ preventScroll: true });
  }

  let saved = null;
  try { saved = localStorage.getItem(storageKey); } catch (_) { /* Keep the default when storage is unavailable. */ }
  applySize(saved, false);

  toggle.addEventListener("click", () => setOpen(panel.hidden));
  range.addEventListener("input", () => applySize(range.value));
  reset.addEventListener("click", () => applySize(100));
  document.addEventListener("pointerdown", (event) => {
    if (!panel.hidden && !control.contains(event.target)) setOpen(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !panel.hidden) {
      event.preventDefault();
      event.stopImmediatePropagation();
      setOpen(false, true);
    }
  }, true);
  control.addEventListener("focusout", (event) => {
    if (event.relatedTarget && !control.contains(event.relatedTarget)) setOpen(false);
  });
  window.addEventListener("storage", (event) => {
    if (event.key === storageKey || event.key === null) applySize(event.newValue, false);
  });
})();
