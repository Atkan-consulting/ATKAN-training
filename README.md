# ATKAN Training — Studio, version 3

## Remplacer la première version sur GitHub
Décompresser l'archive et déposer TOUS les fichiers du dossier `atkan-training` à la racine du dépôt existant. Remplacer les fichiers existants et ajouter `plan.js`, `guided.js`, `catalog.js` et `studio.js`. GitHub Pages doit pointer sur `main` / `/(root)`. Après le déploiement, recharger la page (Ctrl+F5 si nécessaire). Aucun nouveau dépôt ni clé API nécessaires. Aucun déploiement n'a été effectué par l'assistant.

## Fonctionnement
1. Ouvrir « Ma séance guidée », choisir S1–S4 et le jour. La date réelle est indépendante du jour du programme pour permettre de décaler une séance.
2. Les exercices, séries, répétitions, charges indicatives et temps de repos sont déjà affichés.
3. Cliquer « Activer / tester le bip » une fois. Chaque série cochée démarre son repos et déclenche trois bips à la fin. Cocher une autre série remplace le minuteur actif. Décocher une case ne démarre aucun repos.
4. Les exercices chronométrés proposent aussi un bouton « Effort ». À la fin de l'effort, cocher la série lance le repos. Les deux côtés d'un exercice unilatéral se font avant de cocher ; l'équilibre est donc chronométré 60 s pour 30 s de chaque côté.
5. Les cases sont immédiatement sauvegardées. Pause, reprise et arrêt du minuteur sont disponibles. Le temps restant repose sur une échéance réelle et résiste au rechargement. Après rechargement, réactiver le son : les navigateurs peuvent exiger une nouvelle interaction.
6. À la fin, « Enregistrer la séance cochée » l'ajoute au bilan, même si elle est partielle. Les mesures de durée, effort, fatigue, douleur et charges réelles sont facultatives. Une nouvelle sauvegarde de cette même séance met à jour l'historique, sans doublon.
7. Dans « Bilan hebdomadaire », copier ou télécharger les données pour ChatGPT. Les valeurs non renseignées restent inconnues, et le tonnage ne compte que les charges ET répétitions réellement saisies.

## Fidélité au programme
Six séances lundi–samedi du programme fourni. Le dimanche reste consacré au match, saisissable dans le journal libre.
- S1 : un tour HYROX le jeudi.
- S2–S3 : deux tours possibles, option pour limiter à un tour.
- S4 : total des séries de musculation réduit de 30–40 % ; répétitions explosives réduites d'environ 50 % ; jeudi 3 intervalles au lieu de 6 et un tour HYROX. Les arrondis des séries sont répartis entre exercices.
- S2–S3 : consignes de progression affichées, sans augmentation automatique des charges puisque ces augmentations dépendent de la récupération.
- Les plages de repos utilisent leur borne haute : squat 180 s, accélérations 120 s. Modifiables dans la séance.
- Les repos non chiffrés sont marqués « réglable » : transitions 30 s, explosivité/réactivité et traîneau 90 s, transition entre tours 120 s. Les ateliers du circuit s'enchaînent à 0 s, avec bip immédiat. Ces valeurs complètent le programme, sans être présentées comme ses prescriptions exactes.
- Les durées d'effort en intervalle utilisent la borne basse : vélo 20 min pour 20–25 min, cardio 15 min pour 15–20 min.

## Audio, stockage et confidentialité
Garder la page ouverte et l'écran déverrouillé pour entendre le bip au bon moment. L'application demande le maintien de l'écran éveillé si le navigateur l'autorise ; en arrière-plan, un système mobile peut suspendre le son. Le bouton de test permet de vérifier le volume avant la séance.
Données locales au navigateur, aucun compte, aucune synchronisation entre appareils, aucun accès automatique de ChatGPT. Export/import JSON dans Sauvegardes, compatible avec la première version. Ne pas publier ses sauvegardes personnelles dans le dépôt public. Les programmes texte libres restent distincts du programme guidé, défini dans `plan.js`.

## Bilan et calculs
Volume = somme(charge totale en kg × répétitions réellement renseignées). Charge ressentie = somme(minutes renseignées × effort renseigné). Les données absentes ne sont pas estimées. Le bilan contient aussi les prescriptions et les séries cochées. Aucun algorithme privé de Lyfta n'est reproduit.

## Vérifications
`node tests.cjs` : calendrier, volume, validation des sauvegardes, six journées, tours HYROX et réduction S4.
`node --check app.js` et `node --check guided.js` : syntaxe.
L'interface et le son n'ont pas été testés dans un navigateur réel lors de la livraison.
Documentation GitHub Pages : https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Présentation inspirée de la capture
Sur ordinateur : routine à gauche, catalogue à droite. Sur téléphone : catalogue sous la séance. Vignettes SVG originales par catégorie musculaire ; ce ne sont pas des photographies ou démonstrations de mouvements.
Recherche sans accents, filtres musculaires, favoris persistants et ajout via « + ». Cliquer le nom d’un exercice ouvre ses séries et ses réglages. Flèches pour réordonner, champ Séries pour ajuster le nombre, Retirer pour masquer un exercice.
Les modifications de structure s’appliquent au jour et à la semaine choisis, pour toutes les dates. Elles ne sont pas propagées automatiquement aux autres semaines. Les cases cochées et mesures restent propres à chaque date. Un programme personnalisé n'est plus nécessairement identique au programme initial. Les repos peuvent toujours être réglés individuellement dans chaque séance.
