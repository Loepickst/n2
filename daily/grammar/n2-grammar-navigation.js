(() => {
  const script = document.currentScript;
  const moduleRoot = new URL('./', script.src);
  const siteRoot = new URL('../../', moduleRoot);
  const header = document.querySelector('[data-n2-grammar-header]');
  if (!header) return;
  const back = header.querySelector('a');
  if (back) window.N2AppBar.bindBack(back, {
    fallback: window.N2AppBar.safeTarget(back.getAttribute('href')) || new URL('index.html', moduleRoot).href,
    preserveHandler: true
  });
  if (header.classList.contains('n2-grammar-bar')) return;
  const icons = {
    back: '<path d="m14 6-6 6 6 6"/>',
    home: '<path d="m3 10 9-7 9 7M5 9v12h14V9M9 21v-8h6v8"/>',
    practice: '<path d="m15 5 4 4M4 20l4-1L20 7a2.8 2.8 0 0 0-4-4L4 15v5Z"/>'
  };
  const icon = name => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]}</svg>`;
  const titles = {
    'index.html': '文法学習', 'word-classes.html': 'ことばの種類', 'change.html': '動詞の活用',
    'sentence-structure.html': '文の構造', 'sentence-structure-practice.html': '長文理解の練習',
    'particle-concept.html': '助詞の分類', 'kakujyo.html': '格助詞の理解',
    'kakujyo_practice.html': '格助詞の練習', 'fukujoshi.html': '副助詞の理解',
    'heiretsujoshi.html': '並列助詞の理解', 'teijijyoshi.html': '提示助詞の理解',
    'setsuzokujoshi.html': '接続助詞の理解', 'shujoshi.html': '終助詞の理解',
    'conjunction.html': '接続詞の使い方', '复合格助词.html': '複合格助詞の理解',
    '复合格助词练习.html': '複合格助詞の練習', '敬语.html': '敬語の学習',
    'keigo-practice.html': '敬語の練習', 'conditional-comparison.html': '仮定表現',
    'formal-nouns.html': '形式名詞', 'te-auxiliary.html': '補助動詞',
    'appearance-expressions.html': '様態表現', 'demonstratives.html': '指示詞', 'affixes.html': '接頭辞・接尾辞'
  };
  const filename = decodeURIComponent(location.pathname.split('/').pop());
  const isDirectory = filename === 'index.html';
  const actions = [...header.querySelectorAll('a')].filter(link => link !== back);
  const detail = header.querySelector('.practice-header-rule');
  const inner = document.createElement('div');
  inner.className = 'n2-grammar-bar-inner n2-appbar-inner';
  const left = document.createElement('div');
  left.className = 'n2-grammar-bar-left n2-appbar-leading';
  if (back) {
    const originalLabel = back.textContent.trim();
    const original = document.createElement('span');
    original.className = 'n2-grammar-original-label';
    original.hidden = true;
    // Preserve IDs used by practice/back handlers while normalizing the visible label.
    original.append(...back.childNodes);
    back.append(original);
    back.insertAdjacentHTML('beforeend', icon('back') + '<span class="n2-grammar-button-label n2-appbar-label">返回</span>');
    back.classList.add('n2-grammar-nav-back', 'n2-appbar-control', 'n2-appbar-back');
    back.setAttribute('aria-label', isDirectory ? '返回 N2 首页' : '返回上一学习页');
    back.title = originalLabel || '返回';
    left.append(back);
  }
  const title = document.createElement('div');
  title.className = 'n2-grammar-bar-title n2-appbar-title';
  title.lang = 'ja';
  title.textContent = titles[filename] || '例文の出典';
  title.title = title.textContent;
  const right = document.createElement('nav');
  right.className = 'n2-grammar-bar-actions n2-appbar-actions';
  right.setAttribute('aria-label', '学习页操作');
  if (detail) { detail.classList.add('n2-grammar-bar-detail'); right.append(detail); }
  for (const action of actions) {
    const text = action.textContent.trim().replace(/→/g, '').trim();
    action.classList.add('n2-grammar-nav-action', 'n2-appbar-control', 'n2-appbar-context');
    action.setAttribute('aria-label', text || '进入练习');
    action.title = text;
    const original = document.createElement('span');
    original.hidden = true;
    original.className = 'n2-grammar-original-label';
    original.append(...action.childNodes);
    action.append(original);
    action.insertAdjacentHTML('beforeend', icon('practice') + '<span class="n2-grammar-button-label n2-appbar-label">练习</span>');
    right.append(action);
  }
  const home = document.createElement('a');
  home.className = 'n2-grammar-home n2-appbar-control';
  home.href = new URL('index.html#daily', siteRoot).href;
  home.setAttribute('aria-label', '返回 N2 首页');
  home.innerHTML = icon('home') + '<span class="n2-grammar-button-label n2-appbar-label">首页</span>';
  if (!isDirectory) right.append(home);
  else { const count = document.createElement('span'); count.className = 'n2-grammar-bar-count'; count.textContent = '19 主题'; right.append(count); }
  inner.append(left, title, right);
  header.replaceChildren(inner);
  header.classList.add('n2-grammar-bar', 'n2-appbar');
})();
