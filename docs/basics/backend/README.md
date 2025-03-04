---
sidebar_position: 1
sidebar_label: Server
---

# Architecture

## Introduction à l'Architecture du Server

Bienvenue dans l'architecture server de notre application, conçue pour offrir des fonctionnalités robustes et une gestion efficace des données. Cette structure, garantit une expérience de développement fluide et une maintenance simplifiée. Plongeons dans les différentes composantes de notre dossier server.

## Architecture

```textmate title="server/"
server/
├── bin
│   ├── migrate.ts
│   └── seed.ts
├── database
│   ├── checkConnection.ts
│   ├── client.ts
│   ├── fixtures
│   │   ├── AbstractSeeder.ts
│   │   ├── ItemSeeder.ts
│   │   └── UserSeeder.ts
│   └── schema.sql
├── jest.config.ts
├── package.tson
├── public
│   └── assets
│       └── images
│           └── favicon.png
├── src
│   ├── app.ts
│   ├── main.ts
│   ├── modules
│   │   └── item
│   │       ├── itemActions.ts
│   │       └── itemRepository.ts
│   ├── router.ts
│   └── types
│       └── express
│           └── index.d.ts
├── tests
│   ├── install.test.ts
│   └── item
│       └── routes.spec.ts
└── tsconfig.tson

14 directories, 20 files
```

### Détails

### 1. **bin**

-   **migrate.ts**: Script pour créer les tables de la base de données contenues dans `database/schema.sql`.
-   **seed.ts**: Script pour insérer des données dans la base de données.

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

### 2. **database**

-   **client.ts**: Configuration du client de base de données et permet de se connecter.
-   **schema.sql**: Définition du schéma de la base de données.
    -   Ce fichier est simplement la structure de notre base de données, définissant les tables et les colonnes.
-   **fixtures**: Données de test pour la base de données.
    -   Contient les fichiers de données pour alimenter chaque table de la base de données.
    -   Les fichiers de données sont des classes qui héritent de `AbstractSeeder` et implémentent la méthode `run`.

### 3. **public**

-   **assets**: Répertoire pour les ressources statiques, telles que des images.

### 4. **src**

-   **main.ts**: Initialisation de l'application.
-   **app.ts**: Point d'entrée de l'application, qui configure les middlewares, les routes, etc.
-   **router.ts**: Routage pour les points d'API.
-   **types**: Définitions de types personnalisés.
-   **modules**: Contient les modules de l'application.
    -   Un module est un dossier qui contient l'ensemble des fichiers qui gèrent une entitée spécifique.
    -   Chaque module contient les fichiers suivants :
        -   **actions.ts**: Définit les actions possibles pour l'entité.
        -   **repository.ts**: Gère les requêtes à la base de données pour l'entité.

:::info

Il faut bien comprendre que chaque module est une entité de notre application. Par exemple, si nous avons une entité `User`, nous aurons un module `user` qui contiendra les fichiers `userActions.ts` et `userRepository.ts`.

:::

### 5. **tests**

-   Tests unitaires et de bout en bout organisés par fonctionnalité.

## Points Clés

-   **Organisation Modulaire**: Chaque composant a son propre rôle défini, permettant une maintenance indépendante et une réutilisation facile.

-   **Séparation des Responsabilités**: Les contrôleurs gèrent la logique métier, les modèles définissent la structure des données, et les services fournissent des fonctionnalités spécifiques, assurant une clarté conceptuelle.

-   **Tests Compréhensifs**: Les tests sont soigneusement structurés dans le dossier "tests", garantissant une couverture exhaustive pour chaque fonctionnalité.

-   **Évolutivité et Flexibilité**: La structure est conçue pour s'adapter à l'évolution des exigences du projet, offrant flexibilité et extensibilité.

Cette architecture a été pensée pour optimiser le développement, assurer la maintenabilité du code et permettre une évolution continue de notre server. N'hésitez pas à explorer chaque dossier pour une compréhension approfondie de notre structure organisée et efficace.

Parlons maintenant de notre dossier `src` et plus particulièrement du fichier `app.ts`.
