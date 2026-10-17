// Editorial expansions for the existing Culture stories.
// Text is keyed by category + original French title, so story order, image slots,
// and existing categories remain unchanged.
const cultureStoryEditorialOverrides = [
  /* BATCH_INSERT_POINT */
];

cultureStoryEditorialOverrides.forEach((edit) => {
  const category = cultureCategories[edit.category];
  if (!category) {
    console.warn("Culture story category not found:", edit.category);
    return;
  }
  const story = category.stories.find((item) => item.title.fr === edit.title);
  if (!story) {
    console.warn("Culture story not found:", edit.category, edit.title);
    return;
  }
  story.fr = edit.fr;
  story.en = edit.en;
});
