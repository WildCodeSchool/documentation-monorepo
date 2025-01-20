---
id: architecture-monorepo
title: Introduction
sidebar_position: 1
---

# Introduction

Bienvenue dans la présentation détaillée de l'architecture de notre monorepo, un écosystème dynamique réunissant un client réactif propulsé par Vite et un server Express structuré selon le modèle modulaire.

# Structure Générale

Notre projet s'appuie sur une organisation méticuleuse et une sécurisation renforcée dès la racine.

Les fichiers cruciaux, `package.json` et `package-lock.json`, sont présents pour orchestrer de manière précise les dépendances et les scripts nécessaires à la cohérence et à la fiabilité du projet.

## Sécurité Renforcée

La sécurisation de la racine du projet est une priorité absolue. Les hooks Git ont été judicieusement déployés pour protéger les fichiers essentiels. Vous ne pouvez pas modifier directement les fichiers à la racine du projet, ce qui renforce la stabilité et la sécurité globale.

Cependant, vous bénéficiez d'une totale liberté pour effectuer des modifications dans les répertoires `server` et `client`, offrant ainsi une flexibilité contrôlée dans les domaines spécifiques du développement.

Cette structure réfléchie et sécurisée garantit une gestion des dépendances robuste tout en assurant l'intégrité et la confidentialité des configurations essentielles.

## Server

### Base de Données

La gestion de la base de données est assurée par le dossier `client.ts` et le schéma SQL défini dans `schema.sql`. Les migrations et le seeding sont gérés par `migrate.ts` et `seed.ts` respectivement le tout dans le dossier `server/database`.

:::note
Le fichier `seed.ts` est un script de développement qui permet de remplir la base de données avec des données de test. Il n'est pas nécessaire de l'exécuter pour le fonctionnement du projet.
:::

### Code Source

Dans le cœur de notre server, le fichier `src/app.ts` assume un rôle central. C'est le point d'entrée de notre application. Nous assurons la qualité du code grâce à une configuration Jest élaborée dans le fichier `jest.config.js`.

L'architecture modulaire, structure notre server de manière intuitive. Le dossier `modules` qui possédera les dossiers de notre application, sont soigneusement organisés pour favoriser la maintenabilité et la clarté du code. Le fichier de routage, `router.ts`, facilite la gestion des chemins au sein de notre application, contribuant ainsi à une expérience de développement fluide.

### Tests

Le répertoire `tests` est dédié aux tests, avec des fichiers spécifiques pour les managers et les routes.

Pour nos tests, nous utilisons `supertest` pour les requêtes HTTP, `jest` pour les tests unitaires.

## Client

### Code Source

Le client, propulsé par Vite, est configuré via `vite.config.js`. Le code source est structuré dans le dossier `src` avec des `composants`, `pages`, et `services` dédiés. L'utilisation de React est mise en avant, avec des fichiers tels que `App.tsx`.

### Ressources Statiques

Les ressources statiques telles que les images sont gérées dans le répertoire `assets`.

### Configuration

La configuration spécifique à Vite est centralisée dans `vite.config.js`.

## Documentation et Organisation

La documentation est un pilier du projet avec le fichier `README.md` fournissant des informations essentielles. L'organisation du projet suit les meilleures pratiques de développement avec une distinction claire entre le client et le server.

## Outils et Dépendances

L'utilisation de Jest pour les tests unitaires, de Docker et Docker Compose pour la gestion des conteneurs, ainsi que Vite pour le développement client, illustrent l'écosystème riche de notre monorepo.

# Conclusion

En conclusion, cet aperçu de l'architecture de notre monorepo met en lumière la structure, les fonctionnalités clés, et les outils utilisés. Cette documentation complète est conçue pour guider les développeurs à travers l'écosystème, favorisant une compréhension approfondie de chaque composant. N'hésitez pas à explorer davantage chaque section pour une immersion complète dans notre environnement de développement. Bonne exploration !
