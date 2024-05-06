Générateur de liens d'avis Google
==============================

Cette application web est un outil gratuit qui permet aux utilisateurs de générer des liens d'avis Google pour une entreprise donnée. L'application utilise l'API Google Places pour rechercher des entreprises et afficher leurs informations. Les utilisateurs peuvent ensuite copier les liens d'avis Google pour partager avec leurs clients et améliorer leur référencement local.

Installation
------------

Pour installer l'application, vous devez avoir Node.js et npm installés sur votre ordinateur. Ensuite, vous pouvez cloner le référentiel et installer les dépendances en utilisant les commandes suivantes :
```bash
git clone https://github.com/votre-utilisateur/generateur-de-liens-d-avis-google.git
cd generateur-de-liens-d-avis-google
npm install
```
Dépendances
------------

Les dépendances suivantes sont nécessaires pour exécuter l'application :

* React
* ReactDOM
* react-copy-to-clipboard

Structure du projet
-------------------

Le projet est structuré comme suit :
```css
generateur-de-liens-d-avis-google/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── components/
│   │   ├── BusinessInfo.jsx
│   │   ├── FormHandler.jsx
│   │   ├── InputSearch.jsx
│   │   └── Results.jsx
│   ├── Data/
│   │   └── mockData.json
│   ├── index.jsx
│   └── ...
├── .gitignore
├── package.json
├── README.md
├── tailwind.config.js
└── ...
```
### `public/`

Ce dossier contient les fichiers publics de l'application, tels que `index.html` et les fichiers d'images.

### `src/`

Ce dossier contient les fichiers source de l'application.

* `App.css` : contient les styles globaux de l'application.
* `App.jsx` : le composant principal de l'application.
* `components/` : contient les composants de l'application.
  + `BusinessInfo.jsx` : affiche les informations de l'entreprise sélectionnée et les liens d'avis Google.
  + `FormHandler.jsx` : gère la recherche d'entreprises et l'affichage des résultats.
  + `InputSearch.jsx` : le composant de recherche.
  + `Results.jsx` : affiche les résultats de la recherche.
* `Data/` : contient les données de test de l'application.
* `index.jsx` : le point d'entrée de l'application.

### Autres fichiers

* `.gitignore` : spécifie les fichiers et les dossiers à ignorer par Git.
* `package.json` : contient les métadonnées de l'application et les dépendances.
* `README.md` : ce fichier.
* `tailwind.config.js` : la configuration de Tailwind CSS.

Comment ça marche
----------------

L'application fonctionne comme suit :

1. L'utilisateur entre le nom et l'adresse de l'entreprise dans le champ de recherche.
2. L'application utilise l'API Google Places pour rechercher des entreprises correspondant aux critères de recherche.
3. Les résultats de la recherche sont affichés dans une liste déroulante.
4. L'utilisateur sélectionne une entreprise dans la liste.
5. Les informations de l'entreprise sélectionnée et les liens d'avis Google sont affichés.
6. L'utilisateur peut copier les liens d'avis Google en cliquant sur le bouton "Copier".

Conseils pour le développement
------------------------------

Voici quelques conseils pour le développement de l'application :

* Utilisez les composants React pour créer une interface utilisateur modulaire et réutilisable.
* Utilisez les hooks React pour gérer l'état et les effets secondaires.
* Utilisez les classes Tailwind CSS pour styler les composants.
* Utilisez l'API Google Places pour rechercher des entreprises et afficher leurs informations.
* Utilisez la bibliothèque react-copy-to-clipboard pour copier du texte dans le presse-papiers.

Maintenance
----------

Pour maintenir l'application, vous devez vous assurer que les dépendances sont à jour et que l'application fonctionne correctement. Vous pouvez utiliser les commandes suivantes pour mettre à jour les dépendances :
```
npm update
```
Vous pouvez également utiliser des outils de test tels que Jest pour écrire des tests unitaires et garantir que l'application fonctionne comme prévu.

Contribution
------------

Les contributions à l'application sont les bienvenues ! Si vous souhaitez contribuer, veuillez suivre ces étapes :

1. Fourchez le référentiel.
2. Créez une branche pour votre fonctionnalité ou votre correction de bogue.
3. Apportez vos modifications et assurez-vous que l'application fonctionne correctement.
4. Envoyez une demande d'extraction.

Licence
-------

Cette application est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.