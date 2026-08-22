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

  track5_title: { fr: "Real-Life Situations", en: "Real-Life Situations" },
  track5_desc: { fr: "Le voyage de Kato vers la France : aéroport, taxi, restaurant, médecin.", en: "Kato's journey to France: airport, taxi, restaurant, doctor." },
  track5_progress: { fr: "6 leçons disponibles", en: "6 lessons available" },

  track6_title: { fr: "Reading for Confidence", en: "Reading for Confidence" },
  track6_desc: { fr: "Six histoires originales, en Ouganda, pour lire avec plaisir.", en: "Six original stories, set in Uganda, to enjoy reading." },
  track6_progress: { fr: "6 histoires disponibles", en: "6 stories available" },

  track_link: { fr: "Ouvrir le track →", en: "Open track →" },
  track_soon: { fr: "Bientôt disponible", en: "Coming soon" },

  culture_eyebrow: { fr: "Le carnet culturel", en: "The culture notebook" },
  culture_title: { fr: "Culture ougandaise", en: "Ugandan culture" },
  culture_lede: {
    fr: "J'adore ce pays, et j'ai décidé de le crier sur les toits (enfin, sur ce site). Dix portes d'entrée sur l'Ouganda — appuyez sur une carte pour l'ouvrir.",
    en: "I love this country, and I've decided to shout it from the rooftops (well, from this site). Ten doors into Uganda — tap a card to open it."
  },
  cat_culture_name: { fr: "Culture", en: "Culture" },
  cat_voyages_name: { fr: "Voyages", en: "Travel" },
  cat_tradition_name: { fr: "Tradition", en: "Tradition" },
  cat_celebration_name: { fr: "Célébration", en: "Celebration" },
  cat_biographie_name: { fr: "Biographie", en: "Biography" },
  cat_coutumes_name: { fr: "Coutumes", en: "Customs" },
  cat_arts_name: { fr: "Les Arts", en: "The Arts" },
  cat_histoire_name: { fr: "Histoire", en: "History" },
  cat_geographie_name: { fr: "Géographie", en: "Geography" },
  cat_gastronomie_name: { fr: "Gastronomie", en: "Food" },
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

  // ================= TRACK 5 =================
  t5_hero_eyebrow: { fr: "Track 5 · 6 leçons", en: "Track 5 · 6 lessons" },
  t5_hero_title: { fr: "Real-Life Situations", en: "Real-Life Situations" },
  t5_hero_desc: {
    fr: "Suivez Kato, qui part étudier en France : l'aéroport, la sécurité, l'avion, le taxi, le restaurant, le médecin. Le vocabulaire pratique du quotidien, en situation.",
    en: "Follow Kato as he leaves to study in France: the airport, security, the plane, a taxi, a restaurant, the doctor. Everyday practical vocabulary, in context."
  },
  lbl_vocab: { fr: "Vocabulaire", en: "Vocabulary" },

  t5_1_title: { fr: "Kato à l'aéroport d'Entebbe", en: "Kato at Entebbe Airport" },
  t5_1_obj: { fr: "apprendre le vocabulaire de l'enregistrement à l'aéroport.", en: "learn the vocabulary for checking in at the airport." },
  t5_1_hook: { fr: "Le grand jour est arrivé : Kato part étudier en France.", en: "The big day has arrived: Kato is leaving to study in France." },
  t5_1_q1: { fr: "Où va Kato ?", en: "Where is Kato going?" },
  t5_1_q2: { fr: "Pourquoi voyage-t-il ?", en: "Why is he traveling?" },
  t5_1_q3: { fr: "Qu'est-ce que l'agent demande en premier ?", en: "What does the agent ask for first?" },
  t5_1_q4: { fr: "De quelle porte part le vol de Kato ?", en: "Which gate does Kato's flight leave from?" },
  t5_1_q5: { fr: "À quelle heure commence l'embarquement ?", en: "What time does boarding begin?" },
  t5_1_a1: { fr: "Kato va à Paris.", en: "Kato is going to Paris." },
  t5_1_a2: { fr: "Il a une bourse pour étudier le français.", en: "He has a scholarship to study French." },
  t5_1_a3: { fr: "L'agent demande son passeport.", en: "The agent asks for his passport." },
  t5_1_a4: { fr: "Le vol part de la porte 4.", en: "The flight leaves from gate 4." },
  t5_1_a5: { fr: "L'embarquement commence à seize heures.", en: "Boarding begins at 4pm." },
  t5_1_tryit: { fr: "Imaginez que vous êtes à l'aéroport. Écrivez 3 phrases pour dire où vous allez et pourquoi.", en: "Imagine you're at the airport. Write 3 sentences saying where you're going and why." },

  t5_2_title: { fr: "Le contrôle de sécurité", en: "The Security Check" },
  t5_2_obj: { fr: "apprendre le vocabulaire du contrôle de sécurité à l'aéroport.", en: "learn the vocabulary for airport security." },
  t5_2_hook: { fr: "Sac, ceinture, portique — chacun a son mot en français.", en: "Bag, belt, security gate — each has its own word in French." },
  t5_2_q1: { fr: "Qu'est-ce que Kato doit poser sur le tapis ?", en: "What does Kato have to put on the belt?" },
  t5_2_q2: { fr: "Que doit-il enlever ?", en: "What does he have to take off?" },
  t5_2_q3: { fr: "Est-ce que le portique sonne ?", en: "Does the security gate beep?" },
  t5_2_q4: { fr: "Où va Kato après le contrôle ?", en: "Where does Kato go after the check?" },
  t5_2_a1: { fr: "Son sac à dos.", en: "His backpack." },
  t5_2_a2: { fr: "Sa ceinture.", en: "His belt." },
  t5_2_a3: { fr: "Non, rien ne sonne.", en: "No, nothing beeps." },
  t5_2_a4: { fr: "Il va vers la porte d'embarquement.", en: "He heads toward the boarding gate." },
  t5_2_tryit: { fr: "Listez 3 objets qu'on doit souvent enlever ou sortir de son sac au contrôle de sécurité.", en: "List 3 items you often have to remove or take out of your bag at security." },

  t5_3_title: { fr: "Le repas dans l'avion", en: "Food on the Plane" },
  t5_3_obj: { fr: "apprendre à commander un repas et une boisson dans l'avion.", en: "learn to order a meal and a drink on a plane." },
  t5_3_hook: { fr: "Poulet ou poisson ? Le premier vrai choix du voyage de Kato.", en: "Chicken or fish? Kato's first real choice of the trip." },
  t5_3_q1: { fr: "Qu'est-ce que Kato choisit à manger ?", en: "What does Kato choose to eat?" },
  t5_3_q2: { fr: "Qu'est-ce qu'il boit ?", en: "What does he drink?" },
  t5_3_q3: { fr: "Que regarde-t-il par le hublot ?", en: "What does he look at through the window?" },
  t5_3_a1: { fr: "Il choisit le poulet.", en: "He chooses the chicken." },
  t5_3_a2: { fr: "Il boit de l'eau.", en: "He drinks water." },
  t5_3_a3: { fr: "Il regarde les nuages.", en: "He looks at the clouds." },
  t5_3_tryit: { fr: "Écrivez ce que vous aimeriez commander si on vous proposait un repas dans l'avion.", en: "Write what you'd like to order if offered a meal on a plane." },

  t5_4_title: { fr: "Un taxi à Paris", en: "A Taxi in Paris" },
  t5_4_obj: { fr: "apprendre à donner une destination et discuter en taxi.", en: "learn to give a destination and chat in a taxi." },
  t5_4_hook: { fr: "Premier trajet en France, et déjà la tour Eiffel à l'horizon.", en: "First ride in France, and already the Eiffel Tower on the horizon." },
  t5_4_q1: { fr: "Où Kato demande-t-il d'aller ?", en: "Where does Kato ask to go?" },
  t5_4_q2: { fr: "Qu'est-ce qu'il voit pendant le trajet ?", en: "What does he see during the ride?" },
  t5_4_q3: { fr: "Que pense-t-il de la tour Eiffel ?", en: "What does he think of the Eiffel Tower?" },
  t5_4_a1: { fr: "Il demande à aller à la Cité universitaire.", en: "He asks to go to the Cité universitaire." },
  t5_4_a2: { fr: "Il voit la tour Eiffel.", en: "He sees the Eiffel Tower." },
  t5_4_a3: { fr: "Il pense qu'elle est encore plus belle qu'en photo.", en: "He thinks it's even more beautiful than in photos." },
  t5_4_tryit: { fr: "Décrivez un monument que vous rêvez de voir en vrai un jour.", en: "Describe a landmark you dream of seeing in person one day." },

  t5_5_title: { fr: "Au restaurant", en: "At the Restaurant" },
  t5_5_obj: { fr: "apprendre à commander un plat et une boisson au restaurant.", en: "learn to order food and a drink at a restaurant." },
  t5_5_hook: { fr: "Premier dîner entre amis en France — une crêpe et de nouveaux souvenirs.", en: "First dinner with friends in France — a crepe and new memories." },
  t5_5_q1: { fr: "Où Kato dîne-t-il ?", en: "Where does Kato have dinner?" },
  t5_5_q2: { fr: "Qu'est-ce qu'il commande à manger ?", en: "What does he order to eat?" },
  t5_5_q3: { fr: "Qu'est-ce qu'il boit ?", en: "What does he drink?" },
  t5_5_a1: { fr: "Il dîne dans une crêperie.", en: "He has dinner at a creperie." },
  t5_5_a2: { fr: "Il commande une crêpe au fromage.", en: "He orders a cheese crepe." },
  t5_5_a3: { fr: "Il boit un jus de pomme.", en: "He drinks apple juice." },
  t5_5_tryit: { fr: "Commandez votre repas idéal en français, en 2-3 phrases.", en: "Order your ideal meal in French, in 2-3 sentences." },

  t5_6_title: { fr: "Chez le médecin", en: "At the Doctor's" },
  t5_6_obj: { fr: "apprendre à décrire un symptôme et comprendre un conseil médical simple.", en: "learn to describe a symptom and understand simple medical advice." },
  t5_6_hook: { fr: "Un mal de gorge loin de chez soi — l'occasion d'apprendre un vocabulaire utile.", en: "A sore throat far from home — a chance to learn some useful vocabulary." },
  t5_6_q1: { fr: "Qu'est-ce que Kato a comme symptômes ?", en: "What symptoms does Kato have?" },
  t5_6_q2: { fr: "Que lui conseille le médecin ?", en: "What does the doctor recommend?" },
  t5_6_q3: { fr: "Comment se sent Kato à la fin ?", en: "How does Kato feel at the end?" },
  t5_6_a1: { fr: "Il a mal à la gorge et un peu de fièvre.", en: "He has a sore throat and a bit of a fever." },
  t5_6_a2: { fr: "De se reposer et de boire beaucoup d'eau.", en: "To rest and drink plenty of water." },
  t5_6_a3: { fr: "Il se sent rassuré.", en: "He feels reassured." },
  t5_6_tryit: { fr: "Décrivez un symptôme (mal à la tête, mal au ventre...) et ce que le médecin pourrait vous conseiller.", en: "Describe a symptom (headache, stomachache...) and what a doctor might advise." },

  // ================= TRACK 6 =================
  t6_hero_eyebrow: { fr: "Track 6 · 1 histoire (d'autres à venir)", en: "Track 6 · 1 story (more coming)" },
  t6_hero_title: { fr: "Reading for Confidence", en: "Reading for Confidence" },
  t6_hero_desc: {
    fr: "De petites histoires originales, écrites pour ce carnet, pour prendre plaisir à lire en français — avec du vocabulaire et des questions après chaque récit.",
    en: "Short original stories, written for this notebook, to enjoy reading in French — with vocabulary and questions after each one."
  },

  t6_1_title: { fr: "Le marché de Nakasero", en: "Nakasero Market" },
  t6_1_obj: { fr: "lire une première petite histoire en français simple, et répondre à des questions de compréhension.", en: "read a first short story in simple French, and answer comprehension questions." },
  t6_1_hook: { fr: "Une matinée au marché à Kampala, une rencontre inattendue, et une bonne excuse de pratiquer son français.", en: "A morning at the market in Kampala, an unexpected encounter, and a good excuse to practice French." },
  t6_1_story: {
    fr: "Kato habite à Kampala. Il a vingt ans et il étudie le français à l'université. Le samedi matin, il aime aller au marché de Nakasero avec sa mère.\n\nLe marché est très animé. Il y a des fruits, des légumes, des épices et des tissus colorés. Les vendeurs crient les prix et les clients marchandent.\n\nCe matin, Kato voit une touriste. Elle regarde une pile de mangues, mais elle ne parle pas anglais. Elle parle français.\n\n« Bonjour, dit Kato. Vous cherchez quelque chose ? »\n\nLa touriste sourit, surprise. « Oh, vous parlez français ! Je m'appelle Camille. Je ne comprends pas le prix des mangues. »\n\nKato demande au vendeur. « Trois mille shillings pour un kilo », dit-il à Camille.\n\n« Merci beaucoup ! C'est gentil. Vous parlez très bien français.\n\n— J'apprends depuis un an, répond Kato. Je veux voyager en France un jour.\n\n— Alors continuez ! Le français vous ouvre déjà des portes ici, à Kampala. »\n\nCamille achète des mangues et un petit sac d'épices. Avant de partir, elle donne son adresse mail à Kato.\n\n« Écrivez-moi en français ! Ça vous aidera à pratiquer. »\n\nKato sourit. C'est une belle matinée au marché.",
    en: "Kato lives in Kampala. He's twenty years old and studies French at university. On Saturday mornings, he likes going to Nakasero Market with his mother.\n\nThe market is very lively. There's fruit, vegetables, spices, and colorful fabrics. Vendors call out prices and customers haggle.\n\nThis morning, Kato notices a tourist. She's looking at a pile of mangoes, but she doesn't speak English. She speaks French.\n\n\"Hello,\" says Kato. \"Are you looking for something?\"\n\nThe tourist smiles, surprised. \"Oh, you speak French! My name's Camille. I don't understand the price of the mangoes.\"\n\nKato asks the vendor. \"Three thousand shillings a kilo,\" he tells Camille.\n\n\"Thank you so much! That's kind of you. You speak French very well.\n\n— I've been learning for a year, Kato answers. I want to travel to France one day.\n\n— Then keep going! French is already opening doors for you right here in Kampala.\"\n\nCamille buys mangoes and a small bag of spices. Before leaving, she gives Kato her email address.\n\n\"Write to me in French! It'll help you practice.\"\n\nKato smiles. It's a beautiful morning at the market."
  },
  t6_1_vocab_title: { fr: "Vocabulaire", en: "Vocabulary" },
  t6_1_v1: { fr: "animé(e) — vivant, plein de monde", en: "animé(e) — lively, bustling" },
  t6_1_v2: { fr: "épices (f.) — utilisées pour donner du goût aux plats", en: "épices (f.) — spices" },
  t6_1_v3: { fr: "marchander — discuter le prix pour le faire baisser", en: "marchander — to haggle, to bargain" },
  t6_1_v4: { fr: "une pile de — un tas, un groupe empilé", en: "une pile de — a pile of" },
  t6_1_v5: { fr: "surprise(e) — étonné(e)", en: "surprise(e) — surprised" },
  t6_1_q_title: { fr: "Questions de compréhension", en: "Comprehension Questions" },
  t6_1_q1: { fr: "Où habite Kato ?", en: "Where does Kato live?" },
  t6_1_q2: { fr: "Qu'est-ce que Kato fait le samedi matin ?", en: "What does Kato do on Saturday mornings?" },
  t6_1_q3: { fr: "Qui rencontre-t-il au marché ?", en: "Who does he meet at the market?" },
  t6_1_q4: { fr: "Quel est le problème de Camille ?", en: "What is Camille's problem?" },
  t6_1_q5: { fr: "Combien coûte un kilo de mangues ?", en: "How much does a kilo of mangoes cost?" },
  t6_1_q6: { fr: "Pourquoi Kato apprend-il le français ?", en: "Why is Kato learning French?" },
  t6_1_q7: { fr: "Qu'est-ce que Camille demande à Kato de faire ?", en: "What does Camille ask Kato to do?" },
  t6_1_answers_title: { fr: "Voir les réponses", en: "See the answers" },
  t6_1_a1: { fr: "Kato habite à Kampala.", en: "Kato lives in Kampala." },
  t6_1_a2: { fr: "Il va au marché de Nakasero avec sa mère.", en: "He goes to Nakasero Market with his mother." },
  t6_1_a3: { fr: "Il rencontre une touriste française, Camille.", en: "He meets a French tourist, Camille." },
  t6_1_a4: { fr: "Elle ne comprend pas le prix des mangues.", en: "She doesn't understand the price of the mangoes." },
  t6_1_a5: { fr: "Trois mille shillings.", en: "Three thousand shillings." },
  t6_1_a6: { fr: "Parce qu'il veut voyager en France un jour.", en: "Because he wants to travel to France one day." },
  t6_1_a7: { fr: "De lui écrire en français pour pratiquer.", en: "To write to her in French to practice." },
  t6_1_tryit: { fr: "Relisez l'histoire une deuxième fois, puis écrivez 2-3 phrases sur ce que vous feriez à la place de Kato.", en: "Read the story a second time, then write 2-3 sentences on what you would do in Kato's place." },

  // 6.2 — Kato se fait un ami
  t6_2_title: { fr: "Tendo se fait un ami", en: "Tendo Makes a Friend" },
  t6_2_obj: { fr: "lire une histoire sur une nouvelle amitié, et pratiquer le vocabulaire des loisirs.", en: "read a story about a new friendship, and practice leisure vocabulary." },
  t6_2_hook: { fr: "Un ballon perdu, un après-midi au parc, et le début d'une amitié.", en: "A stray ball, an afternoon at the park, and the start of a friendship." },
  t6_2_story: {
    fr: "Tendo est arrivé en France il y a une semaine. Il ne connaît personne dans son nouveau quartier. Un après-midi, il va au parc pour lire un peu.\n\nUn garçon joue seul avec un ballon de football près du banc de Tendo. Le ballon roule jusqu'aux pieds de Tendo.\n\n« Excuse-moi, tu peux me le renvoyer ? » demande le garçon.\n\nTendo lui renvoie le ballon en souriant. « Tu veux jouer un peu ? » propose le garçon.\n\n« Je ne suis pas très fort au foot, mais d'accord ! » répond Tendo en riant.\n\nIls jouent pendant une heure. Le garçon s'appelle Léo. Il pose beaucoup de questions à Tendo sur l'Ouganda : les animaux, la nourriture, la musique.\n\n« Tu dois me montrer des photos un jour ! » dit Léo.\n\n« Avec plaisir », répond Tendo. « Et toi, tu me montreras Paris ? »\n\nLéo sourit. « Marché conclu. »\n\nCe soir-là, Tendo rentre chez lui heureux. Il vient de se faire son premier ami en France.",
    en: "Tendo arrived in France a week ago. He doesn't know anyone in his new neighborhood. One afternoon, he goes to the park to read a little.\n\nA boy is playing alone with a soccer ball near Tendo's bench. The ball rolls up to Tendo's feet.\n\n\"Excuse me, could you throw it back?\" the boy asks.\n\nTendo throws the ball back, smiling. \"Want to play a bit?\" the boy suggests.\n\n\"I'm not very good at soccer, but okay!\" Tendo replies, laughing.\n\nThey play for an hour. The boy's name is Léo. He asks Tendo lots of questions about Uganda: the animals, the food, the music.\n\n\"You have to show me photos sometime!\" says Léo.\n\n\"Gladly,\" Tendo replies. \"And you'll show me Paris?\"\n\nLéo smiles. \"Deal.\"\n\nThat evening, Tendo goes home happy. He's just made his first friend in France."
  },
  t6_2_v1: { fr: "seul — sans personne d'autre", en: "seul — alone" },
  t6_2_v2: { fr: "roule — se déplace en tournant", en: "roule — rolls" },
  t6_2_v3: { fr: "renvoyer — jeter en retour", en: "renvoyer — to throw back" },
  t6_2_v4: { fr: "fort (à un jeu) — doué, bon", en: "fort (at a game) — good, skilled" },
  t6_2_v5: { fr: "marché conclu — c'est d'accord !", en: "marché conclu — it's a deal!" },
  t6_2_q1: { fr: "Où Tendo rencontre-t-il Léo ?", en: "Where does Tendo meet Léo?" },
  t6_2_q2: { fr: "Comment le ballon arrive-t-il près de Tendo ?", en: "How does the ball end up near Tendo?" },
  t6_2_q3: { fr: "De quoi parlent-ils en jouant ?", en: "What do they talk about while playing?" },
  t6_2_q4: { fr: "Que propose Léo à la fin ?", en: "What does Léo suggest at the end?" },
  t6_2_a1: { fr: "Il le rencontre au parc.", en: "He meets him at the park." },
  t6_2_a2: { fr: "Le ballon roule jusqu'à ses pieds.", en: "The ball rolls up to his feet." },
  t6_2_a3: { fr: "Ils parlent de l'Ouganda : les animaux, la nourriture, la musique.", en: "They talk about Uganda: the animals, the food, the music." },
  t6_2_a4: { fr: "Léo propose de montrer Paris à Tendo.", en: "Léo suggests showing Tendo Paris." },
  t6_2_tryit: { fr: "Racontez comment vous avez rencontré un(e) de vos ami(e)s.", en: "Tell the story of how you met one of your friends." },

  // 6.3 — Une visite au zoo
  t6_3_title: { fr: "Une visite au zoo", en: "A Zoo Visit" },
  t6_3_obj: { fr: "lire une histoire sur une visite au centre de la faune, et apprendre le nom de plusieurs animaux.", en: "read a story about a wildlife center visit, and learn the names of several animals." },
  t6_3_hook: { fr: "Avant de partir, Kato passe une dernière journée spéciale avec sa petite sœur.", en: "Before leaving, Kato spends one last special day with his little sister." },
  t6_3_story: {
    fr: "Avant de partir pour la France, Kato rend visite au Centre d'Éducation à la Faune de l'Ouganda, à Entebbe, avec sa petite sœur, Naka.\n\nNaka a six ans et c'est sa première visite. Elle est très excitée.\n\n« Regarde les girafes ! » crie-t-elle en pointant du doigt. « Elles sont tellement grandes ! »\n\nIls continuent la visite et voient des lions qui dorment au soleil, des chimpanzés qui jouent dans les arbres, et un rhinocéros blanc qui mange tranquillement.\n\n« Kato, regarde là-bas ! » Naka montre un grand oiseau gris, avec une couronne de plumes dorées sur la tête.\n\n« C'est une grue couronnée, dit Kato. C'est l'oiseau national de l'Ouganda. Elle est sur le drapeau ! »\n\nNaka observe l'oiseau, fascinée. « Elle est magnifique. »\n\nÀ la fin de la visite, Naka tient fort la main de Kato. « Merci de m'avoir emmenée. Je n'oublierai jamais ce jour. »\n\nKato sourit. Bientôt, il partira loin de sa sœur, mais aujourd'hui, il profite simplement du moment présent.",
    en: "Before leaving for France, Kato visits the Uganda Wildlife Education Centre in Entebbe with his little sister, Naka.\n\nNaka is six years old and this is her first visit. She's very excited.\n\n\"Look at the giraffes!\" she shouts, pointing. \"They're so tall!\"\n\nThey continue the visit and see lions sleeping in the sun, chimpanzees playing in the trees, and a white rhino calmly eating.\n\n\"Kato, look over there!\" Naka points to a large grey bird, with a crown of golden feathers on its head.\n\n\"That's a crowned crane,\" says Kato. \"It's Uganda's national bird. It's on the flag!\"\n\nNaka watches the bird, fascinated. \"It's beautiful.\"\n\nAt the end of the visit, Naka holds Kato's hand tightly. \"Thank you for taking me. I'll never forget this day.\"\n\nKato smiles. Soon he'll be far from his sister, but today, he simply enjoys the present moment."
  },
  t6_3_v1: { fr: "rend visite — va voir quelqu'un", en: "rend visite — visits" },
  t6_3_v2: { fr: "excitée — très contente, impatiente", en: "excitée — excited" },
  t6_3_v3: { fr: "tranquillement — calmement", en: "tranquillement — calmly" },
  t6_3_v4: { fr: "une couronne de plumes — plumage sur la tête", en: "une couronne de plumes — a crown of feathers" },
  t6_3_v5: { fr: "le drapeau — symbole nationale en tissu", en: "le drapeau — the flag" },
  t6_3_v6: { fr: "fascinée — très intéressée, émerveillée", en: "fascinée — fascinated" },
  t6_3_q1: { fr: "Où vont Kato et Naka ?", en: "Where do Kato and Naka go?" },
  t6_3_q2: { fr: "Quel âge a Naka ?", en: "How old is Naka?" },
  t6_3_q3: { fr: "Quels animaux voient-ils ?", en: "What animals do they see?" },
  t6_3_q4: { fr: "Quel est l'oiseau national de l'Ouganda ?", en: "What is Uganda's national bird?" },
  t6_3_q5: { fr: "Pourquoi ce jour est-il spécial pour Kato ?", en: "Why is this day special for Kato?" },
  t6_3_a1: { fr: "Ils vont au Centre d'Éducation à la Faune de l'Ouganda, à Entebbe.", en: "They go to the Uganda Wildlife Education Centre in Entebbe." },
  t6_3_a2: { fr: "Elle a six ans.", en: "She is six years old." },
  t6_3_a3: { fr: "Ils voient des girafes, des lions, des chimpanzés et un rhinocéros blanc.", en: "They see giraffes, lions, chimpanzees, and a white rhino." },
  t6_3_a4: { fr: "C'est la grue couronnée.", en: "It's the crowned crane." },
  t6_3_a5: { fr: "Parce qu'il va bientôt partir loin de sa sœur.", en: "Because he'll soon be leaving, far from his sister." },
  t6_3_tryit: { fr: "Nommez trois animaux que vous aimeriez voir dans un zoo ou une réserve, et dites pourquoi.", en: "Name three animals you'd like to see at a zoo or reserve, and say why." },

  // 6.4 — Le lièvre et l'hyène (original fable)
  t6_4_title: { fr: "Le lièvre et l'hyène", en: "The Hare and the Hyena" },
  t6_4_obj: { fr: "lire une fable originale et en dégager la morale.", en: "read an original fable and identify its moral." },
  t6_4_hook: { fr: "Une fable de la savane, sur ce qui arrive à ceux qui mentent trop souvent.", en: "A fable from the savanna, about what happens to those who lie too often." },
  t6_4_story: {
    fr: "Il était une fois, dans la savane, un lièvre très malin qui aimait raconter des histoires pour impressionner les autres animaux.\n\nUn jour, il dit à l'éléphant : « Sais-tu que si tu cours assez vite, tu peux voler comme un oiseau ? » L'éléphant, curieux, essaya de courir de toutes ses forces... et tomba dans la rivière.\n\nLe lièvre riait de loin, caché dans les hautes herbes.\n\nUn autre jour, il dit à la tortue : « Le lion a peur de toi. Va le voir et rugis fort, il partira en courant ! » La tortue, très fière, alla voir le lion... qui n'eut aucune peur du tout.\n\nLe lièvre trouvait cela très amusant. Mais un jour, une hyène affamée le repéra près d'un buisson.\n\n« Aide-moi ! » cria le lièvre aux autres animaux. « L'hyène va me manger ! »\n\nMais personne ne vint. L'éléphant, encore mouillé, se souvenait de la rivière. La tortue, encore vexée, se souvenait du lion.\n\n« Tu as menti trop souvent, dit l'éléphant au loin. Cette fois, débrouille-toi seul. »\n\nLe lièvre comprit, trop tard, qu'un ami qu'on trompe ne reste pas un ami bien longtemps.",
    en: "Once upon a time, in the savanna, there was a very clever hare who loved telling stories to impress the other animals.\n\nOne day, he told the elephant: \"Did you know that if you run fast enough, you can fly like a bird?\" The elephant, curious, tried running with all his strength... and fell into the river.\n\nThe hare laughed from afar, hidden in the tall grass.\n\nAnother day, he told the tortoise: \"The lion is afraid of you. Go see him and roar loudly, he'll run away!\" The tortoise, very proud, went to see the lion... who wasn't scared at all.\n\nThe hare found this very amusing. But one day, a hungry hyena spotted him near a bush.\n\n\"Help me!\" the hare cried to the other animals. \"The hyena is going to eat me!\"\n\nBut no one came. The elephant, still wet, remembered the river. The tortoise, still annoyed, remembered the lion.\n\n\"You've lied too often,\" the elephant called from a distance. \"This time, figure it out yourself.\"\n\nThe hare understood, too late, that a friend you deceive doesn't stay a friend for long."
  },
  t6_4_v1: { fr: "la savane — grande plaine herbeuse d'Afrique", en: "la savane — the savanna" },
  t6_4_v2: { fr: "malin — rusé, intelligent", en: "malin — clever, sly" },
  t6_4_v3: { fr: "caché — pas visible", en: "caché — hidden" },
  t6_4_v4: { fr: "rugis — crie fort comme un lion", en: "rugis — roar" },
  t6_4_v5: { fr: "affamée — qui a très faim", en: "affamée — starving" },
  t6_4_v6: { fr: "débrouille-toi seul — trouve une solution sans aide", en: "débrouille-toi seul — figure it out yourself" },
  t6_4_q1: { fr: "Quel mensonge le lièvre dit-il à l'éléphant ?", en: "What lie does the hare tell the elephant?" },
  t6_4_q2: { fr: "Que fait la tortue à cause du mensonge du lièvre ?", en: "What does the tortoise do because of the hare's lie?" },
  t6_4_q3: { fr: "Qui menace le lièvre à la fin ?", en: "Who threatens the hare at the end?" },
  t6_4_q4: { fr: "Pourquoi les autres animaux ne l'aident-ils pas ?", en: "Why don't the other animals help him?" },
  t6_4_q5: { fr: "Quelle est la morale de cette histoire ?", en: "What is the moral of this story?" },
  t6_4_a1: { fr: "Il lui dit qu'il peut voler s'il court assez vite.", en: "He tells him he can fly if he runs fast enough." },
  t6_4_a2: { fr: "Elle va voir le lion en pensant qu'il a peur d'elle.", en: "She goes to see the lion thinking he's afraid of her." },
  t6_4_a3: { fr: "Une hyène affamée le menace.", en: "A hungry hyena threatens him." },
  t6_4_a4: { fr: "Parce qu'il a menti trop souvent et ils ne lui font plus confiance.", en: "Because he's lied too often and they no longer trust him." },
  t6_4_a5: { fr: "Un ami qu'on trompe ne reste pas un ami longtemps.", en: "A friend you deceive doesn't stay a friend for long." },
  t6_4_tryit: { fr: "Écrivez une phrase pour résumer la morale de cette histoire avec vos propres mots.", en: "Write a sentence summarizing this story's moral in your own words." },

  // 6.5 — Le premier œuf de Kato
  t6_5_title: { fr: "Le premier œuf de Mukasa", en: "Mukasa's First Egg" },
  t6_5_obj: { fr: "lire une histoire sur une première tentative de cuisine.", en: "read a story about a first attempt at cooking." },
  t6_5_hook: { fr: "Une omelette, un peu de coquille, et une première leçon d'indépendance.", en: "An omelet, a bit of eggshell, and a first lesson in independence." },
  t6_5_story: {
    fr: "Mukasa a quinze ans, et aujourd'hui, il va cuisiner tout seul pour la première fois. Sa mère lui a laissé une recette simple : une omelette.\n\n« C'est facile, se dit-il. Je casse les œufs, j'ajoute du sel, et je mélange. »\n\nIl casse deux œufs dans un bol... et un morceau de coquille tombe dedans aussi.\n\n« Oups », dit-il en essayant de le retirer avec une cuillère.\n\nIl ajoute du sel, un peu de poivre, et bat les œufs. Puis il verse le mélange dans une poêle chaude.\n\nL'omelette grésille. Ça sent bon dans toute la cuisine. Mais quand Mukasa essaie de la retourner... elle se casse en plusieurs morceaux.\n\n« Ce n'est pas très joli, dit-il en regardant son assiette, mais ça sent délicieux. »\n\nIl goûte. C'est vraiment bon !\n\nSa mère entre dans la cuisine et sourit en voyant le désordre. « Ta première omelette. Pas parfaite, mais réussie. »\n\nMukasa est fier. La prochaine fois, il fera moins de dégâts... peut-être.",
    en: "Mukasa is fifteen, and today he's going to cook alone for the first time. His mother left him a simple recipe: an omelet.\n\n\"That's easy,\" he tells himself. \"I break the eggs, add salt, and mix.\"\n\nHe cracks two eggs into a bowl... and a piece of shell falls in too.\n\n\"Oops,\" he says, trying to fish it out with a spoon.\n\nHe adds salt, a bit of pepper, and beats the eggs. Then he pours the mixture into a hot pan.\n\nThe omelet sizzles. It smells good throughout the kitchen. But when Mukasa tries to flip it... it breaks into several pieces.\n\n\"It's not very pretty,\" he says, looking at his plate, \"but it smells delicious.\"\n\nHe tastes it. It's really good!\n\nHis mother comes into the kitchen and smiles at the mess. \"Your first omelet. Not perfect, but a success.\"\n\nMukasa is proud. Next time, he'll make less of a mess... maybe."
  },
  t6_5_v1: { fr: "une recette — instructions pour cuisiner", en: "une recette — a recipe" },
  t6_5_v2: { fr: "casse — brise (un œuf)", en: "casse — breaks/cracks" },
  t6_5_v3: { fr: "une cuillère — ustensile pour manger/remuer", en: "une cuillère — a spoon" },
  t6_5_v4: { fr: "une poêle — pour cuire à la poêle", en: "une poêle — a frying pan" },
  t6_5_v5: { fr: "grésille — fait un petit bruit en cuisant", en: "grésille — sizzles" },
  t6_5_v6: { fr: "le désordre — pas rangé, en bazar", en: "le désordre — the mess" },
  t6_5_q1: { fr: "Que va préparer Mukasa ?", en: "What is Mukasa going to make?" },
  t6_5_q2: { fr: "Quel problème a-t-il en cassant les œufs ?", en: "What problem does he have cracking the eggs?" },
  t6_5_q3: { fr: "Que se passe-t-il quand il retourne l'omelette ?", en: "What happens when he flips the omelet?" },
  t6_5_q4: { fr: "Comment se sent-il à la fin ?", en: "How does he feel at the end?" },
  t6_5_a1: { fr: "Il va préparer une omelette.", en: "He's going to make an omelet." },
  t6_5_a2: { fr: "Un morceau de coquille tombe dans le bol.", en: "A piece of shell falls into the bowl." },
  t6_5_a3: { fr: "Elle se casse en plusieurs morceaux.", en: "It breaks into several pieces." },
  t6_5_a4: { fr: "Il est fier, même si ce n'était pas parfait.", en: "He is proud, even though it wasn't perfect." },
  t6_5_tryit: { fr: "Racontez la première fois que vous avez cuisiné quelque chose tout seul.", en: "Tell the story of the first time you cooked something on your own." },

  // 6.6 — Les fleurs du marché
  t6_6_title: { fr: "Les fleurs du marché", en: "The Market Flowers" },
  t6_6_obj: { fr: "lire une histoire sur les couleurs, chez une fleuriste du marché de Nakasero.", en: "read a story about colors, at a flower seller's stall in Nakasero Market." },
  t6_6_hook: { fr: "Retour au marché du début de ce track — cette fois, pour parler de couleurs.", en: "Back to the market from the start of this track — this time, to talk about colors." },
  t6_6_story: {
    fr: "Près du marché de Nakasero, il y a une petite échoppe de fleurs. Une vieille femme, Nalongo, y vend des fleurs depuis trente ans.\n\nLa petite Naka adore s'arrêter devant l'échoppe en rentrant de l'école.\n\n« Bonjour Nalongo ! » dit-elle. « Quelles sont les couleurs aujourd'hui ? »\n\nNalongo sourit. « Regarde bien. » Elle montre un bouquet de roses rouges, puis des lys blancs, et des tournesols jaunes qui semblent capturer le soleil.\n\n« Et celles-là ? » demande Naka, en montrant de petites fleurs violettes.\n\n« Ce sont des orchidées sauvages, dit Nalongo. Elles poussent dans les collines, près de chez moi. »\n\nNaka touche délicatement les pétales violets. « Elles sont ma couleur préférée. »\n\n« Alors, prends-en une, dit Nalongo en riant. Pour ta collection. »\n\nNaka rentre chez elle, une orchidée violette à la main, le sourire aux lèvres. Chaque jour, le marché lui apprend quelque chose de nouveau.",
    en: "Near Nakasero Market, there's a small flower stall. An old woman, Nalongo, has been selling flowers there for thirty years.\n\nLittle Naka loves stopping by the stall on her way home from school.\n\n\"Hello Nalongo!\" she says. \"What colors do you have today?\"\n\nNalongo smiles. \"Take a look.\" She shows a bunch of red roses, then white lilies, and yellow sunflowers that seem to capture the sun.\n\n\"And those?\" Naka asks, pointing to small purple flowers.\n\n\"Those are wild orchids,\" says Nalongo. \"They grow in the hills, near my home.\"\n\nNaka gently touches the purple petals. \"They're my favorite color.\"\n\n\"Then take one,\" says Nalongo, laughing. \"For your collection.\"\n\nNaka walks home, a purple orchid in hand, smiling. Every day, the market teaches her something new."
  },
  t6_6_v1: { fr: "une échoppe — petit stand de marché", en: "une échoppe — a market stall" },
  t6_6_v2: { fr: "vend — fait du commerce de", en: "vend — sells" },
  t6_6_v3: { fr: "un bouquet — un groupe de fleurs", en: "un bouquet — a bunch of flowers" },
  t6_6_v4: { fr: "poussent — grandissent (pour une plante)", en: "poussent — grow" },
  t6_6_v5: { fr: "les collines — petites montagnes", en: "les collines — the hills" },
  t6_6_v6: { fr: "délicatement — avec douceur", en: "délicatement — gently" },
  t6_6_q1: { fr: "Où se trouve l'échoppe de Nalongo ?", en: "Where is Nalongo's stall located?" },
  t6_6_q2: { fr: "Depuis combien de temps vend-elle des fleurs ?", en: "How long has she been selling flowers?" },
  t6_6_q3: { fr: "Quelles couleurs de fleurs Naka voit-elle ?", en: "What flower colors does Naka see?" },
  t6_6_q4: { fr: "Où poussent les orchidées violettes ?", en: "Where do the purple orchids grow?" },
  t6_6_q5: { fr: "Que fait Nalongo à la fin de l'histoire ?", en: "What does Nalongo do at the end of the story?" },
  t6_6_a1: { fr: "Elle se trouve près du marché de Nakasero.", en: "It's near Nakasero Market." },
  t6_6_a2: { fr: "Depuis trente ans.", en: "For thirty years." },
  t6_6_a3: { fr: "Rouge (roses), blanc (lys), jaune (tournesols), violet (orchidées).", en: "Red (roses), white (lilies), yellow (sunflowers), purple (orchids)." },
  t6_6_a4: { fr: "Elles poussent dans les collines.", en: "They grow in the hills." },
  t6_6_a5: { fr: "Elle offre une orchidée à Naka.", en: "She gives Naka an orchid." },
  t6_6_tryit: { fr: "Quelle est votre fleur ou couleur préférée ? Écrivez une phrase pour l'expliquer.", en: "What's your favorite flower or color? Write a sentence explaining why." },

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
  t1_1_c1_title: { fr: "L'alphabet d'abord", en: "The alphabet first" },
  t1_1_c1_text: { fr: "Un point de départ trop souvent oublié. Les 26 lettres se prononcent différemment en français — savoir les nommer permet d'épeler un mot ou son nom à voix haute.", en: "A starting point that's too often skipped. The 26 letters are pronounced differently in French — knowing their names lets you spell a word or your name out loud." },
  t1_1_c2_title: { fr: "Les mots-cousins", en: "Cognates (look-alike words)" },
  t1_1_c2_text: { fr: "Beaucoup de mots français ressemblent à l'anglais à l'écrit — nation, restaurant, information — mais se prononcent très différemment à l'oral.", en: "Many French words look like English in writing — nation, restaurant, information — but sound very different out loud." },
  t1_1_c3_title: { fr: "Le rythme et l'accent", en: "Rhythm and stress" },
  t1_1_c3_text: { fr: "Le français a un rythme régulier : chaque syllabe dure à peu près le même temps, contrairement à l'anglais. L'accent tombe toujours sur la dernière syllabe.", en: "French has a steady rhythm: each syllable takes roughly the same amount of time, unlike English. The stress always falls on the last syllable." },
  t1_1_c4_title: { fr: "La liaison", en: "Liaison" },
  t1_1_c4_text: { fr: "Les mots s'enchaînent : une consonne finale normalement muette se prononce si le mot suivant commence par une voyelle.", en: "Words link together: a normally-silent final consonant gets pronounced if the next word starts with a vowel." },
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
function splitIntoConceptCards(el, text) {
  // Break on sentence boundaries (. ! ?) while keeping the punctuation.
  const sentences = text.match(/[^.!?]+[.!?]+(\s+|$)/g) || [text];
  el.innerHTML = sentences.map((s, i) => `
    <div class="concept-card">
      <span class="concept-num">${i + 1}</span>
      <div><p>${s.trim()}</p></div>
    </div>
  `).join("");
}

function applyLanguage(lang) {
  document.documentElement.setAttribute("data-lang", lang);
  document.documentElement.setAttribute("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const entry = translations[key];
    if (!entry || !entry[lang]) return;

    const isExplParagraph = key.endsWith("_expl") && el.tagName === "P" && el.closest(".lesson-body");
    const isStoryBlock = key.endsWith("_story");
    if (isExplParagraph) {
      splitIntoConceptCards(el, entry[lang]);
    } else if (isStoryBlock) {
      el.innerHTML = entry[lang].split(/\n\n+/).map((p) => `<p>${p.trim()}</p>`).join("");
    } else {
      el.textContent = entry[lang];
    }
  });

  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.classList.toggle("is-active", btn.getAttribute("data-lang-btn") === lang);
  });

  localStorage.setItem("site-lang", lang);

  if (typeof initListenButtons === "function") initListenButtons();
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

    // Speak only the real French word/phrase: cut off at the first arrow,
    // dash, "vs", or parenthesis — everything after that is a phonetic
    // breakdown, an English gloss, or a note, not French to read aloud.
    const rawText = li.textContent;
    const frenchPart = rawText.split(/\s*(?:→|—|–|\bvs\b|\()/)[0].trim();
    if (!frenchPart) return;

    const btn = document.createElement("button");
    btn.className = "listen-btn";
    btn.setAttribute("aria-label", "Écouter la prononciation");
    btn.innerHTML = "🔊";
    btn.addEventListener("click", () => {
      // Only cancel if something is actually mid-speech — cancelling
      // unnecessarily before every click adds extra startup delay.
      if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
      }
      const utterance = new SpeechSynthesisUtterance(frenchPart);
      utterance.lang = "fr-FR";
      utterance.rate = 0.9;
      const frenchVoice = cachedVoices.find((v) => v.lang && v.lang.toLowerCase().startsWith("fr"));
      if (frenchVoice) utterance.voice = frenchVoice;
      btn.classList.add("is-playing");
      utterance.onend = () => btn.classList.remove("is-playing");
      window.speechSynthesis.speak(utterance);
    });
    li.appendChild(btn);
  });
}

// Pre-load the voice list as soon as possible, instead of waiting for the
// first click — this is what causes the noticeable delay on first play.
let cachedVoices = [];
if ("speechSynthesis" in window) {
  cachedVoices = window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged = () => {
    cachedVoices = window.speechSynthesis.getVoices();
  };
}

document.addEventListener("DOMContentLoaded", initListenButtons);

// ============================================
// CULTURE CATEGORIES — five doors into Uganda, each with
// two short stories and a photo carousel (8 placeholder slots,
// no video).
// ============================================
const cultureCategories = {
  coutumes: {
    name: { fr: "Coutumes", en: "Customs" },
    stories: [
      {
        title: { fr: "Se saluer en Ouganda", en: "Greeting Someone in Uganda" },
        fr: "En Ouganda, une salutation ne se résume jamais à un simple « bonjour » lancé en passant. Saluer quelqu'un, c'est prendre le temps de demander comment va sa famille, son travail, sa santé — même si on est pressé. Ignorer ce rituel peut sembler froid, presque impoli.\n\nLes salutations varient aussi selon la langue et la région : « Oli otya » en luganda, une poignée de main appuyée, parfois accompagnée d'une légère inclinaison de la tête pour montrer le respect envers un aîné. Prendre le temps de bien saluer, c'est déjà montrer qu'on considère l'autre.",
        en: "In Uganda, a greeting is never just a quick \"hello\" tossed out in passing. Greeting someone means taking the time to ask how their family is, their work, their health — even if you're in a hurry. Skipping this ritual can come across as cold, almost rude.\n\nGreetings also vary by language and region: \"Oli otya\" in Luganda, a firm handshake, sometimes with a slight bow of the head to show respect for an elder. Taking the time to greet someone properly is already a way of showing you value them."
      },
      {
        title: { fr: "L'hospitalité ougandaise", en: "Ugandan Hospitality" },
        fr: "Chez nous, un invité ne repart jamais les mains vides — ni le ventre vide. Arriver chez quelqu'un, même sans prévenir, déclenche presque automatiquement une offre à manger ou à boire. Refuser peut être perçu comme un léger manque de respect envers l'hôte.\n\nCette générosité dépasse le cercle familial. Un voisin, un ami d'un ami, parfois même un inconnu de passage, peut se voir offrir un repas ou un endroit où dormir. C'est une valeur profondément ancrée : accueillir l'autre, quel qu'il soit, fait partie de ce que signifie bien vivre ensemble.",
        en: "Here, a guest never leaves empty-handed — or empty-stomached. Showing up at someone's home, even unannounced, almost automatically triggers an offer of food or drink. Refusing can be seen as a small slight to the host.\n\nThis generosity goes beyond family. A neighbor, a friend of a friend, sometimes even a passing stranger, might be offered a meal or a place to sleep. It's a deeply rooted value: welcoming others, whoever they are, is part of what it means to live well together."
      }
    ]
  },
  arts: {
    name: { fr: "Les Arts", en: "The Arts" },
    stories: [
      {
        title: { fr: "Wakaliwood, le Hollywood des bidonvilles", en: "Wakaliwood, the Slum's Hollywood" },
        fr: "Dans le quartier de Wakaliga, à Kampala, un studio de cinéma improbable s'est fait un nom bien au-delà de l'Ouganda : Wakaliwood. Fondé par Isaac Nabwana, ancien maçon devenu réalisateur autodidacte, le studio produit des films d'action à très petit budget, avec des effets spéciaux faits maison — sang en latex, explosions bricolées, cascades improvisées dans la rue.\n\nLe style volontairement excessif et l'énergie communicative des films de Wakaliwood leur ont valu un public international, notamment grâce à Internet. Ce qui a commencé comme un projet de quartier est devenu un symbole de créativité ougandaise : preuve qu'on peut raconter des histoires avec très peu de moyens, mais énormément d'imagination.",
        en: "In the Wakaliga neighborhood of Kampala, an unlikely film studio has made a name for itself far beyond Uganda: Wakaliwood. Founded by Isaac Nabwana, a former mason turned self-taught director, the studio produces ultra-low-budget action films with homemade special effects — latex blood, rigged-up explosions, improvised street stunts.\n\nThe deliberately over-the-top style and infectious energy of Wakaliwood's films have earned them an international audience, largely thanks to the internet. What started as a neighborhood project has become a symbol of Ugandan creativity: proof that you can tell stories with very little money, but enormous imagination."
      },
      {
        title: { fr: "Ndere, gardienne des danses traditionnelles", en: "Ndere, Guardian of Traditional Dance" },
        fr: "Depuis 1984, la troupe Ndere s'est donné une mission : préserver et transmettre les danses et musiques traditionnelles des différentes ethnies d'Ouganda, à une époque où beaucoup risquaient de se perdre. Chaque spectacle rassemble des danses venues de tout le pays — du bwola des Acholi aux rythmes des Baganda.\n\nAu Ndere Cultural Centre, à Kampala, les spectacles se donnent en plein air, tambours et costumes traditionnels à l'appui. Pour beaucoup de visiteurs, c'est une des façons les plus vivantes de découvrir en une seule soirée la diversité culturelle du pays.",
        en: "Since 1984, the Ndere Troupe has set itself a mission: to preserve and pass on the traditional dances and music of Uganda's many ethnic groups, at a time when much of it risked being lost. Each show brings together dances from across the country — from the Acholi's bwola to Baganda rhythms.\n\nAt the Ndere Cultural Centre in Kampala, performances are held outdoors, with drums and traditional costumes. For many visitors, it's one of the most vivid ways to experience the country's cultural diversity in a single evening."
      }
    ]
  },
  histoire: {
    name: { fr: "Histoire", en: "History" },
    stories: [
      {
        title: { fr: "Le royaume du Buganda", en: "The Kingdom of Buganda" },
        fr: "Bien avant la création de l'Ouganda moderne, le royaume du Buganda existait déjà, centré sur la région autour de Kampala. Dirigé par un roi, le Kabaka, il reste aujourd'hui l'un des royaumes traditionnels les plus influents du pays, avec son propre palais, ses cérémonies et sa structure administrative parallèle à l'État.\n\nLe Buganda n'a pas de pouvoir politique officiel dans l'Ouganda actuel, mais son influence culturelle reste immense : la langue luganda, les traditions du Kwanjula, le respect porté au Kabaka font partie du quotidien de millions d'Ougandais, bien au-delà des frontières historiques du royaume.",
        en: "Long before the creation of modern Uganda, the Kingdom of Buganda already existed, centered on the region around Kampala. Led by a king, the Kabaka, it remains one of the country's most influential traditional kingdoms today, with its own palace, ceremonies, and administrative structure running alongside the state.\n\nBuganda holds no official political power in Uganda today, but its cultural influence remains immense: the Luganda language, Kwanjula traditions, and the respect shown to the Kabaka are part of daily life for millions of Ugandans, well beyond the kingdom's historical borders."
      },
      {
        title: { fr: "Les martyrs de Namugongo", en: "The Martyrs of Namugongo" },
        fr: "Entre 1885 et 1887, un groupe de jeunes convertis chrétiens — catholiques et anglicans — furent exécutés sur ordre du Kabaka Mwanga II, à Namugongo, près de Kampala, pour avoir refusé de renoncer à leur foi. Leur histoire est devenue un événement fondateur pour les communautés chrétiennes du pays.\n\nChaque 3 juin, le Jour des Martyrs rassemble des centaines de milliers de pèlerins venus de tout l'Ouganda et de la région, marchant parfois pendant des jours pour atteindre le sanctuaire de Namugongo. C'est aujourd'hui l'un des rassemblements religieux les plus importants d'Afrique de l'Est, et un jour férié national.",
        en: "Between 1885 and 1887, a group of young Christian converts — both Catholic and Anglican — were executed on the orders of Kabaka Mwanga II at Namugongo, near Kampala, for refusing to renounce their faith. Their story became a founding event for the country's Christian communities.\n\nEvery June 3rd, Martyrs' Day draws hundreds of thousands of pilgrims from across Uganda and the wider region, some walking for days to reach the Namugongo shrine. It is today one of East Africa's largest religious gatherings, and a national public holiday."
      }
    ]
  },
  geographie: {
    name: { fr: "Géographie", en: "Geography" },
    stories: [
      {
        title: { fr: "Le lac Victoria, mer intérieure de l'Afrique", en: "Lake Victoria, Africa's Inland Sea" },
        fr: "Avec ses 68 000 km², le lac Victoria est le plus grand lac d'Afrique et le deuxième plus grand lac d'eau douce du monde. Partagé entre l'Ouganda, le Kenya et la Tanzanie, il ressemble davantage à une mer intérieure qu'à un lac : on n'en voit pas l'autre rive.\n\nPour des millions de personnes autour de ses rives, le lac est une source de vie — pêche, transport, commerce — mais aussi un défi environnemental, entre surpêche et pollution. C'est aussi de ce lac que le Nil prend sa source à Jinja, reliant l'Ouganda à l'un des fleuves les plus mythiques du monde.",
        en: "At 68,000 km², Lake Victoria is Africa's largest lake and the world's second-largest freshwater lake. Shared between Uganda, Kenya, and Tanzania, it feels more like an inland sea than a lake — you can't see the opposite shore.\n\nFor millions of people living along its shores, the lake is a source of life — fishing, transport, trade — but also an environmental challenge, caught between overfishing and pollution. It's also from this lake that the Nile takes its source at Jinja, linking Uganda to one of the world's most storied rivers."
      },
      {
        title: { fr: "Les Rwenzori, montagnes de la lune", en: "The Rwenzori, Mountains of the Moon" },
        fr: "À la frontière avec la République démocratique du Congo, la chaîne des Rwenzori s'élève jusqu'à plus de 5 000 mètres, avec des sommets enneigés en plein équateur — une rareté qui a longtemps intrigué les explorateurs. Les Grecs anciens les auraient surnommées « montagnes de la lune », les imaginant comme la source mythique du Nil.\n\nLa végétation change radicalement avec l'altitude : forêt tropicale dense, puis bruyère géante, puis paysage presque lunaire près des glaciers. C'est une randonnée exigeante, réservée aux plus aventureux, mais aussi l'un des paysages les plus spectaculaires et les moins visités d'Ouganda.",
        en: "On the border with the Democratic Republic of Congo, the Rwenzori range rises to over 5,000 meters, with snow-capped peaks right on the equator — a rarity that long intrigued explorers. The ancient Greeks are said to have called them the \"Mountains of the Moon,\" imagining them as the mythical source of the Nile.\n\nVegetation shifts dramatically with altitude: dense tropical forest, then giant heather, then an almost lunar landscape near the glaciers. It's a demanding trek, reserved for the most adventurous, but also one of Uganda's most spectacular and least-visited landscapes."
      }
    ]
  },
  gastronomie: {
    name: { fr: "Gastronomie", en: "Food" },
    stories: [
      {
        title: { fr: "Le rolex, l'icône des rues ougandaises", en: "The Rolex, Icon of Ugandan Streets" },
        fr: "Non, ce n'est pas une montre. Le rolex — contraction de « rolled eggs » — est sans doute le street food le plus emblématique d'Ouganda : une omelette roulée dans un chapati chaud, souvent garnie de tomates, d'oignons et de chou. Simple, rapide, bon marché, et absolument partout.\n\nOn le trouve à chaque coin de rue, préparé sur un petit stand par un « rolex guy » qui bat les œufs à la demande. Pour beaucoup d'Ougandais, c'est le repas de rue par excellence — petit-déjeuner, déjeuner ou en-cas de minuit — et une véritable fierté nationale, au point d'avoir son propre festival annuel à Kampala.",
        en: "No, it's not a watch. The rolex — short for \"rolled eggs\" — is arguably Uganda's most iconic street food: an omelet rolled inside a warm chapati, often filled with tomatoes, onions, and cabbage. Simple, fast, cheap, and absolutely everywhere.\n\nYou'll find it on every street corner, cooked to order at a small stand by a \"rolex guy\" who beats the eggs fresh each time. For many Ugandans, it's the ultimate street meal — breakfast, lunch, or a midnight snack — and a genuine source of national pride, with its own annual festival in Kampala."
      },
      {
        title: { fr: "Le matooke, pilier du repas ougandais", en: "Matooke, the Backbone of a Ugandan Meal" },
        fr: "Pour beaucoup d'Ougandais, un repas sans matooke n'est pas tout à fait un repas. Cette variété de banane verte, cuite à la vapeur puis écrasée en une purée dense, accompagne la plupart des plats principaux, surtout dans le sud et le centre du pays.\n\nSa préparation traditionnelle demande du temps : les bananes sont épluchées, enveloppées dans leurs propres feuilles, puis cuites à la vapeur pendant des heures sur un feu doux. Le résultat est doux, légèrement sucré, et sert de base neutre pour accompagner sauce d'arachide, ragoût de viande ou légumes. Simple en apparence, le matooke est un pilier culturel autant que culinaire.",
        en: "For many Ugandans, a meal without matooke isn't quite a meal. This variety of green banana, steamed and mashed into a dense purée, accompanies most main dishes, especially in the south and center of the country.\n\nTraditional preparation takes time: the bananas are peeled, wrapped in their own leaves, then steamed for hours over a low fire. The result is soft, lightly sweet, and serves as a neutral base for groundnut sauce, meat stew, or vegetables. Simple in appearance, matooke is as much a cultural pillar as a culinary one."
      }
    ]
  },
  culture: {
    name: { fr: "Culture", en: "Culture" },
    stories: [
      {
        title: { fr: "Un dimanche en Ouganda", en: "A Sunday in Uganda" },
        fr: "Le dimanche commence tôt. Beaucoup de familles vont à l'église ou à la mosquée, habillées avec soin — les femmes en gomesi coloré, les hommes en kanzu blanche pour les grandes occasions. Après le service, c'est l'heure du déjeuner en famille : matoke, riz, poulet, souvent partagés avec des voisins qui passent à l'improviste. Personne ne s'excuse d'arriver sans prévenir — chez nous, la porte reste ouverte.\n\nL'après-midi ralentit encore. On s'assoit dehors, on discute, les enfants jouent dans la cour. Le dimanche ougandais n'est pas un jour de repos silencieux : c'est un jour de présence, de visites, de plats qui n'en finissent pas.",
        en: "Sunday starts early. Many families go to church or the mosque, dressed with care — women in colorful gomesi, men in white kanzu for special occasions. After the service comes family lunch: matoke, rice, chicken, often shared with neighbors who drop by unannounced. No one apologizes for showing up without warning — in our homes, the door stays open.\n\nThe afternoon slows down further. People sit outside, talk, children play in the yard. A Ugandan Sunday isn't a quiet day of rest: it's a day of presence, of visits, of meals that never quite end."
      },
      {
        title: { fr: "Les marchés de Kampala", en: "The Markets of Kampala" },
        fr: "À Owino, à Nakasero, à Kalerwe, le marché est bien plus qu'un lieu pour acheter à manger. C'est un théâtre à ciel ouvert : les vendeuses appellent les clients par des surnoms affectueux, les prix se négocient en riant, et on repart souvent avec un fruit offert « pour goûter ».\n\nChaque marché a sa spécialité — Owino pour les vêtements de seconde main, Nakasero pour les fruits et légumes frais, Kalerwe pour les prix serrés. S'y perdre fait partie du plaisir : entre les étals de tomates et les sacs de charbon, on croise des amis, on échange des nouvelles, on négocie pour le plaisir de négocier.",
        en: "At Owino, at Nakasero, at Kalerwe, the market is far more than a place to buy food. It's an open-air theater: vendors call out to customers with affectionate nicknames, prices are haggled over with laughter, and you often leave with a piece of fruit handed over \"to taste.\"\n\nEach market has its specialty — Owino for secondhand clothes, Nakasero for fresh fruit and vegetables, Kalerwe for tight prices. Getting a little lost is part of the fun: between the tomato stalls and the sacks of charcoal, you run into friends, trade news, and haggle just for the pleasure of it."
      }
    ]
  },
  voyages: {
    name: { fr: "Voyages", en: "Travel" },
    stories: [
      {
        title: { fr: "La source du Nil à Jinja", en: "The Source of the Nile, Jinja" },
        fr: "À Jinja, le Nil quitte le lac Victoria et commence son voyage de plus de 6 000 kilomètres jusqu'en Égypte. C'est ici que l'explorateur britannique John Speke a « découvert » la source du fleuve en 1862 — même si les communautés locales la connaissaient depuis toujours.\n\nAujourd'hui, Jinja attire les amateurs de sensations fortes : rafting sur les rapides, kayak, tyrolienne au-dessus de l'eau. Mais on peut aussi simplement s'asseoir au bord du fleuve, regarder l'eau bleue-verte s'écouler calmement, et se dire qu'elle finira sa course des milliers de kilomètres plus loin.",
        en: "At Jinja, the Nile leaves Lake Victoria and begins its journey of over 6,000 kilometers to Egypt. It was here that British explorer John Speke \"discovered\" the river's source in 1862 — even though local communities had always known it.\n\nToday, Jinja draws thrill-seekers: white-water rafting, kayaking, zip-lining over the water. But you can also simply sit by the river, watch the blue-green water flow calmly by, and think about how it will end its journey thousands of kilometers away."
      },
      {
        title: { fr: "Bwindi, la forêt des gorilles des montagnes", en: "Bwindi, the Mountain Gorilla Forest" },
        fr: "La forêt impénétrable de Bwindi, au sud-ouest de l'Ouganda, abrite près de la moitié des gorilles des montagnes qui existent encore dans le monde. Marcher dans cette forêt dense et humide, guidé par des pisteurs qui connaissent chaque famille de gorilles par son nom, est une expérience rare.\n\nQuand on croise enfin un groupe — un dos argenté imposant, des jeunes qui jouent dans les branches — le silence s'impose de lui-même. On reste là, à quelques mètres, une heure au maximum, pour ne pas perturber leur quotidien. Peu d'endroits au monde rapprochent autant d'un animal sauvage aussi majestueux.",
        en: "Bwindi Impenetrable Forest, in southwestern Uganda, is home to nearly half of the world's remaining mountain gorillas. Walking through this dense, humid forest, guided by trackers who know each gorilla family by name, is a rare experience.\n\nWhen you finally come across a group — an imposing silverback, youngsters playing in the branches — silence falls naturally. You stay there, just a few meters away, for an hour at most, so as not to disturb their daily life. Few places in the world bring you this close to such a majestic wild animal."
      }
    ]
  },
  tradition: {
    name: { fr: "Tradition", en: "Tradition" },
    stories: [
      {
        title: { fr: "Le Kwanjula, cérémonie d'introduction", en: "The Kwanjula, an Introduction Ceremony" },
        fr: "Chez les Baganda, avant un mariage, il y a le Kwanjula : le jour où le futur marié est officiellement présenté à la famille de sa fiancée. C'est un événement haut en couleur, souvent plus grand que le mariage lui-même, avec des dizaines, parfois des centaines d'invités.\n\nLa famille du marié arrive en cortège, apportant des cadeaux soigneusement choisis pour les parents et les proches de la mariée. Les tantes (ssenga) jouent un rôle central : elles ont préparé la mariée dans les semaines précédentes, lui transmettant conseils et traditions. La cérémonie mélange rituel, humour et négociations symboliques — un moment où deux familles se lient officiellement.",
        en: "Among the Baganda, before a wedding there is the Kwanjula: the day the groom-to-be is officially introduced to his fiancée's family. It's a colorful event, often bigger than the wedding itself, with dozens — sometimes hundreds — of guests.\n\nThe groom's family arrives in procession, bringing carefully chosen gifts for the bride's parents and relatives. The aunts (ssenga) play a central role: they've been preparing the bride in the weeks before, passing on advice and tradition. The ceremony blends ritual, humor, and symbolic negotiation — a moment when two families officially become linked."
      },
      {
        title: { fr: "L'Imbalu, le rite de passage des Bagisu", en: "Imbalu, the Bagisu Rite of Passage" },
        fr: "Tous les deux ans, dans l'est de l'Ouganda, la communauté Bagisu célèbre l'Imbalu : le rite de circoncision qui marque le passage de l'adolescence à l'âge adulte pour les jeunes hommes. Ce n'est pas un acte privé — c'est un événement communautaire, précédé de semaines de préparation, de danses et de chants traditionnels.\n\nLe jour venu, les initiés sont couverts de farine et de cendre, puis dansent dans les rues au son des tambours, entourés de leur famille et de la communauté entière. Endurer le rite sans montrer de peur est perçu comme une preuve de courage — le début officiel d'une nouvelle place dans la société, avec de nouvelles responsabilités.",
        en: "Every two years, in eastern Uganda, the Bagisu community celebrates Imbalu: the circumcision rite that marks the passage from adolescence to adulthood for young men. It isn't a private act — it's a communal event, preceded by weeks of preparation, traditional dancing, and singing.\n\nWhen the day comes, initiates are covered in flour and ash, then dance through the streets to the sound of drums, surrounded by family and the whole community. Enduring the rite without showing fear is seen as proof of courage — the official start of a new place in society, with new responsibilities."
      }
    ]
  },
  celebration: {
    name: { fr: "Célébration", en: "Celebration" },
    stories: [
      {
        title: { fr: "Le 9 octobre, jour de l'indépendance", en: "October 9th, Independence Day" },
        fr: "Le 9 octobre 1962, l'Ouganda accède à l'indépendance après des décennies de protectorat britannique. Chaque année, cette date est célébrée par des défilés, des discours officiels et des rassemblements dans tout le pays, souvent retransmis à la télévision nationale.\n\nPour beaucoup de familles, c'est aussi un jour plus simple : un jour férié pour se retrouver, cuisiner un bon repas, et parfois se souvenir des récits des grands-parents sur cette époque charnière. Le drapeau noir, jaune et rouge flotte un peu partout, rappelant que l'histoire du pays reste vivante dans le quotidien.",
        en: "On October 9, 1962, Uganda gained independence after decades as a British protectorate. Every year, the date is marked by parades, official speeches, and gatherings across the country, often broadcast on national television.\n\nFor many families, it's also a simpler day: a public holiday to gather, cook a good meal, and sometimes remember grandparents' stories about that pivotal time. The black, yellow, and red flag flies everywhere, a reminder that the country's history stays alive in everyday life."
      },
      {
        title: { fr: "Nyege Nyege, le festival qui fait danser le Nil", en: "Nyege Nyege, the Festival That Gets the Nile Dancing" },
        fr: "Depuis 2015, le festival Nyege Nyege rassemble chaque année des milliers de personnes sur les rives du Nil, près de Jinja. Le nom, emprunté au luganda, évoque une envie irrésistible de danser. C'est devenu l'un des rendez-vous incontournables de la musique électronique en Afrique de l'Est, mêlant artistes ougandais, est-africains et internationaux.\n\nPendant quatre jours, les scènes s'enchaînent au bord du fleuve, de jour comme de nuit. Le festival a mis en lumière une nouvelle génération de producteurs ougandais, et attire aujourd'hui des visiteurs venus du monde entier, curieux de découvrir cette scène musicale en pleine effervescence.",
        en: "Since 2015, the Nyege Nyege festival has gathered thousands of people each year on the banks of the Nile, near Jinja. The name, borrowed from Luganda, evokes an irresistible urge to dance. It has become one of East Africa's must-attend electronic music events, blending Ugandan, East African, and international artists.\n\nFor four days, stages run one after another along the riverbank, day and night. The festival has spotlighted a new generation of Ugandan producers, and today draws visitors from around the world, curious to discover this thriving music scene."
      }
    ]
  },
  biographie: {
    name: { fr: "Biographie", en: "Biography" },
    stories: [
      {
        title: { fr: "Idi Amin, le dictateur redouté", en: "Idi Amin, the Feared Dictator" },
        fr: "Idi Amin a dirigé l'Ouganda de 1971 à 1979, après un coup d'État militaire. Son règne reste associé à l'une des périodes les plus sombres de l'histoire du pays : répression violente, expulsion de la communauté asiatique d'Ouganda en 1972, et un climat de peur qui a poussé des milliers de personnes à l'exil.\n\nSon régime a pris fin en 1979, après une guerre avec la Tanzanie voisine. Amin est mort en exil en Arabie saoudite en 2003. Aujourd'hui encore, son nom reste un point de repère incontournable — et douloureux — pour comprendre l'histoire politique de l'Ouganda au vingtième siècle.",
        en: "Idi Amin ruled Uganda from 1971 to 1979, after a military coup. His rule remains linked to one of the darkest periods in the country's history: violent repression, the 1972 expulsion of Uganda's Asian community, and a climate of fear that pushed thousands into exile.\n\nHis regime ended in 1979, after a war with neighboring Tanzania. Amin died in exile in Saudi Arabia in 2003. Even today, his name remains an unavoidable — and painful — reference point for understanding Uganda's political history in the twentieth century."
      },
      {
        title: { fr: "Philly Lutaaya, la voix qui a donné un visage au sida", en: "Philly Lutaaya, the Voice That Gave AIDS a Face" },
        fr: "Philly Bongoley Lutaaya était l'une des plus grandes stars de la musique ougandaise dans les années 1980. En 1989, il devient la première personnalité publique ougandaise à annoncer publiquement être séropositif, à une époque où le sida était entouré de silence et de stigmatisation.\n\nPlutôt que de se retirer, il a passé ses derniers mois à parcourir le pays pour parler ouvertement de la maladie, encourager le dépistage et combattre la peur qui entourait le sujet. Il est mort en 1989, mais son courage a changé la façon dont l'Ouganda a abordé la crise du sida, contribuant à faire du pays un exemple précoce de réponse communautaire à l'épidémie.",
        en: "Philly Bongoley Lutaaya was one of Uganda's biggest music stars in the 1980s. In 1989, he became the first Ugandan public figure to openly announce he was HIV-positive, at a time when AIDS was surrounded by silence and stigma.\n\nRather than withdraw, he spent his final months traveling the country to speak openly about the disease, encourage testing, and fight the fear surrounding the subject. He died in 1989, but his courage changed how Uganda approached the AIDS crisis, helping make the country an early example of community response to the epidemic."
      }
    ]
  }
};

// ============================================
// CULTURE MODAL — category cards open a modal with that
// category's stories and an 8-slide photo carousel.
// ============================================
function buildCarousel(container, catKey) {
  container.innerHTML = "";
  const existingCaption = container.nextElementSibling;
  if (existingCaption && existingCaption.classList.contains("carousel-caption")) {
    existingCaption.remove();
  }
  const cat = cultureCategories[catKey] || {};
  const captions = cat.photoCaptions || [];

  const caption = document.createElement("p");
  caption.className = "carousel-caption";

  const track = document.createElement("div");
  track.className = "carousel-track";
  for (let i = 1; i <= 8; i++) {
    const slide = document.createElement("div");
    slide.className = "carousel-slide";

    const img = document.createElement("img");
    img.alt = "";
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.objectFit = "contain";
    img.style.cursor = "pointer";
    img.src = `images/${catKey}-${i}.jpg`;
    img.onerror = function () {
      // No photo uploaded yet for this slot — fall back to the placeholder.
      slide.innerHTML = "";
      slide.textContent = `Photo ${i} / 8`;
    };
    img.addEventListener("click", () => {
      openPhotoLightbox(img.src, captions[i - 1] || "");
    });
    slide.appendChild(img);
    track.appendChild(slide);
  }
  const prevBtn = document.createElement("button");
  prevBtn.className = "carousel-nav carousel-prev";
  prevBtn.setAttribute("aria-label", "Photo précédente");
  prevBtn.innerHTML = "‹";
  const nextBtn = document.createElement("button");
  nextBtn.className = "carousel-nav carousel-next";
  nextBtn.setAttribute("aria-label", "Photo suivante");
  nextBtn.innerHTML = "›";
  const dots = document.createElement("div");
  dots.className = "carousel-dots";
  const dotEls = [];
  for (let i = 0; i < 8; i++) {
    const dot = document.createElement("button");
    dot.className = "carousel-dot" + (i === 0 ? " is-active" : "");
    dot.setAttribute("aria-label", `Aller à la photo ${i + 1}`);
    dots.appendChild(dot);
    dotEls.push(dot);
  }

  let index = 0;
  function goTo(i) {
    index = (i + 8) % 8;
    track.style.transform = `translateX(-${index * 100}%)`;
    dotEls.forEach((d, di) => d.classList.toggle("is-active", di === index));
    caption.textContent = captions[index] || "";
  }
  prevBtn.addEventListener("click", () => goTo(index - 1));
  nextBtn.addEventListener("click", () => goTo(index + 1));
  dotEls.forEach((d, di) => d.addEventListener("click", () => goTo(di)));

  container.appendChild(track);
  container.appendChild(prevBtn);
  container.appendChild(nextBtn);
  container.appendChild(dots);

  caption.textContent = captions[0] || "";
  container.insertAdjacentElement("afterend", caption);
}

// ============================================
// PHOTO LIGHTBOX — tap any photo to see it larger and copy a
// shareable link (handy for pasting into a WhatsApp status).
// ============================================
function openPhotoLightbox(src, captionText) {
  const lightbox = document.getElementById("photoLightbox");
  if (!lightbox) return;
  const img = document.getElementById("photoLightboxImg");
  const captionEl = document.getElementById("photoLightboxCaption");
  const copyBtn = document.getElementById("photoLightboxCopy");

  img.src = src;
  captionEl.textContent = captionText || "";
  captionEl.style.display = captionText ? "block" : "none";
  copyBtn.textContent = "Copier le lien";
  copyBtn.dataset.url = new URL(src, window.location.href).href;
  lightbox.hidden = false;
}

function initPhotoLightbox() {
  const lightbox = document.getElementById("photoLightbox");
  if (!lightbox) return;
  const closeBtn = document.getElementById("photoLightboxClose");
  const copyBtn = document.getElementById("photoLightboxCopy");

  function close() {
    lightbox.hidden = true;
  }
  closeBtn.addEventListener("click", close);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !lightbox.hidden) close();
  });
  copyBtn.addEventListener("click", async () => {
    const url = copyBtn.dataset.url;
    try {
      await navigator.clipboard.writeText(url);
      copyBtn.textContent = "Lien copié !";
    } catch (err) {
      copyBtn.textContent = "Impossible de copier";
    }
    setTimeout(() => { copyBtn.textContent = "Copier le lien"; }, 2000);
  });
}

document.addEventListener("DOMContentLoaded", initPhotoLightbox);

function initCultureModal() {
  const modal = document.getElementById("cultureModal");
  if (!modal) return;

  const closeBtn = document.getElementById("cultureModalClose");
  const titleEl = document.getElementById("cultureModalTitle");
  const storiesEl = document.getElementById("cultureModalStories");
  const carouselEl = document.getElementById("cultureModalCarousel");

  function openModal(catKey) {
    const lang = document.documentElement.getAttribute("data-lang") || "fr";
    const cat = cultureCategories[catKey];
    if (!cat) return;

    titleEl.textContent = cat.name[lang];
    storiesEl.innerHTML = cat.stories.map((story, storyIndex) => {
      const paraList = story[lang].split("\n\n");
      let bodyHtml = `<p>${paraList[0]}</p>`;
      if (paraList.length > 1) {
        const imgSrc = `images/${catKey}-story${storyIndex + 1}.jpg`;
        bodyHtml += `<div class="culture-story-photo" data-fallback="Ajoutez une photo ici"><img id="story-photo-${catKey}-${storyIndex}" src="${imgSrc}" alt="" style="width:100%;height:100%;object-fit:contain;cursor:pointer;" onerror="this.parentElement.textContent=this.parentElement.dataset.fallback;"></div>`;
        if (story.photoCaption) {
          bodyHtml += `<p class="story-photo-caption">${story.photoCaption}</p>`;
        }
        bodyHtml += paraList.slice(1).map((p) => `<p>${p}</p>`).join("");
      }
      return `<div class="culture-story"><h4>${story.title[lang]}</h4>${bodyHtml}</div>`;
    }).join("");

    cat.stories.forEach((story, storyIndex) => {
      const imgEl = document.getElementById(`story-photo-${catKey}-${storyIndex}`);
      if (imgEl) {
        imgEl.addEventListener("click", () => {
          openPhotoLightbox(imgEl.src, story.photoCaption || story.title[lang]);
        });
      }
    });

    buildCarousel(carouselEl, catKey);
    modal.hidden = false;
  }

  function closeModal() {
    modal.hidden = true;
  }

  document.querySelectorAll(".category-card").forEach((card) => {
    card.addEventListener("click", () => openModal(card.getAttribute("data-category")));
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

  const title = translations.lock_title.fr;
  const text = translations.lock_text.fr;
  const sign = translations.lock_sign.fr;

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
