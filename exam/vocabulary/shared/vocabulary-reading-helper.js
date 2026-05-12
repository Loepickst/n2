(function attachVocabularyReadingHelper() {
    function normalizeTextValue(value) {
        return String(value == null ? '' : value).trim();
    }

    function toHiragana(text) {
        return String(text == null ? '' : text)
            .replace(/[\u30a1-\u30f6]/g, (char) => String.fromCharCode(char.charCodeAt(0) - 0x60));
    }

    function normalizeKana(value) {
        return toHiragana(String(value == null ? '' : value).replace(/\s+/g, ''));
    }

    function mergeSegments(segments) {
        const merged = [];

        (Array.isArray(segments) ? segments : []).forEach((segment) => {
            if (!segment || typeof segment !== 'object') return;

            if (segment.type === 'fixed') {
                const text = normalizeTextValue(segment.text || '');
                if (!text) return;
                const last = merged[merged.length - 1];
                if (last && last.type === 'fixed') {
                    last.text += text;
                    return;
                }
                merged.push({ type: 'fixed', text });
                return;
            }

            const answer = normalizeKana(segment.answer || '');
            const surface = normalizeTextValue(segment.surface || '');
            if (!answer) {
                if (surface) {
                    const last = merged[merged.length - 1];
                    if (last && last.type === 'fixed') {
                        last.text += surface;
                    } else {
                        merged.push({ type: 'fixed', text: surface });
                    }
                }
                return;
            }
            merged.push({
                type: 'input',
                answer,
                surface
            });
        });

        return merged;
    }

    function buildPrompt(surfaceText, segments) {
        const normalizedSurface = normalizeTextValue(surfaceText);
        const mergedSegments = mergeSegments(segments);
        const fullKana = normalizeKana(
            mergedSegments
                .map((segment) => (segment.type === 'input' ? segment.answer : segment.text))
                .join('')
        );
        const inputSegments = mergedSegments.filter((segment) => segment.type === 'input');

        return {
            surfaceText: normalizedSurface,
            fullKana,
            segments: mergedSegments,
            editableCount: inputSegments.length,
            firstHint: inputSegments[0] ? inputSegments[0].answer : ''
        };
    }

    function buildFallbackPrompt(fallbackText) {
        const normalizedFallback = normalizeTextValue(fallbackText);
        if (!normalizedFallback) {
            return {
                surfaceText: '',
                fullKana: '',
                segments: [],
                editableCount: 0,
                firstHint: ''
            };
        }
        return buildPrompt(normalizedFallback, [
            { type: 'fixed', text: normalizedFallback }
        ]);
    }

    function buildPromptFromWordHtml(wordHtml, fallbackText) {
        if (!wordHtml || typeof DOMParser === 'undefined') {
            return buildFallbackPrompt(fallbackText);
        }

        const parser = new DOMParser();
        const doc = parser.parseFromString(`<div>${wordHtml}</div>`, 'text/html');
        const root = doc.body.firstElementChild;
        if (!root) {
            return buildFallbackPrompt(fallbackText);
        }

        const surfaceParts = [];
        const rawSegments = [];

        root.childNodes.forEach((node) => {
            if (node.nodeType === Node.TEXT_NODE) {
                const text = normalizeTextValue(node.textContent || '');
                if (!text) return;
                surfaceParts.push(text);
                rawSegments.push({ type: 'fixed', text });
                return;
            }

            if (!(node instanceof HTMLElement)) return;

            if (node.tagName.toLowerCase() === 'ruby') {
                const clone = node.cloneNode(true);
                clone.querySelectorAll('rt, rp').forEach((child) => child.remove());
                const baseText = normalizeTextValue(clone.textContent || '');
                const readingText = Array.from(node.querySelectorAll('rt'))
                    .map((rt) => rt.textContent || '')
                    .join('')
                    .replace(/\s+/g, '')
                    .trim();

                if (baseText) {
                    surfaceParts.push(baseText);
                }

                if (baseText && readingText) {
                    rawSegments.push({
                        type: 'input',
                        surface: baseText,
                        answer: readingText
                    });
                    return;
                }

                if (baseText) {
                    rawSegments.push({ type: 'fixed', text: baseText });
                }
                return;
            }

            const text = normalizeTextValue(node.textContent || '');
            if (!text) return;
            surfaceParts.push(text);
            rawSegments.push({ type: 'fixed', text });
        });

        const surfaceText = normalizeTextValue(surfaceParts.join('') || fallbackText);
        if (!surfaceText) {
            return buildFallbackPrompt(fallbackText);
        }

        if (rawSegments.length === 0) {
            return buildFallbackPrompt(surfaceText);
        }

        return buildPrompt(surfaceText, rawSegments);
    }

    function getKanaDisplayText(wordHtml, fallbackText) {
        const prompt = buildPromptFromWordHtml(wordHtml, fallbackText);
        return /[\u3040-\u30ffー]/.test(prompt.fullKana) ? prompt.fullKana : '';
    }

    window.VocabularyReadingHelper = Object.freeze({
        buildPrompt: buildPromptFromWordHtml,
        getSurfaceText(wordHtml, fallbackText) {
            return buildPromptFromWordHtml(wordHtml, fallbackText).surfaceText;
        },
        getKanaDisplayText,
        normalizeKana
    });
})();
