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
  footer_fine: { fr: "Préparé par Gerald de Paris.", en: "Prepared by Gerald de Paris." },

  // ---------- shared lesson-page labels ----------
  lbl_objective: { fr: "Objectif :", en: "Objective:" },
  lbl_explanation: { fr: "Explication", en: "Explanation" },
  lbl_examples: { fr: "Exemples", en: "Examples" },
  lbl_exercise: { fr: "Exercice", en: "Exercise" },
  lbl_tryit: { fr: "À vous", en: "Your turn" },
  lbl_back: { fr: "← Retour aux ressources", en: "← Back to resources" },

  // ---------- Track 1 hero ----------
  t1_hero_eyebrow: { fr: "Track 1 · 5 leçons", en: "Track 1 · 5 lessons" },
  t1_hero_title: { fr: "Sound & Survival", en: "Sound & Survival" },
  t1_hero_desc: {
    fr: "Les bases pour bien prononcer, saluer, donner un ordre, dire non et poser une question — tout ce qu'il faut pour survivre dans une vraie conversation dès le premier jour.",
    en: "The basics for good pronunciation, greetings, giving an order, saying no, and asking a question — everything you need to survive a real conversation from day one."
  },
  t1_next_label: { fr: "→ Suite :", en: "→ Next:" },
  t1_next_link: { fr: "Track 2 — Core Grammar", en: "Track 2 — Core Grammar" },

  // ---------- Lesson 1.1 ----------
  t1_1_obj: { fr: "comprendre pourquoi le français « sonne » différemment de l'anglais, et où placer l'accent dans un mot.", en: "understand why French \"sounds\" different from English, and where to place the stress in a word." },
  t1_1_hook: { fr: "Le français et l'anglais partagent des centaines de mots presque identiques à l'écrit — mais à l'oral, c'est une autre histoire. Bonne nouvelle : une seule règle change tout.", en: "French and English share hundreds of nearly identical written words — but out loud, it's a different story. Good news: one single rule changes everything." },
  t1_1_expl: { fr: "En anglais, l'accent tonique (la syllabe qu'on prononce plus fort) change d'un mot à l'autre et il faut souvent le deviner. En français, c'est simple : l'accent tombe toujours sur la dernière syllabe du mot ou du groupe de mots — et on l'allonge légèrement, on ne la crie pas plus fort. C'est ce qui donne au français sa mélodie régulière, presque « posée ».", en: "In English, word stress (the syllable said louder) shifts from word to word and often has to be guessed. In French, it's simple: the stress always falls on the last syllable of the word or phrase — and it's slightly lengthened, not shouted louder. That's what gives French its steady, almost \"calm\" melody." },
  t1_1_exercise: { fr: "Lisez ces mots à voix haute en allongeant bien la dernière syllabe : téléphone, restaurant, université, ordinateur, appartement.", en: "Read these words aloud, lengthening the last syllable clearly: téléphone, restaurant, université, ordinateur, appartement." },
  t1_1_tryit: { fr: "Prenez une phrase que vous connaissez déjà en français et dites-la trois fois de suite, en exagérant l'allongement de la toute dernière syllabe. Sentez la différence avec l'anglais.", en: "Take a sentence you already know in French and say it three times in a row, exaggerating the lengthening of the very last syllable. Feel the difference from English." },

  // ---------- Lesson 1.2 ----------
  t1_2_obj: { fr: "saluer, se présenter et être poli dans une conversation simple.", en: "greet someone, introduce yourself, and be polite in a simple conversation." },
  t1_2_hook: { fr: "Impossible de commencer une conversation en français sans passer par la case politesse — c'est presque une religion nationale.", en: "You can't start a conversation in French without going through the politeness ritual first — it's practically a national religion." },
  t1_2_expl: { fr: "Le français distingue le registre formel (vouvoiement, avec vous) du registre familier (tutoiement, avec tu). Avec un inconnu, un professeur ou un supérieur : vous. Avec un ami, un enfant, un membre de la famille : tu. Dans le doute, commencez toujours par vous.", en: "French distinguishes the formal register (using vous) from the familiar one (using tu). With a stranger, a teacher, or a superior: vous. With a friend, a child, a family member: tu. When in doubt, always start with vous." },
  t1_2_exercise: { fr: "Écrivez un mini-dialogue de 4 lignes entre deux inconnus qui se rencontrent à un arrêt de bus. Utilisez vous.", en: "Write a 4-line mini-dialogue between two strangers meeting at a bus stop. Use vous." },
  t1_2_tryit: { fr: "Présentez-vous en trois phrases : votre nom, d'où vous venez, ce que vous aimez faire. Dites-le à voix haute avant de l'écrire.", en: "Introduce yourself in three sentences: your name, where you're from, what you like to do. Say it out loud before writing it down." },

  // ---------- Lesson 1.3 ----------
  t1_3_obj: { fr: "donner une instruction, un conseil ou une invitation sans dire « tu dois » à chaque fois.", en: "give an instruction, a piece of advice, or an invitation without saying \"you must\" every time." },
  t1_3_hook: { fr: "Envie de dire « Écoute-moi », « Viens ici » ou « Amusons-nous » sans passer par une phrase compliquée ? C'est le rôle de l'impératif — le mode le plus direct du français.", en: "Want to say \"Listen to me,\" \"Come here,\" or \"Let's have fun\" without a complicated sentence? That's the job of the imperative — French's most direct mood." },
  t1_3_expl: { fr: "L'impératif a trois formes, selon à qui vous parlez : familier (une personne proche), poli/pluriel (une personne qu'on vouvoie, ou plusieurs personnes), et inclusif (vous vous incluez vous-même, comme « let's... » en anglais). Pour les verbes en -er, la forme familière perd le -s final qu'on aurait normalement à la deuxième personne.", en: "The imperative has three forms, depending on who you're talking to: familiar (someone close to you), polite/plural (someone you address formally, or several people), and inclusive (you include yourself, like \"let's...\" in English). For -er verbs, the familiar form drops the final -s that would normally be there." },
  t1_3_exercise: { fr: "Transformez ces phrases en ordres à la forme familière : (1) Tu regardes le tableau. (2) Tu manges tes légumes. (3) Tu arrêtes de parler.", en: "Turn these sentences into familiar-form commands: (1) Tu regardes le tableau. (2) Tu manges tes légumes. (3) Tu arrêtes de parler." },
  t1_3_tryit: { fr: "Donnez trois instructions que vous donneriez à un élève le premier jour de cours.", en: "Give three instructions you'd give a student on the first day of class." },

  // ---------- Lesson 1.4 ----------
  t1_4_obj: { fr: "répondre à une question, et savoir dire non correctement — y compris à une question négative.", en: "answer a question, and know how to say no correctly — including to a negative question." },
  t1_4_hook: { fr: "En français, répondre « oui » à une question négative peut créer un malentendu... sauf si vous connaissez le petit mot magique : si.", en: "In French, answering \"oui\" to a negative question can create a misunderstanding... unless you know the little magic word: si." },
  t1_4_expl: { fr: "La négation de base se construit avec deux mots qui encadrent le verbe : ne avant, pas après. Mais le vrai piège pour les débutants, c'est de répondre à une question posée à la négative : dans ce cas, on n'utilise pas oui mais si, pour bien marquer qu'on contredit la négation.", en: "Basic negation is built with two words framing the verb: ne before, pas after. But the real trap for beginners is answering a question asked in the negative: in that case, you don't use oui but si, to clearly signal you're contradicting the negation." },
  t1_4_exercise: { fr: "Répondez par si ou non : (1) Tu n'as pas faim ? (2) Tu ne veux pas venir ? (3) Il ne pleut pas aujourd'hui ? — imaginez une réponse logique pour chaque.", en: "Answer with si or non: (1) Tu n'as pas faim ? (2) Tu ne veux pas venir ? (3) Il ne pleut pas aujourd'hui ? — imagine a logical answer for each." },
  t1_4_tryit: { fr: "Écrivez trois questions négatives que vous pourriez poser à un(e) élève curieux, et donnez la réponse avec si ou non.", en: "Write three negative questions you might ask a curious student, and give the answer using si or non." },

  // ---------- Lesson 1.5 ----------
  t1_5_obj: { fr: "poser une question simple de trois façons différentes, du plus familier au plus soutenu.", en: "ask a simple question three different ways, from the most casual to the most formal." },
  t1_5_hook: { fr: "En français, on peut poser exactement la même question de trois manières — et choisir la bonne dépend uniquement du contexte, pas de la grammaire.", en: "In French, you can ask exactly the same question three different ways — and picking the right one depends only on context, not grammar." },
  t1_5_expl: { fr: "La façon la plus simple est de garder l'ordre normal de la phrase et de lever la voix à la fin (l'intonation montante). Un cran plus formel : ajouter est-ce que devant la phrase affirmative. La forme la plus soutenue inverse le verbe et le sujet. Les trois sont correctes ; à l'oral, la première est de loin la plus utilisée.", en: "The simplest way is to keep the sentence's normal word order and raise your voice at the end (rising intonation). A step more formal: add est-ce que before the affirmative sentence. The most formal version inverts the verb and subject. All three are correct; in speech, the first is by far the most common." },
  t1_5_exercise: { fr: "Transformez ces affirmations en questions avec est-ce que : (1) Tu aimes voyager. (2) Elle travaille à Kampala. (3) Ils parlent français.", en: "Turn these statements into questions using est-ce que: (1) Tu aimes voyager. (2) Elle travaille à Kampala. (3) Ils parlent français." },
  t1_5_tryit: { fr: "Imaginez que vous rencontrez quelqu'un pour la première fois. Écrivez cinq questions que vous lui poseriez, en variant qui, quoi, où, quand, pourquoi.", en: "Imagine you're meeting someone for the first time. Write five questions you'd ask them, varying qui, quoi, où, quand, pourquoi." },

  // ---------- Track 2 hero ----------
  t2_hero_eyebrow: { fr: "Track 2 · 2 leçons disponibles sur 8", en: "Track 2 · 2 lessons available of 8" },
  t2_hero_title: { fr: "Core Grammar", en: "Core Grammar" },
  t2_hero_desc: {
    fr: "La colonne vertébrale grammaticale du cours : articles et noms, groupes de verbes, négation approfondie, nombres, heure et prépositions. Cette page grandit au fil des leçons ajoutées.",
    en: "The grammatical backbone of the course: articles and nouns, verb groups, deeper negation, numbers, time, and prepositions. This page grows as more lessons are added."
  },
  t2_next: {
    fr: "Prochaines leçons de ce track : les verbes en -ER, -IR, -RE · la négation approfondie · les nombres · l'heure · les prépositions. À venir bientôt.",
    en: "Coming next in this track: -ER, -IR, -RE verbs · deeper negation · numbers · telling time · prepositions. Coming soon."
  },

  // ---------- Lesson 2.1 ----------
  t2_1_obj: { fr: "comprendre pourquoi chaque nom français a un genre, et choisir le bon article.", en: "understand why every French noun has a gender, and choose the right article." },
  t2_1_hook: { fr: "En français, même une table a un genre. Ça peut sembler étrange au début, mais une fois le réflexe pris, ça devient automatique.", en: "In French, even a table has a gender. It might seem strange at first, but once the reflex kicks in, it becomes automatic." },
  t2_1_expl: { fr: "Tous les noms français sont soit masculins soit féminins — objets inclus, pas seulement les personnes. L'article qui accompagne le nom (le/la pour « the », un/une pour « a/an ») indique ce genre. Il n'existe pas de règle universelle pour deviner le genre d'un mot, donc la meilleure stratégie est d'apprendre le nom et son article ensemble, comme un seul bloc, dès le premier jour.", en: "All French nouns are either masculine or feminine — objects included, not just people. The article that goes with the noun (le/la for \"the\", un/une for \"a/an\") signals that gender. There's no universal rule for guessing a word's gender, so the best strategy is to learn the noun and its article together, as a single block, from day one." },
  t2_1_exercise: { fr: "Classez ces mots en deux colonnes, masculin ou féminin (aidez-vous d'un dictionnaire si besoin) : voiture, téléphone, ville, jardin, musique, pays.", en: "Sort these words into two columns, masculine or feminine (use a dictionary if needed): voiture, téléphone, ville, jardin, musique, pays." },
  t2_1_tryit: { fr: "Choisissez cinq objets autour de vous en ce moment et notez-les avec leur article : le stylo, la fenêtre...", en: "Pick five objects around you right now and write them down with their article: le stylo, la fenêtre..." },

  // ---------- Lesson 2.2 ----------
  t2_2_obj: { fr: "mettre un nom et son article au pluriel correctement.", en: "put a noun and its article correctly into the plural." },
  t2_2_hook: { fr: "Bonne nouvelle pour une fois : le pluriel français est presque toujours d'une simplicité déconcertante.", en: "Good news for once: the French plural is almost always disarmingly simple." },
  t2_2_expl: { fr: "Dans la grande majorité des cas, on forme le pluriel en ajoutant un -s final — mais attention, ce -s ne se prononce presque jamais à l'oral, c'est l'article devant le nom qui indique le pluriel. Quelques familles de mots ont des règles particulières : les noms en -eau et -eu prennent un -x, et les noms déjà terminés en -s, -x, -z ne changent pas du tout.", en: "In most cases, you form the plural by adding a final -s — but note, this -s is almost never pronounced out loud; it's the article before the noun that signals the plural. A few word families have special rules: nouns ending in -eau and -eu take an -x, and nouns already ending in -s, -x, -z don't change at all." },
  t2_2_exercise: { fr: "Mettez ces groupes au pluriel : (1) le cadeau (2) la voiture (3) l'animal → les animaux (exception à retenir !) (4) le gâteau.", en: "Put these into the plural: (1) le cadeau (2) la voiture (3) l'animal → les animaux (an exception worth remembering!) (4) le gâteau." },
  t2_2_tryit: { fr: "Écrivez une courte liste de courses (5 articles) en utilisant uniquement des noms au pluriel : des pommes, des œufs...", en: "Write a short shopping list (5 items) using only plural nouns: des pommes, des œufs..." }
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
