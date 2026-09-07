(function () {
  "use strict";

  const STORAGE_KEY = "kikiGrammarFavoritesV2";
  const LEGACY_KEYS = ["kikiGrammarFavoritesV1", "n1_favorites_v2"];
  const LEGACY_BACKUP_KEY = "kikiGrammarFavoritesLegacyBackupV1";
  const CORRUPT_BACKUP_KEY = "kikiGrammarFavoritesCorruptBackupV2";
  const EVENT_NAME = "kiki:grammar-favorites-change";
  const subscribers = new Set();

  function getRepo() {
    return window.GrammarDB && window.GrammarDB.repo ? window.GrammarDB.repo : null;
  }

  function clone(value) {
    return value == null ? value : JSON.parse(JSON.stringify(value));
  }

  function nowIso() {
    return new Date().toISOString();
  }

  function safeRead(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (error) {
      return null;
    }
  }

  function safeWrite(key, value) {
    try {
      window.localStorage.setItem(key, value);
      return true;
    } catch (error) {
      return false;
    }
  }

  function parseJson(value) {
    if (!value) return null;
    try {
      return JSON.parse(value);
    } catch (error) {
      return null;
    }
  }

  function resolveCanonicalId(value) {
    const repo = getRepo();
    if (!repo || value == null) return null;

    const raw = typeof value === "object" ? value.grammarId : value;
    const direct = String(raw || "").trim();
    if (!direct) return null;

    const numeric = Number(raw);
    if (/^\d+$/.test(direct) && !Number.isNaN(numeric) && typeof repo.resolveCanonicalIdFromSearchId === "function") {
      return repo.resolveCanonicalIdFromSearchId(numeric) || null;
    }

    if (typeof repo.getGrammarById === "function") {
      const grammar = repo.getGrammarById(direct);
      if (grammar) return String(grammar.id || direct);
    }

    return null;
  }

  function normalizeItems(items) {
    const seen = new Set();
    return (Array.isArray(items) ? items : [])
      .map((item) => {
        const grammarId = resolveCanonicalId(item);
        if (!grammarId || seen.has(grammarId)) return null;
        seen.add(grammarId);
        return {
          grammarId,
          addedAt: item && typeof item === "object" && item.addedAt
            ? String(item.addedAt)
            : nowIso()
        };
      })
      .filter(Boolean);
  }

  function makeState(items, updatedAt) {
    return {
      version: 2,
      updatedAt: updatedAt || nowIso(),
      items: normalizeItems(items)
    };
  }

  function backupCorruptValue(raw) {
    if (!raw || safeRead(CORRUPT_BACKUP_KEY)) return;
    safeWrite(CORRUPT_BACKUP_KEY, JSON.stringify({
      capturedAt: nowIso(),
      value: raw
    }));
  }

  function migrateLegacy() {
    const legacyValues = {};
    LEGACY_KEYS.forEach((key) => {
      const value = safeRead(key);
      if (value != null) legacyValues[key] = value;
    });

    if (Object.keys(legacyValues).length && !safeRead(LEGACY_BACKUP_KEY)) {
      safeWrite(LEGACY_BACKUP_KEY, JSON.stringify({
        capturedAt: nowIso(),
        values: legacyValues
      }));
    }

    const source = LEGACY_KEYS
      .map((key) => parseJson(legacyValues[key]))
      .find((value) => Array.isArray(value)) || [];

    const migrated = makeState(source);
    safeWrite(STORAGE_KEY, JSON.stringify(migrated));
    return migrated;
  }

  function loadState() {
    const raw = safeRead(STORAGE_KEY);
    if (!raw) return migrateLegacy();

    const parsed = parseJson(raw);
    if (!parsed || parsed.version !== 2 || !Array.isArray(parsed.items)) {
      backupCorruptValue(raw);
      return migrateLegacy();
    }

    return makeState(parsed.items, parsed.updatedAt);
  }

  let state = loadState();

  function notify(source) {
    const detail = {
      source: source || "local",
      items: clone(state.items),
      count: state.items.length
    };
    subscribers.forEach((listener) => {
      try {
        listener(detail);
      } catch (error) {
        // One subscriber should never block the rest of the page.
      }
    });
    window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail }));
  }

  function persist(source) {
    state.updatedAt = nowIso();
    safeWrite(STORAGE_KEY, JSON.stringify(state));
    notify(source);
  }

  function getAll() {
    return clone(state.items);
  }

  function has(grammarId) {
    const canonicalId = resolveCanonicalId(grammarId);
    return canonicalId
      ? state.items.some((item) => item.grammarId === canonicalId)
      : false;
  }

  function add(grammarId) {
    const canonicalId = resolveCanonicalId(grammarId);
    if (!canonicalId) {
      return { favorited: false, count: state.items.length };
    }
    if (!has(canonicalId)) {
      state.items.push({ grammarId: canonicalId, addedAt: nowIso() });
      persist("add");
    }
    return { favorited: true, count: state.items.length };
  }

  function remove(grammarId) {
    const canonicalId = resolveCanonicalId(grammarId);
    if (!canonicalId) {
      return { favorited: false, count: state.items.length };
    }
    const nextItems = state.items.filter((item) => item.grammarId !== canonicalId);
    if (nextItems.length !== state.items.length) {
      state.items = nextItems;
      persist("remove");
    }
    return { favorited: false, count: state.items.length };
  }

  function toggle(grammarId) {
    return has(grammarId) ? remove(grammarId) : add(grammarId);
  }

  function subscribe(listener) {
    if (typeof listener !== "function") return function () {};
    subscribers.add(listener);
    return function () {
      subscribers.delete(listener);
    };
  }

  window.addEventListener("storage", (event) => {
    if (event.key !== STORAGE_KEY) return;
    const parsed = parseJson(event.newValue);
    state = parsed && parsed.version === 2 && Array.isArray(parsed.items)
      ? makeState(parsed.items, parsed.updatedAt)
      : makeState([]);
    notify("storage");
  });

  window.GrammarFavorites = {
    storageKey: STORAGE_KEY,
    eventName: EVENT_NAME,
    getAll,
    has,
    add,
    remove,
    toggle,
    subscribe
  };
})();
