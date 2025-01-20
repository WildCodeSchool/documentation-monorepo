---
sidebar_position: 1
sidebar_label: Server
---

# Architecture

## Introduction à l'Architecture du Server

Bienvenue dans l'architecture server de notre application, conçue pour offrir des fonctionnalités robustes et une gestion efficace des données. Cette structure, soigneusement organisée, garantit une expérience de développement fluide et une maintenance simplifiée. Plongeons dans les différentes composantes de notre dossier server.

## Architecture

```textmate title="server/"
server
├── bin
│   ├── migrate.ts
│   └── seed.ts
├── database
│   ├── checkConnection.ts
│   ├── client.ts
│   ├── fixtures
│   │   ├── AbstractSeeder.ts
│   │   ├── ItemSeeder.ts
│   │   └── UserSeeder.ts
│   └── schema.sql
├── jest.config.js
├── package.json
├── public
│   └── assets
│       └── images
│           └── favicon.png
├── src
│   ├── app.ts
│   ├── main.ts
│   ├── modules
│   │   └── item
│   │       ├── itemActions.ts
│   │       └── itemRepository.ts
│   ├── router.ts
│   └── types
│       └── express
│           └── index.d.ts
├── tests
│   ├── install.test.ts
│   └── item
│       └── routes.spec.ts
└── tsconfig.json
```

### Détails

### 1. **database**

-   **client.ts**: Configuration du client de base de données.
    -   Ce fichier permet de se connecter à la base de données.
-   **checkConnection.ts**: Vérification de la connexion à la base de données.
    -   Ce fichier permet de vérifier si la connexion à la base de données est établie.
-   **schema.sql**: Définition du schéma de la base de données.
    -   Ce fichier est simplement la structure de notre base de données, définissant les tables et les colonnes.

### 2. **src**

-   **main.ts**: Point d'entrée de l'application.
-   **app.ts**: Organise et orchestre les différentes parties.
-   **router.ts**: Routage pour les points d'API.
-   **modules**: Contiendra le repository & les actions des mes données.
-   **types**: Définitions de types personnalisées.

### 3. **public**

-   **assets**: Répertoire pour les ressources statiques, telles que des images.

### 4. **tests**

-   Tests unitaires et de bout en bout organisés par fonctionnalité.

### 5. **bin**

-   **migrate.ts**: Script pour créer les tables de la base de données contenues dans `database/schema.sql`.
-   **seed.ts**: Script pour insérer des données dans la base de données.

## Points Clés

-   **Organisation Modulaire**: Chaque composant a son propre rôle défini, permettant une maintenance indépendante et une réutilisation facile.

-   **Séparation des Responsabilités**: Les contrôleurs gèrent la logique métier, les modèles définissent la structure des données, et les services fournissent des fonctionnalités spécifiques, assurant une clarté conceptuelle.

-   **Tests Compréhensifs**: Les tests sont soigneusement structurés dans le dossier "tests", garantissant une couverture exhaustive pour chaque fonctionnalité.

-   **Évolutivité et Flexibilité**: La structure est conçue pour s'adapter à l'évolution des exigences du projet, offrant flexibilité et extensibilité.

Cette architecture a été pensée pour optimiser le développement, assurer la maintenabilité du code et permettre une évolution continue de notre application server. N'hésitez pas à explorer chaque dossier pour une compréhension approfondie de notre structure organisée et efficace.

Parlons maintenant de notre dossier `src` et plus particulièrement du fichier `app.ts`.
