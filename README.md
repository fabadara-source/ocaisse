# O'Caisse

Caisse et suivi des ventes pour salons de coiffure, restaurants et services : francs CFA, Orange Money, Moov Money, Wave, crédit client, envoi des tickets sur WhatsApp, et fonctionnement sans réseau. Logiciel libre.

![La caisse sur tablette](docs/captures/caisse-tablette.jpg)

## Ce que fait O'Caisse

- **Plusieurs activités**, chacune avec sa caisse et son catalogue (par exemple un salon, un snack, un espace loisirs), dans la même application.
- **Encaissement rapide** au doigt : prix unique, choix nommés (« Quart, Demi », « 30 min, 1 heure »), prix libre, remise autorisée par le gérant.
- **Paiements** : espèces avec calcul de la monnaie, Orange Money, Moov Money, Wave, crédit client avec suivi des remboursements.
- **Tickets** imprimés en 58 ou 80 mm (imprimante Bluetooth via RawBT, ou imprimante de comptoir), réimpression, envoi sur WhatsApp.
- **Agenda des réservations** : privatisation de l'espace, séance photo ou tout autre service ; acompte, reste à payer, alerte de créneau déjà pris, confirmation WhatsApp au client.
- **Clôture de caisse** confirmée par la base, avec comptage à l'aveugle pour les caissières et rapport de clôture imprimable.
- **Rapports** : chiffre et comparaison, modes de paiement, affluence par heure, chiffre par catégorie, meilleures ventes, commissions des coiffeurs, sources des nouveaux clients, dépenses, écarts de caisse, export Excel.
- **Équipe** : administrateur, gérant, caissier, coiffeur sans accès ; chacun son code à 4 chiffres ; verrouillage automatique.
- **Appareils** : chaque tablette a son compte, désactivable à distance.
- **Hors ligne** : application installable ; les ventes sont gardées sur l'appareil et partent au retour du réseau.

| Réservation avec acompte | Agenda | Rapport de clôture |
|---|---|---|
| ![Acompte](docs/captures/acompte-reservation.jpg) | ![Agenda](docs/captures/agenda.jpg) | ![Clôture](docs/captures/rapport-cloture.jpg) |

## Essayer

Ouvrez l'application et touchez **Découvrir avec des exemples** : 14 jours de ventes fictives, rien n'est enregistré. Codes : `1234` administrateur, `2222` gérant du salon, `1111` caissière du salon, `3333` caissière du snack.

## Installer

Tout est gratuit, sans carte bancaire : la base de données tourne sur l'offre gratuite de Firebase (Google), l'application est hébergée par GitHub Pages. Suivez le guide **[docs/INSTALLATION.md](docs/INSTALLATION.md)** (45 minutes la première fois).

## Organisation

```
index.html, app.js, app.css   application assemblée (servie telle quelle)
sw.js, manifest.webmanifest   fonctionnement hors ligne et installation
vendor/firebase.js            SDK Firebase officiel assemblé (Apache 2.0)
fonts/, icons/                polices (SIL OFL 1.1) et icônes
src/                          code source lisible
  10-core.js                  état, base de données, file d'envoi hors ligne, calculs
  20-ecrans.js                écrans principaux (caisse, tickets, crédits)
  30-actions.js               rapports, gestion, encaissement, clôture, démo
  40-impression.js            tickets, rapport de clôture, WhatsApp
  50-agenda.js                réservations
  60-firebase.js              base Firebase, installation, comptes des appareils
  99-demarrage.js             démarrage
  modele-othentik.json        catalogue de départ O'thentik + O'snack
  app.css                     styles
firebase/firestore.rules      règles de sécurité de la base
firebase.json                 publication optionnelle par l'hébergement Firebase
outils/build.py               assemblage
outils/firebase-entry.js      liste des fonctions Firebase utilisées
docs/                         guide d'installation et captures
```

## Modifier le code

1. Modifiez les fichiers de `src/`.
2. Lancez `python3 outils/build.py` : il régénère `app.js`, `app.css`, `index.html` et `sw.js` (le numéro de version change, ce qui force la mise à jour des appareils).
3. Pour mettre à jour le SDK Firebase : `npm install firebase esbuild`, puis `npx esbuild outils/firebase-entry.js --bundle --minify --format=iife --target=es2019 --legal-comments=eof --outfile=vendor/firebase.js`.

Données dans Firestore : `config/general` (activités, modes de paiement, ticket), `catalogue/{activité}`, `equipe/membres`, `sessions/{journée de caisse}` (tickets, dépenses, clôture), `credits/{ticket}`, `reservations/{id}`, `photos/{id}`, `appareils/{uid}`, `meta/proprietaire`. La même interface de base fonctionne aussi en mode démonstration, en mémoire.

## Licence

Copyright © 2026 Aliou Badara Sadian FOFANA — Training Soft Mali.

Ce programme est un logiciel libre : vous pouvez le redistribuer et le modifier selon les termes de la **GNU Affero General Public License**, version 3 ou ultérieure, publiée par la Free Software Foundation (voir [LICENSE](LICENSE)). Si vous proposez une version modifiée à des utilisateurs, y compris en ligne, vous devez leur donner accès à son code source.

Composants tiers : SDK JavaScript Firebase (Apache 2.0), polices Barlow et Alfa Slab One (SIL Open Font License 1.1, voir `fonts/`).
