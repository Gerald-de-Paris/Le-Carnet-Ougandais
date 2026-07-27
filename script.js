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
  track3_progress: { fr: "10 leçons disponibles", en: "10 lessons available" },

  track4_title: { fr: "Past, Future & Fluency", en: "Past, Future & Fluency" },
  track4_desc: { fr: "Le passé composé (avoir & être) — imparfait, futur, conditionnel à venir.", en: "The passé composé (avoir & être) — imperfect, future, conditional coming next." },
  track4_progress: { fr: "11 leçons disponibles", en: "11 lessons available" },

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

  // 3.6 — Object Pronouns: le/la/les, lui/leur
  t3_6_obj: { fr: "remplacer un objet direct ou indirect par un pronom (le/la/les, lui/leur), et savoir les combiner.", en: "replace a direct or indirect object with a pronoun (le/la/les, lui/leur), and combine them correctly." },
  t3_6_hook: { fr: "Répéter « le livre » trois fois dans la même conversation, personne ne fait ça. Les pronoms objets existent pour éviter cette répétition.", en: "No one repeats \"the book\" three times in the same conversation. Object pronouns exist to avoid exactly that repetition." },
  t3_6_expl: { fr: "Le/la/les remplacent un objet direct (une personne ou une chose précise) ; lui/leur remplacent un objet indirect (introduit par à). Ces pronoms se placent juste avant le verbe conjugué. Quand une phrase a les deux à la fois, l'ordre est fixe : me/te/se/nous/vous, puis le/la/les, puis lui/leur, puis y et en en dernier.", en: "Le/la/les replace a direct object (a specific person or thing); lui/leur replace an indirect object (introduced by à). These pronouns go right before the conjugated verb. When a sentence has both, the order is fixed: me/te/se/nous/vous, then le/la/les, then lui/leur, then y and en last." },
  t3_6_ex1: { fr: "Je donne le livre à Marie. → Je le lui donne.", en: "Je donne le livre à Marie. → Je le lui donne. (I give the book to Marie. → I give it to her.)" },
  t3_6_ex2: { fr: "Tu m'offres cette écharpe ? → Tu me la donnes ?", en: "Tu m'offres cette écharpe? → Tu me la donnes? (Are you giving me that scarf? → Are you giving it to me?)" },
  t3_6_ex3: { fr: "Il envoie des mails à Corinne. → Il lui en envoie.", en: "Il envoie des mails à Corinne. → Il lui en envoie. (He sends emails to Corinne. → He sends her some.)" },
  t3_6_ex4: { fr: "Elle vous a retrouvés à la gare ? → Elle vous y a retrouvés ?", en: "Elle vous a retrouvés à la gare? → Elle vous y a retrouvés? (Did she meet you at the station? → Did she meet you there?)" },
  t3_6_ex5: { fr: "Je ne t'offre pas d'argent. → Je ne t'en offre pas. (à la négative, ne précède les deux pronoms)", en: "Je ne t'offre pas d'argent. → Je ne t'en offre pas. (in the negative, ne comes before both pronouns)" },
  t3_6_exercise: { fr: "Remplacez les mots en italique par des pronoms : « Je donne la pomme au professeur. » « Tu m'offres dix euros. »", en: "Replace the object words with pronouns: \"Je donne la pomme au professeur.\" \"Tu m'offres dix euros.\"" },
  t3_6_tryit: { fr: "Écrivez une phrase avec un objet direct ET un objet indirect (par exemple, donner un cadeau à quelqu'un), puis remplacez les deux par des pronoms.", en: "Write a sentence with both a direct AND an indirect object (e.g. giving someone a gift), then replace both with pronouns." },

  // 3.7 — Irregular Verbs You'll Use Constantly
  t3_7_obj: { fr: "conjuguer au présent les verbes irréguliers les plus fréquents : partir, venir, dire, lire, écrire, mettre.", en: "conjugate the most common irregular verbs in the present: partir, venir, dire, lire, écrire, mettre." },
  t3_7_hook: { fr: "Ces six verbes reviennent partout — dans les conversations, les livres, les chansons. Les apprendre maintenant vous fera gagner un temps précieux.", en: "These six verbs show up everywhere — in conversations, books, songs. Learning them now will save you a lot of time later." },
  t3_7_expl: { fr: "Chaque verbe irrégulier a ses propres surprises, mais certains partagent des patrons. Partir et venir suivent un schéma proche (le radical change entre singulier et pluriel). Dire, lire et écrire ont chacun leurs formes propres à retenir par cœur. Mettre garde le même radical à toutes les personnes du singulier.", en: "Each irregular verb has its own quirks, but some share patterns. Partir and venir follow a similar shape (the stem changes between singular and plural). Dire, lire, and écrire each have their own forms to memorize. Mettre keeps the same stem across all singular persons." },
  t3_7_ex1: { fr: "partir → je pars, tu pars, il part, nous partons, vous partez, ils partent", en: "partir (to leave) → je pars, tu pars, il part, nous partons, vous partez, ils partent" },
  t3_7_ex2: { fr: "venir → je viens, tu viens, il vient, nous venons, vous venez, ils viennent", en: "venir (to come) → je viens, tu viens, il vient, nous venons, vous venez, ils viennent" },
  t3_7_ex3: { fr: "dire → je dis, tu dis, il dit, nous disons, vous dites, ils disent", en: "dire (to say) → je dis, tu dis, il dit, nous disons, vous dites, ils disent" },
  t3_7_ex4: { fr: "lire → je lis, tu lis, il lit, nous lisons, vous lisez, ils lisent — écrire → j'écris, tu écris, il écrit, nous écrivons, vous écrivez, ils écrivent", en: "lire (to read) → je lis, tu lis, il lit, nous lisons, vous lisez, ils lisent — écrire (to write) → j'écris, tu écris, il écrit, nous écrivons, vous écrivez, ils écrivent" },
  t3_7_ex5: { fr: "mettre → je mets, tu mets, il met, nous mettons, vous mettez, ils mettent", en: "mettre (to put) → je mets, tu mets, il met, nous mettons, vous mettez, ils mettent" },
  t3_7_exercise: { fr: "Conjuguez « venir » et « dire » à la troisième personne du pluriel (ils/elles).", en: "Conjugate venir and dire in the third person plural (ils/elles)." },
  t3_7_tryit: { fr: "Écrivez trois phrases sur votre journée en utilisant trois de ces verbes irréguliers.", en: "Write three sentences about your day using three of these irregular verbs." },

  // 3.8 — Wanting, Being Able To, Having To
  t3_8_obj: { fr: "exprimer le désir, la capacité et l'obligation avec pouvoir, vouloir, devoir + infinitif.", en: "express desire, ability, and obligation with pouvoir, vouloir, devoir + infinitive." },
  t3_8_hook: { fr: "Trois petits verbes, un immense pouvoir d'expression : ce que vous voulez, ce que vous pouvez, ce que vous devez faire.", en: "Three small verbs, huge expressive power: what you want, what you can do, what you have to do." },
  t3_8_expl: { fr: "Pouvoir (capacité/permission), vouloir (désir), et devoir (obligation) sont tous suivis directement d'un infinitif, sans préposition. Tous les trois sont irréguliers au présent.", en: "Pouvoir (ability/permission), vouloir (desire), and devoir (obligation) are all followed directly by an infinitive, with no preposition. All three are irregular in the present." },
  t3_8_ex1: { fr: "pouvoir → je peux, tu peux, il peut, nous pouvons, vous pouvez, ils peuvent", en: "pouvoir (can/to be able to) → je peux, tu peux, il peut, nous pouvons, vous pouvez, ils peuvent" },
  t3_8_ex2: { fr: "vouloir → je veux, tu veux, il veut, nous voulons, vous voulez, ils veulent", en: "vouloir (to want) → je veux, tu veux, il veut, nous voulons, vous voulez, ils veulent" },
  t3_8_ex3: { fr: "devoir → je dois, tu dois, il doit, nous devons, vous devez, ils doivent", en: "devoir (must/to have to) → je dois, tu dois, il doit, nous devons, vous devez, ils doivent" },
  t3_8_ex4: { fr: "Je veux apprendre le français.", en: "Je veux apprendre le français. (I want to learn French.)" },
  t3_8_ex5: { fr: "Tu dois finir ton travail avant de sortir. — Est-ce que je peux vous aider ?", en: "Tu dois finir ton travail avant de sortir. (You have to finish your work before going out.) — Est-ce que je peux vous aider? (Can I help you?)" },
  t3_8_exercise: { fr: "Complétez avec pouvoir, vouloir ou devoir : (1) Je ___ partir maintenant. (2) Tu ___ voyager cet été ? (3) Nous ___ étudier ce soir.", en: "Fill in with pouvoir, vouloir, or devoir: (1) Je ___ partir maintenant. (2) Tu ___ voyager cet été? (3) Nous ___ étudier ce soir." },
  t3_8_tryit: { fr: "Écrivez trois phrases sur vous-même : une avec vouloir, une avec pouvoir, une avec devoir.", en: "Write three sentences about yourself: one with vouloir, one with pouvoir, one with devoir." },

  // 3.9 — Asking Great Questions
  t3_9_obj: { fr: "poser des questions variées avec est-ce que et les pronoms interrogatifs (qui, quoi, où, quand, comment, pourquoi).", en: "ask varied questions using est-ce que and interrogative pronouns (qui, quoi, où, quand, comment, pourquoi)." },
  t3_9_hook: { fr: "Une bonne conversation vit de bonnes questions — et le français a un mot précis pour chaque type de réponse que vous cherchez.", en: "A good conversation runs on good questions — and French has a precise word for each type of answer you're looking for." },
  t3_9_expl: { fr: "Est-ce que transforme une affirmation en question sans changer l'ordre des mots. Les pronoms interrogatifs se placent en général au début de la phrase, souvent suivis de est-ce que : qui (personne), quoi (chose, souvent avec qu'est-ce que), où (lieu), quand (temps), comment (manière), pourquoi (raison).", en: "Est-ce que turns a statement into a question without changing word order. Interrogative pronouns generally go at the start of the sentence, often followed by est-ce que: qui (person), quoi (thing, often with qu'est-ce que), où (place), quand (time), comment (manner), pourquoi (reason)." },
  t3_9_ex1: { fr: "Est-ce que tu aimes voyager ?", en: "Est-ce que tu aimes voyager? (Do you like to travel?)" },
  t3_9_ex2: { fr: "Qui est-ce que tu attends ?", en: "Qui est-ce que tu attends? (Who are you waiting for?)" },
  t3_9_ex3: { fr: "Qu'est-ce que tu fais ce soir ?", en: "Qu'est-ce que tu fais ce soir? (What are you doing tonight?)" },
  t3_9_ex4: { fr: "Où est-ce que tu habites ? / Quand est-ce qu'on part ?", en: "Où est-ce que tu habites? (Where do you live?) / Quand est-ce qu'on part? (When are we leaving?)" },
  t3_9_ex5: { fr: "Comment est-ce que ça marche ? / Pourquoi est-ce que tu ris ?", en: "Comment est-ce que ça marche? (How does it work?) / Pourquoi est-ce que tu ris? (Why are you laughing?)" },
  t3_9_exercise: { fr: "Transformez en question avec le bon mot interrogatif : (1) Tu vas ___ (lieu) ? (2) Tu pars ___ (temps) ? (3) Tu fais ça ___ (manière) ?", en: "Turn into a question with the right interrogative word: (1) Tu vas ___ (place)? (2) Tu pars ___ (time)? (3) Tu fais ça ___ (manner)?" },
  t3_9_tryit: { fr: "Imaginez un jeu de « 20 questions » — écrivez 5 questions pour deviner un objet mystère, en variant qui/quoi/où/quand/comment/pourquoi.", en: "Imagine a game of \"20 Questions\" — write 5 questions to guess a mystery object, varying qui/quoi/où/quand/comment/pourquoi." },

  // 3.10 — Describing People and Things: Adverbs & Indefinite Words
  t3_10_obj: { fr: "ajouter de la nuance avec des adverbes de manière/fréquence, et utiliser tout, quelques, chacun, aucun.", en: "add nuance with adverbs of manner/frequency, and use tout, quelques, chacun, aucun." },
  t3_10_hook: { fr: "« Il travaille bien » et « il travaille très bien, mais rarement le lundi » — les adverbes transforment une phrase plate en description vivante.", en: "\"He works well\" and \"he works very well, but rarely on Mondays\" — adverbs turn a flat sentence into a vivid description." },
  t3_10_expl: { fr: "Les adverbes de manière (bien, mal, vite, lentement) et de fréquence (souvent, toujours, parfois, rarement, jamais) se placent en général juste après le verbe. Tout(e)(s) peut être adjectif (tous les jours) ou pronom (tout va bien). Quelques (adjectif, « some/a few »), chacun (pronom, « each one ») et aucun...ne (négatif, « none ») complètent la boîte à outils pour décrire des quantités.", en: "Adverbs of manner (bien, mal, vite, lentement) and frequency (souvent, toujours, parfois, rarement, jamais) usually go right after the verb. Tout(e)(s) can be an adjective (tous les jours) or a pronoun (tout va bien). Quelques (adjective, \"some/a few\"), chacun (pronoun, \"each one\"), and aucun...ne (negative, \"none\") round out the toolkit for describing quantities." },
  t3_10_ex1: { fr: "Il travaille bien mais lentement.", en: "Il travaille bien mais lentement. (He works well but slowly.)" },
  t3_10_ex2: { fr: "Elle voyage souvent, mais rarement seule.", en: "Elle voyage souvent, mais rarement seule. (She travels often, but rarely alone.)" },
  t3_10_ex3: { fr: "Nous avons roulé tout l'après-midi. (tout, adjectif) — Tout va bien ? (tout, pronom)", en: "Nous avons roulé tout l'après-midi. (tout as adjective — We drove all afternoon.) — Tout va bien? (tout as pronoun — Is everything OK?)" },
  t3_10_ex4: { fr: "J'ai lu quelques livres ce mois-ci.", en: "J'ai lu quelques livres ce mois-ci. (I've read a few books this month.)" },
  t3_10_ex5: { fr: "Chacun a son propre style. / Aucun ne pose de problème.", en: "Chacun a son propre style. (Each one has their own style.) / Aucun ne pose de problème. (None of them is a problem.)" },
  t3_10_exercise: { fr: "Complétez avec tout, quelques ou chacun : (1) J'ai ___ mes affaires. (2) Il reste ___ places. (3) ___ élève a son cahier.", en: "Fill in with tout, quelques, or chacun: (1) J'ai ___ mes affaires. (2) Il reste ___ places. (3) ___ élève a son cahier." },
  t3_10_tryit: { fr: "Décrivez une personne mystère en 3 phrases en utilisant un adverbe de fréquence et un mot indéfini (tout/quelques/chacun).", en: "Describe a mystery person in 3 sentences, using a frequency adverb and an indefinite word (tout/quelques/chacun)." },

  // ================= TRACK 4 =================
  t4_hero_eyebrow: { fr: "Track 4 · 5 leçons (d'autres à venir)", en: "Track 4 · 5 lessons (more coming)" },
  t4_hero_title: { fr: "Past, Future & Fluency", en: "Past, Future & Fluency" },
  t4_hero_desc: {
    fr: "Raconter ce qui s'est passé : le passé composé, ses formes régulières et irrégulières, et comment bien accorder le participe passé.",
    en: "Telling what happened: the passé composé, its regular and irregular forms, and how to agree the past participle correctly."
  },

  // 4.1 — Passé composé with avoir
  t4_1_obj: { fr: "former le passé composé avec avoir pour raconter des actions terminées.", en: "form the passé composé with avoir to talk about completed actions." },
  t4_1_hook: { fr: "Le français ne dit pas juste « I spoke » — il utilise une astuce à deux pièces : un petit « avoir » conjugué, plus un mot qui a changé de forme. Ensemble, ils racontent le passé.", en: "French doesn't just say \"I spoke\" — it uses a two-piece trick: a small conjugated \"avoir\", plus a word that's changed shape. Together, they tell the past." },
  t4_1_expl: { fr: "Le passé composé est le temps le plus utilisé pour raconter un événement terminé. Il se forme avec le présent de l'auxiliaire avoir + le participe passé du verbe. Pour les verbes réguliers : -er devient -é (parler → parlé), -ir devient -i (finir → fini), -re devient -u (vendre → vendu).", en: "The passé composé is the most commonly used tense for a completed event. It's formed with the present tense of avoir + the verb's past participle. For regular verbs: -er becomes -é (parler → parlé), -ir becomes -i (finir → fini), -re becomes -u (vendre → vendu)." },
  t4_1_ex1: { fr: "parler → j'ai parlé, tu as parlé, il a parlé, nous avons parlé, vous avez parlé, ils ont parlé", en: "parler (to speak) → j'ai parlé, tu as parlé, il a parlé, nous avons parlé, vous avez parlé, ils ont parlé" },
  t4_1_ex2: { fr: "J'ai acheté un livre. (acheter → acheté)", en: "J'ai acheté un livre. (I bought a book.)" },
  t4_1_ex3: { fr: "Nous avons fini de manger. (finir → fini)", en: "Nous avons fini de manger. (We finished eating.)" },
  t4_1_ex4: { fr: "Elles ont perdu leurs clés. (perdre → perdu)", en: "Elles ont perdu leurs clés. (They lost their keys.)" },
  t4_1_ex5: { fr: "As-tu vendu ta voiture ?", en: "As-tu vendu ta voiture? (Did you sell your car?)" },
  t4_1_exercise: { fr: "Mettez au passé composé : (1) nous écoutons (2) tu réfléchis (3) elles parlent.", en: "Put into the passé composé: (1) nous écoutons (2) tu réfléchis (3) elles parlent." },
  t4_1_tryit: { fr: "Racontez en 2 phrases au passé composé ce que vous avez mangé hier.", en: "Tell in 2 sentences, using the passé composé, what you ate yesterday." },

  // 4.2 — Irregular Past Participles
  t4_2_obj: { fr: "reconnaître et utiliser les participes passés irréguliers les plus fréquents.", en: "recognize and use the most common irregular past participles." },
  t4_2_hook: { fr: "Certains verbes refusent obstinément de suivre les règles -é/-i/-u — il faut simplement les apprendre par cœur, comme une petite liste de mots de passe.", en: "Some verbs stubbornly refuse the -é/-i/-u rules — you just have to memorize them, like a short list of passwords." },
  t4_2_expl: { fr: "Les participes passés irréguliers se regroupent en familles selon leur terminaison : -u (avoir→eu, boire→bu, pouvoir→pu, vouloir→voulu, voir→vu, savoir→su, lire→lu), -s (prendre→pris, mettre→mis, apprendre→appris), -t (faire→fait, dire→dit, écrire→écrit, ouvrir→ouvert), -i (dormir→dormi, rire→ri). Le verbe être a un participe passé irrégulier (été) mais s'utilise toujours avec avoir.", en: "Irregular past participles group into families by ending: -u (avoir→eu, boire→bu, pouvoir→pu, vouloir→voulu, voir→vu, savoir→su, lire→lu), -s (prendre→pris, mettre→mis, apprendre→appris), -t (faire→fait, dire→dit, écrire→écrit, ouvrir→ouvert), -i (dormir→dormi, rire→ri). The verb être has an irregular past participle (été) but is always used with avoir." },
  t4_2_ex1: { fr: "J'ai eu une bonne idée. (avoir → eu)", en: "J'ai eu une bonne idée. (I had a good idea.)" },
  t4_2_ex2: { fr: "Tu as bu un café ?", en: "Tu as bu un café? (Did you drink a coffee?)" },
  t4_2_ex3: { fr: "Nous avons fait le ménage. (faire → fait)", en: "Nous avons fait le ménage. (We did the housework.)" },
  t4_2_ex4: { fr: "Vous avez écrit une lettre ? (écrire → écrit)", en: "Vous avez écrit une lettre? (Did you write a letter?)" },
  t4_2_ex5: { fr: "J'ai mis mon manteau. (mettre → mis) — Ils ont dormi tard. (dormir → dormi)", en: "J'ai mis mon manteau. (I put on my coat.) — Ils ont dormi tard. (They slept late.)" },
  t4_2_exercise: { fr: "Associez chaque verbe à son participe passé : voir, prendre, faire, boire, dire, dormir.", en: "Match each verb to its past participle: voir, prendre, faire, boire, dire, dormir." },
  t4_2_tryit: { fr: "Écrivez trois phrases sur votre journée d'hier en utilisant trois participes passés irréguliers différents.", en: "Write three sentences about your day yesterday using three different irregular past participles." },

  // 4.3 — Negation, Questions & Time Words in the Past
  t4_3_obj: { fr: "mettre le passé composé à la forme négative et interrogative, et situer une action dans le temps.", en: "put the passé composé in the negative and question forms, and place an action in time." },
  t4_3_hook: { fr: "Raconter une histoire ne se limite pas à conjuguer un verbe — il faut aussi savoir dire « je n'ai pas fait ça » et « d'abord... puis... enfin ».", en: "Telling a story isn't just about conjugating a verb — you also need to say \"I didn't do that\" and \"first... then... finally\"." },
  t4_3_expl: { fr: "À la négative, ne...pas encadre seulement l'auxiliaire (avoir), pas le participe passé : je n'ai pas fini. Les questions se forment comme au présent (intonation, est-ce que, inversion) — en inversion, seul l'auxiliaire s'inverse avec le sujet : As-tu vu Hélène ? Les adverbes courts comme déjà, souvent, toujours se placent entre l'auxiliaire et le participe passé. Pour organiser un récit : d'abord, puis/ensuite, après, enfin/finalement.", en: "In the negative, ne...pas frames only the auxiliary (avoir), not the past participle: je n'ai pas fini. Questions form as in the present (intonation, est-ce que, inversion) — with inversion, only the auxiliary inverts with the subject: As-tu vu Hélène? Short adverbs like déjà, souvent, toujours go between the auxiliary and the past participle. To organize a story: d'abord, puis/ensuite, après, enfin/finalement." },
  t4_3_ex1: { fr: "Nous n'avons pas fait ce devoir.", en: "Nous n'avons pas fait ce devoir. (We didn't do that assignment.)" },
  t4_3_ex2: { fr: "As-tu déjà visité Paris ?", en: "As-tu déjà visité Paris? (Have you already visited Paris?)" },
  t4_3_ex3: { fr: "Je n'ai jamais voyagé en Asie.", en: "Je n'ai jamais voyagé en Asie. (I've never traveled in Asia.)" },
  t4_3_ex4: { fr: "D'abord, j'ai pris le petit-déjeuner ; ensuite, je suis parti(e).", en: "D'abord, j'ai pris le petit-déjeuner; ensuite, je suis parti(e). (First I had breakfast; then I left.)" },
  t4_3_ex5: { fr: "hier, avant-hier, la semaine dernière (expressions de temps utiles)", en: "hier (yesterday), avant-hier (the day before yesterday), la semaine dernière (last week)" },
  t4_3_exercise: { fr: "Mettez à la négative : « J'ai vu ce film. » Puis transformez en question avec inversion : « Vous avez lu ce livre. »", en: "Put in the negative: \"J'ai vu ce film.\" Then turn into a question using inversion: \"Vous avez lu ce livre.\"" },
  t4_3_tryit: { fr: "Racontez votre matinée d'hier en 4 phrases, en utilisant d'abord, puis, ensuite, enfin.", en: "Tell your morning yesterday in 4 sentences, using d'abord, puis, ensuite, enfin." },

  // 4.4 — Passé composé with être
  t4_4_obj: { fr: "reconnaître les verbes qui utilisent être au passé composé, et accorder le participe passé avec le sujet.", en: "recognize the verbs that use être in the passé composé, and agree the past participle with the subject." },
  t4_4_hook: { fr: "Une petite bande de verbes — souvent liés au mouvement — refuse d'utiliser avoir. Ils insistent pour utiliser être, et en plus, ils veulent que le participe s'accorde avec vous.", en: "A small band of verbs — often about movement — refuses to use avoir. They insist on être, and on top of that, they want the participle to agree with you." },
  t4_4_expl: { fr: "Un groupe limité de verbes (souvent de mouvement ou de changement d'état : aller, partir, arriver, rester, sortir, venir, monter, descendre, tomber, entrer, rentrer, retourner, revenir, devenir, mourir, naître) forme son passé composé avec être. Le participe passé s'accorde alors en genre et en nombre avec le sujet : on ajoute -e au féminin, -s au pluriel.", en: "A limited group of verbs (often about movement or change of state: aller, partir, arriver, rester, sortir, venir, monter, descendre, tomber, entrer, rentrer, retourner, revenir, devenir, mourir, naître) forms its passé composé with être. The past participle then agrees in gender and number with the subject: add -e for feminine, -s for plural." },
  t4_4_ex1: { fr: "je suis allé(e), elle est allée, ils sont allés, elles sont allées", en: "je suis allé(e), elle est allée, ils sont allés, elles sont allées (I/she/they went)" },
  t4_4_ex2: { fr: "Marie est arrivée en retard.", en: "Marie est arrivée en retard. (Marie arrived late.)" },
  t4_4_ex3: { fr: "Nous sommes rentrés tard hier soir.", en: "Nous sommes rentrés tard hier soir. (We got home late last night.)" },
  t4_4_ex4: { fr: "Elle est née à Kampala.", en: "Elle est née à Kampala. (She was born in Kampala.)" },
  t4_4_ex5: { fr: "Ils sont restés trois jours.", en: "Ils sont restés trois jours. (They stayed three days.)" },
  t4_4_exercise: { fr: "Conjuguez « partir » au passé composé pour « elle » et pour « ils ».", en: "Conjugate partir (to leave) in the passé composé for \"elle\" and for \"ils\"." },
  t4_4_tryit: { fr: "Écrivez deux phrases sur un voyage (réel ou imaginaire) en utilisant deux verbes de la liste être (arriver, partir, rester...).", en: "Write two sentences about a trip (real or imaginary) using two verbs from the être list (arriver, partir, rester...)." },

  // 4.5 — Reflexive Verbs in the Past
  t4_5_obj: { fr: "conjuguer les verbes réfléchis au passé composé, et savoir quand accorder le participe passé.", en: "conjugate reflexive verbs in the passé composé, and know when to agree the past participle." },
  t4_5_hook: { fr: "Tous les verbes réfléchis utilisent être au passé — logique, puisqu'ils parlent déjà de « soi-même ». Mais l'accord du participe passé cache un petit piège.", en: "All reflexive verbs use être in the past — makes sense, since they're already about \"oneself\". But the past participle agreement hides a small trap." },
  t4_5_expl: { fr: "Tous les verbes pronominaux (réfléchis) se conjuguent avec être au passé composé, et le participe passé s'accorde généralement avec le pronom réfléchi — donc avec le sujet : elle s'est levée. Exception : si le verbe est suivi d'un objet direct (souvent une partie du corps), il n'y a pas d'accord : elle s'est lavé les mains (mais elle s'est lavée, sans objet direct).", en: "All pronominal (reflexive) verbs are conjugated with être in the passé composé, and the past participle generally agrees with the reflexive pronoun — so with the subject: elle s'est levée. Exception: if the verb is followed by a direct object (often a body part), there's no agreement: elle s'est lavé les mains (but elle s'est lavée, with no direct object)." },
  t4_5_ex1: { fr: "Hier, elle s'est levée vers six heures.", en: "Hier, elle s'est levée vers six heures. (Yesterday, she got up around six.)" },
  t4_5_ex2: { fr: "Nous nous sommes rencontrés à Paris.", en: "Nous nous sommes rencontrés à Paris. (We met each other in Paris.)" },
  t4_5_ex3: { fr: "Hélène s'est lavée. (accord : « s' » est objet direct)", en: "Hélène s'est lavée. (agreement: \"s'\" is the direct object — Hélène washed up.)" },
  t4_5_ex4: { fr: "Hélène s'est lavé les mains. (pas d'accord : « les mains » est l'objet direct)", en: "Hélène s'est lavé les mains. (no agreement: \"les mains\" is the direct object — Hélène washed her hands.)" },
  t4_5_ex5: { fr: "Ils se sont téléphoné. (jamais d'accord avec téléphoner, verbe indirect)", en: "Ils se sont téléphoné. (never agrees with téléphoner, an indirect verb — They phoned each other.)" },
  t4_5_exercise: { fr: "Accordez ou non le participe passé : (1) Elle s'est (réveillé) à sept heures. (2) Nous nous sommes (brossé) les dents. (3) Ils se sont (rencontré) hier.", en: "Agree or don't agree the past participle: (1) Elle s'est (réveillé) à sept heures. (2) Nous nous sommes (brossé) les dents. (3) Ils se sont (rencontré) hier." },
  t4_5_tryit: { fr: "Racontez votre réveil de ce matin en 2 phrases avec des verbes réfléchis au passé composé.", en: "Tell how you woke up this morning in 2 sentences, using reflexive verbs in the passé composé." },

  // 4.6 — The Imperfect: Formation
  t4_6_obj: { fr: "former l'imparfait, le temps des habitudes et des descriptions passées.", en: "form the imparfait, the tense for habits and descriptions in the past." },
  t4_6_hook: { fr: "Le passé composé raconte ce qui s'est passé ; l'imparfait peint le décor autour — le temps qu'il faisait, ce qu'on faisait d'habitude.", en: "The passé composé tells what happened; the imparfait paints the scenery around it — what the weather was like, what you used to do." },
  t4_6_expl: { fr: "Pour former l'imparfait, on part de la forme « nous » du présent, on enlève -ons, et on ajoute : -ais, -ais, -ait, -ions, -iez, -aient. Seul être a un radical irrégulier (ét-). C'est le temps le plus régulier du français — presque tous les verbes suivent ce même patron.", en: "To form the imparfait, take the present-tense \"nous\" form, drop -ons, and add: -ais, -ais, -ait, -ions, -iez, -aient. Only être has an irregular stem (ét-). It's French's most regular tense — almost every verb follows this same pattern." },
  t4_6_ex1: { fr: "nous parlons → je parlais, tu parlais, il parlait, nous parlions, vous parliez, ils parlaient", en: "nous parlons → je parlais, tu parlais, il parlait, nous parlions, vous parliez, ils parlaient" },
  t4_6_ex2: { fr: "nous finissons → je finissais", en: "nous finissons → je finissais (I was finishing)" },
  t4_6_ex3: { fr: "nous attendons → j'attendais", en: "nous attendons → j'attendais (I was waiting)" },
  t4_6_ex4: { fr: "être → j'étais, tu étais, il était, nous étions, vous étiez, ils étaient", en: "être (to be) → j'étais, tu étais, il était, nous étions, vous étiez, ils étaient" },
  t4_6_ex5: { fr: "nous mangeons → je mangeais (mais nous mangions, sans le e supplémentaire)", en: "nous mangeons → je mangeais (but nous mangions, without the extra e)" },
  t4_6_exercise: { fr: "Conjuguez « choisir » à l'imparfait pour toutes les personnes.", en: "Conjugate choisir (to choose) in the imparfait for every person." },
  t4_6_tryit: { fr: "Décrivez votre vie quand vous aviez dix ans, en 3 phrases à l'imparfait : j'habitais..., je jouais..., j'aimais...", en: "Describe your life when you were ten, in 3 sentences using the imparfait: j'habitais..., je jouais..., j'aimais..." },

  // 4.7 — Imparfait vs Passé Composé
  t4_7_obj: { fr: "choisir entre l'imparfait et le passé composé pour raconter une histoire.", en: "choose between the imparfait and the passé composé when telling a story." },
  t4_7_hook: { fr: "« Il pleuvait quand je suis sorti. » Deux temps du passé, une seule phrase — et chacun a un rôle bien précis.", en: "\"Il pleuvait quand je suis sorti.\" Two past tenses, one sentence — and each has a very specific job." },
  t4_7_expl: { fr: "Le passé composé raconte une action ponctuelle, terminée, ou une suite d'événements. L'imparfait décrit le décor, une habitude, ou un état continu — sans préciser de début ni de fin. Très souvent, l'imparfait pose le décor et le passé composé y introduit un événement soudain qui « interrompt » la scène.", en: "The passé composé tells a one-time, completed action, or a sequence of events. The imparfait describes the scenery, a habit, or an ongoing state — with no specific beginning or end. Very often, the imparfait sets the scene and the passé composé introduces a sudden event that \"interrupts\" it." },
  t4_7_ex1: { fr: "Il faisait beau quand je suis arrivée à Paris. (imparfait = décor, passé composé = événement)", en: "Il faisait beau quand je suis arrivée à Paris. (imparfait = scenery, passé composé = event — The weather was nice when I arrived in Paris.)" },
  t4_7_ex2: { fr: "Nous nous reposions quand Éric a téléphoné.", en: "Nous nous reposions quand Éric a téléphoné. (We were resting when Éric called.)" },
  t4_7_ex3: { fr: "Quand j'étais jeune, j'allais chez ma tante chaque été. (habitude = imparfait)", en: "Quand j'étais jeune, j'allais chez ma tante chaque été. (habit = imparfait — When I was young, I used to go to my aunt's every summer.)" },
  t4_7_ex4: { fr: "Hier, je suis allée deux fois au marché. (action comptée = passé composé)", en: "Hier, je suis allée deux fois au marché. (counted action = passé composé — Yesterday I went to the market twice.)" },
  t4_7_ex5: { fr: "J'avais faim quand je me suis réveillé.", en: "J'avais faim quand je me suis réveillé. (I was hungry when I woke up.)" },
  t4_7_exercise: { fr: "Choisissez le bon temps : « Il (pleuvoir) quand nous (sortir). »", en: "Choose the right tense: \"Il (pleuvoir) quand nous (sortir).\" (It was raining when we went out.)" },
  t4_7_tryit: { fr: "Racontez un souvenir d'enfance en 3-4 phrases, en mélangeant imparfait (décor/habitudes) et passé composé (un événement précis).", en: "Tell a childhood memory in 3-4 sentences, mixing imparfait (scenery/habits) and passé composé (one specific event)." },

  // 4.8 — The Future Tense
  t4_8_obj: { fr: "former et utiliser le futur simple pour parler de projets et de certitudes.", en: "form and use the future tense to talk about plans and certainties." },
  t4_8_hook: { fr: "« Je vais partir » (futur proche) et « je partirai » (futur simple) parlent tous les deux de l'avenir — mais le futur simple sonne un peu plus sûr, un peu plus formel.", en: "\"Je vais partir\" (near future) and \"je partirai\" (simple future) both talk about the future — but the simple future sounds a bit more certain, a bit more formal." },
  t4_8_expl: { fr: "Le futur simple s'obtient en ajoutant -ai, -as, -a, -ons, -ez, -ont directement à l'infinitif (les verbes en -re perdent leur -e final). Certains verbes ont un radical irrégulier à apprendre par cœur : être→ser-, avoir→aur-, aller→ir-, faire→fer-, pouvoir→pourr-, vouloir→voudr-, venir→viendr-. Avec si + présent, la proposition principale se met au futur.", en: "The simple future is formed by adding -ai, -as, -a, -ons, -ez, -ont directly to the infinitive (-re verbs drop the final -e). Some verbs have an irregular stem to memorize: être→ser-, avoir→aur-, aller→ir-, faire→fer-, pouvoir→pourr-, vouloir→voudr-, venir→viendr-. With si + present tense, the main clause goes in the future." },
  t4_8_ex1: { fr: "parler → je parlerai, tu parleras, il parlera, nous parlerons, vous parlerez, ils parleront", en: "parler (to speak) → je parlerai, tu parleras, il parlera, nous parlerons, vous parlerez, ils parleront" },
  t4_8_ex2: { fr: "Je serai à Boston demain. (être → ser-)", en: "Je serai à Boston demain. (I will be in Boston tomorrow.)" },
  t4_8_ex3: { fr: "Nous devrons chercher une vidéo. (devoir → devr-)", en: "Nous devrons chercher une vidéo. (We will have to look for a video.)" },
  t4_8_ex4: { fr: "Si tu le veux, je prendrai le métro. (si + présent, futur dans la proposition principale)", en: "Si tu le veux, je prendrai le métro. (If you want, I'll take the metro.)" },
  t4_8_ex5: { fr: "Quand Marthe arrivera, nous déjeunerons. (les deux verbes au futur après quand)", en: "Quand Marthe arrivera, nous déjeunerons. (When Marthe arrives, we'll have lunch — both verbs in the future after quand)" },
  t4_8_exercise: { fr: "Mettez au futur : (1) nous/prendre le train (2) tu/pouvoir venir (3) il/falloir partir tôt.", en: "Put into the future: (1) nous/prendre le train (2) tu/pouvoir venir (3) il/falloir partir tôt." },
  t4_8_tryit: { fr: "Écrivez trois phrases sur vos projets pour l'année prochaine, au futur simple.", en: "Write three sentences about your plans for next year, using the simple future." },

  // 4.9 — The Conditional
  t4_9_obj: { fr: "utiliser le conditionnel pour être poli, donner un conseil, ou imaginer une situation hypothétique.", en: "use the conditional to be polite, give advice, or imagine a hypothetical situation." },
  t4_9_hook: { fr: "« Je veux un café » sonne un peu brusque. « Je voudrais un café » — voilà la politesse française en une seule syllabe changée.", en: "\"Je veux un café\" sounds a bit blunt. \"Je voudrais un café\" — that's French politeness in one changed syllable." },
  t4_9_expl: { fr: "Le conditionnel utilise les mêmes radicaux irréguliers que le futur, mais avec les terminaisons de l'imparfait (-ais, -ais, -ait, -ions, -iez, -aient). Il sert à demander poliment, à donner un conseil avec devoir, et dans les phrases avec si : si + imparfait, puis conditionnel dans la proposition principale.", en: "The conditional uses the same irregular stems as the future, but with the imparfait's endings (-ais, -ais, -ait, -ions, -iez, -aient). It's used to ask politely, give advice with devoir, and in si-sentences: si + imparfait, then conditional in the main clause." },
  t4_9_ex1: { fr: "Je voudrais deux cafés, s'il vous plaît. (demande polie)", en: "Je voudrais deux cafés, s'il vous plaît. (polite request — I would like two coffees, please.)" },
  t4_9_ex2: { fr: "Pourriez-vous m'aider ?", en: "Pourriez-vous m'aider? (Could you help me?)" },
  t4_9_ex3: { fr: "Tu devrais faire plus d'exercice. (conseil)", en: "Tu devrais faire plus d'exercice. (advice — You should exercise more.)" },
  t4_9_ex4: { fr: "Si j'avais le temps, je voyagerais plus. (si + imparfait → conditionnel)", en: "Si j'avais le temps, je voyagerais plus. (If I had time, I would travel more.)" },
  t4_9_ex5: { fr: "Si tu venais, je serais content(e).", en: "Si tu venais, je serais content(e). (If you came, I would be happy.)" },
  t4_9_exercise: { fr: "Transformez en demande polie : « Je veux un verre d'eau. » Puis complétez : « Si j'avais assez d'argent, je... »", en: "Turn into a polite request: \"Je veux un verre d'eau.\" Then complete: \"Si j'avais assez d'argent, je...\"" },
  t4_9_tryit: { fr: "Donnez un conseil à un ami avec « tu devrais... », puis écrivez une phrase hypothétique avec « si j'étais..., je... »", en: "Give a friend advice using \"tu devrais...\", then write a hypothetical sentence with \"si j'étais..., je...\"" },

  // 4.10 — The Subjunctive: The Basics
  t4_10_obj: { fr: "reconnaître quand utiliser le subjonctif, et former ses formes régulières.", en: "recognize when to use the subjunctive, and form its regular forms." },
  t4_10_hook: { fr: "« Il faut que tu viennes » — ce petit changement après « que » est le subjonctif, le mode des souhaits, des nécessités et des sentiments.", en: "\"Il faut que tu viennes\" — that small change after \"que\" is the subjunctive, the mood of wishes, necessity, and feelings." },
  t4_10_expl: { fr: "Le subjonctif apparaît presque toujours dans une proposition introduite par « que », après une expression de nécessité, de volonté ou de sentiment (il faut que, il est important que, je veux que...). Pour le former, on part de la forme « ils » du présent, on enlève -ent, et on ajoute -e, -es, -e, -ions, -iez, -ent. Être et avoir sont irréguliers.", en: "The subjunctive almost always appears in a clause introduced by \"que\", after an expression of necessity, will, or feeling (il faut que, il est important que, je veux que...). To form it, take the present-tense \"ils\" form, drop -ent, and add -e, -es, -e, -ions, -iez, -ent. Être and avoir are irregular." },
  t4_10_ex1: { fr: "il faut que tu fasses tes devoirs (faire → fasse)", en: "il faut que tu fasses tes devoirs (you need to do your homework)" },
  t4_10_ex2: { fr: "il est important que nous soyons à l'heure (être, irrégulier)", en: "il est important que nous soyons à l'heure (it's important that we're on time — être is irregular)" },
  t4_10_ex3: { fr: "je veux que tu viennes (venir, radical irrégulier)", en: "je veux que tu viennes (I want you to come — venir has an irregular stem)" },
  t4_10_ex4: { fr: "il ne faut pas que vous partiez trop tard", en: "il ne faut pas que vous partiez trop tard (you mustn't leave too late)" },
  t4_10_ex5: { fr: "il est nécessaire qu'elle sache la réponse (savoir, irrégulier)", en: "il est nécessaire qu'elle sache la réponse (she needs to know the answer — savoir is irregular)" },
  t4_10_exercise: { fr: "Mettez au subjonctif : « il faut que tu (finir) ton travail », « il est important que nous (être) présents. »", en: "Put into the subjunctive: \"il faut que tu (finir) ton travail\", \"il est important que nous (être) présents.\"" },
  t4_10_tryit: { fr: "Complétez trois phrases commençant par « Il faut que je... », « Il est important que... », en utilisant le subjonctif.", en: "Complete three sentences starting with \"Il faut que je...\", \"Il est important que...\", using the subjunctive." },

  // 4.11 — Review & Confidence Check
  t4_11_obj: { fr: "consolider tous les temps appris jusqu'ici en racontant sa semaine.", en: "consolidate all the tenses learned so far by telling the story of your week." },
  t4_11_hook: { fr: "Le meilleur test pour savoir si une règle est vraiment apprise ? L'utiliser dans une histoire, pas dans un exercice isolé.", en: "The best test of whether a rule is truly learned? Using it in a story, not in an isolated exercise." },
  t4_11_expl: { fr: "Une bonne histoire « ma semaine » mélange naturellement les temps : le passé composé pour les événements ponctuels, l'imparfait pour le contexte et les habitudes, le présent pour les faits actuels, et le futur (ou futur proche) pour ce qui vient. Essayez d'utiliser au moins un exemple de chaque temps déjà appris.", en: "A good \"my week\" story naturally mixes tenses: passé composé for one-time events, imparfait for context and habits, present for current facts, and future (or near future) for what's coming. Try to use at least one example of each tense learned so far." },
  t4_11_ex1: { fr: "Lundi, j'ai commencé un nouveau projet. (passé composé)", en: "Lundi, j'ai commencé un nouveau projet. (passé composé — Monday, I started a new project.)" },
  t4_11_ex2: { fr: "Il faisait beau toute la semaine. (imparfait)", en: "Il faisait beau toute la semaine. (imparfait — The weather was nice all week.)" },
  t4_11_ex3: { fr: "En ce moment, je travaille sur mon site web. (présent)", en: "En ce moment, je travaille sur mon site web. (present — Right now, I'm working on my website.)" },
  t4_11_ex4: { fr: "Demain, je vais me reposer. (futur proche)", en: "Demain, je vais me reposer. (near future — Tomorrow, I'm going to rest.)" },
  t4_11_ex5: { fr: "J'espère que je réussirai mes examens. (futur simple)", en: "J'espère que je réussirai mes examens. (simple future — I hope I'll pass my exams.)" },
  t4_11_exercise: { fr: "Relisez vos leçons du Track 4 (4.1 à 4.10) et notez un exemple personnel pour chaque temps.", en: "Look back through your Track 4 lessons (4.1 to 4.10) and jot down one personal example for each tense." },
  t4_11_tryit: { fr: "Écrivez « Ma semaine » en 6-8 phrases, en utilisant au moins le présent, le passé composé, l'imparfait et le futur (proche ou simple).", en: "Write \"Ma semaine\" in 6-8 sentences, using at least the present, passé composé, imparfait, and future (near or simple)." },

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

  lock_title: { fr: "Pas de cours pour le moment", en: "No Class at the Moment" },
  lock_text: {
    fr: "Ce carnet n'ouvre que pendant les cours en direct. Il n'y a pas de leçon en ce moment, mais nous serons bientôt de retour. À bientôt en cours !",
    en: "This notebook only opens during live classes. There's no lesson in session right now, but we'll be back soon. See you in class!"
  },
  lock_sign: { fr: "— Gérard de Paris", en: "— Gérard de Paris" },

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

// ============================================
// SITE LOCK CHECK
// Reads SITE_LOCKED from lock.js. If true, covers the page with a
// friendly "closed" message instead of the real content.
// ============================================
function initSiteLock() {
  const locked = typeof SITE_LOCKED !== "undefined" && SITE_LOCKED === true;
  if (!locked) return;

  document.body.style.overflow = "hidden";

  const lang = document.documentElement.getAttribute("data-lang") || "fr";
  const title = translations.lock_title[lang];
  const text = translations.lock_text[lang];
  const sign = translations.lock_sign[lang];

  const overlay = document.createElement("div");
  overlay.className = "site-lock-overlay";
  overlay.innerHTML = `
    <div class="site-lock-card">
      <div class="site-lock-icon">📚</div>
      <h2 class="site-lock-title">${title}</h2>
      <p class="site-lock-text">${text}</p>
      <p class="site-lock-sub">${sign}</p>
    </div>
  `;
  document.body.appendChild(overlay);
}

document.addEventListener("DOMContentLoaded", initSiteLock);
