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

  res_eyebrow: { fr: "Juste passionné", en: "Just passionate" },
  res_title: { fr: "Ressources de français", en: "French resources" },
  res_lede: {
    fr: "Pour apprendre (et partager) le français — clair, utile, et pas trop sérieux.",
    en: "For learning (and sharing) French — clear, useful, and not too serious."
  },

  track1_title: { fr: "Sound & Survival", en: "Sound & Survival" },
  track1_desc: { fr: "Prononciation, salutations, impératif, négation, questions.", en: "Pronunciation, greetings, the imperative, negation, questions." },
  track1_progress: { fr: "5 / 5 leçons disponibles", en: "5 / 5 lessons available" },

  track2_title: { fr: "Core Grammar", en: "Core Grammar" },
  track2_desc: { fr: "Articles, être/avoir, présent, nombres, heure, futur proche, comparatifs.", en: "Articles, être/avoir, present tense, numbers, time, near future, comparatives." },
  track2_progress: { fr: "8 / 8 leçons disponibles", en: "8 / 8 lessons available" },

  track3_title: { fr: "Real Communication", en: "Real Communication" },
  track3_desc: { fr: "Négations avancées, pronoms toniques — d'autres leçons à venir.", en: "Advanced negation, stressed pronouns — more lessons coming." },
  track3_progress: { fr: "5 leçons disponibles", en: "5 lessons available" },

  track4_title: { fr: "Past, Future & Fluency", en: "Past, Future & Fluency" },
  track4_desc: { fr: "Passé composé, imparfait, futur, conditionnel, subjonctif.", en: "Passé composé, imperfect, future, conditional, subjunctive." },

  track5_title: { fr: "Real-Life Situations", en: "Real-Life Situations" },
  track5_desc: { fr: "Aéroport, hôtel, restaurant, achats, santé, petites conversations.", en: "Airport, hotel, restaurant, shopping, health, small talk." },

  track6_title: { fr: "Reading for Confidence", en: "Reading for Confidence" },
  track6_desc: { fr: "Mini-dialogues et petites histoires pour lire avec plaisir.", en: "Mini-dialogues and short stories for reading enjoyment." },

  track_link: { fr: "Ouvrir le track →", en: "Open track →" },
  track_soon: { fr: "Bientôt disponible", en: "Coming soon" },

  culture_eyebrow: { fr: "Cartes postales", en: "Postcards" },
  culture_title: { fr: "Culture ougandaise", en: "Ugandan culture" },
  culture_lede: {
    fr: "J'adore ce pays, et j'ai décidé de le crier sur les toits (enfin, sur ce site). Voici quelques cartes postales de l'Ouganda — pas pour un cours, juste parce que ça vaut le coup d'œil.",
    en: "I love this country, and I've decided to shout it from the rooftops (well, from this site). Here are a few postcards from Uganda — not for a lesson, just because it's worth a look."
  },
  culture_ph_photo: { fr: "Ajoutez une photo ici", en: "Add a photo here" },
  culture_ph_video: { fr: "Ajoutez une vidéo ici", en: "Add a video here" },
  culture_cap1: { fr: "Un marché local", en: "A local market" },
  culture_cap2: { fr: "Danse traditionnelle", en: "Traditional dance" },
  culture_cap3: { fr: "Un festival près de Kampala", en: "A festival near Kampala" },
  culture_cap4: { fr: "Paysage du Nil", en: "A view of the Nile" },
  culture_cap5: { fr: "Un plat traditionnel", en: "A traditional dish" },
  culture_cap6: { fr: "Artisanat local", en: "Local craftwork" },

  culture_detail1: { fr: "[Texte à venir] Un mot ou deux sur ce marché — ce qu'on y trouve, l'ambiance, pourquoi cette photo compte pour vous.", en: "[Text coming soon] A word or two about this market — what's sold there, the atmosphere, why this photo matters to you." },
  culture_detail2: { fr: "[Texte à venir] D'où vient cette danse, à quelle occasion elle se pratique.", en: "[Text coming soon] Where this dance comes from, and the occasions it's performed for." },
  culture_detail3: { fr: "[Texte à venir] Le nom du festival, quand il a lieu, ce qui le rend spécial.", en: "[Text coming soon] The festival's name, when it happens, what makes it special." },
  culture_detail4: { fr: "[Texte à venir] Où se trouve ce point de vue sur le Nil, et pourquoi il vaut le détour.", en: "[Text coming soon] Where this view of the Nile is, and why it's worth the trip." },
  culture_detail5: { fr: "[Texte à venir] Le nom du plat, ses ingrédients, quand on le mange.", en: "[Text coming soon] The dish's name, its ingredients, when it's eaten." },
  culture_detail6: { fr: "[Texte à venir] L'artisan ou la région derrière cet objet, sa signification.", en: "[Text coming soon] The craftsperson or region behind this piece, and what it means." },

  // ================= TRACK 3 =================
  t3_hero_eyebrow: { fr: "Track 3 · 3 leçons (d'autres à venir)", en: "Track 3 · 3 lessons (more coming)" },
  t3_hero_title: { fr: "Real Communication", en: "Real Communication" },
  t3_hero_desc: {
    fr: "Nuancer ce qu'on dit : les négations qui vont au-delà de « ne...pas », et les pronoms qui donnent du caractère à une phrase.",
    en: "Adding nuance to what you say: negations that go beyond \"ne...pas\", and the pronouns that give a sentence some character."
  },

  // 3.1 — Negation Beyond "ne...pas"
  t3_1_obj: { fr: "exprimer des nuances de négation au-delà de ne...pas : ne...plus, ne...pas encore, ne...rien, ne...personne.", en: "express shades of negation beyond ne...pas: ne...plus, ne...pas encore, ne...rien, ne...personne." },
  t3_1_hook: { fr: "« Ne...pas » ne suffit pas toujours — parfois on veut dire « plus jamais », « rien du tout » ou « personne ». Le français a une expression pour chaque nuance.", en: "\"Ne...pas\" isn't always enough — sometimes you want to say \"not anymore\", \"nothing at all\", or \"no one\". French has an expression for each shade." },
  t3_1_expl: { fr: "Certains mots affirmatifs ont leur propre négation, qui remplace pas dans le schéma ne + verbe + [mot négatif]. Encore (still) devient ne...plus (no longer). Déjà (already) devient ne...pas encore (not yet). Quelque chose (something) devient ne...rien (nothing). Quelqu'un (someone) devient ne...personne (no one). Rien et personne peuvent aussi être sujets de la phrase — ils se placent alors avant ne.", en: "Some affirmative words have their own negation, which replaces pas in the pattern ne + verb + [negative word]. Encore (still) becomes ne...plus (no longer). Déjà (already) becomes ne...pas encore (not yet). Quelque chose (something) becomes ne...rien (nothing). Quelqu'un (someone) becomes ne...personne (no one). Rien and personne can also be the subject of the sentence — in that case they come before ne." },
  t3_1_ex1: { fr: "Tu vas encore à ce gymnase ? — Non, je ne vais plus à ce gymnase.", en: "Tu vas encore à ce gymnase? — Non, je ne vais plus à ce gymnase. (Do you still go to that gym? — No, I no longer go.)" },
  t3_1_ex2: { fr: "Tu manges déjà le dessert ? — Non, je ne mange pas encore le dessert.", en: "Tu manges déjà le dessert? — Non, je ne mange pas encore le dessert. (Already eating dessert? — No, not yet.)" },
  t3_1_ex3: { fr: "Tu vois quelque chose ? — Non, je ne vois rien.", en: "Tu vois quelque chose? — Non, je ne vois rien. (Do you see anything? — No, I see nothing.)" },
  t3_1_ex4: { fr: "Ils entendent quelqu'un ? — Non, ils n'entendent personne.", en: "Ils entendent quelqu'un? — Non, ils n'entendent personne. (Do they hear someone? — No, they hear no one.)" },
  t3_1_ex5: { fr: "Rien ne m'intéresse. / Personne ne répond. (rien/personne en position de sujet)", en: "Rien ne m'intéresse. / Personne ne répond. (rien/personne as the subject)" },
  t3_1_exercise: { fr: "Répondez à la forme négative avec l'expression qui convient : (1) Tu fais encore tes études ? (2) Tu invites quelqu'un ce soir ? (3) Elle a déjà fini ?", en: "Answer in the negative with the matching expression: (1) Tu fais encore tes études? (2) Tu invites quelqu'un ce soir? (3) Elle a déjà fini?" },
  t3_1_tryit: { fr: "Décrivez une habitude que vous n'avez plus, et une chose que vous n'avez pas encore faite aujourd'hui.", en: "Describe a habit you no longer have, and something you haven't done yet today." },

  // 3.2 — Limiting & Short Negative Answers
  t3_2_obj: { fr: "exprimer une limite avec ne...que, et répondre en un seul mot naturellement.", en: "express a limit with ne...que, and give natural one-word negative answers." },
  t3_2_hook: { fr: "Parfois la réponse la plus naturelle en français tient en un seul mot : « Rien. » « Personne. » « Jamais. » Pas besoin d'une phrase complète.", en: "Sometimes the most natural French answer is a single word: \"Rien.\" \"Personne.\" \"Jamais.\" No full sentence needed." },
  t3_2_expl: { fr: "Ne...que n'est pas une négation mais une limite — son synonyme est seulement : « je n'ai que cinq euros » = j'ai seulement cinq euros. Par ailleurs, jamais, rien, personne et pas encore peuvent servir de réponse courte à l'oral, sans même utiliser ne.", en: "Ne...que isn't a negation but a limit — its synonym is seulement: \"je n'ai que cinq euros\" = I only have five euros. Also, jamais, rien, personne, and pas encore can work as short spoken answers on their own, without even using ne." },
  t3_2_ex1: { fr: "Je n'ai que cinq euros. (= J'ai seulement cinq euros.)", en: "Je n'ai que cinq euros. (= I only have five euros.)" },
  t3_2_ex2: { fr: "Il ne fait que deux sports.", en: "Il ne fait que deux sports. (He only does two sports.)" },
  t3_2_ex3: { fr: "Qui t'appelle souvent ? — Personne.", en: "Qui t'appelle souvent? — Personne. (Who calls you often? — No one.)" },
  t3_2_ex4: { fr: "Tu reçois un salaire ? — Pas encore.", en: "Tu reçois un salaire? — Pas encore. (Do you get paid? — Not yet.)" },
  t3_2_ex5: { fr: "Vous mangez du porc ? — Jamais.", en: "Vous mangez du porc? — Jamais. (Do you eat pork? — Never.)" },
  t3_2_exercise: { fr: "Répondez avec ne...que : « Combien de cours suivez-vous ? » (imaginez un chiffre).", en: "Answer using ne...que: \"Combien de cours suivez-vous?\" (make up a number)." },
  t3_2_tryit: { fr: "Répondez en un seul mot à ces questions imaginaires : « Qui vient ce soir ? », « Tu manges de la viande ? »", en: "Answer these imaginary questions in a single word: \"Qui vient ce soir?\", \"Tu manges de la viande?\"" },

  // 3.3 — Stressed (Tonic) Pronouns
  t3_3_obj: { fr: "utiliser les pronoms toniques (moi, toi, lui, elle, nous, vous, eux, elles) pour insister, après une préposition, ou pour la possession.", en: "use stressed pronouns (moi, toi, lui, elle, nous, vous, eux, elles) for emphasis, after a preposition, or for possession." },
  t3_3_hook: { fr: "« C'est moi qui gagne ! » — ce petit mot « moi » fait toute la différence entre une phrase neutre et une phrase pleine de caractère.", en: "\"C'est moi qui gagne!\" — that little word \"moi\" is the difference between a flat sentence and one full of character." },
  t3_3_expl: { fr: "Les pronoms toniques (moi, toi, lui, elle, nous, vous, eux, elles) s'utilisent après une préposition (avec moi, chez lui), pour insister sur le sujet (Lui, il adore cuisiner), après c'est/ce sont (C'est moi !), et avec être à pour indiquer la possession (Cette voiture est à elle).", en: "Stressed pronouns (moi, toi, lui, elle, nous, vous, eux, elles) are used after a preposition (avec moi, chez lui), to emphasize the subject (Lui, il adore cuisiner), after c'est/ce sont (C'est moi!), and with être à to show possession (Cette voiture est à elle)." },
  t3_3_ex1: { fr: "Qui veut venir avec nous ? (après une préposition)", en: "Qui veut venir avec nous? (after a preposition — Who wants to come with us?)" },
  t3_3_ex2: { fr: "Lui, il adore cuisiner ; elle, elle préfère le bricolage. (insistance)", en: "Lui, il adore cuisiner; elle, elle préfère le bricolage. (emphasis — He loves cooking; she prefers DIY.)" },
  t3_3_ex3: { fr: "C'est vous, Roger ? — Oui, c'est nous. (après c'est/ce sont)", en: "C'est vous, Roger? — Oui, c'est nous. (after c'est/ce sont — Is that you, Roger? — Yes, it's us.)" },
  t3_3_ex4: { fr: "Cette voiture est à moi. Ces skis sont à eux. (possession avec être à)", en: "Cette voiture est à moi. Ces skis sont à eux. (possession with être à — This car is mine. Those skis are theirs.)" },
  t3_3_ex5: { fr: "Valérie et moi, nous allons gagner ! (sujet composé)", en: "Valérie et moi, nous allons gagner! (compound subject — Valérie and I, we're going to win!)" },
  t3_3_exercise: { fr: "Remplacez les mots soulignés par un pronom tonique : (1) Ce livre est à Marc. (2) Nous partons avec Julie et Paul. (3) C'est Sophie et Alex qui arrivent.", en: "Replace the underlined words with a stressed pronoun: (1) Ce livre est à Marc. (2) Nous partons avec Julie et Paul. (3) C'est Sophie et Alex qui arrivent." },
  t3_3_tryit: { fr: "Écrivez une phrase où vous insistez sur vous-même avec « Moi, je... », et une autre indiquant que quelque chose vous appartient avec « C'est à moi. »", en: "Write a sentence emphasizing yourself with \"Moi, je...\", and another showing something belongs to you with \"C'est à moi.\"" },

  // 3.4 — Reflexive Verbs: Talking About Your Day
  t3_4_obj: { fr: "comprendre ce qu'est un verbe pronominal, et conjuguer les verbes réfléchis du quotidien au présent.", en: "understand what a pronominal verb is, and conjugate everyday reflexive verbs in the present tense." },
  t3_4_hook: { fr: "En français, on ne dit pas « je réveille » mais « je me réveille » — comme si on se réveillait soi-même. C'est le principe des verbes pronominaux (réfléchis).", en: "In French, you don't say \"je réveille\" but \"je me réveille\" — as if you're waking yourself up. That's the idea behind pronominal (reflexive) verbs." },
  t3_4_expl: { fr: "Un verbe pronominal est toujours accompagné d'un pronom réfléchi (me, te, se, nous, vous, se), qui renvoie à la même personne que le sujet — comme les pronoms anglais en -self. Ce pronom se place juste avant le verbe conjugué. À l'infinitif, on l'écrit avec se : se lever, s'endormir, se laver.", en: "A pronominal verb always comes with a reflexive pronoun (me, te, se, nous, vous, se), referring to the same person as the subject — like English -self pronouns. The pronoun goes right before the conjugated verb. In the infinitive, it's written with se: se lever, s'endormir, se laver." },
  t3_4_ex1: { fr: "se lever → je me lève, tu te lèves, il/elle se lève, nous nous levons, vous vous levez, ils/elles se lèvent", en: "se lever (to get up) → je me lève, tu te lèves, il/elle se lève, nous nous levons, vous vous levez, ils/elles se lèvent" },
  t3_4_ex2: { fr: "Je me réveille à sept heures.", en: "Je me réveille à sept heures. (I wake up at 7am.)" },
  t3_4_ex3: { fr: "Tu te brosses les dents ?", en: "Tu te brosses les dents? (Are you brushing your teeth?)" },
  t3_4_ex4: { fr: "Elle se maquille rapidement.", en: "Elle se maquille rapidement. (She puts on makeup quickly.)" },
  t3_4_ex5: { fr: "se doucher, s'habiller, se raser, se coucher, s'endormir, se reposer, s'amuser (vocabulaire du quotidien)", en: "se doucher (shower), s'habiller (get dressed), se raser (shave), se coucher (go to bed), s'endormir (fall asleep), se reposer (rest), s'amuser (have fun)" },
  t3_4_exercise: { fr: "Conjuguez « se coucher » à toutes les personnes.", en: "Conjugate se coucher (to go to bed) for every person." },
  t3_4_tryit: { fr: "Décrivez votre routine du matin en 3 phrases avec des verbes réfléchis : je me réveille..., je me..., je m'habille...", en: "Describe your morning routine in 3 sentences using reflexive verbs: je me réveille..., je me..., je m'habille..." },

  // 3.5 — Reflexive Verbs: Negative, Questions & Commands
  t3_5_obj: { fr: "mettre un verbe réfléchi à la forme négative, poser une question, et donner un ordre.", en: "put a reflexive verb in the negative, ask a question, and give a command." },
  t3_5_hook: { fr: "Les verbes réfléchis suivent presque les mêmes règles que les autres — sauf à l'impératif affirmatif, où le pronom fait un petit saut de place.", en: "Reflexive verbs follow almost the same rules as other verbs — except in the affirmative imperative, where the pronoun jumps to a new spot." },
  t3_5_expl: { fr: "À la négative, ne se place avant le pronom réfléchi et pas après le verbe : tu ne te reposes pas. Les questions se forment comme d'habitude (intonation, est-ce que, inversion). À l'impératif affirmatif, le pronom réfléchi passe après le verbe et s'attache par un trait d'union (te devient toi) : Lève-toi ! Mais à la forme négative, le pronom reste avant : Ne te lève pas !", en: "In the negative, ne goes before the reflexive pronoun and pas after the verb: tu ne te reposes pas. Questions form as usual (intonation, est-ce que, inversion). In the affirmative imperative, the reflexive pronoun moves after the verb and attaches with a hyphen (te becomes toi): Lève-toi! But in the negative, the pronoun stays before the verb: Ne te lève pas!" },
  t3_5_ex1: { fr: "Tu ne te reposes pas suffisamment.", en: "Tu ne te reposes pas suffisamment. (You don't rest enough.)" },
  t3_5_ex2: { fr: "Est-ce que vous vous brossez les dents souvent ?", en: "Est-ce que vous vous brossez les dents souvent? (Do you brush your teeth often?)" },
  t3_5_ex3: { fr: "Vous endormez-vous tard le week-end ?", en: "Vous endormez-vous tard le week-end? (Do you fall asleep late on weekends?)" },
  t3_5_ex4: { fr: "Lève-toi ! / Levez-vous ! / Levons-nous !", en: "Lève-toi! / Levez-vous! / Levons-nous! (Get up! — familiar/polite/let's)" },
  t3_5_ex5: { fr: "Ne te lève pas ! / Ne vous endormez pas devant la télé !", en: "Ne te lève pas! / Ne vous endormez pas devant la télé! (Don't get up! / Don't fall asleep in front of the TV!)" },
  t3_5_exercise: { fr: "Mettez à la forme négative : (1) Elle se maquille le week-end. (2) Nous nous levons tôt.", en: "Put in the negative: (1) Elle se maquille le week-end. (2) Nous nous levons tôt." },
  t3_5_tryit: { fr: "Donnez un ordre à un(e) ami(e) qui dort trop tard, en utilisant un verbe réfléchi à l'impératif.", en: "Give a command to a friend who's sleeping too late, using a reflexive verb in the imperative." },

  about_eyebrow: { fr: "Un peu plus sur moi", en: "A little about me" },
  about_title: { fr: "À propos", en: "About" },
  about_text: {
    fr: "Passionné(e) de français basé(e) à Kampala. Ici, on m'appelle « L'Affaires Étrangères » — un clin d'œil à Gerald de Paris, mon nom de plume pour ce carnet.",
    en: "French enthusiast based in Kampala. Around here, people call me \"The Foreign Affairs Guy\" — a nod to Gerald de Paris, my pen name for this notebook."
  },
  about_ph_photo: { fr: "Votre photo ici", en: "Your photo here" },

  footer_title: { fr: "Le Carnet Ougandais", en: "Le Carnet Ougandais" },
  footer_tagline: { fr: "Français & culture, depuis Kampala.", en: "French & culture, from Kampala." },
  footer_fine: { fr: "Préparé par Gerald de Paris, alias L'Affaires Étrangères.", en: "Prepared by Gerald de Paris, aka The Foreign Affairs Guy." },

  // ---------- shared lesson-page labels ----------
  lbl_objective: { fr: "Objectif :", en: "Objective:" },
  lbl_explanation: { fr: "Explication", en: "Explanation" },
  lbl_examples: { fr: "Exemples", en: "Examples" },
  lbl_exercise: { fr: "Exercice", en: "Exercise" },
  lbl_tryit: { fr: "À vous", en: "Your turn" },
  lbl_back: { fr: "← Retour aux ressources", en: "← Back to resources" },

  // ================= TRACK 1 =================
  t1_hero_eyebrow: { fr: "Track 1 · 5 leçons", en: "Track 1 · 5 lessons" },
  t1_hero_title: { fr: "Sound & Survival", en: "Sound & Survival" },
  t1_hero_desc: {
    fr: "Se sentir à l'aise avec les sons du français et faire un premier échange simple, dès le premier jour.",
    en: "Getting comfortable making basic French sounds and simple exchanges from day one."
  },
  t1_next_label: { fr: "→ Suite :", en: "→ Next:" },
  t1_next_link: { fr: "Track 2 — Core Grammar", en: "Track 2 — Core Grammar" },

  // 1.1 — Hello, French!
  t1_1_obj: { fr: "se familiariser avec la sonorité du français par rapport à l'anglais.", en: "get comfortable with how French sounds and feels compared to English." },
  t1_1_hook: { fr: "Le français et l'anglais partagent des centaines de mots presque identiques à l'écrit — mais à l'oral, c'est une autre histoire. Bonne nouvelle : une seule règle change tout.", en: "French and English share hundreds of nearly identical written words — but out loud, it's a different story. Good news: one single rule changes everything." },
  t1_1_expl: { fr: "Avant toute chose, un point de départ trop souvent oublié : l'alphabet. Les 26 lettres se prononcent différemment en français — savoir les nommer permet d'épeler un mot ou son nom à voix haute, une compétence de survie très pratique. Au-delà des lettres, beaucoup de mots français ressemblent à l'anglais à l'écrit (nation, restaurant, information) mais se prononcent très différemment. Le français est une langue au rythme régulier : chaque syllabe dure à peu près le même temps, contrairement à l'anglais. Et l'accent tombe toujours sur la dernière syllabe du mot ou du groupe de mots. Autre réflexe à prendre : en français, les mots s'enchaînent — une consonne finale normalement muette se prononce si le mot suivant commence par une voyelle. C'est ce qu'on appelle la liaison.", en: "Before anything else, a starting point that's too often skipped: the alphabet. The 26 letters are pronounced differently in French — knowing their names lets you spell a word or your name out loud, a genuinely practical survival skill. Beyond letters, many French words look like English in writing (nation, restaurant, information) but sound very different out loud. French has a steady rhythm: each syllable takes roughly the same amount of time, unlike English. And the stress always falls on the last syllable of the word or phrase. One more reflex to build: in French, words link together — a normally-silent final consonant gets pronounced if the next word starts with a vowel. This is called liaison." },
  t1_1_ex1: { fr: "nation → na-si-ON (pas NAY-shun)", en: "nation → na-si-ON (not NAY-shun)" },
  t1_1_ex2: { fr: "restaurant → res-to-RAN", en: "restaurant → res-to-RAHN" },
  t1_1_ex3: { fr: "information → in-for-ma-si-ON", en: "information → an-for-ma-see-OHN" },
  t1_1_ex4: { fr: "vous allez → « vou-z-allez » (liaison : le s muet se prononce « z »)", en: "vous allez → \"voo-z-ah-lay\" (liaison: the silent s is pronounced as \"z\")" },
  t1_1_ex5: { fr: "les idées → « lé-z-idées » (même règle de liaison)", en: "les idées → \"lay-zee-day\" (same liaison rule)" },
  t1_1_ex6: { fr: "C'est vrai-MENT bon", en: "C'est vrai-MENT bon (It's really good)" },
  t1_1_exercise: { fr: "Épelez votre prénom à voix haute, lettre par lettre, en français. Puis regardez ces mots : nation, information, animal, hôpital, télévision — devinez pour chacun : proche de l'anglais, ou totalement différent à l'oral ? Bonus : essayez de dire « vous avez » en faisant la liaison.", en: "Spell your first name out loud, letter by letter, in French. Then look at these words: nation, information, animal, hôpital, télévision — guess for each: close to English, or totally different out loud? Bonus: try saying \"vous avez\" using the liaison." },
  t1_1_tryit: { fr: "Épelez le nom de votre ville et celui d'un ami en français. Puis prenez une phrase que vous connaissez déjà et dites-la trois fois, en exagérant l'allongement de la toute dernière syllabe.", en: "Spell your city's name and a friend's name in French. Then take a sentence you already know and say it three times, exaggerating the lengthening of the very last syllable." },

  // 1.2 — Vowels That Change Everything (NEW)
  t1_2_obj: { fr: "distinguer les voyelles françaises de leurs équivalents anglais, notamment les voyelles nasales et les accents.", en: "distinguish core French vowel sounds from English equivalents, especially nasal vowels and accents." },
  t1_2_hook: { fr: "Une seule petite marque au-dessus d'une lettre peut changer complètement le sens d'un mot. Et le français a des sons que l'anglais n'a tout simplement pas : les voyelles nasales.", en: "One small mark above a letter can completely change a word's meaning. And French has sounds English simply doesn't have: nasal vowels." },
  t1_2_expl: { fr: "Le français utilise trois accents sur le e : é (aigu), è (grave), ê (circonflexe) — chacun donne un son différent. Le français a aussi des voyelles nasales, où l'air passe par le nez : an/en, in/ain/un, on. Elles n'existent pas en anglais, donc il faut d'abord les entraîner à l'oreille. Autre piège classique : des combinaisons comme oi et ui se prononcent en un seul son glissé (« wah », « uee ») plutôt que lettre par lettre — c'est ce qu'on appelle une semi-voyelle.", en: "French uses three accents on the letter e: é (acute), è (grave), ê (circumflex) — each gives a different sound. French also has nasal vowels, where air passes through the nose: an/en, in/ain/un, on. These don't exist in English, so train your ear first. Another classic trap: combinations like oi and ui are pronounced as a single glided sound (\"wah\", \"wee\") rather than letter by letter — this is called a semi-vowel." },
  t1_2_ex1: { fr: "été (l'été, la saison) vs être (exister)", en: "été (summer) vs être (to be) — same base letter, different sound" },
  t1_2_ex2: { fr: "élève / préféré — accent aigu (é)", en: "élève / préféré — acute accent (é)" },
  t1_2_ex3: { fr: "père / mère — accent grave (è), son ouvert", en: "père / mère — grave accent (è), open sound" },
  t1_2_ex4: { fr: "pain, vin, bon, un — voyelles nasales (an/en, in/ain/un, on)", en: "pain, vin, bon, un — nasal vowels (an/en, in/ain/un, on)" },
  t1_2_ex5: { fr: "moi, voiture (oi → « wah ») — huit, fruit (ui → « uee »)", en: "moi, voiture (oi → \"wah\") — huit, fruit (ui → \"wee\")" },
  t1_2_exercise: { fr: "Classez ces mots selon leur voyelle nasale (an/en, in/ain/un, on) : pain, maison, bonjour, lundi, enfant, matin. Bonus : lisez à voix haute « moi » et « huit » en gardant chaque son glissé en une seule syllabe.", en: "Sort these words by their nasal vowel (an/en, in/ain/un, on): pain, maison, bonjour, lundi, enfant, matin. Bonus: read \"moi\" and \"huit\" aloud, keeping each glided sound in a single syllable." },
  t1_2_tryit: { fr: "Écrivez trois mots français que vous connaissez déjà contenant une voyelle nasale, et prononcez-les à voix haute.", en: "Write three French words you already know that contain a nasal vowel, and say them aloud." },

  // 1.3 — Say Hello & Goodbye Like a Local
  t1_3_obj: { fr: "faire un premier vrai échange oral : saluer, se présenter, être poli.", en: "make your first real spoken exchange: greet, introduce yourself, be polite." },
  t1_3_hook: { fr: "Impossible de commencer une conversation en français sans passer par la case politesse — c'est presque une religion nationale.", en: "You can't start a conversation in French without going through the politeness ritual first — it's practically a national religion." },
  t1_3_expl: { fr: "Le français distingue le registre formel (vouvoiement, avec vous) du registre familier (tutoiement, avec tu). Avec un inconnu, un professeur ou un supérieur : vous. Avec un ami, un enfant, un membre de la famille : tu. Les salutations changent aussi selon le moment de la journée : bonjour le jour, bonsoir le soir. Pour dire d'où l'on vient, on utilise être + une nationalité, qui s'accorde comme un adjectif (français → française, canadien → canadienne). Les langues, elles, sont toujours masculines et ne prennent jamais de majuscule — contrairement au nom de nationalité (un Français, une Française). Dans le doute, commencez toujours par vous.", en: "French distinguishes the formal register (using vous) from the familiar one (using tu). With a stranger, a teacher, or a superior: vous. With a friend, a child, a family member: tu. Greetings also change with the time of day: bonjour during the day, bonsoir in the evening. To say where you're from, you use être + a nationality, which agrees like a regular adjective (français → française, canadien → canadienne). Languages are always masculine and never capitalized — unlike the noun for nationality (un Français, une Française). When in doubt, always start with vous." },
  t1_3_ex1: { fr: "Bonjour ! Comment allez-vous ? (formel) — Comment vas-tu ? (familier)", en: "Bonjour! Comment allez-vous? (formal) — Comment vas-tu? (familiar)" },
  t1_3_ex2: { fr: "Très bien, merci, et vous ? / Pas mal, merci, et toi ? / Comme ci, comme ça.", en: "Très bien, merci, et vous? (Very well, thanks, and you?) / Pas mal (Not bad) / Comme ci, comme ça (So-so)" },
  t1_3_ex3: { fr: "Je suis ougandais(e). / Il est canadien, elle est canadienne.", en: "Je suis ougandais(e). / Il est canadien, elle est canadienne. (I'm Ugandan. / He's Canadian, she's Canadian.)" },
  t1_3_ex4: { fr: "l'anglais, le français, l'espagnol (les langues : toujours masculin, jamais de majuscule)", en: "l'anglais, le français, l'espagnol (languages: always masculine, never capitalized)" },
  t1_3_ex5: { fr: "Enchanté(e). / Merci beaucoup. — De rien.", en: "Enchanté(e). (Pleased to meet you.) / Merci beaucoup. (Thank you very much.) — De rien. (You're welcome.)" },
  t1_3_ex6: { fr: "Au revoir. / À bientôt. / Bonne nuit. (en partant, le soir)", en: "Au revoir. (Goodbye.) / À bientôt. (See you soon.) / Bonne nuit. (Good night — when leaving in the evening.)" },
  t1_3_exercise: { fr: "Écrivez un mini-dialogue de 6 lignes entre deux inconnus qui se rencontrent à un arrêt de bus : salutation, « comment allez-vous », réponse, nationalité, puis au revoir. Utilisez vous.", en: "Write a 6-line mini-dialogue between two strangers meeting at a bus stop: greeting, \"how are you\", a reply, nationality, then goodbye. Use vous." },
  t1_3_tryit: { fr: "Présentez-vous en trois phrases : votre nom, d'où vous venez, ce que vous aimez faire. Dites-le à voix haute avant de l'écrire.", en: "Introduce yourself in three sentences: your name, where you're from, what you like to do. Say it out loud before writing it down." },

  // 1.4 — Giving Simple Commands
  t1_4_obj: { fr: "comprendre et utiliser des instructions de base.", en: "understand and use basic instructions." },
  t1_4_hook: { fr: "Envie de dire « Écoute-moi », « Viens ici » ou « Amusons-nous » sans passer par une phrase compliquée ? C'est le rôle de l'impératif — le mode le plus direct du français.", en: "Want to say \"Listen to me,\" \"Come here,\" or \"Let's have fun\" without a complicated sentence? That's the job of the imperative — French's most direct mood." },
  t1_4_expl: { fr: "L'impératif a trois formes, selon à qui vous parlez : familier (une personne proche), poli/pluriel (vouvoiement ou plusieurs personnes), et inclusif (vous vous incluez vous-même, comme « let's... »). Pour les verbes en -er, la forme familière perd le -s final. C'est la forme utilisée pour les instructions de type salle de classe : écoute, regarde, répète.", en: "The imperative has three forms depending on who you're talking to: familiar (someone close to you), polite/plural (formal or several people), and inclusive (you include yourself, like \"let's...\"). For -er verbs, the familiar form drops the final -s. This is the form used for classroom-style instructions: listen, look, repeat." },
  t1_4_ex1: { fr: "Écoute ! / Écoutez ! / Écoutons !", en: "Écoute! / Écoutez! / Écoutons! (Listen! — familiar/polite/let's)" },
  t1_4_ex2: { fr: "Regarde ! / Regardez !", en: "Regarde! / Regardez! (Look!)" },
  t1_4_ex3: { fr: "Répète ! / Répétez !", en: "Répète! / Répétez! (Repeat!)" },
  t1_4_ex4: { fr: "Viens avec moi ! / Venez avec moi !", en: "Viens avec moi! / Venez avec moi! (Come with me!)" },
  t1_4_ex5: { fr: "Ne t'inquiète pas.", en: "Ne t'inquiète pas. (Don't worry.)" },
  t1_4_ex6: { fr: "Amusons-nous bien !", en: "Amusons-nous bien! (Let's have fun!)" },
  t1_4_exercise: { fr: "Transformez ces phrases en ordres à la forme familière : (1) Tu regardes le tableau. (2) Tu manges tes légumes. (3) Tu arrêtes de parler.", en: "Turn these sentences into familiar-form commands: (1) Tu regardes le tableau. (2) Tu manges tes légumes. (3) Tu arrêtes de parler." },
  t1_4_tryit: { fr: "Donnez trois instructions que vous donneriez à un élève le premier jour de cours.", en: "Give three instructions you'd give a student on the first day of class." },

  // 1.5 — Yes, No, and Everything In Between
  t1_5_obj: { fr: "répondre à des questions simples avec confiance, en oui, en non, et à la négative.", en: "answer basic questions confidently — with yes, no, and in the negative." },
  t1_5_hook: { fr: "En français, répondre « oui » à une question négative peut créer un malentendu... sauf si vous connaissez le petit mot magique : si.", en: "In French, answering \"oui\" to a negative question can create a misunderstanding... unless you know the little magic word: si." },
  t1_5_expl: { fr: "La négation de base encadre le verbe avec deux mots : ne avant, pas après. À l'oral, une question simple se pose souvent juste en levant la voix à la fin de la phrase (intonation montante) — sans rien changer d'autre. Et pour répondre « oui » à une question posée à la négative, on utilise si, pas oui, pour bien marquer qu'on contredit la négation.", en: "Basic negation frames the verb with two words: ne before, pas after. In speech, a simple question is often formed just by raising your voice at the end of the sentence (rising intonation) — nothing else changes. And to answer \"yes\" to a question asked in the negative, you use si, not oui, to clearly signal you're contradicting the negation." },
  t1_5_ex1: { fr: "Tu aimes le café ? — Oui, j'aime le café. / Non, je n'aime pas le café.", en: "Tu aimes le café? — Oui, j'aime le café. / Non, je n'aime pas le café." },
  t1_5_ex2: { fr: "Tu ne parles pas anglais ? — Si, je parle anglais !", en: "Tu ne parles pas anglais? — Si, je parle anglais! (not \"oui\")" },
  t1_5_ex3: { fr: "Tu viens ce soir ? (intonation montante ↗)", en: "Tu viens ce soir? (rising intonation ↗)" },
  t1_5_ex4: { fr: "Je ne comprends pas.", en: "Je ne comprends pas. (I don't understand.)" },
  t1_5_ex5: { fr: "Ce n'est pas grave.", en: "Ce n'est pas grave. (It's not a big deal.)" },
  t1_5_ex6: { fr: "Il n'y a pas de problème.", en: "Il n'y a pas de problème. (No problem.)" },
  t1_5_exercise: { fr: "Répondez par si ou non : (1) Tu n'as pas faim ? (2) Tu ne veux pas venir ? (3) Il ne pleut pas aujourd'hui ?", en: "Answer with si or non: (1) Tu n'as pas faim? (2) Tu ne veux pas venir? (3) Il ne pleut pas aujourd'hui?" },
  t1_5_tryit: { fr: "Écrivez trois questions négatives que vous pourriez poser à un(e) élève curieux, et donnez la réponse avec si ou non.", en: "Write three negative questions you might ask a curious student, and give the answer using si or non." },

  // ================= TRACK 2 =================
  t2_hero_eyebrow: { fr: "Track 2 · 8 leçons", en: "Track 2 · 8 lessons" },
  t2_hero_title: { fr: "Core Grammar", en: "Core Grammar" },
  t2_hero_desc: {
    fr: "Construire le « moteur » de la phrase : sujets, verbes, articles, temps.",
    en: "Building the sentence \"engine\" — subjects, verbs, articles, time."
  },

  // 2.1 — Naming Things: Nouns & Articles
  t2_1_obj: { fr: "comprendre le genre et les articles (le/la/les, un/une/des).", en: "understand gender and articles (le/la/les, un/une/des)." },
  t2_1_hook: { fr: "En français, même une table a un genre. Ça peut sembler étrange au début, mais une fois le réflexe pris, ça devient automatique.", en: "In French, even a table has a gender. It might seem strange at first, but once the reflex kicks in, it becomes automatic." },
  t2_1_expl: { fr: "Tous les noms français sont masculins ou féminins — objets inclus. Devant une voyelle ou un « h muet », le/la deviennent l' (l'ami, l'hôtel) — mais pas devant un « h aspiré » (le héros, la honte). Un bon repère : les terminaisons -eau, -isme, -age, -ment sont presque toujours masculines ; -ion, -té, -ure, -ence/-ance presque toujours féminines. Au pluriel, un seul article (les/des) sert pour les deux genres, et on ajoute presque toujours un -s — sauf les noms en -eau/-eu qui prennent un -x.", en: "All French nouns are masculine or feminine — objects included. Before a vowel or a \"silent h\", le/la become l' (l'ami, l'hôtel) — but not before an \"aspirate h\" (le héros, la honte). A useful clue: endings like -eau, -isme, -age, -ment are almost always masculine; -ion, -té, -ure, -ence/-ance are almost always feminine. In the plural, a single article (les/des) covers both genders, and you almost always add an -s — except nouns ending in -eau/-eu, which take an -x." },
  t2_1_ex1: { fr: "le livre / un livre (masculin) — la table / une table (féminin)", en: "le livre / un livre (masculine) — la table / une table (feminine)" },
  t2_1_ex2: { fr: "l'ami / l'amie (devant une voyelle, le/la deviennent l')", en: "l'ami / l'amie (before a vowel, le/la become l')" },
  t2_1_ex3: { fr: "le héros (h aspiré, pas d'élision) vs l'homme (h muet, élision)", en: "le héros (aspirate h, no elision) vs l'homme (silent h, elision)" },
  t2_1_ex4: { fr: "le tourisme, le bureau (masculin) — la nation, l'université (féminin)", en: "le tourisme, le bureau (masculine) — la nation, l'université (feminine)" },
  t2_1_ex5: { fr: "le bureau → les bureaux (mots en -eau prennent -x)", en: "le bureau → les bureaux (-eau words take -x)" },
  t2_1_exercise: { fr: "Classez ces mots en masculin ou féminin, puis mettez-les au pluriel : voiture, téléphone, ville, jardin, animal (attention, exception !). Bonus : lequel des deux, l'hôtel ou le héros, ne fait pas l'élision ?", en: "Sort these words as masculine or feminine, then put them in the plural: voiture, téléphone, ville, jardin, animal (watch out, it's an exception!). Bonus: which of the two, l'hôtel or le héros, doesn't take the elision?" },
  t2_1_tryit: { fr: "Choisissez cinq objets autour de vous et notez-les avec leur article : le stylo, la fenêtre...", en: "Pick five objects around you and write them down with their article: le stylo, la fenêtre..." },

  // 2.2 — "I Am," "I Have"
  t2_2_obj: { fr: "utiliser être et avoir, les deux verbes les plus essentiels, avec confiance.", en: "use être and avoir, the two most essential verbs, with confidence." },
  t2_2_hook: { fr: "Si vous ne deviez apprendre que deux verbes en français, ce serait ceux-là — ils reviennent dans presque chaque phrase.", en: "If you only learned two verbs in French, these would be the ones — they show up in almost every sentence." },
  t2_2_expl: { fr: "Être (to be) et avoir (to have) sont irréguliers et essentiels : être sert à décrire (je suis fatigué), avoir sert pour l'âge, les sensations et la possession (j'ai 20 ans, j'ai faim, j'ai un chat). La négation encadre toujours le verbe conjugué avec ne...pas.", en: "Être (to be) and avoir (to have) are irregular and essential: être is used to describe (je suis fatigué), avoir is used for age, sensations, and possession (j'ai 20 ans, j'ai faim, j'ai un chat). Negation always frames the conjugated verb with ne...pas." },
  t2_2_ex1: { fr: "Je suis étudiante. / Je ne suis pas étudiante.", en: "Je suis étudiante. / Je ne suis pas étudiante." },
  t2_2_ex2: { fr: "Tu es fatigué ?", en: "Tu es fatigué? (Are you tired?)" },
  t2_2_ex3: { fr: "J'ai un chat. / Je n'ai pas de chat.", en: "J'ai un chat. / Je n'ai pas de chat." },
  t2_2_ex4: { fr: "Nous avons vingt ans.", en: "Nous avons vingt ans. (We are twenty years old.)" },
  t2_2_ex5: { fr: "J'ai faim. / J'ai soif.", en: "J'ai faim. / J'ai soif. (I'm hungry. / I'm thirsty.)" },
  t2_2_exercise: { fr: "Complétez avec être ou avoir : (1) Je ___ 20 ans. (2) Tu ___ content ? (3) Nous ___ un chien.", en: "Fill in with être or avoir: (1) Je ___ 20 ans. (2) Tu ___ content? (3) Nous ___ un chien." },
  t2_2_tryit: { fr: "Écrivez trois phrases sur vous-même en utilisant être et avoir.", en: "Write three sentences about yourself using être and avoir." },

  // 2.3 — Talking About Now: Present Tense Basics
  t2_3_obj: { fr: "conjuguer les verbes réguliers en -er au présent, et connaître jours/mois/saisons.", en: "conjugate regular -er verbs in the present tense, and know days/months/seasons." },
  t2_3_hook: { fr: "Bonne nouvelle : la majorité des verbes français se terminent en -er, et ils suivent tous le même patron.", en: "Good news: most French verbs end in -er, and they all follow the same pattern." },
  t2_3_expl: { fr: "Pour conjuguer un verbe en -er (comme parler), on retire -er et on ajoute : -e, -es, -e, -ons, -ez, -ent. Ce patron s'applique à des centaines de verbes. Les jours, mois et saisons sont essentiels pour organiser une phrase dans le temps.", en: "To conjugate an -er verb (like parler), remove -er and add: -e, -es, -e, -ons, -ez, -ent. This pattern applies to hundreds of verbs. Days, months, and seasons are essential for placing a sentence in time." },
  t2_3_ex1: { fr: "parler → je parle, tu parles, il parle, nous parlons, vous parlez, ils parlent", en: "parler → je parle, tu parles, il parle, nous parlons, vous parlez, ils parlent" },
  t2_3_ex2: { fr: "J'aime le chocolat.", en: "J'aime le chocolat. (I like chocolate.)" },
  t2_3_ex3: { fr: "lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche", en: "lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche (the days of the week)" },
  t2_3_ex4: { fr: "janvier, février, mars... décembre", en: "janvier, février, mars... décembre (the months)" },
  t2_3_ex5: { fr: "le printemps, l'été, l'automne, l'hiver", en: "le printemps, l'été, l'automne, l'hiver (spring, summer, fall, winter)" },
  t2_3_exercise: { fr: "Conjuguez « manger » à toutes les personnes (attention : nous mangeons, avec un e spécial).", en: "Conjugate manger for every person (watch out: nous mangeons, with a special e)." },
  t2_3_tryit: { fr: "Écrivez une phrase pour trois jours de la semaine, décrivant ce que vous faites (verbe en -er).", en: "Write a sentence for three days of the week, describing what you do (use an -er verb)." },

  // 2.4 — Numbers, Dates & Time
  t2_4_obj: { fr: "compter, dire l'heure et la date.", en: "handle numbers, telling time, and dates." },
  t2_4_hook: { fr: "Impossible de prendre rendez-vous ou de faire des courses sans maîtriser les nombres et l'heure.", en: "You can't make an appointment or go shopping without mastering numbers and time." },
  t2_4_expl: { fr: "Les nombres cardinaux (un, deux, trois...) servent à compter ; les ordinaux (premier, deuxième...) à classer. Pour l'heure, on dit « Il est... heure(s) » ; pour la date, « Nous sommes le... » suivi du jour et du mois.", en: "Cardinal numbers (un, deux, trois...) are for counting; ordinals (premier, deuxième...) are for ranking. For time, you say \"Il est... heure(s)\"; for the date, \"Nous sommes le...\" followed by the day and month." },
  t2_4_ex1: { fr: "un, deux, trois, dix, vingt, cent", en: "un, deux, trois, dix, vingt, cent (one, two, three, ten, twenty, one hundred)" },
  t2_4_ex2: { fr: "premier, deuxième, troisième", en: "premier, deuxième, troisième (first, second, third)" },
  t2_4_ex3: { fr: "Il est trois heures et demie.", en: "Il est trois heures et demie. (It's half past three.)" },
  t2_4_ex4: { fr: "Quelle heure est-il ?", en: "Quelle heure est-il? (What time is it?)" },
  t2_4_ex5: { fr: "Nous sommes le 25 juillet.", en: "Nous sommes le 25 juillet. (Today is July 25th.)" },
  t2_4_exercise: { fr: "Écrivez ces heures en français : 9h00, 14h30, 18h15.", en: "Write these times in French: 9h00, 14h30, 18h15." },
  t2_4_tryit: { fr: "Écrivez la date d'aujourd'hui et votre heure préférée de la journée, en français.", en: "Write today's date and your favorite time of day, in French." },

  // 2.5 — More Action Verbs
  t2_5_obj: { fr: "étendre son vocabulaire de verbes au-delà des verbes en -er.", en: "expand your verb vocabulary beyond -er verbs." },
  t2_5_hook: { fr: "Le français a deux autres grandes familles de verbes réguliers — une fois qu'on les connaît, on peut décrire beaucoup plus d'actions.", en: "French has two other major families of regular verbs — once you know them, you can describe a lot more actions." },
  t2_5_expl: { fr: "Les verbes en -ir (comme finir) suivent le patron : -is, -is, -it, -issons, -issez, -issent. Les verbes en -re (comme vendre) suivent : -s, -s, (rien), -ons, -ez, -ent.", en: "-ir verbs (like finir) follow the pattern: -is, -is, -it, -issons, -issez, -issent. -re verbs (like vendre) follow: -s, -s, (nothing), -ons, -ez, -ent." },
  t2_5_ex1: { fr: "finir → je finis, tu finis, il finit, nous finissons, vous finissez, ils finissent", en: "finir → je finis, tu finis, il finit, nous finissons, vous finissez, ils finissent" },
  t2_5_ex2: { fr: "Je choisis un livre.", en: "Je choisis un livre. (I'm choosing a book.)" },
  t2_5_ex3: { fr: "vendre → je vends, tu vends, il vend, nous vendons, vous vendez, ils vendent", en: "vendre → je vends, tu vends, il vend, nous vendons, vous vendez, ils vendent" },
  t2_5_ex4: { fr: "J'attends le bus.", en: "J'attends le bus. (I'm waiting for the bus.)" },
  t2_5_ex5: { fr: "Tu entends ça ?", en: "Tu entends ça? (Do you hear that?)" },
  t2_5_exercise: { fr: "Conjuguez « réussir » (réussir = to succeed) à toutes les personnes.", en: "Conjugate réussir (to succeed) for every person." },
  t2_5_tryit: { fr: "Écrivez deux phrases : une avec un verbe en -ir, une avec un verbe en -re.", en: "Write two sentences: one with an -ir verb, one with an -re verb." },

  // 2.6 — Talking About the Future
  t2_6_obj: { fr: "exprimer des projets proches avec le futur proche.", en: "express near-future plans simply." },
  t2_6_hook: { fr: "Pas besoin d'apprendre une conjugaison compliquée pour parler du futur — un seul verbe suffit pour commencer.", en: "You don't need a complicated conjugation to talk about the future — one verb is enough to get started." },
  t2_6_expl: { fr: "Le futur proche se forme avec aller conjugué + un verbe à l'infinitif : je vais manger. C'est la façon la plus naturelle de parler de projets proches à l'oral. Les prépositions à et de indiquent la direction/le lieu (à Paris) ou l'origine (de Paris).", en: "The near future is formed with aller conjugated + a verb in the infinitive: je vais manger (I'm going to eat). It's the most natural way to talk about near-future plans in speech. The prepositions à and de indicate direction/place (à Paris) or origin (de Paris)." },
  t2_6_ex1: { fr: "Je vais voyager cet été.", en: "Je vais voyager cet été. (I'm going to travel this summer.)" },
  t2_6_ex2: { fr: "Tu vas étudier ce soir ?", en: "Tu vas étudier ce soir? (Are you going to study tonight?)" },
  t2_6_ex3: { fr: "Nous allons manger au restaurant.", en: "Nous allons manger au restaurant. (We're going to eat at the restaurant.)" },
  t2_6_ex4: { fr: "Ils vont arriver demain.", en: "Ils vont arriver demain. (They're going to arrive tomorrow.)" },
  t2_6_ex5: { fr: "Je viens de Kampala. / Je vais à Paris.", en: "Je viens de Kampala. / Je vais à Paris. (I come from Kampala. / I'm going to Paris.)" },
  t2_6_exercise: { fr: "Transformez en futur proche : (1) Je mange. (2) Tu voyages. (3) Elle travaille.", en: "Turn into the near future: (1) Je mange. (2) Tu voyages. (3) Elle travaille." },
  t2_6_tryit: { fr: "Écrivez trois projets pour le week-end prochain, avec aller + infinitif.", en: "Write three plans for next weekend, using aller + infinitive." },

  // 2.7 — What Are You Doing? (faire & prepositions)
  t2_7_obj: { fr: "décrire des activités et des lieux avec le verbe faire et les prépositions.", en: "describe activities and locations with the verb faire and prepositions." },
  t2_7_hook: { fr: "Le verbe faire est l'un des plus utilisés en français — et pourtant il ne se traduit pas toujours par « to do ».", en: "The verb faire is one of the most used in French — and yet it doesn't always translate as \"to do.\"" },
  t2_7_expl: { fr: "Faire s'utilise pour les activités (faire du sport), la météo (il fait beau) et bien plus. Avec les pays, on utilise en devant un pays féminin ou commençant par une voyelle (en France, en Ouganda) et au devant un pays masculin commençant par une consonne (au Canada).", en: "Faire is used for activities (faire du sport), weather (il fait beau), and much more. With countries, use en before a feminine country or one starting with a vowel (en France, en Ouganda) and au before a masculine country starting with a consonant (au Canada)." },
  t2_7_ex1: { fr: "Je fais du sport le matin.", en: "Je fais du sport le matin. (I exercise in the morning.)" },
  t2_7_ex2: { fr: "Il fait beau aujourd'hui.", en: "Il fait beau aujourd'hui. (The weather's nice today.)" },
  t2_7_ex3: { fr: "Qu'est-ce que tu fais ce soir ?", en: "Qu'est-ce que tu fais ce soir? (What are you doing tonight?)" },
  t2_7_ex4: { fr: "Je vis en Ouganda.", en: "Je vis en Ouganda. (I live in Uganda.)" },
  t2_7_ex5: { fr: "Il va au Canada. / Elle voyage en France.", en: "Il va au Canada. / Elle voyage en France." },
  t2_7_exercise: { fr: "Complétez avec faire conjugué : (1) Je ___ mes devoirs. (2) Vous ___ la cuisine ? (3) Ils ___ du vélo.", en: "Fill in with faire conjugated: (1) Je ___ mes devoirs. (2) Vous ___ la cuisine? (3) Ils ___ du vélo." },
  t2_7_tryit: { fr: "Décrivez trois activités que vous « faites » pendant une semaine typique, avec le verbe faire.", en: "Describe three activities you \"do\" during a typical week, using the verb faire." },

  // 2.8 — Comparing Things
  t2_8_obj: { fr: "comparer et décrire avec confiance : comparatifs, superlatifs, possessifs.", en: "compare and describe with confidence using comparatives, superlatives, and possessives." },
  t2_8_hook: { fr: "Dire que quelque chose est « plus grand », « le plus beau » ou « à moi » — ce sont les outils qui rendent une description vivante.", en: "Saying something is \"bigger,\" \"the most beautiful,\" or \"mine\" — these are the tools that make a description come alive." },
  t2_8_expl: { fr: "On compare avec plus...que, moins...que, aussi...que ; le superlatif utilise le/la/les plus ou moins. Pour le féminin, on ajoute en général un -e, mais certaines terminaisons sont irrégulières : -eux→-euse, -if→-ive, -en→-enne, -el→-elle. Les adjectifs de couleur suivent en général les mêmes règles, mais deux d'entre eux ne changent jamais, même au féminin ou au pluriel : marron et orange. La plupart des adjectifs se placent après le nom, mais une poignée de mots courants (bon, grand, petit, beau, jeune, joli, nouveau, vieux) se placent avant — et trois d'entre eux changent de forme devant une voyelle : beau→bel, nouveau→nouvel, vieux→vieil. Les possessifs (mon/ma/mes...) s'accordent avec l'objet possédé, pas avec la personne.", en: "You compare with plus...que, moins...que, aussi...que; the superlative uses le/la/les plus or moins. For the feminine, you generally add -e, but some endings are irregular: -eux→-euse, -if→-ive, -en→-enne, -el→-elle. Color adjectives generally follow the same rules, but two never change, even in the feminine or plural: marron and orange. Most adjectives come after the noun, but a handful of common ones (bon, grand, petit, beau, jeune, joli, nouveau, vieux) come before it — and three of them change shape before a vowel: beau→bel, nouveau→nouvel, vieux→vieil. Possessives (mon/ma/mes...) agree with the object owned, not the owner." },
  t2_8_ex1: { fr: "Kampala est plus grande que Jinja.", en: "Kampala est plus grande que Jinja. (Kampala is bigger than Jinja.)" },
  t2_8_ex2: { fr: "heureux → heureuse, sportif → sportive, parisien → parisienne", en: "heureux → heureuse, sportif → sportive, parisien → parisienne (happy, athletic, Parisian)" },
  t2_8_ex3: { fr: "des chaussures marron, des sacs orange (jamais d'accord, même au pluriel)", en: "des chaussures marron, des sacs orange (never agree, even in the plural)" },
  t2_8_ex4: { fr: "un bel homme, un nouvel ami, un vieil hôtel (devant une voyelle)", en: "un bel homme, un nouvel ami, un vieil hôtel (before a vowel)" },
  t2_8_ex5: { fr: "mon livre, ma maison, mes amis", en: "mon livre, ma maison, mes amis (my book, my house, my friends)" },
  t2_8_exercise: { fr: "Comparez deux villes que vous connaissez avec plus...que ou moins...que. Bonus : pourquoi ne dit-on jamais « des chemises marrones » ?", en: "Compare two cities you know using plus...que or moins...que. Bonus: why do you never say \"des chemises marrones\"?" },
  t2_8_tryit: { fr: "Décrivez votre objet préféré : « C'est mon/ma ___, il/elle est très ___. »", en: "Describe your favorite object: \"C'est mon/ma ___, il/elle est très ___.\"" }
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
  if (toggle) {
    toggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-lang");
      applyLanguage(current === "fr" ? "en" : "fr");
    });
  }
}

document.addEventListener("DOMContentLoaded", initLangToggle);

// ============================================
// BASIC COPY DETERRENT (not foolproof — see note)
// ============================================
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});
document.addEventListener("copy", function (e) {
  e.preventDefault();
});

// ============================================
// TAP-TO-LISTEN (French pronunciation via the browser's built-in voice)
// Adds a small speaker button after each example line so learners can
// hear it read aloud. Uses the Web Speech API — no audio files needed.
// Voice quality depends on the visitor's device/browser.
// ============================================
function initListenButtons() {
  if (!("speechSynthesis" in window)) return;

  document.querySelectorAll(".lesson-examples li").forEach((li) => {
    if (li.querySelector(".listen-btn")) return;

    // Speak only the French part: cut off at the first " — " or " ("
    // since many lines have an English gloss or note after that point.
    const rawText = li.textContent;
    const frenchPart = rawText.split(/\s+—\s+|\s+\(/)[0].trim();
    if (!frenchPart) return;

    const btn = document.createElement("button");
    btn.className = "listen-btn";
    btn.setAttribute("aria-label", "Écouter la prononciation");
    btn.innerHTML = "🔊";
    btn.addEventListener("click", () => {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(frenchPart);
      utterance.lang = "fr-FR";
      utterance.rate = 0.9;
      btn.classList.add("is-playing");
      utterance.onend = () => btn.classList.remove("is-playing");
      window.speechSynthesis.speak(utterance);
    });
    li.appendChild(btn);
  });
}

document.addEventListener("DOMContentLoaded", initListenButtons);

// ============================================
// CULTURE CLICK-THROUGH MODAL
// Clicking a postcard opens a bigger view with a title + "brief talk"
// paragraph, similar to opening a listing for more detail.
// ============================================
function initCultureModal() {
  const modal = document.getElementById("cultureModal");
  if (!modal) return;

  const closeBtn = document.getElementById("cultureModalClose");
  const titleEl = document.getElementById("cultureModalTitle");
  const textEl = document.getElementById("cultureModalText");

  function openModal(postcard) {
    const lang = document.documentElement.getAttribute("data-lang") || "fr";
    const captionEl = postcard.querySelector(".postcard-caption");
    const detailKey = postcard.getAttribute("data-detail-key");
    const detailEntry = translations[detailKey];

    titleEl.textContent = captionEl ? captionEl.textContent : "";
    textEl.textContent = detailEntry ? detailEntry[lang] : "";
    modal.hidden = false;
  }

  function closeModal() {
    modal.hidden = true;
  }

  document.querySelectorAll(".postcard").forEach((postcard) => {
    postcard.addEventListener("click", () => openModal(postcard));
  });

  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

document.addEventListener("DOMContentLoaded", initCultureModal);
