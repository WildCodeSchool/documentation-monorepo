---
sidebar_position: 1
sidebar_label: Architecture
---

# Architecture

## Introduction à l'Architecture du Backend

Bienvenue dans l'architecture backend de notre application, conçue pour offrir des fonctionnalités robustes et une gestion efficace des données. Cette structure, soigneusement organisée, garantit une expérience de développement fluide et une maintenance simplifiée. Plongeons dans les différentes composantes de notre dossier backend.

## Architecture

```txt
backend
├── database
│   ├── client.js
│   └── schema.sql
├── index.js
├── jest.config.js
├── migrate.js
├── package-lock.json
├── package.json
├── public
│   └── assets
│       └── images
│           └── favicon.png
├── seed.js
├── src
│   ├── app.js
│   ├── controllers
│   │   └── itemControllers.js
│   ├── models
│   │   ├── AbstractManager.js
│   │   └── ItemManager.js
│   ├── router.js
│   ├── services
│   └── tables.js
└── tests
    ├── items
    │   ├── manager.spec.js
    │   └── routes.spec.js
    └── setup.js

11 directories, 19 files
```

### Explication de l'architecture

### 1. **database**

-   **client.js**: Configuration du client de base de données.
    -   Ce fichier permet de se connecter à la base de données et d'exécuter des requêtes SQL.
-   **schema.sql**: Définition du schéma de la base de données.
    -   Est simplement la structure de notre base de données, définissant les tables et les colonnes.

### 2. **src**

-   **app.js**: Organise et orchestre les différentes parties.
-   **controllers**: Gestionnaires des requêtes et de la logique métier.
-   **models**: Modèles définissant la structure des données.
-   **router.js**: Routage pour les points d'API.
-   **services**: Services fournissant des fonctionnalités spécifiques.
-   **tables.js**: Gestionnaires de données pour notre database.

### 3. **public**

-   **assets**: Répertoire pour les ressources statiques, telles que des images.

### 4. **tests**

-   Tests unitaires et de bout en bout organisés par fonctionnalité.

### 5. **index.js** / **migrate.js** / **seed.js**

-   **index.js**: Point d'entrée de l'application, celui-ci fera appel à `src/app.js`.
-   **migrate.js**: Script pour créer les tables de la base de données contenues dans `database/schema.sql`.
-   **seed.js**: Script pour insérer des données dans la base de données.

## Points Clés

-   **Organisation Modulaire**: Chaque composant a son propre rôle défini, permettant une maintenance indépendante et une réutilisation facile.

-   **Séparation des Responsabilités**: Les contrôleurs gèrent la logique métier, les modèles définissent la structure des données, et les services fournissent des fonctionnalités spécifiques, assurant une clarté conceptuelle.

-   **Tests Compréhensifs**: Les tests sont soigneusement structurés dans le dossier "tests", garantissant une couverture exhaustive pour chaque fonctionnalité.

-   **Évolutivité et Flexibilité**: La structure est conçue pour s'adapter à l'évolution des exigences du projet, offrant flexibilité et extensibilité.

Cette architecture a été pensée pour optimiser le développement, assurer la maintenabilité du code et permettre une évolution continue de notre application backend. N'hésitez pas à explorer chaque dossier pour une compréhension approfondie de notre structure organisée et efficace.

Parlons maintenant de notre dossier `src` et plus particulièrement du fichier `app.js`.
