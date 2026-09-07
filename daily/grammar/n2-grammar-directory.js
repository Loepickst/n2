(() => {
  const key = 'n2GrammarLastViewedV1';
  function restoreLastViewed() {
    let id;
    try { id = localStorage.getItem(key); } catch { return; }
    document.querySelectorAll('[data-grammar-directory-entry]').forEach(link => {
      link.classList.toggle('is-last-viewed', link.dataset.grammarDirectoryEntry === id);
    });
  }
  document.addEventListener('click', event => {
    const link = event.target.closest('[data-grammar-directory-entry]');
    if (!link) return;
    try { localStorage.setItem(key, link.dataset.grammarDirectoryEntry); } catch { /* Navigation still works. */ }
  });
  window.addEventListener('pageshow', restoreLastViewed);
  restoreLastViewed();
})();
