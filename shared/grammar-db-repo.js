(function () {
  window.GrammarDB = window.GrammarDB || {};

  const core = Array.isArray(window.GrammarDB.core) ? window.GrammarDB.core : [];
  const tags = Array.isArray(window.GrammarDB.tags) ? window.GrammarDB.tags : [];
  const resources = window.GrammarDB.resources || { comparisonNotes: {}, extraExamples: {} };
  const collections = window.GrammarDB.collections || { specialCollections: [], similarityGroups: [] };
  const legacyTryView = Array.isArray(window.GrammarDB.legacyTryView) ? window.GrammarDB.legacyTryView : [];

  const coreById = new Map(core.map((item) => [item.id, item]));
  const tagsById = new Map(tags.map((item) => [item.id, item]));
  const searchIdToCanonicalId = new Map();
  const canonicalIdToSearchId = new Map();

  core.forEach((item) => {
    const legacy = item.legacy || {};
    if (legacy.searchId != null) {
      searchIdToCanonicalId.set(Number(legacy.searchId), item.id);
      canonicalIdToSearchId.set(item.id, Number(legacy.searchId));
    }
  });

  function clone(value) {
    return value == null ? value : JSON.parse(JSON.stringify(value));
  }

  function normalizeQuery(value) {
    return String(value || "").trim().toLowerCase();
  }

  function normalizeLevels(filters) {
    if (!filters) return null;
    if (Array.isArray(filters.levels) && filters.levels.length) {
      return new Set(filters.levels);
    }
    if (filters.level) {
      return new Set([filters.level]);
    }
    return null;
  }

  function enrichGrammar(item) {
    if (!item) return null;
    const tag = tagsById.get(item.id) || {};
    const merged = Object.assign({}, clone(item), clone(tag));
    merged.legacy = Object.assign({}, clone(item.legacy) || {}, clone(tag.legacy) || {});
    return merged;
  }

  function matchesFilter(item, filters) {
    if (!filters) return true;
    const levels = normalizeLevels(filters);
    if (levels && !levels.has(item.level)) return false;
    if (filters.lessonNumber != null && Number(item.lessonNumber) !== Number(filters.lessonNumber)) return false;
    if (Array.isArray(filters.lessonNumbers) && filters.lessonNumbers.length) {
      const lessonNumbers = filters.lessonNumbers.map(Number);
      if (!lessonNumbers.includes(Number(item.lessonNumber))) return false;
    }
    if (filters.bookKey && item.bookKey !== filters.bookKey) return false;
    if (filters.bookLabel && item.bookLabel !== filters.bookLabel) return false;
    if (filters.macro && item.macro !== filters.macro) return false;
    if (filters.category && item.category !== filters.category) return false;
    return true;
  }

  function buildSearchTags(item) {
    const legacy = item.legacy || {};
    if (legacy.searchTags && String(legacy.searchTags).trim()) {
      return String(legacy.searchTags).trim();
    }
    const chunks = [
      item.keyword,
      item.macro,
      item.category,
      item.sourceMacro,
      item.sourceCategory,
      item.meaning
    ]
      .filter(Boolean)
      .map((value) => String(value).trim())
      .filter(Boolean);
    return [...new Set(chunks)].join(" ");
  }

  function resolveCanonicalId(id) {
    if (id == null) return null;
    if (coreById.has(id)) return id;
    const numeric = Number(id);
    if (!Number.isNaN(numeric) && searchIdToCanonicalId.has(numeric)) {
      return searchIdToCanonicalId.get(numeric);
    }
    return null;
  }

  function resolveSearchIdFromCanonicalId(id) {
    const canonicalId = resolveCanonicalId(id);
    if (!canonicalId) return null;
    return canonicalIdToSearchId.get(canonicalId) ?? null;
  }

  function buildSearchHaystack(item) {
    return [
      item.title,
      item.kana,
      item.romaji,
      item.meaning,
      item.keyword,
      item.macro,
      item.category,
      buildSearchTags(item),
      item.desc
    ]
      .filter(Boolean)
      .join("\n")
      .toLowerCase();
  }

  function scoreSearch(item, query) {
    const q = normalizeQuery(query);
    if (!q) return 0;
    const title = String(item.title || "").toLowerCase();
    const kana = String(item.kana || "").toLowerCase();
    const romaji = String(item.romaji || "").toLowerCase();
    const meaning = String(item.meaning || "").toLowerCase();
    const keyword = String(item.keyword || "").toLowerCase();
    const searchTags = buildSearchTags(item).toLowerCase();
    const haystack = buildSearchHaystack(item);

    let score = 0;
    if (title === q || kana === q || romaji === q) score += 120;
    if (title.includes(q)) score += 80;
    if (kana.includes(q)) score += 72;
    if (romaji.includes(q)) score += 68;
    if (meaning.includes(q)) score += 54;
    if (keyword.includes(q)) score += 46;
    if (searchTags.includes(q)) score += 32;
    if (haystack.includes(q)) score += 18;
    return score;
  }

  function toSearchItem(item) {
    const legacy = item.legacy || {};
    return {
      id: Number(legacy.searchId),
      title: item.title,
      romaji: item.romaji || "",
      kana: item.kana || "",
      tags: buildSearchTags(item),
      level: item.level,
      book: item.bookLabel,
      lesson: item.lesson,
      meaning: item.meaning,
      connection: item.connection,
      desc: item.desc,
      examples: clone(item.examples || []),
      related: (item.related || [])
        .map((relatedId) => resolveSearchIdFromCanonicalId(relatedId))
        .filter((relatedId) => relatedId != null),
      compareWith: clone(legacy.compareWith || []),
      lessonNumber: item.lessonNumber,
      sourceId: legacy.sourceId != null ? legacy.sourceId : legacy.sourceNumericId,
      macro: item.macro ?? null,
      category: item.category ?? null,
      keyword: item.keyword ?? null,
      firstKana: item.firstKana ?? null,
      sourceMacro: item.sourceMacro ?? null,
      sourceCategory: item.sourceCategory ?? null,
      sourcePage: legacy.sourcePage || null
    };
  }

  const repo = {
    getCanonicalGrammar(filters) {
      return clone(core.map(enrichGrammar).filter((item) => matchesFilter(item, filters)));
    },

    getGrammarById(id) {
      const canonicalId = resolveCanonicalId(id);
      return canonicalId ? enrichGrammar(coreById.get(canonicalId)) : null;
    },

    search(query, filters) {
      const items = core.map(enrichGrammar).filter((item) => matchesFilter(item, filters));
      const q = normalizeQuery(query);
      if (!q) {
        return clone(
          items.sort((a, b) => {
            if (a.level !== b.level) return a.level.localeCompare(b.level);
            if (a.lessonNumber !== b.lessonNumber) return Number(a.lessonNumber || 0) - Number(b.lessonNumber || 0);
            return String(a.title || "").localeCompare(String(b.title || ""));
          })
        );
      }
      return clone(
        items
          .map((item) => Object.assign({ _score: scoreSearch(item, q) }, item))
          .filter((item) => item._score > 0)
          .sort((a, b) => b._score - a._score || Number(a.lessonNumber || 0) - Number(b.lessonNumber || 0))
          .map(({ _score, ...item }) => item)
      );
    },

    getSearchDataset(filters) {
      return clone(core.map(enrichGrammar).filter((item) => matchesFilter(item, filters)).map(toSearchItem));
    },

    getComparisonNotes() {
      return clone(resources.comparisonNotes || {});
    },

    getExtraExamples() {
      return clone(resources.extraExamples || {});
    },

    getByLesson(level, lessonNumber) {
      return this.getCanonicalGrammar({ level, lessonNumber });
    },

    getLevelDataset(level) {
      return this.getSearchDataset({ level });
    },

    getCollections() {
      return clone(collections);
    },

    getLegacyTryView() {
      return clone(legacyTryView);
    },

    resolveCanonicalIdFromSearchId(searchId) {
      const numeric = Number(searchId);
      return searchIdToCanonicalId.get(numeric) || null;
    },

    resolveSearchIdFromCanonicalId
  };

  window.GrammarDB.repo = repo;
})();
