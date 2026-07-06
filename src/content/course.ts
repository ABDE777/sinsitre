export type Lesson = {
  id: string;
  title: string;
  summary: string;
  content: string;
};

export type Module = {
  id: string;
  number: number;
  title: string;
  tagline: string;
  description: string;
  lessons: Lesson[];
};

export const course: Module[] = [
  {
    id: "fondamentaux",
    number: 1,
    title: "Les fondamentaux de l'assurance auto",
    tagline: "Le socle : contrat, garanties et vocabulaire",
    description:
      "Avant de gérer un sinistre, il faut comprendre ce qu'est un contrat d'assurance, comment il fonctionne et quelles garanties il contient.",
    lessons: [
      {
        id: "origine",
        title: "Origine et rôle de l'assurance",
        summary: "Pourquoi l'assurance existe : un pacte de solidarité face à l'incertitude.",
        content: `## L'assurance, une réponse humaine à l'incertitude

L'assurance n'est pas une invention moderne. Depuis des millénaires, les hommes ont cherché à se protéger collectivement contre les aléas de la vie : naufrages, incendies, mauvaises récoltes.

On peut résumer l'assurance comme un **pacte de solidarité organisé** : chacun cotise un peu, pour que ceux qui subissent un malheur soient indemnisés beaucoup.

### Trois idées à retenir

- **Mutualisation des risques** : les primes de tous financent les sinistres de quelques-uns.
- L'assurance **ne supprime pas le risque**, elle le **rend supportable** financièrement.
- Elle est **essentielle à la stabilité économique et sociale** — sans elle, un accident peut ruiner une famille ou une entreprise.

> Le rôle du gestionnaire, c'est d'incarner cette solidarité au moment où elle prend tout son sens : le sinistre.`,
      },
      {
        id: "auto",
        title: "Focus sur l'assurance automobile",
        summary: "Pourquoi l'auto est au cœur du quotidien de la plateforme.",
        content: `## L'assurance auto au cœur du quotidien

L'automobile est le risque le plus fréquent que gère Wafa IMA. Un accident de la route touche plusieurs personnes à la fois : le conducteur, ses passagers, un tiers, parfois des piétons.

C'est pour cela que l'assurance automobile est **obligatoire** au Maroc : sans elle, les victimes n'auraient aucun recours.

### Deux moments clés de la vie du contrat

1. **La production** : le client souscrit son contrat auprès d'un agent. Il choisit ses garanties, sa franchise, son plafond.
2. **Le sinistre** : la promesse du contrat est mise à l'épreuve. C'est là qu'intervient le gestionnaire.

La qualité de la souscription conditionne la qualité de la gestion : un contrat mal renseigné, ce sont des litiges à venir.`,
      },
      {
        id: "contrat",
        title: "Le contrat : CG et CP",
        summary: "Les deux parties d'un contrat d'assurance : règles communes et règles personnelles.",
        content: `## Deux parties, un seul contrat

Un contrat d'assurance auto se lit **toujours** en croisant deux documents :

### Les Conditions Générales (CG)

Les **règles communes à tous les assurés** de la compagnie. Elles décrivent :
- ce qui est couvert (garanties)
- ce qui est exclu
- les délais de déclaration
- les obligations de l'assuré

### Les Conditions Particulières (CP)

Les **règles propres à ce client** : marque du véhicule, garanties souscrites, montant des franchises et des plafonds, bénéficiaires.

> **Réflexe métier** : à l'ouverture d'un dossier, on ouvre **toujours** les CP du client. Elles disent immédiatement ce qui est possible ou non.`,
      },
      {
        id: "notions",
        title: "Notions clés du contrat",
        summary: "Sinistre, franchise, plafond, exclusion : le vocabulaire de base.",
        content: `## Le vocabulaire indispensable

| Terme | Définition |
| --- | --- |
| **Sinistre** | Événement imprévu couvert par le contrat |
| **Franchise** | Somme restant à la charge du client après indemnisation |
| **Plafond d'indemnisation** | Montant maximum que l'assureur versera |
| **Exclusion** | Situation que le contrat ne couvre pas |
| **Prime** | Cotisation payée par l'assuré |

### Exemple concret

Un client a une garantie **Dommages Tous Accidents (DOM)** avec :
- Plafond : 200 000 DH
- Franchise : 2 500 DH

Son véhicule est endommagé pour 15 000 DH. L'assurance versera **12 500 DH** (15 000 − 2 500). Si les dommages étaient de 250 000 DH, elle verserait au maximum **200 000 DH − 2 500 DH**.`,
      },
      {
        id: "garanties",
        title: "Les garanties auto",
        summary: "Ce qui est obligatoire, ce qui est optionnel.",
        content: `## L'obligatoire et l'optionnel

### Garantie obligatoire

- **Responsabilité Civile (RC)** — couvre les dommages **causés aux tiers** (autres véhicules, piétons, biens). Sans elle, on ne peut pas rouler légalement.

### Garanties optionnelles fréquentes

- **Vol** — indemnisation en cas de vol du véhicule, dépôt de plainte obligatoire.
- **Bris de Glace (BDG)** — pare-brise, vitres latérales, lunette arrière.
- **Dommages Tous Accidents (DOM)** — couvre le véhicule **même en cas d'accident seul** ou de tiers non identifié.
- **Dommages Collision (COL)** — couvre le véhicule uniquement si un tiers est **identifié**.
- **Incendie**
- **Rachat de franchise** — supprime ou réduit la franchise.
- **Rachat de vétusté** — indemnise sur la valeur à neuf plutôt que la valeur vénale.

> **La clé** : la gestion d'un sinistre commence **toujours** par la lecture du contrat. Aucune décision ne se prend sans savoir ce qui a été souscrit.`,
      },
    ],
  },
  {
    id: "cid",
    number: 2,
    title: "Introduction à la CID",
    tagline: "La Convention d'Indemnisation Directe",
    description:
      "La CID est le référentiel commun des assureurs marocains pour déterminer les responsabilités et accélérer l'indemnisation.",
    lessons: [
      {
        id: "problematique",
        title: "Pourquoi la CID ?",
        summary: "Le problème que la CID vient résoudre.",
        content: `## Un accident, deux versions

Lors d'un accident, chaque conducteur a **sa** version. Sans règle commune, chaque assureur défendrait son client et l'indemnisation serait bloquée pendant des mois.

### La solution : un référentiel partagé

La **Convention d'Indemnisation Directe (CID)** est un accord entre les compagnies marocaines. Elle définit **des cas types** avec les responsabilités associées.

Deux gestionnaires qui ouvrent le même dossier chez deux compagnies différentes doivent aboutir à la **même conclusion** de responsabilité.`,
      },
      {
        id: "objectifs",
        title: "Les objectifs de la CID",
        summary: "Quatre finalités pour un même outil.",
        content: `## Quatre objectifs

1. **Déterminer les responsabilités** de façon objective, en s'appuyant sur des cas types.
2. **Harmoniser le traitement** entre assureurs : mêmes règles pour tous.
3. **Accélérer l'indemnisation** : le client n'attend plus une négociation entre compagnies.
4. **Simplifier les recours** : la compagnie qui a indemnisé se retourne ensuite contre l'adverse selon des règles connues.

> Sans CID, chaque dossier deviendrait une négociation. Avec la CID, la gestion devient prévisible.`,
      },
      {
        id: "application",
        title: "Champ d'application",
        summary: "Quand la CID s'applique — et quand elle ne s'applique pas.",
        content: `## Trois conditions cumulatives

La CID s'applique lorsque :

1. L'accident a lieu **au Maroc**.
2. Les deux véhicules sont assurés auprès de **compagnies adhérentes** à la Convention.
3. Il existe un **constat amiable** ou un **PV** (procès-verbal).

### Cas hors CID

- Accident à l'étranger.
- Tiers non identifié (délit de fuite).
- Compagnie non adhérente.
- Absence de constat et de PV.

Dans ces cas, on traite le dossier hors CID, souvent via la garantie du client (DOM, COL) puis recours.`,
      },
      {
        id: "methodologie",
        title: "Analyser un constat",
        summary: "La méthode en 4 étapes.",
        content: `## Méthode d'analyse en 4 étapes

1. **Identifier les véhicules** : plaques, marques, assureurs.
2. **Lire les circonstances déclarées** — les fameuses **cases cochées** par chaque conducteur.
3. **Analyser le croquis** : sens de circulation, position au moment du choc.
4. **Vérifier la cohérence** : les cases cochées correspondent-elles au croquis ? Les deux versions concordent-elles ?

> **Signal d'alerte** : une contradiction entre les cases et le croquis est suspecte. Elle nécessite un complément d'information ou une expertise.

### En résumé

**La CID est le socle de la gestion RC.** Sans elle, pas de détermination de responsabilité fiable.`,
      },
    ],
  },
  {
    id: "conditions-generales",
    number: 3,
    title: "Les Conditions Générales et la mise en œuvre",
    tagline: "De la responsabilité à l'indemnisation",
    description:
      "Une fois la responsabilité déterminée par la CID, les Conditions Générales disent qui indemnise et sous quelles conditions.",
    lessons: [
      {
        id: "transition",
        title: "CID puis CG : deux étapes",
        summary: "La CID dit qui est responsable, les CG disent comment on indemnise.",
        content: `## Deux questions, deux outils

- **Qui est responsable ?** → **CID**
- **Qui indemnise et comment ?** → **Conditions Générales + Conditions Particulières**

On ne peut pas répondre à la deuxième sans avoir répondu à la première. C'est pour cela que la CID vient avant les CG dans le raisonnement du gestionnaire.`,
      },
      {
        id: "cas-responsabilite",
        title: "Trois cas selon la responsabilité",
        summary: "0%, 50%, 100% : les scénarios types.",
        content: `## Assuré non responsable (0%)

La compagnie **adverse** indemnise **à 100%**. Le client Wafa n'a rien à payer et récupère l'intégralité du préjudice.

## Assuré partiellement responsable (50%)

La compagnie adverse indemnise **la moitié**. Pour l'autre moitié :
- soit le client la supporte lui-même,
- soit sa garantie Wafa (DOM/COL) intervient, avec application de la franchise.

## Assuré totalement responsable (100%)

L'assureur adverse **n'intervient pas** sur le véhicule de l'assuré. L'indemnisation dépend **uniquement des garanties souscrites** par le client :
- avec DOM ou COL → indemnisation par Wafa moins la franchise.
- sans garantie dommages → **aucune indemnisation** pour son propre véhicule (la RC ne couvre que les tiers).

> Beaucoup de conflits clients viennent d'ici : le client responsable et sans DOM découvre qu'il n'est pas indemnisé pour son véhicule. Le gestionnaire doit l'expliquer avec pédagogie.`,
      },
      {
        id: "garanties-detail",
        title: "Détail des garanties Wafa",
        summary: "Ce que chaque garantie couvre concrètement.",
        content: `## Rappel garantie par garantie

| Garantie | Ce qu'elle couvre | Condition clé |
| --- | --- | --- |
| **RC** | Dommages aux tiers | Obligatoire, toujours acquise |
| **COL** | Véhicule assuré, choc avec tiers **identifié** | Le tiers doit être identifiable |
| **DOM** | Véhicule assuré, tout choc **même seul** | La plus complète |
| **Vol** | Vol du véhicule ou de pièces | Dépôt de plainte **obligatoire** |
| **Incendie** | Feu, explosion | — |
| **BDG** | Vitrage | Franchise souvent réduite |

### Cas fréquent

Un client seul emboutit un mur. Il n'a que **COL**. Résultat : **aucune indemnisation** (pas de tiers identifié). S'il avait **DOM**, il serait indemnisé.`,
      },
      {
        id: "obligations",
        title: "Obligations de l'assuré",
        summary: "Délais et documents à respecter pour être indemnisé.",
        content: `## Ce que le client doit faire

- **Déclarer le sinistre dans les 15 jours** (5 jours ouvrés en pratique pour Wafa).
- **Vol : déclaration dans les 48 heures**, avec dépôt de plainte.
- Fournir les **documents** : constat, permis, carte grise, devis, factures.
- **Ne pas commencer les réparations avant expertise** — sinon l'expert ne peut plus constater les dégâts.

### Sanctions possibles

- Hors délai → **déchéance de garantie** possible.
- Fausse déclaration → **nullité du contrat**.
- Réparation avant expertise → **refus d'indemnisation**.

> **Conclusion du module** : la CID détermine la responsabilité, les CG déterminent les conditions d'indemnisation. Les deux sont indissociables.`,
      },
    ],
  },
  {
    id: "procedures",
    number: 4,
    title: "Les procédures de gestion",
    tagline: "Trois parcours de réparation",
    description:
      "Selon le montant et le type de sinistre, la réparation suit un de trois circuits : Forfait, PEC ou Règlement Classique.",
    lessons: [
      {
        id: "forfait",
        title: "WAFA Sarii — le forfait",
        summary: "La procédure ultra-rapide pour les petits sinistres.",
        content: `## WAFA Sarii : rapide et digital

Réservé aux **petits sinistres (< 10 000 DH)**.

### Le parcours

1. Estimation immédiate **en ligne** via photos.
2. Le client se rend dans un **garage partenaire**.
3. Réparation en quelques jours.
4. Wafa règle directement le garage.

### Ce que le client apprécie

- Pas d'avance de frais (hors franchise).
- Pas de rendez-vous d'expertise à programmer.
- Délai court, souvent < 1 semaine.

> À proposer systématiquement quand les conditions sont réunies. C'est la meilleure expérience pour le client et la moins coûteuse à gérer.`,
      },
      {
        id: "pec",
        title: "Prise en Charge (PEC)",
        summary: "Le client va dans un garage conventionné, Wafa règle.",
        content: `## La Prise en Charge (PEC)

Le client se rend dans un **garage conventionné Wafa**. Un expert vient constater. Le garage répare et **facture directement Wafa**.

### Ce que paie le client

**Uniquement la franchise**. Pas d'avance de trésorerie sur le reste.

### Documents nécessaires

- Constat ou déclaration.
- Devis du garage.
- Rapport d'expertise (produit par l'expert).
- Facture finale.

> **Avantage** : pas de trésorerie à avancer côté client.
> **Contrainte** : le client doit accepter le choix du garage conventionné.`,
      },
      {
        id: "classique",
        title: "Règlement classique",
        summary: "Le client avance les frais, se fait rembourser.",
        content: `## Le règlement classique

Le client **choisit son garage**, **avance les frais**, puis se fait **rembourser** par Wafa.

### Le parcours

1. Déclaration du sinistre.
2. Expertise du véhicule.
3. Réparation par le garage choisi par le client.
4. Envoi de la **facture** + **rapport d'expertise**.
5. Remboursement par Wafa.

### Modes de paiement

- **Cash** via Wafa Cash.
- **Virement bancaire**.
- **Chèque**.

> À choisir quand le client tient à son garage habituel ou quand aucun garage conventionné n'est proche.`,
      },
      {
        id: "documents",
        title: "Documents à réunir",
        summary: "La checklist du dossier bien constitué.",
        content: `## Checklist du dossier

Aucun dossier n'avance sans les pièces suivantes :

- **Constat amiable** (ou PV en cas de refus de signer).
- **Copie du permis** du conducteur.
- **Copie de la carte grise**.
- **Devis** de réparation.
- **Rapport d'expertise**.
- **Facture** définitive.
- Pour un vol : **dépôt de plainte**.
- Pour un crédit : **accord de l'organisme financier**.

> Un dossier incomplet, c'est un client qui rappelle. La rigueur documentaire réduit les appels de suivi.`,
      },
    ],
  },
  {
    id: "expert",
    number: 5,
    title: "Maîtrise opérationnelle et rôle de l'expert",
    tagline: "Rigueur, expertise, posture",
    description:
      "L'expert évalue les dommages ; le gestionnaire vérifie, contrôle et tient sa position face aux pressions.",
    lessons: [
      {
        id: "role-expert",
        title: "Le rôle de l'expert",
        summary: "L'expert est le seul habilité à chiffrer les dommages.",
        content: `## Un rôle exclusif

L'expert est **le seul professionnel habilité** à évaluer les dommages d'un véhicule et à déterminer le coût des réparations. Ni le garagiste, ni le gestionnaire, ni le client ne peuvent le remplacer.

### Ses missions

- **Constater** les dommages sur place.
- Prendre des **photos** de référence.
- **Valider ou corriger le devis** du garage.
- **Contrôler** la qualité des réparations.
- Établir le **rapport final** — pièce maîtresse du dossier.

> Sans rapport d'expertise, pas d'indemnisation. C'est la référence opposable à toutes les parties.`,
      },
      {
        id: "processus",
        title: "Le processus d'expertise",
        summary: "En ligne (Laada) ou sur le terrain, selon le montant.",
        content: `## Deux modalités

### Expertise en ligne — Laada

Pour les dommages **inférieurs à 1 500 DH**. Le client envoie ses photos, un expert valide à distance. Rapide, économique.

### Expertise terrain

Pour les dommages **supérieurs à 1 500 DH**. Un expert se déplace sur site (garage ou domicile) pour un constat physique.

### Délais à surveiller

- **Avis de dommage > 48h sans expertise** → réclamation à déclencher.
- Rapport d'expertise > délai contractuel → escalade.

> Le gestionnaire est le **chef d'orchestre** : c'est lui qui pousse les délais et rappelle chaque acteur.`,
      },
      {
        id: "verification",
        title: "Vérification des dossiers",
        summary: "Lire, contrôler, refuser quand il le faut.",
        content: `## Ce qu'il faut vérifier systématiquement

- **Âge du véhicule** — cohérent avec la valeur déclarée ?
- **Documents obligatoires** présents et lisibles.
- **Délais de déclaration** respectés.
- **Cohérence** entre constat, croquis et déclaration.

### Le cas "Hors Délai"

Un dossier déclaré hors délai (au-delà de 15 jours) doit être **clôturé immédiatement** avec notification au client. Ne pas céder aux pressions : c'est la règle.

### Ne pas céder aux pressions

Client mécontent, agent qui insiste, garage qui pousse : la rigueur du gestionnaire protège la compagnie **et** le client honnête.`,
      },
      {
        id: "posture",
        title: "La posture professionnelle",
        summary: "Incarner son rôle, tenir sa position avec élégance.",
        content: `## Trois principes de posture

1. **Incarner son rôle** — ne pas se cacher derrière un script. Le gestionnaire est un professionnel qui décide.
2. **Gérer les échanges tendus avec calme** — la voix qui monte n'est jamais celle du gestionnaire.
3. **Affirmer son autorité avec élégance** — la technique du **"mur poli"** : refuser fermement, expliquer, ne pas céder, sans agressivité.

### Exemple de "mur poli"

> "Je comprends votre situation. Cependant, la déclaration a été faite au-delà du délai contractuel de 15 jours. Nous ne pouvons pas prendre en charge ce dossier. Je peux vous expliquer en détail les motifs si vous le souhaitez."

Ferme sur le fond, doux sur la forme.`,
      },
    ],
  },
  {
    id: "reforme",
    number: 6,
    title: "La Réforme",
    tagline: "Quand le véhicule ne peut plus rouler",
    description:
      "La réforme intervient quand le véhicule est économiquement ou techniquement irréparable. Deux cas, une même rigueur.",
    lessons: [
      {
        id: "definition",
        title: "Qu'est-ce qu'une réforme ?",
        summary: "Deux formes, une même conséquence : le véhicule ne repart pas.",
        content: `## Définition

La **réforme** est prononcée quand le véhicule est **trop endommagé** pour être réparé — soit **économiquement** (trop cher), soit **techniquement** (structure atteinte).

Dans les deux cas, l'assuré ne récupère pas son véhicule réparé : il reçoit une **indemnité** correspondant à sa valeur avant le sinistre.`,
      },
      {
        id: "economique",
        title: "La réforme économique",
        summary: "Quand réparer coûterait plus que la valeur du véhicule.",
        content: `## Le critère des 2/3

La réforme économique est prononcée quand le **coût des réparations dépasse les 2/3 de la valeur vénale** du véhicule.

### Les deux valeurs à connaître

- **Valeur vénale** : valeur marchande du véhicule **avant** l'accident (occasion équivalente sur le marché).
- **Valeur d'épave** : valeur du véhicule **après** l'accident (vente à un ferrailleur ou récupérateur).

### Formule d'indemnisation

**Indemnité = (Valeur vénale − Valeur d'épave) − Franchise**

### Exemple

- Valeur vénale : 80 000 DH
- Coût des réparations estimé : 60 000 DH → 60 000 > (2/3 × 80 000 = 53 333) → **réforme**
- Valeur d'épave : 12 000 DH
- Franchise : 2 500 DH
- **Indemnité : 80 000 − 12 000 − 2 500 = 65 500 DH**

### Cas particulier : véhicule à crédit

L'indemnité est versée **en priorité à l'organisme de financement** jusqu'à extinction du prêt. Le reliquat éventuel revient au client.`,
      },
      {
        id: "technique",
        title: "La réforme technique",
        summary: "Quand la structure du véhicule est atteinte.",
        content: `## Un enjeu de sécurité

La réforme technique n'est **pas une question de prix**. Elle est prononcée quand les dommages atteignent la **structure** ou la **sécurité** du véhicule :

- châssis déformé,
- éléments de sécurité (airbags, barres anti-intrusion) irréparables,
- corrosion structurelle post-immersion,
- risque de rupture non maîtrisable.

Même si les réparations sont économiquement possibles, remettre en circulation un véhicule dangereux est **interdit**.

### Documents clés

- **Rapport d'expertise** motivant la réforme.
- **Annexe 29** (déclaration d'irréparabilité).
- **Retrait du service des Mines** — le véhicule est officiellement radié de la circulation.`,
      },
    ],
  },
  {
    id: "grc",
    number: 7,
    title: "Gestion de la Relation Client (GRC)",
    tagline: "La technique ne suffit pas",
    description:
      "Le gestionnaire est le seul contact humain de l'assuré au moment le plus stressant de la vie du contrat. Sa posture décide de la satisfaction.",
    lessons: [
      {
        id: "importance",
        title: "Pourquoi la GRC est décisive",
        summary: "Vous êtes l'image de la compagnie.",
        content: `## L'incarnation de la marque

Le client ne voit jamais le PDG. Il voit son agent une fois par an. Mais **au moment du sinistre**, il parle au **gestionnaire**. C'est vous qui incarnez Wafa IMA à ce moment-là.

Un sinistre est une **expérience stressante**. Bien gérée, elle devient une **preuve** que l'assurance sert vraiment à quelque chose. Mal gérée, elle détruit une relation construite depuis des années.

> Le sinistre est un incident. La relation est une opportunité.`,
      },
      {
        id: "profils",
        title: "Les 3 profils d'appelants",
        summary: "Inquiet, agacé, pressé : trois réponses distinctes.",
        content: `## Adapter sa posture au profil

### 1. Le client inquiet

Vient d'avoir un accident, ne sait pas quoi faire.
**Réponse** : rassurer, expliquer les étapes une par une, prendre le temps.

### 2. Le client agacé

Un délai n'a pas été tenu, une information manque, il est en colère.
**Réponse** : écouter **sans interrompre**, reformuler pour montrer qu'on a compris, proposer une solution concrète.

### 3. Le client pressé

Veut une information précise, en 30 secondes.
**Réponse** : être **synthétique**, donner l'info et le délai, ne pas broder.

> Le premier réflexe : **identifier le profil dans les 15 premières secondes** de l'appel.`,
      },
      {
        id: "telephonie",
        title: "Bonnes pratiques téléphoniques",
        summary: "Voix, écoute active, authentification.",
        content: `## Les fondamentaux

- **Se présenter** : "Wafa IMA Assistance, [Prénom] à l'appareil, bonjour."
- Avoir une **voix souriante** — le client l'entend.
- **Écoute active** : reformuler, valider, ne pas couper la parole.
- **Authentifier obligatoirement** : vérifier l'identité (nom, numéro de contrat, date de naissance) avant toute information sensible.
- **Prendre des notes** en temps réel — c'est la trace du dossier.

### Pièges à éviter

- Promettre un délai qu'on ne peut pas tenir.
- Donner une information non vérifiée.
- Parler par-dessus le client.`,
      },
      {
        id: "charte",
        title: "La charte d'appel Wafa",
        summary: "Le référentiel de la plateforme.",
        content: `## Le référentiel opérationnel

- **Durée moyenne cible** : 3 minutes par appel.
- **Phrases types** d'accueil et de prise de congé standardisées.
- **Proactivité** : proposer **l'application MyWafa** pour que le client suive son dossier en autonomie.
- **Saisie systématique** de chaque demande dans le système **SINMAT**. Un appel non tracé n'existe pas.

### Prise de congé

> "Ai-je répondu à toutes vos questions ? Je vous confirme que votre dossier porte le numéro […]. Vous pouvez suivre son évolution sur MyWafa. Bonne journée."

### La règle d'or

**Tracer, tracer, tracer.** Toute action, tout engagement, tout appel doit être consigné dans SINMAT.`,
      },
    ],
  },
];

export const totalLessons = course.reduce((sum, m) => sum + m.lessons.length, 0);

export function getModule(id: string) {
  return course.find((m) => m.id === id);
}

export function getLesson(moduleId: string, lessonId: string) {
  const mod = getModule(moduleId);
  if (!mod) return null;
  const index = mod.lessons.findIndex((l) => l.id === lessonId);
  if (index === -1) return null;
  return {
    module: mod,
    lesson: mod.lessons[index],
    prev: mod.lessons[index - 1] ?? null,
    next: mod.lessons[index + 1] ?? null,
    index,
  };
}
