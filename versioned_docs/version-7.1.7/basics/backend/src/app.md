---
sidebar_position: 1
sidebar_label: app.js
pagination_label: src/app.js
description: Prise en main du fichier app.js
---

# app.ts

Ce fichier est le point d'entrée de notre application. Il permet de mettre en place notre serveur et d'orchestrer les différentes parties de notre application.

```ts title="server/src/app.ts"
// Appel des modules nécessaires, notamment Express
import express from "express";
const app = express();

// Nous appelons ici le fichier router.ts qui contient toutes nos routes de l'API
import router from "./router";

// Toutes nos routes sont accessibles
app.use(router);

// Export de l'application qui sera utilisée dans index.js
module.exports = app;
```

Voilà la syntaxe de base de notre fichier `app.ts`. Nous importons Express, nous créons une instance de notre application, nous importons notre fichier `router.ts` et nous exportons notre application qui sera utilisée dans notre fichier `index.js`.

## les CORS

Les `CORS`, acronyme de **Cross-Origin Resource Sharing**, représentent un mécanisme qui permet à des ressources d'une page web d'être chargées à partir d'un **autre** domaine que celui de la page courante. Par défaut, les navigateurs web bloquent les tentatives de chargement de ressources provenant de domaines différents.

:::note
Par exemple, le site `https://www.mon-super-site.com` ne peut pas charger des ressources depuis `https://www.mon-autre-super-site.com`.
:::

L'intégration des CORS dans notre application autorise spécifiquement le chargement de ressources entre différents domaines. Toutefois, il est crucial d'adopter une approche prudente lors de la configuration des `CORS`, car ils peuvent présenter des risques pour la sécurité de notre application. Ainsi, nous allons les paramétrer de manière sécurisée.

```sh
# Téléchargement du module cors
npm install cors
```

```ts title="server/src/app.ts"
// Appel des modules nécessaires, notamment cors
import cors from "cors";

app.use(cors());
```

:::danger
La façon dont nous avons paramétré les `CORS` est très permissive. C'est assez dangereux. Nous allons donc les paramétrer de manière sécurisée.
:::

Nous allons maintenant, ajouter des règles pour nos `CORS` :

```ts title="server/src/app.ts"
// Appel des modules nécessaires, notamment cors
import cors from "cors";

// Définition des options pour les CORS
const corsOptions = {
	origin: [
		process.env.FRONTEND_URL, //garder celui-ci, après avoir vérifié la valeur dans `server/.env`,
		// ajouter les autres URL autorisées à accéder à notre API
	],
};

if (process.env.CLIENT_URL != null) {
	app.use(cors(corsOptions));
}
```

<details>
<summary>Code avec CORS</summary>

```ts title="server/src/app.ts"
// Appel des modules nécessaires, notamment express
import express from "express";
const app = express();

import cors from "cors";

// Définition des options pour les CORS
const corsOptions = {
	origin: [
		process.env.FRONTEND_URL, //garder celui-ci, après avoir vérifié la valeur dans `backend/.env`,
		// ajouter les autres URL autorisées à accéder à notre API
	],
};

// Ajout du middleware express.json()
if (process.env.CLIENT_URL != null) {
	app.use(cors(corsOptions));
}

// Nous appelons ici le fichier router.ts qui contient toutes nos routes de l'API
import router from "./router";

// Toutes nos routes sont accessibles
app.use(router);

// Export de l'application qui sera utilisée dans index.js
module.exports = app;
```

</details>

## express.json()

Nous avons besoin d'ajouter un `middleware` pour que notre application puisse lire les données envoyées par le client. Pour cela, nous allons utiliser le middleware `express.json()`. Tant que le type de données envoyées par le client est `application/json`, le middleware `express.json()` va transformer les données en objet JavaScript et les ajouter à la propriété `body` de l'objet `request`.

```ts title="server/src/app.ts"
// Ajout du middleware express.json()
app.use(express.json());
```

<details>
<summary>Code avec `express.json`</summary>

```ts title="server/src/app.ts"
// Appel des modules nécessaires, notamment express
import express from "express";
const app = express();

import cors from "cors";

// Définition des options pour les CORS
const corsOptions = {
	origin: [
		process.env.FRONTEND_URL, //garder celui-ci, après avoir vérifié la valeur dans `backend/.env`,
		// ajouter les autres URL autorisées à accéder à notre API
	],
};

// Ajout du middleware express.json()
if (process.env.CLIENT_URL != null) {
	app.use(cors(corsOptions));
}

// Nous appelons ici le fichier router.ts qui contient toutes nos routes de l'API
import router from "./router";

// Ajout du middleware express.json()
app.use(express.json());

// Toutes nos routes sont accessibles
app.use(router);

// Export de l'application qui sera utilisée dans index.js
module.exports = app;
```

</details>

:::info
Il n'y a pas que `express.json()`, mais bien d'autres middlewares comme pas exemple

-   `express.urlencoded()`: Analyse les requêtes contenant des données codées en URL.
-   `express.text()`: Analyse les demandes contenant des données textuelles brutes.
-   `express.raw()`: Analyse les demandes avec des données binaires brutes.

:::

## cookie-parser

Les cookies sont de petits fragments de données stockés dans le navigateur du client, couramment utilisés pour sauvegarder des informations spécifiques à l'utilisateur ou des données de session.

Pour intégrer la gestion des cookies dans votre application Express, le module `cookie-parser` est une solution pratique. Il permet de parser et de gérer les cookies en analysant l'en-tête `Cookie` des requêtes entrantes, puis en remplissant l'objet `req.cookies` avec les cookies correspondants.

Assurez-vous que le module `cookie-parser` est installé dans le dossier `server` de votre application Express. Si ce n'est pas le cas, vous pouvez l'installer à l'aide de la commande suivante :

```bash
npm install cookie-parser
```

Une fois le module `cookie-parser` installé, vous pouvez l'importer dans votre application Express et l'utiliser comme middleware :

```ts title="server/src/app.ts"
import cookieParser from "cookie-parser";

// Ajout du middleware cookie-parser
app.use(cookieParser());
```

<details>
<summary>Code avec cookieParser</summary>

```ts title="server/src/app.ts"
// Appel des modules nécessaires, notamment express
import express from "express";
const app = express();

import cors from "cors";

// Définition des options pour les CORS
const corsOptions = {
	origin: [
		process.env.FRONTEND_URL, //garder celui-ci, après avoir vérifié la valeur dans `backend/.env`,
		// ajouter les autres URL autorisées à accéder à notre API
	],
};

// Ajout du middleware express.json()
if (process.env.CLIENT_URL != null) {
	app.use(cors(corsOptions));
}

// Import du module cookie-parser
import cookieParser from "cookie-parser";

// Ajout du middleware cookie-parser
app.use(cookieParser());

// Nous appelons ici le fichier router.ts qui contient toutes nos routes de l'API
import router from "./router";

// Ajout du middleware express.json()
app.use(express.json());

// Toutes nos routes sont accessibles
app.use(router);

// Export de l'application qui sera utilisée dans index.js
module.exports = app;
```

</details>

Maintenant, nous pouvons utiliser les cookies dans notre application.

On l'utilise de la manière suivante :

```ts title="server/src/app.ts"
// Utilisation de la méthode res.cookie()
// Exemple : Définir un cookie nommé "username" avec la valeur "john" et une durée de validité de 7 jours
res.cookie("username", "john", {
	maxAge: 7 * 24 * 60 * 60 * 1000,
	httpOnly: true,
});

// Utilisation de la méthode res.clearCookie()
// Exemple : Supprimer le cookie nommé "username"
res.clearCookie("username");
```

## Middleware de Gestion des Erreurs

Un middleware de gestion des erreurs est une composante essentielle dans une application Express, permettant de capturer et de traiter les erreurs survenues lors du traitement des requêtes. Ce middleware devrait être défini en dernier, après les autres appels à `app.use()` et aux routes.

Pour activer le middleware de gestion des erreurs, décommentez le code suivant dans votre fichier Express (généralement `server/app.ts`):

```javascript
// Middleware for Error Logging
// Important: Error-handling middleware should be defined last, after other app.use() and routes calls.

import type { ErrorRequestHandler } from "express";

// Define a middleware function to log errors
const logErrors: ErrorRequestHandler = (err, req, res, next) => {
	// Log the error to the console for debugging purposes
	console.error(err);
	console.error("on req:", req.method, req.path);

	// Pass the error to the next middleware in the stack
	next(err);
};

// Mount the logErrors middleware globally
app.use(logErrors);
```
