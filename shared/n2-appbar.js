(() => {
  'use strict';
  const siteRoot = new URL('../', document.currentScript.src);
  const bindings = new WeakMap();
  function safeTarget(value, base = location.href) {
    if (!value) return null;
    try {
      const candidate = new URL(value, base);
      if (!['http:', 'https:', 'file:'].includes(candidate.protocol)
        || candidate.protocol !== siteRoot.protocol || candidate.origin !== siteRoot.origin
        || candidate.host !== siteRoot.host || candidate.username || candidate.password) return null;
      // Decode before checking the project boundary, including file:// deployments.
      const pathname = decodeURIComponent(candidate.pathname);
      const rootPath = decodeURIComponent(siteRoot.pathname);
      if (/[\\\u0000-\u001f]/.test(pathname) || /%2f|%5c|%2e/i.test(pathname)
        || pathname.split('/').some(part => part === '.' || part === '..')
        || !pathname.startsWith(rootPath)) return null;
      return candidate;
    } catch { return null; }
  }
  function bindBack(element, options = {}) {
    if (!element) return;
    const fallback = safeTarget(options.fallback) || new URL('index.html#daily', siteRoot);
    const returnValue = new URLSearchParams(location.search).get('return');
    element.dataset.n2SafeBack = '';
    element.href = (safeTarget(returnValue) || fallback).href;
    bindings.set(element, {fallback, hasReturn: returnValue !== null, preserveHandler: !!options.preserveHandler});
    // Page-specific stateful back helpers may subsequently rewrite the same link.
    if (typeof MutationObserver === 'function') {
      new MutationObserver(() => {
        const target = returnValue !== null ? safeTarget(returnValue) || fallback : safeTarget(element.href) || fallback;
        if (element.href !== target.href) element.href = target.href;
      }).observe(element, {attributes: true, attributeFilter: ['href']});
    }
  }
  // Capture before existing element handlers, while keeping native modified-link clicks.
  document.addEventListener('click', event => {
    const element = event.target.closest?.('[data-n2-safe-back]');
    const binding = element && bindings.get(element);
    if (!binding) return;
    if (!safeTarget(element.href)) element.href = binding.fallback.href;
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (binding.preserveHandler && !binding.hasReturn && safeTarget(element.href)) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    const returnValue = new URLSearchParams(location.search).get('return');
    location.assign((safeTarget(returnValue) || binding.fallback).href);
  }, true);
  window.N2AppBar = Object.freeze({safeTarget, bindBack, siteRoot});
})();
