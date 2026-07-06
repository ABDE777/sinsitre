export type Question = {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export const quizzes: Record<string, Question[]> = {
  fondamentaux: [
    {
      id: "f1",
      question: "Quel est le principe fondamental du fonctionnement de l'assurance ?",
      options: [
        "La suppression du risque",
        "La mutualisation des risques",
        "La spéculation financière",
        "La prévision individuelle",
      ],
      correctIndex: 1,
      explanation:
        "L'assurance repose sur la mutualisation : les primes de tous financent les sinistres de quelques-uns. Elle ne supprime pas le risque, elle le rend supportable.",
    },
    {
      id: "f2",
      question: "Quelle est la seule garantie auto obligatoire au Maroc ?",
      options: [
        "Dommages Tous Accidents (DOM)",
        "Bris de Glace",
        "Responsabilité Civile (RC)",
        "Vol",
      ],
      correctIndex: 2,
      explanation:
        "La RC est la seule garantie légalement obligatoire. Elle couvre les dommages causés aux tiers, jamais le véhicule de l'assuré.",
    },
    {
      id: "f3",
      question: "Que contiennent les Conditions Particulières (CP) d'un contrat ?",
      options: [
        "Les règles communes à tous les assurés",
        "Les garanties, franchises et plafonds spécifiques au client",
        "La liste des experts agréés",
        "La grille tarifaire de la compagnie",
      ],
      correctIndex: 1,
      explanation:
        "Les CP sont les règles propres au client : garanties souscrites, franchises, plafonds, bénéficiaires. Les CG contiennent les règles communes.",
    },
    {
      id: "f4",
      question: "Qu'est-ce qu'une franchise ?",
      options: [
        "Le plafond maximum d'indemnisation",
        "La somme restant à la charge du client",
        "La cotisation annuelle payée par l'assuré",
        "Une exclusion du contrat",
      ],
      correctIndex: 1,
      explanation:
        "La franchise est la part qui reste à la charge de l'assuré, déduite de l'indemnisation versée par l'assureur.",
    },
    {
      id: "f5",
      question: "Un client seul emboutit un mur. Quelle garantie l'indemnise ?",
      options: [
        "La RC",
        "La COL (Dommages Collision)",
        "La DOM (Dommages Tous Accidents)",
        "La garantie Vol",
      ],
      correctIndex: 2,
      explanation:
        "La COL exige un tiers identifié. Seule la DOM couvre les accidents seuls ou sans tiers identifié.",
    },
  ],
  cid: [
    {
      id: "c1",
      question: "Que signifie CID ?",
      options: [
        "Convention d'Indemnisation Directe",
        "Contrat d'Indemnisation Détaillé",
        "Convention Internationale des Dommages",
        "Cadre d'Indemnisation Différée",
      ],
      correctIndex: 0,
      explanation:
        "La CID (Convention d'Indemnisation Directe) est l'accord entre les compagnies marocaines pour harmoniser la détermination des responsabilités.",
    },
    {
      id: "c2",
      question: "Quel est un objectif principal de la CID ?",
      options: [
        "Augmenter les primes",
        "Accélérer l'indemnisation et harmoniser le traitement",
        "Supprimer l'expertise",
        "Empêcher les recours entre assureurs",
      ],
      correctIndex: 1,
      explanation:
        "La CID accélère l'indemnisation, harmonise le traitement entre assureurs et simplifie les recours grâce à des règles communes.",
    },
    {
      id: "c3",
      question: "Dans quel cas la CID NE s'applique PAS ?",
      options: [
        "Accident au Maroc entre deux véhicules assurés",
        "Constat amiable signé par les deux parties",
        "Délit de fuite (tiers non identifié)",
        "Accident avec deux compagnies adhérentes",
      ],
      correctIndex: 2,
      explanation:
        "La CID exige un tiers identifié et une compagnie adhérente. En cas de délit de fuite, on traite hors CID.",
    },
    {
      id: "c4",
      question: "Quelle est la 1ère étape de l'analyse d'un constat ?",
      options: [
        "Analyser le croquis",
        "Identifier les véhicules et leurs assureurs",
        "Contacter l'expert",
        "Lire les cases cochées",
      ],
      correctIndex: 1,
      explanation:
        "La méthode démarre par l'identification des véhicules (plaques, marques, assureurs), avant de lire les circonstances et le croquis.",
    },
    {
      id: "c5",
      question: "Quel document est indispensable pour appliquer la CID ?",
      options: [
        "Une facture de garage",
        "Un constat amiable ou un PV",
        "Un devis d'expertise",
        "Une attestation de vétusté",
      ],
      correctIndex: 1,
      explanation:
        "Sans constat amiable ou PV, la CID ne peut pas être appliquée : elle a besoin d'une trace formelle des circonstances.",
    },
  ],
  "conditions-generales": [
    {
      id: "cg1",
      question:
        "Un assuré est reconnu responsable à 100%. Il n'a que la garantie RC. Quelle indemnisation reçoit-il pour son propre véhicule ?",
      options: [
        "100% par la compagnie adverse",
        "50% par sa propre compagnie",
        "Aucune",
        "La valeur vénale moins la franchise",
      ],
      correctIndex: 2,
      explanation:
        "La RC ne couvre que les tiers. Sans DOM ni COL, un assuré 100% responsable n'est pas indemnisé pour son propre véhicule.",
    },
    {
      id: "cg2",
      question: "Un assuré non responsable (0%) est indemnisé par :",
      options: [
        "Sa propre compagnie, avec franchise",
        "La compagnie adverse, à 100%",
        "Personne, il doit assumer",
        "L'expert en direct",
      ],
      correctIndex: 1,
      explanation:
        "Quand l'assuré est totalement non responsable, la compagnie adverse indemnise à 100% sans franchise.",
    },
    {
      id: "cg3",
      question: "Quel est le délai standard pour déclarer un sinistre ?",
      options: ["48 heures", "5 jours", "15 jours", "1 mois"],
      correctIndex: 2,
      explanation:
        "Le délai contractuel est généralement de 15 jours (48h pour un vol). Hors délai : déchéance possible.",
    },
    {
      id: "cg4",
      question: "En cas de vol, quelle est l'obligation supplémentaire ?",
      options: [
        "Une expertise en ligne",
        "Un dépôt de plainte",
        "Une attestation de garage",
        "Un rachat de franchise",
      ],
      correctIndex: 1,
      explanation:
        "Le dépôt de plainte est obligatoire pour tout dossier vol, et la déclaration doit être faite dans les 48h.",
    },
    {
      id: "cg5",
      question: "Que se passe-t-il si le client répare avant expertise ?",
      options: [
        "L'expertise se fait sur facture",
        "Refus d'indemnisation possible",
        "La franchise est doublée",
        "Rien, c'est autorisé",
      ],
      correctIndex: 1,
      explanation:
        "Sans possibilité pour l'expert de constater les dégâts, l'assureur peut refuser l'indemnisation.",
    },
  ],
  procedures: [
    {
      id: "p1",
      question: "WAFA Sarii est réservé aux sinistres :",
      options: ["< 10 000 DH", "< 50 000 DH", "> 100 000 DH", "Uniquement les vols"],
      correctIndex: 0,
      explanation:
        "WAFA Sarii est le forfait ultra-rapide pour les petits sinistres, inférieurs à 10 000 DH.",
    },
    {
      id: "p2",
      question: "En Prise en Charge (PEC), que paie le client ?",
      options: [
        "La totalité, puis remboursement",
        "Uniquement la franchise",
        "Rien du tout",
        "50% des réparations",
      ],
      correctIndex: 1,
      explanation:
        "En PEC, Wafa règle directement le garage conventionné. Le client ne paie que sa franchise.",
    },
    {
      id: "p3",
      question: "Dans le règlement classique, le client :",
      options: [
        "Est indemnisé avant réparation",
        "Avance les frais puis se fait rembourser",
        "N'a pas besoin d'expertise",
        "Doit obligatoirement aller en garage partenaire",
      ],
      correctIndex: 1,
      explanation:
        "En règlement classique, le client choisit son garage, avance les frais, puis Wafa rembourse sur facture et rapport d'expertise.",
    },
    {
      id: "p4",
      question: "Quel document est central pour l'indemnisation ?",
      options: [
        "La photo du véhicule",
        "Le rapport d'expertise",
        "L'attestation d'assurance",
        "Le SMS de déclaration",
      ],
      correctIndex: 1,
      explanation:
        "Le rapport d'expertise est la référence opposable à toutes les parties. Sans lui, pas d'indemnisation.",
    },
  ],
  expert: [
    {
      id: "e1",
      question: "Qui est habilité à chiffrer les dommages du véhicule ?",
      options: ["Le garagiste", "Le gestionnaire", "L'expert", "Le client"],
      correctIndex: 2,
      explanation:
        "Seul l'expert est habilité à évaluer les dommages et valider le devis. Ni le garagiste, ni le gestionnaire ne peuvent le remplacer.",
    },
    {
      id: "e2",
      question: "En dessous de quel seuil l'expertise se fait en ligne (Laada) ?",
      options: ["500 DH", "1 500 DH", "5 000 DH", "10 000 DH"],
      correctIndex: 1,
      explanation:
        "Pour les dommages < 1 500 DH, l'expertise se fait à distance via Laada. Au-delà, expertise terrain.",
    },
    {
      id: "e3",
      question:
        "Un dossier déclaré 20 jours après le sinistre (hors délai) doit être :",
      options: [
        "Traité normalement",
        "Clôturé immédiatement avec notification",
        "Renvoyé à l'agent",
        "Négocié à la baisse",
      ],
      correctIndex: 1,
      explanation:
        "Hors délai contractuel de 15 jours : clôture immédiate. Le gestionnaire ne cède pas aux pressions.",
    },
    {
      id: "e4",
      question: "Que signifie la technique du \"mur poli\" ?",
      options: [
        "Refuser sans expliquer",
        "Céder au client pour éviter le conflit",
        "Refuser fermement, expliquer, sans agressivité",
        "Transférer l'appel à un manager",
      ],
      correctIndex: 2,
      explanation:
        "Le \"mur poli\" : ferme sur le fond, doux sur la forme. On tient sa position en expliquant, sans monter le ton.",
    },
  ],
  reforme: [
    {
      id: "r1",
      question: "La réforme économique est prononcée quand :",
      options: [
        "Les réparations dépassent 1/3 de la valeur vénale",
        "Les réparations dépassent 2/3 de la valeur vénale",
        "Le véhicule a plus de 10 ans",
        "Le client le demande",
      ],
      correctIndex: 1,
      explanation:
        "Seuil des 2/3 : au-delà, la réparation coûte plus que la valeur du véhicule, donc réforme économique.",
    },
    {
      id: "r2",
      question:
        "Valeur vénale : 100 000 DH. Valeur d'épave : 15 000 DH. Franchise : 3 000 DH. Quelle est l'indemnité ?",
      options: ["82 000 DH", "85 000 DH", "88 000 DH", "97 000 DH"],
      correctIndex: 0,
      explanation:
        "Formule : (Vénale − Épave) − Franchise = (100 000 − 15 000) − 3 000 = 82 000 DH.",
    },
    {
      id: "r3",
      question: "La réforme technique est prononcée quand :",
      options: [
        "Les réparations sont trop chères",
        "La structure ou la sécurité du véhicule sont atteintes",
        "Le client refuse la réparation",
        "L'expert n'est pas disponible",
      ],
      correctIndex: 1,
      explanation:
        "La réforme technique est un enjeu de sécurité : châssis déformé, éléments de sécurité irréparables. Ce n'est pas une question de prix.",
    },
    {
      id: "r4",
      question: "Pour un véhicule à crédit, l'indemnité de réforme est versée :",
      options: [
        "Directement au client",
        "En priorité à l'organisme de financement",
        "Au concessionnaire",
        "À l'expert",
      ],
      correctIndex: 1,
      explanation:
        "L'indemnité va d'abord à l'organisme prêteur jusqu'à extinction du crédit. Le reliquat éventuel revient au client.",
    },
  ],
  grc: [
    {
      id: "g1",
      question: "Le client en colère doit d'abord être :",
      options: [
        "Coupé pour recadrer",
        "Écouté sans être interrompu",
        "Renvoyé à un superviseur",
        "Rassuré immédiatement",
      ],
      correctIndex: 1,
      explanation:
        "Face à un client agacé : écoute active sans interruption, reformulation, puis solution concrète.",
    },
    {
      id: "g2",
      question: "Qu'est-ce que l'authentification téléphonique ?",
      options: [
        "Un test qualité",
        "La vérification de l'identité du client avant toute info sensible",
        "L'enregistrement de l'appel",
        "Le transfert vers un expert",
      ],
      correctIndex: 1,
      explanation:
        "L'authentification (nom, numéro de contrat, date de naissance) est obligatoire avant de donner toute information sensible sur le dossier.",
    },
    {
      id: "g3",
      question: "Dans quel système faut-il tracer les échanges ?",
      options: ["Excel", "Un carnet papier", "SINMAT", "MyWafa"],
      correctIndex: 2,
      explanation:
        "Toute action et tout engagement doivent être consignés dans SINMAT. Un appel non tracé n'existe pas.",
    },
    {
      id: "g4",
      question: "Quelle application est proposée au client pour suivre son dossier ?",
      options: ["Wafa Cash", "MyWafa", "Laada", "SINMAT"],
      correctIndex: 1,
      explanation:
        "MyWafa permet au client de suivre son dossier en autonomie. C'est une proactivité clé de la charte.",
    },
    {
      id: "g5",
      question: "Quelle est la durée moyenne cible d'un appel selon la charte ?",
      options: ["1 minute", "3 minutes", "5 minutes", "10 minutes"],
      correctIndex: 1,
      explanation:
        "3 minutes est la cible : suffisant pour authentifier, comprendre, répondre et prendre congé sans traîner.",
    },
  ],
};

export function getQuiz(moduleId: string): Question[] {
  return quizzes[moduleId] ?? [];
}

export function getFinalQuiz(): Question[] {
  // Take 2-3 from each module, in module order
  const picks: Question[] = [];
  for (const mod of Object.keys(quizzes)) {
    picks.push(...quizzes[mod].slice(0, 3));
  }
  return picks;
}
