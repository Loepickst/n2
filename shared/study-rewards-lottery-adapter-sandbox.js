(function(global) {
    'use strict';

    const COLLECTION_KEY = 'omikujiCollection_sandbox';
    const COLLECTION_META_KEY = 'omikujiCollectionMeta_sandbox_v1';
    const LAST_OBTAINED_KEY = 'omikujiLastObtained_sandbox_v1';

    function getRoot() {
        const root = global.KikiStudyRewardsSandbox = global.KikiStudyRewardsSandbox || {};
        root.adapters = root.adapters || {};
        return root;
    }

    function safeParseJSON(rawValue, fallbackValue) {
        if (typeof rawValue !== 'string' || !rawValue.trim()) {
            return fallbackValue;
        }

        try {
            return JSON.parse(rawValue);
        } catch (error) {
            return fallbackValue;
        }
    }

    function normalizeId(value) {
        return String(value || '').trim();
    }

    function getUnlockedIdsFromMeta(meta) {
        return Object.keys(meta).filter((id) => {
            const entry = meta[id];
            return entry && Number(entry.count) > 0;
        });
    }

    function saveCollectionIds(ids) {
        const normalizedIds = Array.from(new Set(
            Array.isArray(ids)
                ? ids.map((id) => normalizeId(id)).filter(Boolean)
                : []
        ));

        global.localStorage.setItem(COLLECTION_KEY, JSON.stringify(normalizedIds));
        return normalizedIds;
    }

    function getCollectionMeta() {
        const rawMeta = safeParseJSON(global.localStorage.getItem(COLLECTION_META_KEY), {});
        if (!rawMeta || typeof rawMeta !== 'object' || Array.isArray(rawMeta)) {
            return {};
        }

        return Object.keys(rawMeta).reduce((accumulator, id) => {
            const entry = rawMeta[id];
            if (!entry || typeof entry !== 'object' || Array.isArray(entry)) {
                return accumulator;
            }

            const normalizedId = normalizeId(id);
            const count = Number.parseInt(entry.count, 10);
            if (!normalizedId || !Number.isInteger(count) || count <= 0) {
                return accumulator;
            }

            const firstObtainedAt = Number(entry.firstObtainedAt);
            const lastObtainedAt = Number(entry.lastObtainedAt);
            accumulator[normalizedId] = {
                count,
                firstObtainedAt: Number.isFinite(firstObtainedAt) && firstObtainedAt > 0 ? firstObtainedAt : null,
                lastObtainedAt: Number.isFinite(lastObtainedAt) && lastObtainedAt > 0 ? lastObtainedAt : null,
                isNew: Boolean(entry.isNew),
                rarity: normalizeId(entry.rarity) || 'R',
                title: normalizeId(entry.title),
                source: normalizeId(entry.source)
            };
            return accumulator;
        }, {});
    }

    function saveCollectionMeta(meta) {
        global.localStorage.setItem(COLLECTION_META_KEY, JSON.stringify(meta));
        return meta;
    }

    function getLastObtained() {
        const parsed = safeParseJSON(global.localStorage.getItem(LAST_OBTAINED_KEY), null);
        if (!parsed || typeof parsed !== 'object') {
            return null;
        }

        const id = normalizeId(parsed.id);
        if (!id) {
            return null;
        }

        const obtainedAt = Number(parsed.obtainedAt);
        return {
            id,
            obtainedAt: Number.isFinite(obtainedAt) && obtainedAt > 0 ? obtainedAt : null
        };
    }

    function saveLastObtained(id, obtainedAt) {
        const normalizedId = normalizeId(id);
        if (!normalizedId) {
            global.localStorage.removeItem(LAST_OBTAINED_KEY);
            return null;
        }

        const payload = {
            id: normalizedId,
            obtainedAt: Number.isFinite(Number(obtainedAt)) ? Number(obtainedAt) : Date.now()
        };
        global.localStorage.setItem(LAST_OBTAINED_KEY, JSON.stringify(payload));
        return payload;
    }

    function normalizeCardDescriptor(cardDescriptor) {
        const source = cardDescriptor && typeof cardDescriptor === 'object' ? cardDescriptor : {};
        const cardId = normalizeId(source.cardId || source.id);
        if (!cardId) {
            throw new Error('sandbox card grant is missing cardId');
        }

        return {
            cardId,
            rarity: normalizeId(source.rarity).toUpperCase() || 'R',
            title: normalizeId(source.title),
            source: normalizeId(source.source) || 'sandbox',
            obtainedAt: Number.isFinite(Number(source.obtainedAt)) ? Number(source.obtainedAt) : Date.now()
        };
    }

    function getCollectionSnapshot() {
        const meta = getCollectionMeta();
        const unlockedIds = getUnlockedIdsFromMeta(meta);
        saveCollectionIds(unlockedIds);

        return {
            unlockedIds: unlockedIds.slice(),
            meta: JSON.parse(JSON.stringify(meta)),
            lastObtained: getLastObtained(),
            totalUnlocked: unlockedIds.length
        };
    }

    function recordObtainedCard(cardDescriptor) {
        const normalizedCard = normalizeCardDescriptor(cardDescriptor);
        const meta = getCollectionMeta();
        const existingEntry = meta[normalizedCard.cardId];
        const isDuplicate = Boolean(existingEntry);
        const now = normalizedCard.obtainedAt;

        if (existingEntry) {
            existingEntry.count += 1;
            existingEntry.lastObtainedAt = now;
            existingEntry.isNew = true;
            existingEntry.rarity = normalizedCard.rarity;
            if (normalizedCard.title) {
                existingEntry.title = normalizedCard.title;
            }
            if (normalizedCard.source) {
                existingEntry.source = normalizedCard.source;
            }
        } else {
            meta[normalizedCard.cardId] = {
                count: 1,
                firstObtainedAt: now,
                lastObtainedAt: now,
                isNew: true,
                rarity: normalizedCard.rarity,
                title: normalizedCard.title,
                source: normalizedCard.source
            };
        }

        saveCollectionMeta(meta);
        saveCollectionIds(getUnlockedIdsFromMeta(meta));
        saveLastObtained(normalizedCard.cardId, now);

        const nextEntry = meta[normalizedCard.cardId];
        return {
            cardId: normalizedCard.cardId,
            rarity: nextEntry.rarity || normalizedCard.rarity,
            granted: true,
            isDuplicate,
            count: nextEntry.count,
            firstObtainedAt: nextEntry.firstObtainedAt,
            lastObtainedAt: nextEntry.lastObtainedAt
        };
    }

    function markCardPreviewed(cardId) {
        const normalizedId = normalizeId(cardId);
        if (!normalizedId) {
            return false;
        }

        const meta = getCollectionMeta();
        if (!meta[normalizedId] || !meta[normalizedId].isNew) {
            return false;
        }

        meta[normalizedId].isNew = false;
        saveCollectionMeta(meta);
        return true;
    }

    const root = getRoot();
    root.adapters.lottery = {
        getCollectionSnapshot,
        recordObtainedCard,
        markCardPreviewed
    };
})(typeof window !== 'undefined' ? window : globalThis);
