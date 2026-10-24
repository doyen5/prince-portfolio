# Prince Désiré AHOU — Portfolio professionnel

Portfolio React + Vite bilingue (français/anglais), thème clair/sombre, animations GSAP, affichage responsive et préparation au déploiement sur Cloudflare Pages.

## Contenu mis à jour à partir du CV

- Profil orienté Performance Management, télécommunications et informatique.
- Expériences chez Huawei GNOC MOOV CI, Huawei GNOC Orange CI et INS-MAFA.
- Formation, compétences, langues et coordonnées intégrées dans le contenu du site.
- CV PDF disponible dans `public/documents/Ahou-Kouame-CV.pdf` et téléchargeable depuis l'accueil et la section contact.
- Portrait placé dans `public/images/profile/prince-ahou.jpg`.
- Aucune fausse réalisation ni aucun faux témoignage : les projets publics pourront être ajoutés lorsque leur publication sera autorisée.

> Note de vérification : le CV indique des périodes qui se chevauchent pour les postes d'Ingénieur Performance et d'Ingénieur Front Office. Les dates sont reproduites telles qu'elles figurent dans le document source ; vérifie-les avant la mise en ligne définitive. Le Master professionnel a été repris d'une information communiquée auparavant pour le portfolio, car il n'apparaît pas dans le PDF actuel.

## Démarrer dans VS Code

1. Décompresse l'archive et ouvre le dossier `prince-portfolio` dans VS Code.
2. Installe une version récente de Node.js (20.19+ recommandé).
3. Ouvre le terminal intégré dans le dossier du projet puis lance :

   ```bash
   npm install
   npm run dev
   ```

4. Ouvre l'adresse locale affichée par Vite, habituellement `http://localhost:5173`.

## Personnaliser le portfolio

### Photo

Le fichier de profil est défini dans `src/data/profile.js` :

```js
// Chemin public, relatif à la racine du site — ne pas mettre le chemin Windows.
photo: '/images/profile/prince-ahou.jpg',
```

Pour changer la photo, remplace le fichier dans `public/images/profile/` et conserve le même nom, ou mets à jour cette propriété. Les images dans `public/` sont accessibles via un chemin commençant par `/`.

### CV téléchargeable

Le PDF est stocké dans `public/documents/Ahou-Kouame-CV.pdf`. Le chemin est centralisé dans `src/data/profile.js` :

```js
// Les boutons de téléchargement utilisent cette propriété.
cv: '/documents/Ahou-Kouame-CV.pdf',
```

Pour remplacer le CV, mets à jour le PDF dans ce dossier ou modifie la propriété `cv`.

### Coordonnées et liens

Dans `src/data/profile.js`, mets à jour `email`, `phones`, `location`, `github` et `linkedin`. Les boutons e-mail et téléphone sont générés à partir de ces valeurs.

### Textes français et anglais

Les traductions et contenus des sections sont centralisés dans `src/data/content.js`. Les données de profil sont dans `src/data/profile.js`.

### Expériences et formation

Les expériences sont affichées par `src/sections/JourneySection.jsx`, tandis que leurs dates, intitulés et descriptions sont stockés dans `src/data/content.js`. Les commentaires dans les composants expliquent les points de personnalisation principaux.

### Projets

Les projets sont définis dans `src/data/projects.js`. La liste est volontairement vide tant qu'aucune étude de cas réelle n'a été validée pour publication. Ajoute uniquement des réalisations partageables, sans données client ou informations confidentielles.

## Vérification avant publication

```bash
npm run build
npm run lint
npm test
```

## Déployer gratuitement avec Cloudflare Pages

1. Publie le dossier dans un dépôt GitHub.
2. Dans Cloudflare, crée une application Pages reliée au dépôt.
3. Paramètres habituels : commande de build `npm run build`, dossier de sortie `dist`.
4. Vérifie le résultat en ligne, notamment le lien de téléchargement du CV et l'affichage de la photo.

## Structure utile

- `src/data/profile.js` : identité, coordonnées, photo, CV et liens.
- `src/data/content.js` : textes français/anglais, compétences, formation et expériences.
- `src/data/projects.js` : études de cas publiables.
- `src/sections/` : sections visuelles de la page d'accueil.
- `src/styles/index.css` : styles et responsive.
- `public/documents/` : documents téléchargeables.
- `public/images/profile/` : photo de profil.

Les commentaires ajoutés dans le code indiquent les chemins, sources des contenus et zones à modifier pour maintenir le site.
