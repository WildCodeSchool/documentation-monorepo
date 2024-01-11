---
sidebar_position: 1
sidebar_label: Frontend
---

# Architecture

## Introduction à l'Architecture du Frontend

Bienvenue dans l'architecture frontend de notre application, conçue pour offrir des fonctionnalités robustes et une
gestion efficace des données. Cette structure, soigneusement organisée, garantit une expérience de développement fluide
et une maintenance simplifiée. Plongeons dans les différentes composantes de notre dossier frontend.

## Architecture

```textmate title="frontend/"
frontend
├── index.html
├── package-lock.json
├── package.json
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── assets
│   │   ├── favicon.svg
│   │   └── logo.svg
│   ├── components
│   │   └── Counter.jsx
│   ├── main.jsx
│   ├── pages
│   └── services
└── vite.config.js
```

## Détails

## Fichiers à la racine
- **index.html**: C'est la page d'entrée de l'application, où tout commence.
  - Tu peux modifier la balise `<title>` pour changer le titre de la page.
- **package-lock.json** et **package.json**: Ces fichiers définissent et verrouillent les versions des dépendances utilisées dans le projet. Et les scripts associés.
- **vite.config.js**: Fichier de configuration spécifique à Vite, l'outil de build.

## Dossier src
- **App.css** et **App.jsx**: Respectivement, les styles et la logique du composant principal de l'application.
- **assets**: Un répertoire pour les ressources statiques telles que les images.
- **components**: Contient des composants réutilisables, comme le Counter.jsx présent ici.
- **main.jsx**: Point d'entrée principal pour l'initialisation de l'application.
- **pages**: Un endroit potentiel pour organiser les composants spiféciques à chaque page.
- **services**: Un répertoire pour les services partagés ou les utilitaires.

Cette structure suit les conventions communes pour un projet React avec Vite. L'objectif est de maintenir un code organisé et modulaire pour faciliter la compréhension et la maintenance, surtout à mesure que le projet évolue.

