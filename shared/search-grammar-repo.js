(function () {
  window.SearchGrammarShared = window.SearchGrammarShared || {};

  const root = window.SearchGrammarShared;

  root.createGrammarData = function createGrammarData(options) {
    const config = options || {};
    const tryN1Data = Array.isArray(config.tryN1Data) ? config.tryN1Data : [];
    const tryN2Data = Array.isArray(config.tryN2Data) ? config.tryN2Data : [];
    const tryN3Data = Array.isArray(root.tryN3Data) ? root.tryN3Data : [];
    return [...tryN1Data, ...tryN2Data, ...tryN3Data];
  };
})();
