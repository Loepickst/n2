(function () {
    const STORAGE_KEY = "lotteryState_v2";
    const MAX_DAILY_OMIKUJI_COUNT = 3;

    function getTodayString() {
        const today = new Date();
        return [
            today.getFullYear(),
            String(today.getMonth() + 1).padStart(2, "0"),
            String(today.getDate()).padStart(2, "0")
        ].join("-");
    }

    function buildState(payload) {
        const count = Math.max(0, Math.min(MAX_DAILY_OMIKUJI_COUNT, Number.parseInt(payload.count, 10) || 0));
        const remaining = Math.max(0, MAX_DAILY_OMIKUJI_COUNT - count);
        return {
            date: payload.date || getTodayString(),
            count: count,
            remaining: remaining,
            hasRemaining: remaining > 0,
            isValid: payload.isValid !== false
        };
    }

    function safeReadRawState() {
        try {
            return window.localStorage.getItem(STORAGE_KEY);
        } catch (error) {
            return null;
        }
    }

    function getDailyOmikujiState() {
        const today = getTodayString();
        const raw = safeReadRawState();

        if (raw === null) {
            return buildState({ date: today, count: 0, isValid: true });
        }

        try {
            const parsed = JSON.parse(raw);
            if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
                return buildState({ date: today, count: 0, isValid: false });
            }

            if (parsed.date !== today) {
                return buildState({ date: today, count: 0, isValid: true });
            }

            if (!Number.isInteger(parsed.count) || parsed.count < 0) {
                return buildState({ date: today, count: 0, isValid: false });
            }

            return buildState({ date: today, count: parsed.count, isValid: true });
        } catch (error) {
            return buildState({ date: today, count: 0, isValid: false });
        }
    }

    function saveDailyOmikujiState(count) {
        const nextState = buildState({
            date: getTodayString(),
            count: count,
            isValid: true
        });

        try {
            window.localStorage.setItem(STORAGE_KEY, JSON.stringify({
                date: nextState.date,
                count: nextState.count
            }));
        } catch (error) {
            return nextState;
        }

        return nextState;
    }

    function getRemainingOmikujiDraws() {
        return getDailyOmikujiState().remaining;
    }

    window.OmikujiDailyState = {
        MAX_DAILY_OMIKUJI_COUNT: MAX_DAILY_OMIKUJI_COUNT,
        getDailyOmikujiState: getDailyOmikujiState,
        getRemainingOmikujiDraws: getRemainingOmikujiDraws,
        saveDailyOmikujiState: saveDailyOmikujiState
    };
})();
