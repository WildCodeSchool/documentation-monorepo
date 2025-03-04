---
sidebar_position: 1
sidebar_label: README.md
---

# README

## Concept

Ce projet est un **monorepo JavaScript** reposant sur l'architecture **React-Express-MySQL**, conforme aux bonnes pratiques enseignées à la **Wild Code School (v7.1.7)**.

Il est préconfiguré avec un ensemble d'outils permettant aux étudiants de produire du code **de qualité industrielle**, tout en restant un support pédagogique accessible.

### Technologies et outils intégrés

-   **Concurrently** : Exécution simultanée de plusieurs commandes dans le même terminal.
-   **Husky** : Exécution de commandes spécifiques déclenchées par des événements Git.
-   **Vite** : Alternative légère à _Create-React-App_, offrant une expérience de développement plus fluide.
-   **Biome** : Remplace _ESLint_ et _Prettier_, garantissant un code propre selon des règles prédéfinies.
-   **Supertest** : Bibliothèque permettant de tester les serveurs HTTP en Node.js.

## Utilisateurs Windows

Pour éviter les problèmes liés aux formats de nouvelles lignes, exécutez les commandes suivantes dans un terminal Git :

```sh
git config --global core.eol lf
git config --global core.autocrlf false
```

## Installation & Utilisation

1. **Installez le plugin Biome** dans VSCode et configurez-le.
2. **Créez un nouveau projet** :
    ```sh
    npm create @this-is-to-learn/js-monorepo@latest <my-project>
    ```
    Remplacez `<my-project>` par le nom de votre projet.
3. **Installez les dépendances** :
    ```sh
    npm install
    ```
4. **Configurez les fichiers d'environnement** (`.env`) pour `server` et `client`. Utilisez les fichiers `.env.sample` comme modèles (**ne les supprimez pas**).

---

## Commandes essentielles

| Commande             | Description                                                    |
| -------------------- | -------------------------------------------------------------- |
| `npm install`        | Installe les dépendances du projet (client et serveur).        |
| `npm run db:migrate` | Applique les migrations pour mettre à jour la base de données. |
| `npm run dev`        | Démarre simultanément les serveurs frontend et backend.        |
| `npm run check`      | Exécute les outils de vérification (linting et formatage).     |
| `npm run test`       | Exécute les tests unitaires et d'intégration.                  |

---

## Structure du projet

```plaintext
my-project/
│
├── server/
│   ├── app/
│   │   ├── modules/
│   │   │   ├── item/
│   │   │   │   ├── itemActions.ts
│   │   │   │   └── itemRepository.ts
│   │   │   └── ...
│   │   ├── app.ts
│   │   ├── main.ts
│   │   └── router.ts
│   ├── database/
│   │   ├── client.ts
│   │   └── schema.sql
│   ├── tests/
│   ├── .env
│   └── .env.sample
│
└── client/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   └── App.tsx
    ├── .env
    └── .env.sample
```

---

## Bonnes pratiques

### Sécurité

-   Validez et échappez systématiquement les entrées utilisateur.
-   Utilisez **HTTPS** pour toutes les communications réseau.
-   Stockez les mots de passe de manière sécurisée avec **Argon2**.
-   Maintenez les dépendances à jour pour éviter les vulnérabilités.

### Code

-   **Appliquez les principes SOLID** pour une architecture propre et maintenable.
-   **Utilisez TypeScript** pour bénéficier de la vérification statique des types.
-   **Adoptez un style de codage cohérent** avec Biome.
-   **Écrivez des tests** pour toutes les fonctionnalités critiques.

---

## FAQ

### Déploiement avec Traefik

> ⚠️ **Prérequis** : Vous devez avoir installé et configuré **Traefik** sur votre VPS. Consultez [VPS Traefik Starter Kit](https://github.com/WildCodeSchool/vps-traefik-starter-kit/) pour les instructions détaillées.

Pour configurer le déploiement, ajoutez les **secrets** suivants dans la section `secrets` → `actions` de votre dépôt GitHub :

-   **`SSH_HOST`** : Adresse IP du VPS.
-   **`SSH_USER`** : Identifiant SSH.
-   **`SSH_PASSWORD`** : Mot de passe SSH.

Ajoutez également une **variable publique** dans `/settings/variables/actions` :

-   **`PROJECT_NAME`** : Nom du projet utilisé pour générer le sous-domaine.

> **Important** : Les underscores (`_`) ne sont pas autorisés, car ils peuvent poser problème avec **Let's Encrypt**.

Votre projet sera accessible à l'adresse :

```plaintext
https://${PROJECT_NAME}.${subdomain}.wilders.dev/
```

### Variables d’environnement spécifiques

Les fichiers `.env.sample` contiennent les variables d’environnement nécessaires. Utilisez la convention suivante :

```plaintext
<PROJECT_NAME>_<SPECIFIC_NAME>=<VALEUR>
```

> **Exemple** :
>
> -   `MYAPP_DATABASE_URL=mysql://user:pass@localhost:3306/myapp`
> -   `MYAPP_API_KEY=abcdef123456`

Pour ajouter ces variables lors du déploiement :

1. Ajoutez la variable dans `docker-compose.prod.yml` :
    ```yaml
    environment:
        - PROJECT_NAME_SPECIFIC_NAME=${PROJECT_NAME_SPECIFIC_NAME}
    ```
2. Connectez-vous à votre serveur en SSH et éditez le fichier `.env` de Traefik :
    ```sh
    nano ./traefik/data/.env
    ```
    Ajoutez la variable et sauvegardez.

Le déploiement prendra alors en compte ces nouvelles configurations.

### Logs

Pour suivre les logs en direct sur votre VPS :

```sh
ssh user@host
cd /path/to/project
docker compose logs -t -f
```

---

## Contribution

### Comment contribuer ?

1. **Fork** le dépôt.
2. **Clonez** votre fork localement :
    ```sh
    git clone https://github.com/votre-utilisateur/js-monorepo.git
    cd js-monorepo
    ```
3. Créez une branche pour votre modification :
    ```sh
    git switch -c feature/ma-nouvelle-fonctionnalite
    ```
4. **Apportez vos modifications** et **committez** :
    ```sh
    git commit -m "Ajout d'une nouvelle fonctionnalité"
    ```
5. **Poussez** la branche sur votre fork :
    ```sh
    git push origin feature/ma-nouvelle-fonctionnalite
    ```
6. **Ouvrez une Pull Request** sur le dépôt principal.

### Règles de contribution

-   **Respectez les standards** de codage en exécutant `npm run check` avant de soumettre votre code.
-   **Ajoutez des tests** pour toute nouvelle fonctionnalité ou correction de bug.
-   **Documentez vos modifications** dans la description de la Pull Request.

---

## Conclusion

Ce README fournit une vue d’ensemble complète du monorepo, de son installation à son déploiement. L’objectif est d’offrir un environnement de développement fluide et structuré, tout en respectant les bonnes pratiques de développement.

Bonne exploration et bon développement.
