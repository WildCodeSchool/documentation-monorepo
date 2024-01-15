---
sidebar_position: 1
sidebar_label: Frontend
---

# README

## Concept

Ce template est destiné à servir de base à tous les P2/P3 suivant la structure React-Express-MySQL, telle qu'apprise à la Wild Code School.
Il est préconfiguré avec un ensemble d'outils qui aideront les étudiants à produire un code de qualité industrielle et plus facile à maintenir, tout en restant un outil pédagogique.

## Configuration et utilisation

### Utilisateurs de Windows

Assurez-vous d'exécuter ces commandes dans un terminal git pour éviter les [problèmes avec les formats de nouvelles lignes] (https://en.wikipedia.org/wiki/Newline#Issues_with_different_newline_formats) :

```
git config --global core.eol lf
git config --global core.autocrlf false
```
### Initialisation du projet

- Dans VSCode, installez les plugins **Prettier - Code formatter** et **ESLint** et configurez-les.
- Clonez ce repo, entrez-y
- Exécuter la commande `npm install`
- Créez des fichiers d'environnement (`.env`) dans le `backend` et le `frontend` : vous pouvez copier les fichiers `.env.sample` pour commencer (**ne les supprimez pas**).

### Commandes disponibles

- `db:migrate` : Exécute le script de migration de base de données
- `db:seed` : Exécute le script d'amorçage de la base de données
- `dev` : Démarre les deux serveurs (frontend + backend) dans un seul terminal
- `dev-front` : Démarre le serveur React frontend
- `dev-back` : Démarre le serveur backend Express
- `lint` : Exécute les outils de validation (sera exécuté à chaque _commit_, et refusera le code impur)

## FAQ

### Outils

- _Concurrently_ : Permet à plusieurs commandes de s'exécuter simultanément dans le même CLI
- Husky_ : Permet d'exécuter des commandes spécifiques qui se déclenchent sur des événements _git_.
- Vite_ : Alternative à _Create-React-App_, avec moins d'outils pour une expérience plus fluide.
- _ESLint_ : Outil de "qualité du code", assure que les règles choisies seront appliquées
- Prettier_ : Outil de "qualité du code" également, se concentre sur le guide de style
- Airbnb Standard_ : L'un des "standards" les plus connus, même s'il n'est pas officiellement lié à ES/JS.

## Déploiement avec Traefik


> ⚠️ Conditions préalables : Vous devez avoir installé et configuré Traefik sur votre VPS au préalable.
> https://github.com/WildCodeSchool/vps-traefik-starter-kit/


Pour le déploiement, vous devez aller dans `secrets` → app `actions` sur le repo github pour insérer via `New repository secret` :


- SSH_HOST : adresse IP de votre VPS
- SSH_USER : login SSH de votre VPS
- SSH_PASSWORD : Mot de passe de connexion SSH à votre VPS


Et une variable publique de l'onglet `/settings/variables/actions` :


- PROJECT_NAME : le nom du projet utilisé pour créer le sous-domaine.


> ⚠️ Attention : les underscores ne sont pas autorisés. Ils peuvent causer des problèmes avec le certificat let's encrypt


Utilisez ce même onglet pour ajouter les autres variables d'environnement nécessaires au projet s'il y en a.


Seul le backend sera accessible. Le chemin racine `"/"` redirigera vers le dossier dist de votre frontend. Afin de permettre cela, veuillez décommenter la ligne comme expliqué dans `backend/src/app.js` (Ligne 102).
Comme le backend servira le frontend, la variable globale VITE_BACKEND_URL sera définie avec une chaîne vide.


Votre URL sera ` https://${PROJECT-NAME}.${subdomain}.wilders.dev/`.


### A propos de la base de données


La base de données est automatiquement déployée avec le nom de votre repo. Pendant la construction du projet (`docker-entry.sh`), la commande `node migrate.js` est exécutée dans le backend. Si vous voulez ensemencer automatiquement votre base de données en utilisant le script `seed.js`, remplacez la commande _build_ sur votre `backend/package.json` par `node migrate.js && node seed.js`.


### A propos des ressources publiques (images, polices...)


N'utilisez pas de dossier public sur votre frontend. Ce dossier ne sera pas accessible en ligne. Vous pouvez déplacer vos ressources publiques dans le dossier `backend/public`. Préférez [static assets](https://vitejs.dev/guide/assets) lorsque c'est possible.


### A propos des logs


Si vous voulez accéder aux logs de votre projet en ligne (pour suivre le déploiement ou pour surveiller une erreur de bug), connectez-vous à votre VPS (`ssh user@host`).
Ensuite, allez sur votre projet spécifique et lancez `docker compose logs -t -f.