---
id: architecture-monorepo
title: Introduction
sidebar_position: 1
---

# Introduction

Bienvenue dans cette présentation détaillée de l'architecture de notre monorepo, qui regroupe un frontend performant basé sur Vite et un backend Express structuré de manière modulaire.

## Structure Générale

Notre projet repose sur une organisation rigoureuse et une sécurisation renforcée dès la racine.

Les fichiers essentiels, `package.json` et `package-lock.json`, assurent la gestion précise des dépendances et des scripts nécessaires au bon fonctionnement du projet.

### Gestion des Dépendances

Pour garantir une qualité de code optimale, nous avons intégré plusieurs outils :

-   **`husky`** : permet d'ajouter des hooks Git pour automatiser certaines actions avant les commits.
-   **`lint-staged`** : exécute les linters uniquement sur les fichiers modifiés, améliorant ainsi la cohérence du code tout en optimisant les performances du pipeline de développement.

### Sécurité et Protection des Fichiers

La sécurisation de la racine du projet est une priorité. Des hooks Git empêchent toute modification directe des fichiers critiques, garantissant ainsi la stabilité et l'intégrité du projet.

Cependant, les répertoires `server` et `client` restent entièrement modifiables pour offrir une flexibilité adaptée aux développements spécifiques.

## Server

### Base de Données

La gestion de la base de données repose sur plusieurs éléments :

-   **`server/database/client.ts`** : gère la connexion à la base de données.
-   **`schema.sql`** : définit la structure de la base de données.
-   **Migrations et seeding** :
    -   `server/bin/migrate.ts` permet d'appliquer les migrations et de mettre à jour la base de données.
    -   `server/bin/seed.ts` insère des données de test pour le développement.

:::note  
Le fichier `seed.ts` est un outil de développement permettant de remplir la base avec des données fictives. Son exécution n'est pas requise pour le fonctionnement du projet.  
:::

### Architecture du Code

Le backend est conçu selon une architecture modulaire, favorisant la maintenabilité et la scalabilité.

#### Structure principale

-   **`src/app.ts`** : Initialise l’application et configure Express.
-   **`src/main.ts`** : Point d’entrée principal du serveur.
-   **`src/router.ts`** : Centralise la définition des routes.
-   **`jest.config.js`** : Configure Jest pour les tests unitaires et d’intégration.

### Gestion des Tests

Les tests sont regroupés dans le répertoire `tests` et couvrent différents aspects du backend :

-   **Tests des routes** avec `supertest` pour simuler des requêtes HTTP.
-   **Tests unitaires** avec Jest pour garantir la fiabilité des modules internes.

## Client

### Structure du Code

Le frontend repose sur Vite pour un développement rapide et performant. Son architecture suit une organisation claire :

-   **`vite.config.ts`** : Configuration de Vite.
-   **`src/`** : Contient l’ensemble du code source, structuré autour de plusieurs dossiers :
    -   **`components/`** : Composants réutilisables de l’interface.
    -   **`pages/`** : Pages principales de l’application.
    -   **`services/`** : Gestion des appels API et logique métier.
    -   **`types/`** : Définition des types TypeScript.
-   **`App.tsx`** : Composant principal de l’application React.
-   **`main.tsx`** : Point d’entrée de l’application React.

### Gestion des Ressources

-   **`assets/`** : Contient les ressources statiques telles que les images et les icônes.

### Configuration et Développement

La configuration spécifique à Vite est centralisée dans le fichier `vite.config.ts`, garantissant un environnement optimisé pour le développement et le déploiement.

## Documentation et Organisation

La documentation du projet est centralisée dans le fichier `README.md`, qui fournit des informations essentielles sur l’installation, la configuration et l’utilisation du monorepo.

Le projet est organisé selon les meilleures pratiques, avec une distinction claire entre les parties frontend et backend, assurant ainsi une séparation des responsabilités efficace.

## Outils et Dépendances

L’environnement de développement repose sur plusieurs outils clés :

-   **Jest** : Tests unitaires et d’intégration.
-   **Supertest** : Tests des routes backend.
-   **Docker et Docker Compose** : Gestion des conteneurs pour le développement et le déploiement.
-   **Vite** : Développement frontend rapide et optimisé.

## Conclusion

Cette documentation offre un aperçu complet de l’architecture du monorepo, en détaillant sa structure, ses fonctionnalités principales et les outils utilisés.

Chaque section du projet a été pensée pour offrir une expérience de développement fluide et efficace. Pour aller plus loin, il est recommandé d’explorer chaque composant plus en détail afin d’en comprendre pleinement le fonctionnement.

Bonne exploration et bon développement !
