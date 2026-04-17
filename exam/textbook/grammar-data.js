(function () {
  const grammarDbRepo = window.GrammarDB && window.GrammarDB.repo ? window.GrammarDB.repo : null;

  var comparisonData = grammarDbRepo ? grammarDbRepo.getComparisonNotes() : {};
  var tryN1Data = grammarDbRepo ? grammarDbRepo.getLevelDataset("N1") : [];
  var tryN2Data = grammarDbRepo ? grammarDbRepo.getLevelDataset("N2") : [];
  var grammarData = [...tryN1Data, ...tryN2Data];

  window.comparisonData = comparisonData;
  window.tryN1Data = tryN1Data;
  window.tryN2Data = tryN2Data;
  window.grammarData = grammarData;
})();
