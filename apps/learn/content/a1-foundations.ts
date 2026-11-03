export type QuizQuestion={n:number;type:"choice"|"boolean";prompt:string;options:string[];answer:number;why:string};
export const a1Foundations:QuizQuestion[]=[
  {
    "n": 1,
    "type": "choice",
    "prompt": "Bonjour ! Comment allez-vous ?",
    "options": [
      "Je vais bien, merci.",
      "Je m'appelle bien.",
      "J'ai bien."
    ],
    "answer": 0,
    "why": "« Je vais bien » est la réponse habituelle."
  },
  {
    "n": 2,
    "type": "choice",
    "prompt": "Choose the correct way to say “My name is Amina.”",
    "options": [
      "Je suis Amina m'appelle.",
      "Je m'appelle Amina.",
      "J'ai Amina."
    ],
    "answer": 1,
    "why": "« Je m'appelle… » donne votre nom."
  },
  {
    "n": 3,
    "type": "boolean",
    "prompt": "« Merci » means “Thank you.”",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "why": "« Merci » signifie thank you."
  },
  {
    "n": 4,
    "type": "choice",
    "prompt": "Complete: « Je ___ ougandais. »",
    "options": [
      "suis",
      "ai",
      "est"
    ],
    "answer": 0,
    "why": "Avec « je », être devient « suis »."
  },
  {
    "n": 5,
    "type": "choice",
    "prompt": "Someone says « Au revoir ». What is a natural reply?",
    "options": [
      "À bientôt !",
      "Pardon ?",
      "Bon appétit !"
    ],
    "answer": 0,
    "why": "« À bientôt » est une réponse naturelle."
  },
  {
    "n": 6,
    "type": "choice",
    "prompt": "Choose the correct article: « ___ université »",
    "options": [
      "Le",
      "La",
      "L'"
    ],
    "answer": 2,
    "why": "On dit « l'université » devant une voyelle."
  },
  {
    "n": 7,
    "type": "choice",
    "prompt": "Complete: « Nous ___ étudiants. »",
    "options": [
      "sommes",
      "êtes",
      "sont"
    ],
    "answer": 0,
    "why": "Avec « nous », être devient « sommes »."
  },
  {
    "n": 8,
    "type": "boolean",
    "prompt": "« Je n'ai pas de voiture » means “I have a car.”",
    "options": [
      "True",
      "False"
    ],
    "answer": 1,
    "why": "« Ne…pas » nie la possession."
  },
  {
    "n": 9,
    "type": "choice",
    "prompt": "How do you ask the price?",
    "options": [
      "Quel âge as-tu ?",
      "Combien ça coûte ?",
      "Où habites-tu ?"
    ],
    "answer": 1,
    "why": "« Combien ça coûte ? » demande le prix."
  },
  {
    "n": 10,
    "type": "choice",
    "prompt": "Choose the correct sentence.",
    "options": [
      "Elle parle français.",
      "Elle parles français.",
      "Elle parler français."
    ],
    "answer": 0,
    "why": "Avec « elle », un verbe régulier en -er prend généralement -e."
  },
  {
    "n": 11,
    "type": "choice",
    "prompt": "Your friend asks « Tu viens demain ? » You cannot come.",
    "options": [
      "Non, je ne peux pas demain.",
      "Non, je pas peux demain.",
      "Non, je ne demain peux."
    ],
    "answer": 0,
    "why": "« Ne…pas » encadre le verbe conjugué."
  },
  {
    "n": 12,
    "type": "choice",
    "prompt": "Complete: « Hier, je ___ au marché. »",
    "options": [
      "vais",
      "suis allé(e)",
      "aller"
    ],
    "answer": 1,
    "why": "Le passé composé avec être raconte ce déplacement terminé."
  },
  {
    "n": 13,
    "type": "choice",
    "prompt": "You are speaking to a teacher politely. Choose the best request.",
    "options": [
      "Donne-moi le livre.",
      "Vous pouvez m'aider, s'il vous plaît ?",
      "Tu m'aides maintenant."
    ],
    "answer": 1,
    "why": "« Vous pouvez… s'il vous plaît ? » est une demande polie."
  },
  {
    "n": 14,
    "type": "boolean",
    "prompt": "In « Je parle à Marie », you can say « Je lui parle ».",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "why": "« Parler à quelqu'un » se construit indirectement."
  },
  {
    "n": 15,
    "type": "choice",
    "prompt": "Choose the sentence that describes a habit.",
    "options": [
      "Hier, j'ai pris le taxi.",
      "Chaque matin, je prends le taxi.",
      "Demain, je prendrai le taxi."
    ],
    "answer": 1,
    "why": "« Chaque matin » indique une habitude."
  },
  {
    "n": 16,
    "type": "choice",
    "prompt": "You arrive late to class. What would you say?",
    "options": [
      "Je suis désolé(e) pour mon retard.",
      "Je suis faim.",
      "Je m'appelle retard."
    ],
    "answer": 0,
    "why": "On s'excuse avec « Je suis désolé(e) pour mon retard »."
  },
  {
    "n": 17,
    "type": "choice",
    "prompt": "A friend asks directions to the library.",
    "options": [
      "La bibliothèque est près de la banque.",
      "J'aime la bibliothèque hier.",
      "La bibliothèque coûte cinq mille."
    ],
    "answer": 0,
    "why": "« Près de » indique où se trouve un lieu."
  },
  {
    "n": 18,
    "type": "choice",
    "prompt": "You want to disagree politely.",
    "options": [
      "Tu as tort, tais-toi.",
      "Je comprends, mais je ne suis pas tout à fait d'accord.",
      "Non. C'est tout."
    ],
    "answer": 1,
    "why": "Cette formule exprime un désaccord sans fermer l'échange."
  },
  {
    "n": 19,
    "type": "choice",
    "prompt": "A visitor asks what you did last weekend.",
    "options": [
      "Le week-end dernier, je suis allé(e) au lac avec des amis.",
      "Demain, je vais au lac hier.",
      "Je suis aller au lac chaque demain."
    ],
    "answer": 0,
    "why": "« Le week-end dernier » appelle ici le passé composé."
  },
  {
    "n": 20,
    "type": "choice",
    "prompt": "You did not understand a question. What keeps the conversation going?",
    "options": [
      "Je ne comprends pas. Répétez, s'il vous plaît ?",
      "Je comprends tout toujours.",
      "Au revoir, question."
    ],
    "answer": 0,
    "why": "Demander de répéter est une stratégie de communication."
  }
];
export const speakingMissions=[{title:"Make a first introduction",prompt:"Introduce yourself to a new classmate. Say your name, where you are from, where you study or work, and ask two questions."},{title:"At the market",prompt:"You are buying fruit in a Ugandan market. Greet the seller, ask the price of two items, say how much you want, and thank the seller."},{title:"Make a plan",prompt:"Invite a friend to do something this weekend. Suggest a time and place, respond to one difficulty, and agree on a plan."}];
