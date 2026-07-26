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
  track3_desc: { fr: "Verbes irréguliers, pronoms compléments, verbes réfléchis.", en: "Irregular verbs, object pronouns, reflexive verbs." },

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
  t1_1_expl: { fr: "Beaucoup de mots français ressemblent à l'anglais à l'écrit (nation, restaurant, information) mais se prononcent très différemment. Le français est une langue au rythme régulier : chaque syllabe dure à peu près le même temps, contrairement à l'anglais. Et l'accent tombe toujours sur la dernière syllabe du mot ou du groupe de mots.", en: "Many French words look like English in writing (nation, restaurant, information) but sound very different out loud. French has a steady rhythm: each syllable takes roughly the same amount of time, unlike English. And the stress always falls on the last syllable of the word or phrase." },
  t1_1_ex1: { fr: "nation → na-si-ON (pas NAY-shun)", en: "nation → na-si-ON (not NAY-shun)" },
  t1_1_ex2: { fr: "restaurant → res-to-RAN", en: "restaurant → res-to-RAHN" },
  t1_1_ex3: { fr: "information → in-for-ma-si-ON", en: "information → an-for-ma-see-OHN" },
  t1_1_ex4: { fr: "célébration → sé-lé-bra-si-ON", en: "célébration → say-lay-bra-see-OHN" },
  t1_1_ex5: { fr: "Je vais au ci-né-MA", en: "Je vais au ci-né-MA (I'm going to the movies)" },
  t1_1_ex6: { fr: "C'est vrai-MENT bon", en: "C'est vrai-MENT bon (It's really good)" },
  t1_1_exercise: { fr: "Regardez ces mots : nation, information, animal, hôpital, télévision. Devinez pour chacun : est-ce proche de l'anglais, ou totalement différent à l'oral ? Puis dites-les à voix haute.", en: "Look at these words: nation, information, animal, hôpital, télévision. Guess for each: close to English, or totally different out loud? Then say them aloud." },
  t1_1_tryit: { fr: "Prenez une phrase que vous connaissez déjà en français et dites-la trois fois, en exagérant l'allongement de la toute dernière syllabe.", en: "Take a sentence you already know in French and say it three times, exaggerating the lengthening of the very last syllable." },

  // 1.2 — Vowels That Change Everything (NEW)
  t1_2_obj: { fr: "distinguer les voyelles françaises de leurs équivalents anglais, notamment les voyelles nasales et les accents.", en: "distinguish core French vowel sounds from English equivalents, especially nasal vowels and accents." },
  t1_2_hook: { fr: "Une seule petite marque au-dessus d'une lettre peut changer complètement le sens d'un mot. Et le français a des sons que l'anglais n'a tout simplement pas : les voyelles nasales.", en: "One small mark above a letter can completely change a word's meaning. And French has sounds English simply doesn't have: nasal vowels." },
  t1_2_expl: { fr: "Le français utilise trois accents sur le e : é (aigu), è (grave), ê (circonflexe) — chacun donne un son différent. Le français a aussi des voyelles nasales, où l'air passe par le nez : an/en, in/ain, on, un. Elles n'existent pas en anglais, donc il faut d'abord les entraîner à l'oreille avant de les prononcer.", en: "French uses three accents on the letter e: é (acute), è (grave), ê (circumflex) — each gives a different sound. French also has nasal vowels, where air passes through the nose: an/en, in/ain, on, un. These don't exist in English, so train your ear before your mouth." },
  t1_2_ex1: { fr: "été (l'été, la saison) vs être (exister)", en: "été (summer) vs être (to be) — same base letter, different sound" },
  t1_2_ex2: { fr: "élève / préféré — accent aigu (é)", en: "élève / préféré — acute accent (é)" },
  t1_2_ex3: { fr: "père / mère — accent grave (è), son ouvert", en: "père / mère — grave accent (è), open sound" },
  t1_2_ex4: { fr: "forêt / fenêtre — accent circonflexe (ê)", en: "forêt / fenêtre — circumflex accent (ê)" },
  t1_2_ex5: { fr: "pain, vin, bon, un — quatre voyelles nasales différentes", en: "pain, vin, bon, un — four different nasal vowels" },
  t1_2_exercise: { fr: "Classez ces mots selon leur voyelle nasale (an/en, in/ain, on, un) : pain, maison, bonjour, lundi, enfant, matin.", en: "Sort these words by their nasal vowel (an/en, in/ain, on, un): pain, maison, bonjour, lundi, enfant, matin." },
  t1_2_tryit: { fr: "Écrivez trois mots français que vous connaissez déjà contenant une voyelle nasale, et prononcez-les à voix haute.", en: "Write three French words you already know that contain a nasal vowel, and say them aloud." },

  // 1.3 — Say Hello & Goodbye Like a Local
  t1_3_obj: { fr: "faire un premier vrai échange oral : saluer, se présenter, être poli.", en: "make your first real spoken exchange: greet, introduce yourself, be polite." },
  t1_3_hook: { fr: "Impossible de commencer une conversation en français sans passer par la case politesse — c'est presque une religion nationale.", en: "You can't start a conversation in French without going through the politeness ritual first — it's practically a national religion." },
  t1_3_expl: { fr: "Le français distingue le registre formel (vouvoiement, avec vous) du registre familier (tutoiement, avec tu). Avec un inconnu, un professeur ou un supérieur : vous. Avec un ami, un enfant, un membre de la famille : tu. Les salutations changent aussi selon le moment de la journée : bonjour le jour, bonsoir le soir. Pour dire d'où l'on vient, on utilise être + une nationalité, qui s'accorde comme un adjectif (français → française, canadien → canadienne). Les langues, elles, sont toujours masculines et ne prennent jamais de majuscule — contrairement au nom de nationalité (un Français, une Française). Dans le doute, commencez toujours par vous.", en: "French distinguishes the formal register (using vous) from the familiar one (using tu). With a stranger, a teacher, or a superior: vous. With a friend, a child, a family member: tu. Greetings also change with the time of day: bonjour during the day, bonsoir in the evening. To say where you're from, you use être + a nationality, which agrees like a regular adjective (français → française, canadien → canadienne). Languages are always masculine and never capitalized — unlike the noun for nationality (un Français, une Française). When in doubt, always start with vous." },
  t1_3_ex1: { fr: "Bonjour ! Comment allez-vous ? (formel, le jour)", en: "Bonjour! Comment allez-vous? (formal, daytime)" },
  t1_3_ex2: { fr: "Salut ! Ça va ? (familier)", en: "Salut! Ça va? (familiar)" },
  t1_3_ex3: { fr: "Je suis ougandais(e). / Il est canadien, elle est canadienne.", en: "Je suis ougandais(e). / Il est canadien, elle est canadienne. (I'm Ugandan. / He's Canadian, she's Canadian.)" },
  t1_3_ex4: { fr: "l'anglais, le français, l'espagnol (les langues : toujours masculin, jamais de majuscule)", en: "l'anglais, le français, l'espagnol (languages: always masculine, never capitalized)" },
  t1_3_ex5: { fr: "un Français / une Française (nom de nationalité, avec majuscule)", en: "un Français / une Française (nationality as a noun, capitalized)" },
  t1_3_ex6: { fr: "Enchanté(e) de faire votre connaissance.", en: "Enchanté(e) de faire votre connaissance. (Pleased to meet you.)" },
  t1_3_exercise: { fr: "Écrivez un mini-dialogue de 4 lignes entre deux inconnus qui se rencontrent à un arrêt de bus. Utilisez vous. Bonus : ajoutez une phrase où chacun dit sa nationalité.", en: "Write a 4-line mini-dialogue between two strangers meeting at a bus stop. Use vous. Bonus: add a line where each person says their nationality." },
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
  t2_1_expl: { fr: "Tous les noms français sont masculins ou féminins — objets inclus. Devant une voyelle ou un « h muet », le/la deviennent l' (l'ami, l'hôtel) — mais pas devant un « h aspiré » (le héros, la honte). Un bon repère : les terminaisons -eau, -isme, -a
