---
sidebar_position: 1
sidebar_label: Server
---

# Architecture

## Introduction à l'Architecture du Server

Bienvenue dans l'architecture server de notre application, conçue pour offrir des fonctionnalités robustes et une gestion efficace des données. Cette structure, garantit une expérience de développement fluide et une maintenance simplifiée. Plongeons dans les différentes composantes de notre dossier server.

## Architecture

```textmate title="server/"
server
├── app
│   ├── config.js
│   ├── controllers
│   │   └── itemActions.js
│   ├── routers
│   │   └── api
│   │       ├── items
│   │       │   └── router.js
│   │       └── router.js
│   └── services
├── bin
│   ├── migrate.js
│   └── seed.js
├── database
│   ├── client.js
│   ├── fixtures
│   │   ├── AbstractSeeder.js
│   │   ├── ItemSeeder.js
│   │   └── UserSeeder.js
│   ├── models
│   │   ├── AbstractRepository.js
│   │   └── ItemRepository.js
│   ├── schema.sql
│   └── tables.js
├── index.js
├── jest.config.js
├── package.json
├── public
│   └── assets
│       └── images
│           └── favicon.png
└── tests
    ├── config.js
    ├── install.test.js
    └── items
        ├── repository.spec.js
        └── routes.spec.js

16 directories, 22 files
```

### Détails

### 1. **app**

-   **config.js**: Organise et orchestre les différentes parties.
-   **controllers**: Gestionnaires des requêtes et de la logique métier.
-   **routers/api**: Routage pour les points d'API.
-   **services**: Services fournissant des fonctionnalités spécifiques.
    -   Ce dossier contient des fichiers tels que les middlewares, les validateurs, etc.

:::note
Le router se divise en plusieurs parties, en effet, pour une meilleure organisation, chaque partie du router est séparée dans un dossier spécifique. Ces dossiers contiendront des fichiers `router.js` sont ensuite importés dans le fichier principal `router.js`.

Ex: `routers/api/items/router.js`, `routers/api/users/router.js`, `routers/api/auth/router.js`, etc.

Le fichier `router.js` principal se trouve dans `routers/api/router.js` et importe tous les autres fichiers `router.js` des dossiers spécifiques.
:::

### 2. **bin**

-   **migrate.js**: Script pour créer les tables de la base de données contenues dans `database/schema.sql`.
-   **seed.js**: Script pour insérer des données dans la base de données.

:::note
Pour lancer les scripts de migration et de seeding, vous pouvez exécuter les commandes suivantes :

```bash
# Pour la migration
npm run db:migrate
```

```bash
# Pour le seeding
npm run db:seed
```

:::

### 3. **database**

-   **client.js**: Configuration du client de base de données et permet de se connecter.
-   **schema.sql**: Définition du schéma de la base de données.

    -   Ce fichier est simplement la structure de notre base de données, définissant les tables et les colonnes.

-   **tables.js**: Gestionnaires de données pour notre database.
-   **models**: Modèles définissant la structure des données.
    -   Contient les fichiers de modèles pour chaque table de la base de données.
    -   Syntaxe : `ExempleRepository.js`.
-   **fixtures**: Données de test pour la base de données.
    -   Contient les fichiers de données de test pour chaque table de la base de données.
    -   Syntaxe : `ExempleSeeder.js`.

### 3. **public**

-   **assets**: Répertoire pour les ressources statiques, telles que des images.

### 4. **tests**

-   Tests unitaires et de bout en bout organisés par fonctionnalité.

### 5. **index.js** / **migrate.js** / **seed.js**

-   **index.js**: Point d'entrée de l'application, celui-ci fera appel à `app/config.js` et testera la connexion à la base de données.
-   **jest.config.js**: Configuration des tests unitaires.

## Points Clés

-   **Organisation Modulaire**: Chaque composant a son propre rôle défini, permettant une maintenance indépendante et une réutilisation facile.

-   **Séparation des Responsabilités**: Les contrôleurs gèrent la logique métier, les modèles définissent la structure des données, et les services fournissent des fonctionnalités spécifiques, assurant une clarté conceptuelle.

-   **Tests Compréhensifs**: Les tests sont soigneusement structurés dans le dossier "tests", garantissant une couverture exhaustive pour chaque fonctionnalité.

-   **Évolutivité et Flexibilité**: La structure est conçue pour s'adapter à l'évolution des exigences du projet, offrant flexibilité et extensibilité.

Cette architecture a été pensée pour optimiser le développement, assurer la maintenabilité du code et permettre une évolution continue de notre server. N'hésitez pas à explorer chaque dossier pour une compréhension approfondie de notre structure organisée et efficace.

Parlons maintenant de notre dossier `app` et plus particulièrement du fichier `config.js`.
