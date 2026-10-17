// Focused bilingual additions and enrichment for the Arts and Travel Culture categories.
// Existing image slots stay tied to each story's original array position.
// New story photos, when manually uploaded, use images/<category>-story<N>.jpg.
// Research references used for factual framing: UNESCO Intangible Cultural Heritage (Ugandan barkcloth; Busoga Bigwala),
// Makerere University / MTSIFA, Ndere Troupe, Uganda Wildlife Authority, and Uganda Tourism Board.
const cultureArtsTravelUpdates = [
  /* INSERT_STORIES_HERE */
];

cultureArtsTravelUpdates.forEach((entry) => {
  const category = cultureCategories[entry.category];
  if (!category) {
    console.warn("Culture category missing for Arts/Travel update:", entry.category);
    return;
  }

  if (entry.action === "replace") {
    const story = category.stories.find((item) => item.title.fr === entry.matchTitle);
    if (!story) {
      console.warn("Existing Arts/Travel story not found:", entry.category, entry.matchTitle);
      return;
    }
    story.title = { fr: entry.titleFr || story.title.fr, en: entry.titleEn || story.title.en };
    story.fr = entry.fr;
    story.en = entry.en;
    return;
  }

  const duplicate = category.stories.some((item) => item.title.fr === entry.titleFr || item.title.en === entry.titleEn);
  if (duplicate) {
    console.warn("Duplicate Arts/Travel story skipped:", entry.category, entry.titleFr);
    return;
  }

  category.stories.push({
    title: { fr: entry.titleFr, en: entry.titleEn },
    fr: entry.fr,
    en: entry.en
  });
});
