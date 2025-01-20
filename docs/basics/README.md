---
sidebar_position: 1
sidebar_label: README.md
---

# README

## Concept

Ce template est destiné à servir de base à tous les P2/P3 suivant la structure React-Express-MySQL, telle qu'apprise à la Wild Code School.
Il est préconfiguré avec un ensemble d'outils qui aideront les étudiants à produire un code de qualité industrielle et plus facile à maintenir, tout en restant un outil pédagogique.

## Configuration et utilisation

### Utilisateurs de Windows

Assurez-vous d'exécuter ces commandes dans un terminal git pour éviter les [problèmes avec les formats de nouvelles lignes](https://en.wikipedia.org/wiki/Newline#Issues_with_different_newline_formats) :

```
git config --global core.eol lf
git config --global core.autocrlf false
```

## Installation & Utilisation

1. Installez le plugin **Biome** dans VSCode et configurez-le.
2. Clonez ce dépôt, puis accédez au répertoire cloné.
3. Exécutez la commande `npm install`.
4. Créez des fichiers d'environnement (`.env`) dans les répertoires `server` et `client` : vous pouvez copier les fichiers `.env.sample` comme modèles (**ne les supprimez pas**).

### Commandes de Base

| Commande             | Description                                                         |
| -------------------- | ------------------------------------------------------------------- |
| `npm install`        | Installe les dépendances pour le client et le serveur               |
| `npm run db:migrate` | Met à jour la base de données à partir d'un schéma défini           |
| `npm run dev`        | Démarre les deux serveurs (client et serveur) dans un seul terminal |
| `npm run check`      | Exécute les outils de validation (linting et formatage)             |
| `npm run test`       | Exécute les tests unitaires et d'intégration                        |

## FAQ

### Déploiement avec Traefik

> ⚠️ Prérequis : Vous devez avoir installé et configuré Traefik sur votre VPS au préalable. Suivez les instructions ici : [VPS Traefik Starter Kit](https://github.com/WildCodeSchool/vps-traefik-starter-kit/).

Pour le déploiement, ajoutez les secrets suivants dans la section `secrets` → `actions` du dépôt GitHub :

-   `SSH_HOST` : Adresse IP de votre VPS
-   `SSH_USER` : Identifiant SSH pour votre VPS
-   `SSH_PASSWORD` : Mot de passe de connexion SSH pour votre VPS

Et une variable publique dans `/settings/variables/actions` :

-   `PROJECT_NAME` : Le nom du projet utilisé pour créer le sous-domaine.

> ⚠️ Avertissement : Les underscores ne sont pas autorisés car ils peuvent causer des problèmes avec le certificat Let's Encrypt.

L'URL de votre projet sera `https://${PROJECT-NAME}.${subdomain}.wilders.dev/`.

### Variables d'environnement spécifiques

Les étudiants doivent utiliser le modèle fourni dans le fichier `*.env.sample*` en suivant la convention `<PROJECT_NAME><SPECIFIC_NAME>=<THE_VARIABLE>`.

> ⚠️ **Avertissement:** Le `PROJECT_NAME` doit correspondre à celui utilisé dans la variable publique Git.

Pour l'ajouter lors du déploiement, suivez ces deux étapes :

1. Ajoutez la variable correspondante dans le fichier `docker-compose.prod.yml` (comme montré dans l'exemple : `PROJECT_NAME_SPECIFIC_NAME: ${PROJECT_NAME_SPECIFIC_NAME}`).
2. Connectez-vous à votre serveur via SSH. Ouvrez le fichier `.env` global dans Traefik (`nano ./traefik/data/.env`). Ajoutez la variable avec la valeur correcte et sauvegardez le fichier.

Après cela, vous pouvez lancer le déploiement automatique. Docker ne sera pas rafraîchi pendant ce processus.

### Logs

Pour accéder aux logs de votre projet en ligne (pour suivre le déploiement ou surveiller les erreurs), connectez-vous à votre VPS (`ssh user@host`). Ensuite, allez dans votre projet spécifique et exécutez `docker compose logs -t -f`.
