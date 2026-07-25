// ============================================
// TRANSLATIONS
// Edit the text here to change what appears on the site.
// ============================================
const translations = {
  nav_resources: { fr: "Ressources", en: "Resources" },
  nav_culture: { fr: "Culture", en: "Culture" },
  nav_about: { fr: "À propos", en: "About" },
  nav_contact: { fr: "Contact", en: "Contact" },

  hero_eyebrow: { fr: "Cours de français depuis Kampala", en: "French lessons from Kampala" },
  hero_title_1: { fr: "Bienvenue dans mon", en: "Welcome to my" },
  hero_title_2: { fr: "carnet", en: "notebook" },
  hero_title_3: { fr: "de classe", en: "of lessons" },
  hero_sub: {
    fr: "Des ressources pour apprendre le français, et un carnet de voyage sur la culture ougandaise — photos, histoires et bientôt vidéos.",
    en: "Resources for learning French, and a travel notebook about Ugandan culture — photos, stories, and soon videos."
  },
  hero_cta_resources: { fr: "Voir les ressources", en: "See the resources" },
  hero_cta_culture: { fr: "Découvrir la culture", en: "Explore the culture" },

  res_eyebrow: { fr: "Matériel pédagogique", en: "Teaching material" },
  res_title: { fr: "Ressources de français", en: "French resources" },
  res_lede: {
    fr: "Classées par niveau (CECR). Ajoutez vos propres fiches, PDF ou liens au fur et à mesure — chaque carte est prête à recevoir un document.",
    en: "Organized by level (CEFR). Add your own worksheets, PDFs or links over time — each card is ready to hold a document."
  },
  track1_title: { fr: "Sound & Survival", en: "Sound & Survival" },
  track1_desc: { fr: "Prononciation, salutations, impératif, négation, questions.", en: "Pronunciation, greetings, the imperative, negation, questions." },
  track1_progress: { fr: "5 / 5 leçons disponibles", en: "5 / 5 lessons available" },

  track2_title: { fr: "Core Grammar", en: "Core Grammar" },
  track2_desc: { fr: "Genre des noms, pluriel, groupes de verbes, négation, nombres, heure.", en: "Noun gender, plurals, verb groups, negation, numbers, time." },
  track2_progress: { fr: "2 / 8 leçons disponibles", en: "2 / 8 lessons available" },

  track3_title: { fr: "Real Communication", en: "Real Communication" },
  track3_desc: { fr: "Verbes irréguliers, pronoms compléments, verbes réfléchis.", en: "Irregular verbs, object pronouns, reflexive verbs." },

  track4_title: { fr: "Past, Future & Fluency", en: "Past, Future & Fluency" },
  track4_desc: { fr: "Passé composé, imparfait, futur, conditionnel, subjonctif.", en: "Passé composé, imperfect, future, conditional, subjunctive." },

  track5_title: { fr: "Real-Life Situations", en: "Real-Life Situations" },
  track5_desc: { fr: "Aéroport, hôtel, restaurant, achats, santé, petites conversations.", en: "Airport, hotel, restaurant, shopping, health, small talk." },

  track6_title: { fr: "Reading for Confidence", en: "Reading for Confidence" },
  track6_desc: { fr: "Mini-dialogues et petites histoires pour lire avec plaisir.", en: "Mini-dialogues and short stories for reading enjoyment." },

  track_link: { fr: "Ouvrir le track →", en: "Open track →" },
  track_soon: { fr: "Bientôt disponible", en: "Coming soon" },

  tapif_eyebrow: { fr: "Un projet en cours", en: "A project in progress" },
  tapif_text: {
    fr: "Je prépare ma candidature au programme TAPIF, pour enseigner l'anglais en France. Cette section racontera cette aventure, dès qu'elle commencera.",
    en: "I'm preparing my application to the TAPIF program, to teach English in France. This section will tell that story once it begins."
  },

  culture_eyebrow: { fr: "Cartes postales", en: "Postcards" },
  culture_title: { fr: "Culture ougandaise", en: "Ugandan culture" },
  culture_lede: {
    fr: "Un aperçu de la vie et de la culture en Ouganda, comme des cartes postales envoyées à mes élèves. Remplacez les cadres ci-dessous par vos propres photos ou vidéos.",
    en: "A glimpse of life and culture in Uganda, like postcards sent to my students. Replace the frames below with your own photos or videos."
  },
  culture_ph_photo: { fr: "Ajoutez une photo ici", en: "Add a photo here" },
  culture_ph_video: { fr: "Ajoutez une vidéo ici", en: "Add a video here" },
  culture_cap1: { fr: "Un marché local", en: "A local market" },
  culture_cap2: { fr: "Danse traditionnelle", en: "Traditional dance" },
  culture_cap3: { fr: "Un festival près de Kampala", en: "A festival near Kampala" },
  culture_cap4: { fr: "Paysage du Nil", en: "A view of the Nile" },
  culture_cap5: { fr: "Un plat traditionnel", en: "A traditional dish" },
  culture_cap6: { fr: "Artisanat local", en: "Local craftwork" },
  culture_note: {
    fr: 'Astuce : ouvrez le fichier index.html et remplacez un cadre par une balise image pour une photo, ou une balise video pour une vidéo.',
    en: "Tip: open index.html and replace a frame with an image tag for a photo, or a video tag for a video."
  },

  about_eyebrow: { fr: "Qui suis-je", en: "About me" },
  about_title: { fr: "À propos", en: "About" },
  about_text: {
    fr: "Enseignante de français basée à Kampala, en Ouganda. Ce site rassemble mes ressources de cours et mes envies de partager la culture ougandaise avec mes élèves et le monde francophone.",
    en: "French teacher based in Kampala, Uganda. This site gathers my teaching resources and my wish to share Ugandan culture with my students and the French-speaking world."
  },
  about_ph_photo: { fr: "Votre photo ici", en: "Your photo here" },

  footer_title: { fr: "Le Carnet Ougandais", en: "Le Carnet Ougandais" },
  footer_tagline: { fr: "Français & culture, depuis Kampala.", en: "French & culture, from Kampala." },
  footer_fine: { fr: "Préparé par Gerald de Paris.", en: "Prepared by Gerald de Paris." }
};

// ============================================
// LANGUAGE TOGGLE LOGIC
// ============================================
function applyLanguage(lang) {
  document.documentElement.setAttribute("data-lang", lang);
  document.documentElement.setAttribute("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const entry = translations[key];
    if (entry && entry[lang]) {
      el.textContent = entry[lang];
    }
  });

  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.classList.toggle("is-active", btn.getAttribute("data-lang-btn") === lang);
  });

  localStorage.setItem("site-lang", lang);
}

function initLangToggle() {
  const saved = localStorage.getItem("site-lang") || "fr";
  applyLanguage(saved);

  const toggle = document.getElementById("langToggle");
  toggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-lang");
    applyLanguage(current === "fr" ? "en" : "fr");
  });
}

document.addEventListener("DOMContentLoaded", initLangToggle);
