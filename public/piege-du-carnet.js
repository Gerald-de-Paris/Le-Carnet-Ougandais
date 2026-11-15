(function () {
  "use strict";

  // Keep these five thematic series as permanent categories.
  // When new questions arrive, add each question object to the matching series.questions array.
  // The displayed counts, progress and final score are calculated from each array automatically.
  const series = [
    {
      title: { fr: "Les petits mots qui changent tout", en: "Small words, big differences" },
      description: { fr: "Pronoms, expressions et mots du quotidien.", en: "Pronouns, expressions and everyday words." },
      questions: [
        {
          title: { fr: "Le bon pronom", en: "The right pronoun" },
          text: "Tu as souri à Ginette. Oui, je ______ ai souri.",
          options: ["la", "l’", "lui", "leur"],
          answer: 2,
          explanation: {
            fr: "On dit « sourire à quelqu’un ». Le verbe sourire se construit avec la préposition « à » : c’est donc un complément indirect. Pour remplacer « à Ginette », on utilise « lui ». « La » et « l’ » remplacent un complément direct ; « leur » s’emploie pour plusieurs personnes.",
            en: "French says « sourire à quelqu’un » (to smile at someone). The verb takes « à », so the person is an indirect object. « Lui » replaces « à Ginette ». « La » and « l’ » are direct-object pronouns; « leur » is used for more than one person."
          },
          takeaway: { fr: "sourire à quelqu’un → lui / leur", en: "sourire à quelqu’un → lui / leur" },
          exampleFr: "J’ai téléphoné à Marie. → Je lui ai téléphoné.",
          exampleEn: "I called Marie. → I called her."
        },
        {
          title: { fr: "En avance ou à l’avance ?", en: "En avance or à l’avance?" },
          text: "Tu es déjà là, tu es ______.",
          options: ["en avance", "à l’avance"],
          answer: 0,
          explanation: {
            fr: "« Être en avance » signifie arriver avant l’heure prévue. « À l’avance » signifie faire quelque chose avant le moment nécessaire ou prévu : préparer un document à l’avance, réserver à l’avance. Ici, on parle de l’heure d’arrivée.",
            en: "« Être en avance » means to arrive earlier than expected. « À l’avance » means to do something beforehand: prepare a document in advance, book ahead. Here, the sentence describes the time of arrival."
          },
          takeaway: { fr: "Être en avance = arriver tôt.", en: "Être en avance = to arrive early." },
          exampleFr: "Le cours commence à 9 h, mais je suis arrivé à 8 h 30 : je suis en avance.",
          exampleEn: "Class starts at 9, but I arrived at 8:30: I am early."
        },
        {
          title: { fr: "Bonne humeur ou bon humour ?", en: "Good mood or good humour?" },
          text: "J’adore sourire et je suis toujours de bonne ______.",
          options: ["humour", "humeur"],
          answer: 1,
          explanation: {
            fr: "L’expression est « être de bonne humeur » : elle parle de l’état d’esprit, de la disposition d’une personne. « L’humour » concerne la manière de faire rire ou de percevoir les choses avec amusement.",
            en: "The expression is « être de bonne humeur »: it describes someone's mood or state of mind. « L’humour » means humour or a sense of comedy."
          },
          takeaway: { fr: "Bonne humeur = bon état d’esprit.", en: "Bonne humeur = a good mood." },
          exampleFr: "Elle est de bonne humeur ce matin. Il a beaucoup d’humour.",
          exampleEn: "She is in a good mood this morning. He has a great sense of humour."
        },
        {
          title: { fr: "Une tasse… de quoi ?", en: "A cup of what?" },
          text: "Le matin, je vais boire une tasse ______ café.",
          options: ["de", "du"],
          answer: 0,
          explanation: {
            fr: "Après une expression de quantité ou de contenant comme « une tasse », on emploie généralement « de » devant le nom : une tasse de café, un verre d’eau, un kilo de riz. On ne met pas l’article partitif « du » dans cette construction.",
            en: "After a container or quantity expression such as « une tasse », French normally uses « de » before the noun: a cup of coffee, a glass of water, a kilo of rice. The partitive article « du » is not used in this construction."
          },
          takeaway: { fr: "une tasse de café · un verre d’eau · un kilo de riz", en: "a cup of coffee · a glass of water · a kilo of rice" },
          exampleFr: "Je voudrais une bouteille d’eau et une tasse de thé.",
          exampleEn: "I would like a bottle of water and a cup of tea."
        },
        {
          title: { fr: "Dans le futur ou au futur ?", en: "Dans le futur or au futur?" },
          text: "______ les robots domineront le monde.",
          options: ["Dans le futur", "Au futur"],
          answer: 0,
          explanation: {
            fr: "« Dans le futur » situe un événement dans l’avenir. « Au futur » sert surtout à parler du temps verbal : un verbe conjugué au futur. Ici, on parle du moment où les robots domineront le monde.",
            en: "« Dans le futur » places an event in the future. « Au futur » is mainly used to describe the grammatical tense: a verb conjugated in the future tense. This sentence is about when the event will happen."
          },
          takeaway: { fr: "Dans le futur = à l’avenir. Au futur = un temps verbal.", en: "Dans le futur = in the future. Au futur = in the future tense." },
          exampleFr: "Dans le futur, je voyagerai davantage. « Je voyagerai » est au futur.",
          exampleEn: "In the future, I will travel more. « Je voyagerai » is in the future tense."
        }
      ]
    },
    {
      title: { fr: "Expressions et nuances", en: "Expressions and nuances" },
      description: { fr: "Dire exactement ce que l’on veut dire.", en: "Say exactly what you mean." },
      questions: [
        {
          title: { fr: "Demander le prix total", en: "Asking for the total price" },
          text: "Le pantalon plus le tee-shirt, ______ ?",
          options: ["C’est combien ?", "Ça fait combien ?"],
          answer: 1,
          explanation: {
            fr: "Pour demander le montant total de plusieurs articles, « Ça fait combien ? » est très naturel : on demande combien tout cela fait ensemble. « C’est combien ? » est également courant pour demander le prix d’un article ou d’un service.",
            en: "To ask for the combined price of several items, « Ça fait combien ? » is very natural: you are asking for the total. « C’est combien ? » is also common when asking the price of one item or service."
          },
          takeaway: { fr: "Le total : « Ça fait combien ? »", en: "The total: « Ça fait combien ? »" },
          exampleFr: "Le pain et le lait, ça fait combien en tout ?",
          exampleEn: "How much are the bread and milk altogether?"
        },
        {
          title: { fr: "La France, c’est beau ou belle ?", en: "La France, c’est beau ou belle?" },
          text: "La France, c’est ______.",
          options: ["belle", "beau"],
          answer: 1,
          explanation: {
            fr: "Dans « La France, c’est beau », « c’ » reprend l’idée de façon neutre : on commente le pays, l’expérience ou le fait d’y être. On peut aussi dire « La France est belle » : dans cette autre construction, l’adjectif s’accorde avec « la France » (féminin).",
            en: "In « La France, c’est beau », « c’ » gives a neutral, general comment about the country or the experience. You can also say « La France est belle »: in that construction, the adjective agrees with « la France » (feminine)."
          },
          takeaway: { fr: "La France, c’est beau. / La France est belle.", en: "La France, c’est beau. / La France est belle." },
          exampleFr: "Cette ville, c’est magnifique. Cette ville est magnifique.",
          exampleEn: "This city is magnificent. This city is magnificent."
        },
        {
          title: { fr: "Pendant ou pour ?", en: "Pendant or pour?" },
          text: "J’ai visité la France ______ dix jours.",
          options: ["pendant", "pour"],
          answer: 0,
          explanation: {
            fr: "Pour exprimer la durée réelle d’une activité passée et terminée, « pendant » convient très bien : j’ai visité la France pendant dix jours. « Pour » peut annoncer une durée prévue ou une période envisagée : je pars en France pour dix jours.",
            en: "To express the actual duration of a completed past activity, « pendant » fits well: I visited France for ten days. « Pour » can describe an intended or planned period: I am going to France for ten days."
          },
          takeaway: { fr: "Activité passée : pendant dix jours. Durée prévue : pour dix jours.", en: "Completed past activity: pendant dix jours. Planned duration: pour dix jours." },
          exampleFr: "J’ai travaillé pendant trois heures. Je pars à Paris pour une semaine.",
          exampleEn: "I worked for three hours. I am going to Paris for a week."
        },
        {
          title: { fr: "Censé ou sensé ?", en: "Censé or sensé?" },
          text: "Il dit n’importe quoi, il n’est pas ______.",
          options: ["sensé", "censé"],
          answer: 1,
          explanation: {
            fr: "« Être censé faire quelque chose » signifie être supposé le faire. « Sensé » signifie raisonnable, qui a du bon sens. Dans la phrase, on veut dire qu’il n’est pas supposé dire cela : il faut donc « censé ».",
            en: "« Être censé faire quelque chose » means to be supposed to do something. « Sensé » means sensible or reasonable. Here, the meaning is that he is not supposed to say that, so « censé » is needed."
          },
          takeaway: { fr: "Censé = supposé. Sensé = raisonnable.", en: "Censé = supposed to. Sensé = sensible." },
          exampleFr: "Tu es censé arriver à huit heures. C’est une décision sensée.",
          exampleEn: "You are supposed to arrive at eight. It is a sensible decision."
        },
        {
          title: { fr: "Le frère de Keloy", en: "Keloy’s brother" },
          text: "Quelle phrase convient pour présenter son lien familial ?",
          options: ["C’est le frère de Keloy.", "Il est le frère du Keloy."],
          answer: 0,
          explanation: {
            fr: "Pour identifier quelqu’un, « C’est le frère de Keloy » est la formulation naturelle. Un prénom ne prend normalement pas d’article : on dit « de Keloy », pas « du Keloy ». Attention : « il est le frère de Keloy » peut aussi être grammatical dans un autre contexte ; le problème de la deuxième option est surtout l’article devant le prénom.",
            en: "To identify someone, « C’est le frère de Keloy » is the natural phrasing. A first name normally does not take an article: use « de Keloy », not « du Keloy ». Note: « il est le frère de Keloy » can also be grammatical in another context; the main problem in the second option is the article before the name."
          },
          takeaway: { fr: "C’est le frère de Keloy. (Pas d’article devant le prénom.)", en: "C’est le frère de Keloy. (No article before the first name.)" },
          exampleFr: "C’est la sœur de Sarah. C’est l’ami de Paul.",
          exampleEn: "She is Sarah’s sister. He is Paul’s friend."
        }
      ]
    },
    {
      title: { fr: "Verbes et constructions", en: "Verbs and sentence patterns" },
      description: { fr: "Choisir le verbe et construire la phrase.", en: "Choose the right verb and build the sentence." },
      questions: [
        {
          title: { fr: "Revenir ou retourner ?", en: "Revenir or retourner?" },
          text: "Je suis à Nakawa, mais je vais à Banda. Je ______ à Nakawa dans deux jours.",
          options: ["retournerai", "reviendrai"],
          answer: 1,
          explanation: {
            fr: "Dans le contexte du piège, Nakawa est le point où se trouve le locuteur maintenant : « revenir à Nakawa » présente le déplacement comme un retour vers ce point de référence. « Retourner à Nakawa » peut aussi être correct si l’on présente simplement le fait d’y aller de nouveau depuis un autre lieu. Le choix dépend du point de vue.",
            en: "In this challenge, Nakawa is the speaker’s current reference point: « revenir à Nakawa » presents the movement as coming back to that point. « Retourner à Nakawa » can also be correct when simply describing going there again from somewhere else. The choice depends on viewpoint."
          },
          takeaway: { fr: "Revenir : venir de nouveau vers un point de référence. Retourner : aller de nouveau quelque part.", en: "Revenir: come back toward a reference point. Retourner: go back to a place." },
          exampleFr: "Reviens ici demain. Je retourne à la boutique après le travail.",
          exampleEn: "Come back here tomorrow. I am going back to the shop after work."
        },
        {
          title: { fr: "J’ai retourné ou je suis retourné ?", en: "J’ai retourné or je suis retourné?" },
          text: "______ l’ordinateur parce qu’il ne fonctionnait pas.",
          options: ["J’ai retourné", "Je suis retourné"],
          answer: 0,
          explanation: {
            fr: "Ici, « retourner » signifie renvoyer ou rendre un objet : l’ordinateur est le complément direct. Dans cet emploi transitif, on utilise « avoir » : « J’ai retourné l’ordinateur ». Pour dire qu’une personne est allée de nouveau quelque part, on dit « Je suis retourné à la boutique ».",
            en: "Here, « retourner » means to send or take an item back: « l’ordinateur » is the direct object. This transitive use takes « avoir »: « J’ai retourné l’ordinateur ». To say that a person went back somewhere, use « Je suis retourné à la boutique »."
          },
          takeaway: { fr: "Retourner un objet → avoir. Retourner quelque part → être.", en: "Return an object → avoir. Go back somewhere → être." },
          exampleFr: "J’ai retourné le colis. Je suis retourné au magasin.",
          exampleEn: "I returned the parcel. I went back to the shop."
        },
        {
          title: { fr: "Où placer « déjà » ?", en: "Where does « déjà » go?" },
          text: "Nous ______ retourner en France.",
          options: ["avons déjà envie de", "déjà avons envie de", "avons envie déjà de"],
          answer: 0,
          explanation: {
            fr: "Avec un temps composé comme « avons envie » dans cette phrase, l’adverbe court « déjà » se place naturellement après le verbe conjugué : « Nous avons déjà envie… ». On ne le place pas entre le sujet et l’auxiliaire.",
            en: "In this sentence, the short adverb « déjà » is naturally placed after the conjugated verb: « Nous avons déjà envie… ». It does not go between the subject and the auxiliary."
          },
          takeaway: { fr: "Sujet + verbe conjugué + déjà + complément.", en: "Subject + conjugated verb + déjà + complement." },
          exampleFr: "J’ai déjà mangé. Nous avons déjà réservé.",
          exampleEn: "I have already eaten. We have already booked."
        },
        {
          title: { fr: "Passer une heure à faire quelque chose", en: "Spending an hour doing something" },
          text: "J’ai passé une heure ______ sur mon dossier.",
          options: ["en travaillant", "à travailler"],
          answer: 1,
          explanation: {
            fr: "Pour exprimer le temps consacré à une activité, la construction habituelle est « passer + durée + à + infinitif » : « J’ai passé une heure à travailler ». « En travaillant » peut exprimer la manière ou une action simultanée, mais ce n’est pas la construction attendue ici.",
            en: "To express time spent on an activity, the usual pattern is « passer + duration + à + infinitive »: « J’ai passé une heure à travailler ». « En travaillant » can express how something happened or a simultaneous action, but it is not the intended construction here."
          },
          takeaway: { fr: "Passer du temps à + infinitif.", en: "Passer du temps à + infinitive." },
          exampleFr: "Elle a passé deux heures à réviser.",
          exampleEn: "She spent two hours revising."
        },
        {
          title: { fr: "Semblent ou se ressemblent ?", en: "Semblent or se ressemblent?" },
          text: "Philippe et son frère ______.",
          options: ["semblent", "se ressemblent", "ressemblent"],
          answer: 1,
          explanation: {
            fr: "« Se ressembler » est un verbe pronominal qui signifie avoir une apparence similaire. Les deux personnes se ressemblent l’une l’autre. « Semblent » doit normalement être suivi d’un adjectif ou d’un infinitif : ils semblent fatigués, ils semblent comprendre.",
            en: "« Se ressembler » is a pronominal verb meaning to look alike. The two people resemble one another. « Semblent » normally needs an adjective or an infinitive after it: they seem tired; they seem to understand."
          },
          takeaway: { fr: "Deux personnes se ressemblent.", en: "Two people se ressemblent (look alike)." },
          exampleFr: "Les deux sœurs se ressemblent beaucoup.",
          exampleEn: "The two sisters look very much alike."
        }
      ]
    },
    {
      title: { fr: "Réponses et prépositions", en: "Responses and prepositions" },
      description: { fr: "Un petit mot peut changer toute la réponse.", en: "One small word can change the whole response." },
      questions: [
        {
          title: { fr: "Parmi ou entre amis ?", en: "Parmi or entre amis?" },
          text: "J’ai fêté mon anniversaire ______ amis, dans une ambiance détendue.",
          options: ["parmi", "entre"],
          answer: 1,
          explanation: {
            fr: "« Entre amis » est une expression courante qui signifie dans un cadre amical, avec des amis. « Parmi » est aussi correct, mais il doit être suivi d’un groupe déterminé : « parmi mes amis », « parmi les invités ». On ne dit pas « parmi amis » dans cette phrase.",
            en: "« Entre amis » is a common expression meaning in a friendly setting, with friends. « Parmi » can also be correct, but it needs a defined group: « parmi mes amis », « parmi les invités ». You cannot use « parmi amis » here."
          },
          takeaway: { fr: "Entre amis / parmi mes amis.", en: "Entre amis / parmi mes amis." },
          exampleFr: "Nous avons passé la soirée entre amis. Elle était parmi les invités.",
          exampleEn: "We spent the evening among friends. She was among the guests."
        },
        {
          title: { fr: "Oui ou si ?", en: "Oui or si?" },
          text: "Quelqu’un affirme : « Emmanuel Macron n’est pas français. » Comment le contredire ?",
          options: ["Si, il est français.", "Oui, il est français.", "Non, il est français."],
          answer: 0,
          explanation: {
            fr: "En français, « si » sert à contredire une affirmation ou une question négative. On répond « Si ! » pour dire que l’information négative est fausse. « Oui » confirme plutôt une proposition affirmative.",
            en: "In French, « si » is used to contradict a negative statement or question. Say « Si ! » to show that the negative information is false. « Oui » normally confirms an affirmative statement."
          },
          takeaway: { fr: "Pour contredire une phrase négative : SI !", en: "To contradict a negative sentence: SI !" },
          exampleFr: "Tu n’as pas faim ? — Si, j’ai faim !",
          exampleEn: "Aren’t you hungry? — Yes, I am!"
        },
        {
          title: { fr: "C’est moi qui…", en: "It is me who…" },
          text: "C’est moi qui ______ dit ça.",
          options: ["ai", "a"],
          answer: 0,
          explanation: {
            fr: "Dans « c’est moi qui… », le verbe de la proposition relative s’accorde avec « moi », qui correspond à « je ». On dit donc « moi qui ai », et non « moi qui a ».",
            en: "In « c’est moi qui… », the verb in the relative clause agrees with « moi », which corresponds to « je » (I). So use « moi qui ai », not « moi qui a »."
          },
          takeaway: { fr: "C’est moi qui ai… / C’est toi qui as…", en: "C’est moi qui ai… / C’est toi qui as…" },
          exampleFr: "C’est nous qui avons commencé. C’est elle qui a appelé.",
          exampleEn: "We are the ones who started. She is the one who called."
        },
        {
          title: { fr: "Merci à ou merci pour ?", en: "Merci à or merci pour?" },
          text: "Merci ______ tous ceux qui ont aimé cette vidéo.",
          options: ["de", "pour", "à"],
          answer: 2,
          explanation: {
            fr: "On emploie « merci à » pour remercier une personne ou un groupe : merci à tous ceux qui ont aidé. « Merci pour » introduit plutôt la chose ou la raison du remerciement : merci pour votre aide, merci pour la vidéo.",
            en: "Use « merci à » to thank a person or group: thank you to everyone who helped. « Merci pour » usually introduces what you are thankful for: thank you for your help, thank you for the video."
          },
          takeaway: { fr: "Merci à quelqu’un. Merci pour quelque chose.", en: "Merci à someone. Merci pour something." },
          exampleFr: "Merci à nos bénévoles. Merci pour votre soutien.",
          exampleEn: "Thank you to our volunteers. Thank you for your support."
        },
        {
          title: { fr: "Appartenir à la France", en: "Belonging to France" },
          text: "La tour Eiffel appartient ______ France.",
          options: ["à la", "en"],
          answer: 0,
          explanation: {
            fr: "Le verbe « appartenir » se construit avec la préposition « à » : appartenir à quelqu’un, à une organisation, à un pays. « En France » indique plutôt une localisation : la tour Eiffel se trouve en France.",
            en: "The verb « appartenir » takes the preposition « à »: to belong to a person, organisation or country. « En France » indicates location: the Eiffel Tower is in France."
          },
          takeaway: { fr: "Appartenir à + nom. Se trouver en France.", en: "Appartenir à + noun. Se trouver en France." },
          exampleFr: "Ce bâtiment appartient à la ville. Il se trouve en France.",
          exampleEn: "This building belongs to the city. It is located in France."
        }
      ]
    },
    {
      title: { fr: "Les pièges du quotidien", en: "Everyday French traps" },
      description: { fr: "Des expressions que l’on entend et utilise souvent.", en: "Expressions you hear and use often." },
      questions: [
        {
          title: { fr: "Par terre ou sur Terre ?", en: "On the ground or on Earth?" },
          text: "Les extraterrestres arrivent ______ pour nous manger.",
          options: ["par terre", "sur Terre"],
          answer: 1,
          explanation: {
            fr: "« Sur Terre » désigne la planète Terre. « Par terre » signifie au sol, sur le plancher. Les extraterrestres arrivent donc « sur Terre » ; un livre peut tomber « par terre ».",
            en: "« Sur Terre » refers to planet Earth. « Par terre » means on the ground or floor. The aliens arrive « sur Terre »; a book can fall « par terre »."
          },
          takeaway: { fr: "Sur Terre = sur la planète. Par terre = au sol.", en: "Sur Terre = on the planet. Par terre = on the ground." },
          exampleFr: "Nous vivons sur Terre. Le sac est par terre.",
          exampleEn: "We live on Earth. The bag is on the floor."
        },
        {
          title: { fr: "Il pleut ou il pleure ?", en: "Is it raining or crying?" },
          text: "Prends ton parapluie, il ______ beaucoup.",
          options: ["pleut", "pleure"],
          answer: 0,
          explanation: {
            fr: "« Il pleut » vient du verbe impersonnel « pleuvoir » : il s’agit de la météo. « Il pleure » vient du verbe « pleurer » : une personne ou un animal verse des larmes. Le parapluie donne l’indice.",
            en: "« Il pleut » comes from the impersonal verb « pleuvoir »: it is about the weather. « Il pleure » comes from « pleurer »: a person or animal is crying. The umbrella is the clue."
          },
          takeaway: { fr: "Il pleut = rain. Il pleure = cries.", en: "Il pleut = rain. Il pleure = cries." },
          exampleFr: "Il pleut depuis ce matin. Le bébé pleure.",
          exampleEn: "It has been raining since this morning. The baby is crying."
        },
        {
          title: { fr: "Toucher ou toucher à ?", en: "Toucher or toucher à?" },
          text: "Ne touche pas ______ mon organisation pour les vacances.",
          options: ["à", "— (sans préposition)"],
          answer: 0,
          explanation: {
            fr: "Dans le sens de modifier, déranger ou intervenir dans quelque chose, on dit « toucher à quelque chose » : ne touche pas à mon organisation. « Toucher quelque chose » sans « à » signifie notamment poser la main dessus ou entrer en contact direct avec l’objet.",
            en: "When « toucher » means to interfere with, alter or tamper with something, French uses « toucher à quelque chose »: do not touch my arrangements. Without « à », « toucher quelque chose » commonly means to physically touch it."
          },
          takeaway: { fr: "Toucher à quelque chose = intervenir / modifier. Toucher quelque chose = contact direct.", en: "Toucher à quelque chose = interfere with / alter. Toucher quelque chose = physically touch." },
          exampleFr: "Ne touche pas à mes affaires. L’enfant touche la vitre.",
          exampleEn: "Do not interfere with my things. The child touches the window."
        },
        {
          title: { fr: "Au cas où…", en: "Au cas où…" },
          text: "Je prépare un bon plat au cas où tu ______ venir.",
          options: ["voudrais", "veux", "voudras", "voulais"],
          answer: 0,
          explanation: {
            fr: "Dans la construction « au cas où », on emploie normalement le conditionnel. Ici, le conditionnel présent de « vouloir » est « tu voudrais » : « au cas où tu voudrais venir ». Ce n’est pas le présent « tu veux » ni le futur « tu voudras ».",
            en: "In the construction « au cas où », French normally uses the conditional. Here, the present conditional of « vouloir » is « tu voudrais »: « au cas où tu voudrais venir ». It is not the present « tu veux » or future « tu voudras »."
          },
          takeaway: { fr: "Au cas où + conditionnel.", en: "Au cas où + conditional." },
          exampleFr: "Prends ton téléphone au cas où tu aurais besoin de m’appeler.",
          exampleEn: "Take your phone in case you need to call me."
        },
        {
          title: { fr: "Maudit ou médit ?", en: "Maudit or médit?" },
          text: "Il a ______ son ancien patron qui l’a renvoyé.",
          options: ["maudit", "médit"],
          answer: 0,
          explanation: {
            fr: "« Maudit » est le participe passé du verbe « maudire » : exprimer une forte colère ou appeler le malheur sur quelqu’un. Le participe passé de « méditer » est « médité », avec un « é » final. Dans cette phrase, il a maudit son ancien patron.",
            en: "« Maudit » is the past participle of « maudire »: to curse someone or call misfortune upon them. The past participle of « méditer » is « médité », with a final « é ». In this sentence, he cursed his former boss."
          },
          takeaway: { fr: "Maudire → il a maudit. Méditer → il a médité.", en: "Maudire → il a maudit. Méditer → il a médité." },
          exampleFr: "Il a maudit son ancien patron. Elle a médité en silence.",
          exampleEn: "He cursed his former boss. She meditated in silence."
        }
      ]
    }
  ];

  const $ = function (id) { return document.getElementById(id); };
  const state = { seriesIndex: null, questionIndex: 0, selected: null, answered: false, score: 0, lang: "fr" };

  function text(fr, en) { return state.lang === "en" ? en : fr; }
  function setText(id, fr, en) { $(id).textContent = text(fr, en); }
  function currentSeries() { return series[state.seriesIndex]; }
  function currentQuestion() { return currentSeries().questions[state.questionIndex]; }

  function showOnly(view) {
    $("piegeSeries").hidden = view !== "series";
    $("piegeQuiz").hidden = view !== "quiz";
    $("piegeResult").hidden = view !== "result";
  }

  function renderSeries() {
    const grid = $("piegeSeriesGrid");
    grid.replaceChildren();
    series.forEach(function (item, index) {
      const card = document.createElement("article");
      card.className = "piege-series-card";
      const num = document.createElement("span");
      num.className = "piege-series-number";
      num.textContent = "0" + (index + 1);
      const title = document.createElement("h3");
      title.textContent = item.title[state.lang];
      const desc = document.createElement("p");
      desc.textContent = item.description[state.lang];
      const count = document.createElement("span");
      count.className = "piege-series-count";
      const challengeCount = item.questions.length;
      count.textContent = state.lang === "en"
        ? challengeCount + (challengeCount === 1 ? " challenge" : " challenges")
        : challengeCount + (challengeCount === 1 ? " défi" : " défis");
      const button = document.createElement("button");
      button.type = "button";
      button.className = "piege-series-start";
      button.textContent = text("Commencer la série →", "Start this series →");
      button.addEventListener("click", function () { startSeries(index); });
      card.append(num, title, desc, count, button);
      grid.appendChild(card);
    });
  }

  function startSeries(index) {
    state.seriesIndex = index;
    state.questionIndex = 0;
    state.selected = null;
    state.answered = false;
    state.score = 0;
    showOnly("quiz");
    renderQuestion();
    window.scrollTo({ top: $("piegeQuiz").getBoundingClientRect().top + window.scrollY - 24, behavior: "smooth" });
  }

  function renderQuestion() {
    const pack = currentSeries();
    const item = currentQuestion();
    $("piegeSeriesLabel").textContent = pack.title[state.lang];
    const totalQuestions = pack.questions.length;
    $("piegeProgressText").textContent = text("Défi " + (state.questionIndex + 1) + " sur " + totalQuestions, "Challenge " + (state.questionIndex + 1) + " of " + totalQuestions);
    $("piegeScoreText").textContent = text("Score : " + state.score + " / " + totalQuestions, "Score: " + state.score + " / " + totalQuestions);
    $("piegeProgressBar").style.width = (((state.questionIndex + (state.answered ? 1 : 0)) / totalQuestions) * 100) + "%";
    $("piegeQuestionNumber").textContent = "DÉFI " + String(state.questionIndex + 1).padStart(2, "0");
    $("piegeQuestionTitle").textContent = item.title[state.lang];
    $("piegeQuestionText").textContent = item.text;

    const options = $("piegeOptions");
    options.replaceChildren();
    item.options.forEach(function (option, index) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "piege-option";
      button.textContent = option;
      button.setAttribute("aria-pressed", String(state.selected === index));
      if (state.selected === index) button.classList.add("is-selected");
      if (state.answered && index === item.answer) button.classList.add("is-correct");
      if (state.answered && state.selected === index && index !== item.answer) button.classList.add("is-wrong");
      button.disabled = state.answered;
      button.addEventListener("click", function () {
        if (state.answered) return;
        state.selected = index;
        renderQuestion();
      });
      options.appendChild(button);
    });

    $("piegeSelectHint").hidden = state.answered;
    $("piegeSubmit").hidden = state.answered;
    $("piegeSubmit").disabled = state.selected === null;
    $("piegeFeedback").hidden = !state.answered;
    if (state.answered) renderFeedback(item);
  }

  function submitAnswer() {
    if (state.selected === null || state.answered) return;
    state.answered = true;
    if (state.selected === currentQuestion().answer) state.score += 1;
    renderQuestion();
  }

  function renderFeedback(item) {
    const correct = state.selected === item.answer;
    $("piegeFeedbackBadge").textContent = correct
      ? text("✓ Bien joué", "✓ Nicely done")
      : text("↗ Le piège était là", "↗ That was the trap");
    $("piegeFeedbackBadge").className = "piege-feedback-badge " + (correct ? "is-correct" : "is-wrong");
    $("piegeFeedbackTitle").textContent = correct
      ? text("Tu as repéré la subtilité.", "You spotted the detail.")
      : text("On apprend aussi en se trompant.", "Mistakes are part of learning.");
    $("piegeFeedbackBody").textContent = item.explanation[state.lang];
    $("piegeTakeawayLabel").textContent = text("À retenir", "Remember");
    $("piegeTakeaway").textContent = item.takeaway[state.lang];
    $("piegeExampleLabel").textContent = text("Un autre exemple", "Another example");
    $("piegeExampleFr").textContent = item.exampleFr;
    $("piegeExampleEn").textContent = item.exampleEn;
    $("piegeNext").textContent = state.questionIndex === currentSeries().questions.length - 1
      ? text("Voir mon résultat →", "See my result →")
      : text("Défi suivant →", "Next challenge →");
  }

  function nextQuestion() {
    if (state.questionIndex < currentSeries().questions.length - 1) {
      state.questionIndex += 1;
      state.selected = null;
      state.answered = false;
      renderQuestion();
      $("piegeQuiz").scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      renderResult();
      showOnly("result");
      $("piegeResult").scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function renderResult() {
    const item = currentSeries();
    $("piegeResultTitle").textContent = item.title[state.lang];
    const totalQuestions = item.questions.length;
    $("piegeResultScore").textContent = state.score + " / " + totalQuestions;
    let message;
    if (state.score === totalQuestions) {
      message = text("Impeccable ! Tu as déjoué tous les pièges de cette série. Garde cette précision dans tes conversations.", "Perfect! You avoided every trap in this series. Keep that precision in your conversations.");
    } else if (state.score >= 3) {
      message = text("Très bon travail ! Tu as de bonnes bases. Relis les explications des pièges qui t’ont surpris.", "Great work! You have a good foundation. Revisit the explanations for the traps that surprised you.");
    } else {
      message = text("Le français aime les détails… et tu viens d’en découvrir quelques-uns. Rejoue la série : la deuxième tentative sera plus facile.", "French loves its details… and you have just discovered a few. Replay the series: the second attempt will feel easier.");
    }
    $("piegeResultMessage").textContent = message;
    $("piegeResultScore").setAttribute("aria-label", text("Ton score", "Your score") + ": " + state.score + " sur " + totalQuestions);
  }

  function chooseAnother() {
    state.seriesIndex = null;
    state.questionIndex = 0;
    state.selected = null;
    state.answered = false;
    state.score = 0;
    renderSeries();
    showOnly("series");
    $("piegeSeries").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  $("piegeSubmit").addEventListener("click", submitAnswer);
  $("piegeNext").addEventListener("click", nextQuestion);
  $("piegeExit").addEventListener("click", chooseAnother);
  $("piegeChooseAnother").addEventListener("click", chooseAnother);
  $("piegeReplay").addEventListener("click", function () { startSeries(state.seriesIndex); });

  document.addEventListener("site-language-change", function (event) {
    state.lang = event.detail && event.detail.lang === "en" ? "en" : "fr";
    if (state.seriesIndex === null) renderSeries();
    else if (!$("piegeResult").hidden) renderResult();
    else renderQuestion();
  });

  document.addEventListener("DOMContentLoaded", function () {
    state.lang = document.documentElement.getAttribute("data-lang") || localStorage.getItem("site-lang") || "fr";
    renderSeries();
    showOnly("series");
  });
})();
