(function () {
  "use strict";

  const SELECTOR = "[data-grammar-favorite], [data-grammar-local-id][data-grammar-source-key]";
  let unsubscribe = null;
  let observer = null;

  function favorites() {
    return window.GrammarFavorites || null;
  }

  function repo() {
    return window.GrammarDB && window.GrammarDB.repo ? window.GrammarDB.repo : null;
  }

  function catalog() {
    return window.GrammarLearningCatalog || null;
  }

  function resolveButtonId(button) {
    if (!button) return null;
    const direct = String(button.getAttribute("data-grammar-favorite") || "").trim();
    if (direct) return direct;
    const sourceKey = String(button.getAttribute("data-grammar-source-key") || document.body.dataset.grammarSourceKey || "").trim();
    const localId = String(button.getAttribute("data-grammar-local-id") || "").trim();
    const registry = catalog();
    const grammarId = registry && sourceKey && localId
      ? registry.resolve(sourceKey, localId)
      : null;
    if (grammarId) button.setAttribute("data-grammar-favorite", grammarId);
    return grammarId;
  }

  function isValid(grammarId) {
    const database = repo();
    return Boolean(grammarId && database && database.getGrammarById(grammarId));
  }

  function ensureMarkup(button) {
    if (!button.classList.contains("grammar-learning-favorite")) {
      button.classList.add("grammar-learning-favorite");
    }
    if (!button.querySelector(".grammar-learning-favorite-icon")) {
      button.textContent = "";
      const icon = document.createElement("span");
      icon.className = "grammar-learning-favorite-icon";
      icon.setAttribute("aria-hidden", "true");
      const label = document.createElement("span");
      label.className = "grammar-learning-favorite-label";
      button.append(icon, label);
    }
  }

  function renderButton(button) {
    ensureMarkup(button);
    const grammarId = resolveButtonId(button);
    const valid = isValid(grammarId);
    const service = favorites();
    const active = Boolean(valid && service && service.has(grammarId));
    const icon = button.querySelector(".grammar-learning-favorite-icon");
    const label = button.querySelector(".grammar-learning-favorite-label");
    if (icon) icon.textContent = active ? "★" : "☆";
    if (label) label.textContent = active ? "已收藏" : "收藏";
    button.setAttribute("aria-pressed", active ? "true" : "false");
    button.setAttribute("aria-label", valid
      ? `${active ? "取消收藏" : "收藏"}${button.dataset.grammarTitle ? `：${button.dataset.grammarTitle}` : ""}`
      : "语法记录不可用");
    button.disabled = !valid;
    button.dataset.grammarFavoriteMounted = "true";
  }

  function refresh(root) {
    const scope = root && root.querySelectorAll ? root : document;
    if (scope.matches && scope.matches(SELECTOR)) renderButton(scope);
    scope.querySelectorAll(SELECTOR).forEach(renderButton);
  }

  function handleClick(event) {
    const button = event.target.closest(SELECTOR);
    if (!button || button.disabled) return;
    const grammarId = resolveButtonId(button);
    const service = favorites();
    if (!grammarId || !service) return;
    event.preventDefault();
    event.stopPropagation();
    service.toggle(grammarId);
    refresh(document);
  }

  function mount(root) {
    const scope = root && root.querySelectorAll ? root : document;
    refresh(scope);
    if (!document.documentElement.dataset.grammarLearningFavoritesMounted) {
      document.documentElement.dataset.grammarLearningFavoritesMounted = "true";
      document.addEventListener("click", handleClick);
      const service = favorites();
      if (service && typeof service.subscribe === "function") {
        unsubscribe = service.subscribe(() => refresh(document));
      }
      observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === 1) refresh(node);
          });
        });
      });
      observer.observe(document.body, { childList: true, subtree: true });
    }
  }

  window.GrammarLearningFavorites = {
    mount,
    refresh,
    destroy() {
      if (unsubscribe) unsubscribe();
      if (observer) observer.disconnect();
      document.removeEventListener("click", handleClick);
      delete document.documentElement.dataset.grammarLearningFavoritesMounted;
      unsubscribe = null;
      observer = null;
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => mount(document), { once: true });
  } else {
    mount(document);
  }
})();
