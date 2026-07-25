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
  t1_3_expl: { fr: "Le français distingue le registre formel (vouvoiement, avec vous) du registre familier (tutoiement, avec tu). Avec un inconnu, un professeur ou un supérieur : vous. Avec un ami, un enfant, un membre de la famille : tu. Les salutations changent aussi selon le moment de la journée : bonjour le jour, bonsoir le soir. Dans le doute, commencez toujours par vous.", en: "French distinguishes the formal register (using vous) from the familiar one (using tu). With a stranger, a teacher, or a superior: vous. With a friend, a child, a family member: tu. Greetings also change with the time of day: bonjour during the day, bonsoir in the evening. When in doubt, always start with vous." },
  t1_3_ex1: { fr: "Bonjour ! Comment allez-vous ? (formel, le jour)", en: "Bonjour! Comment allez-vous? (formal, daytime)" },
  t1_3_ex2: { fr: "Salut ! Ça va ? (familier)", en: "Salut! Ça va? (familiar)" },
  t1_3_ex3: { fr: "Bonsoir ! (le soir)", en: "Bonsoir! (evening)" },
  t1_3_ex4: { fr: "Je m'appelle Aïcha, et vous ?", en: "Je m'appelle Aïcha, et vous? (My name is Aïcha, and you?)" },
  t1_3_ex5: { fr: "Enchanté(e) de faire votre connaissance.", en: "Enchanté(e) de faire votre connaissance. (Pleased to meet you.)" },
  t1_3_ex6: { fr: "À bientôt ! / À demain !", en: "À bientôt! / À demain! (See you soon! / See you tomorrow!)" },
  t1_3_exercise: { fr: "Écrivez un mini-dialogue de 4 lignes entre deux inconnus qui se rencontrent à un arrêt de bus. Utilisez vous.", en: "Write a 4-line mini-dialogue between two strangers meeting at a bus stop. Use vous." },
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
  t2_8_expl: { fr: "On compare avec plus...que, moins...que, aussi...que ; le superlatif utilise le/la/les plus ou moins. Pour le féminin, on ajoute en général un -e, mais certaines terminaisons sont irrégulières : -eux→-euse, -if→-ive, -en→-enne, -el→-elle. La plupart des adjectifs se placent après le nom, mais une poignée de mots courants (bon, grand, petit, beau, jeune, joli, nouveau, vieux) se placent avant — et trois d'entre eux changent de forme devant une voyelle : beau→bel, nouveau→nouvel, vieux→vieil. Les possessifs (mon/ma/mes...) s'accordent avec l'objet possédé, pas avec la personne.", en: "You compare with plus...que, moins...que, aussi...que; the superlative uses le/la/les plus or moins. For the feminine, you generally add -e, but some endings are irregular: -eux→-euse, -if→-ive, -en→-enne, -el→-elle. Most adjectives come after the noun, but a handful of common ones (bon, grand, petit, beau, jeune, joli, nouveau, vieux) come before it — and three of them change shape before a vowel: beau→bel, nouveau→nouvel, vieux→vieil. Possessives (mon/ma/mes...) agree with the object owned, not the owner." },
  t2_8_ex1: { fr: "Kampala est plus grande que Jinja.", en: "Kampala est plus grande que Jinja. (Kampala is bigger than Jinja.)" },
  t2_8_ex2: { fr: "heureux → heureuse, sportif → sportive, parisien → parisienne", en: "heureux → heureuse, sportif → sportive, parisien → parisienne (happy, athletic, Parisian)" },
  t2_8_ex3: { fr: "C'est le plus beau paysage que j'ai vu.", en: "C'est le plus beau paysage que j'ai vu. (It's the most beautiful landscape I've seen.)" },
  t2_8_ex4: { fr: "un bel homme, un nouvel ami, un vieil hôtel (devant une voyelle)", en: "un bel homme, un nouvel ami, un vieil hôtel (before a vowel)" },
  t2_8_ex5: { fr: "mon livre, ma maison, mes amis", en: "mon livre, ma maison, mes amis (my book, my house, my friends)" },
  t2_8_exercise: { fr: "Comparez deux villes que vous connaissez avec plus...que ou moins...que. Bonus : mettez au féminin : heureux, sportif, parisien.", en: "Compare two cities you know using plus...que or moins...que. Bonus: put into the feminine: heureux, sportif, parisien." },
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
