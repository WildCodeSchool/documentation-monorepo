---
sidebar_position: 1
sidebar_label: app.js
pagination_label: src/app.js
description: Prise en main du fichier app.js
---

# Parlons du dossier `src`

## Le dossier `src` et l'architecture MVC

Le dossier `src` contient les fichiers et dossiers qui permettent de mettre en place l'architecture MVC (Modèle-Vue-Contrôleur) de notre application backend. Cette architecture permet de séparer les données, la logique métier et l'interface utilisateur.

En sachant que n'utilisons pas de vue dans notre application, nous n'aurons pas de dossier `views`. Celui-ci est remplacé par notre dossier `frontend` de notre framework.

## Contenu du dossier

```txt
src
├── app.js
├── controllers
│   └── itemControllers.js
├── models
│   ├── AbstractManager.js
│   └── ItemManager.js
├── router.js
├── services
│   └── .gitkeep
└── tables.js
```

## `app.js`

Ce fichier est le point d'entrée de notre application. Il permet de mettre en place notre serveur et d'orchestrer les différentes parties de notre application.

```js
// Appel des modules nécessaires, notamment Express
const express = require("express");
const app = express();

// Nous appelons ici le fichier router.js qui contient toutes nos routes del'API
const router = require("./router");

// Toutes nos routes sont accessibles via le préfixe /api
app.use("/api", router);

// Export de l'application qui sera utilisée dans index.js
module.exports = app;
```

Voilà la syntaxe de base de notre fichier `app.js`. Nous importons Express, nous créons une instance de notre application, nous importons notre fichier `router.js` et nous exportons notre application qui sera utilisée dans notre fichier `index.js`.

### 1 les cors

Les `CORS`, acronyme de Cross-Origin Resource Sharing, représentent un mécanisme qui permet à des ressources d'une page web d'être chargées à partir d'un **autre** domaine que celui de la page courante. Par défaut, les navigateurs web bloquent les tentatives de chargement de ressources provenant de domaines différents.

:::info
Par exemple, le site `https://www.mon-super-site.com` ne peut pas charger des ressources depuis `https://www.mon-autre-super-site.com`.
:::

L'intégration des CORS dans notre application autorise spécifiquement le chargement de ressources entre différents domaines. Toutefois, il est crucial d'adopter une approche prudente lors de la configuration des `CORS`, car ils peuvent présenter des risques pour la sécurité de notre application. Ainsi, nous allons les paramétrer de manière sécurisée.

```bash
# Téléchargement du module cors
npm install cors
```

```js
// Appel des modules nécessaires, notamment cors
const cors = require("cors");

app.use(cors());
```

:::danger
La façon dont nous avons paramétré les `CORS` est très permissive. C'est assez dangereux. Nous allons donc les paramétrer de manière sécurisée.
:::

Nous allons maintenant, ajouter des règles pour nos `CORS` :

```js
// Appel des modules nécessaires, notamment cors
const cors = require("cors");

// Définition des options pour les CORS
const corsOptions = {
	origin: [
		process.env.FRONTEND_URL, //garder celui-ci, après avoir vérifié la valeur dans `backend/.env`,
		// ajouter les autres URL autorisées à accéder à notre API
	],
};

app.use(cors(corsOptions));
```

### 2 express.json()

Nous avons besoin d'ajouter un `middleware` pour que notre application puisse lire les données envoyées par le client. Pour cela, nous allons utiliser le middleware `express.json()`. Tant que le type de données envoyées par le client est `application/json`, le middleware `express.json()` va transformer les données en objet JavaScript et les ajouter à la propriété `body` de l'objet `request`.

```js
// Appel des modules nécessaires, notamment express
const express = require("express");
const app = express();
const cors = require("cors");

// Définition des options pour les CORS
const corsOptions = {
	origin: [
		process.env.FRONTEND_URL, //garder celui-ci, après avoir vérifié la valeur dans `backend/.env`,
		// ajouter les autres URL autorisées à accéder à notre API
	],
};

// Ajout du middleware express.json()
app.use(cors(corsOptions));

// Nous appelons ici le fichier router.js qui contient toutes nos routes del'API
const router = require("./router");

// Ajout du middleware express.json()
app.use(express.json());

// Toutes nos routes sont accessibles via le préfixe /api
app.use("/api", router);

// Export de l'application qui sera utilisée dans index.js
module.exports = app;
```

:::info
Il n'y a pas que `express.json()`, mais bien d'autres middlewares comme pas exemple

-   `express.urlencoded()`: Analyse les requêtes contenant des données codées en URL.
-   `express.text()`: Analyse les demandes contenant des données textuelles brutes.
-   `express.raw()`: Analyse les demandes avec des données binaires brutes.

:::

### 3 `cookie-parser`

Les cookies sont de petits fragments de données stockés dans le navigateur du client, couramment utilisés pour sauvegarder des informations spécifiques à l'utilisateur ou des données de session.

Pour intégrer la gestion des cookies dans votre application Express, le module `cookie-parser` est une solution pratique. Il permet de parser et de gérer les cookies en analysant l'en-tête `Cookie` des requêtes entrantes, puis en remplissant l'objet `req.cookies` avec les cookies correspondants.

Assurez-vous que le module `cookie-parser` est installé dans le dossier `backend` de votre application Express. Si ce n'est pas le cas, vous pouvez l'installer à l'aide de la commande suivante :

```bash
npm install cookie-parser
```

Une fois le module `cookie-parser` installé, vous pouvez l'importer dans votre application Express et l'utiliser comme middleware :

```js
// Appel des modules nécessaires, notamment express
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

// Définition des options pour les CORS
const corsOptions = {
	origin: [
		process.env.FRONTEND_URL, //garder celui-ci, après avoir vérifié la valeur dans `backend/.env`,
		// ajouter les autres URL autorisées à accéder à notre API
	],
};

// Ajout du middleware express.json()
app.use(cors(corsOptions));

// Nous appelons ici le fichier router.js qui contient toutes nos routes del'API
const router = require("./router");

// Ajout du middleware express.json()
app.use(express.json());

// Ajout du middleware cookie-parser
app.use(cookieParser());

// Toutes nos routes sont accessibles via le préfixe /api
app.use("/api", router);

// Export de l'application qui sera utilisée dans index.js
module.exports = app;
```

Maintenant, nous pouvons utiliser les cookies dans notre application.

On l'utilise de la manière suivante :

```js
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

### 4 Middleware de Gestion des Erreurs

Un middleware de gestion des erreurs est une composante essentielle dans une application Express, permettant de capturer et de traiter les erreurs survenues lors du traitement des requêtes. Ce middleware devrait être défini en dernier, après les autres appels à `app.use()` et aux routes.

Pour activer le middleware de gestion des erreurs, décommentez le code suivant dans votre fichier Express (généralement `backend/app.js`):

```javascript
// Middleware for Error Logging
// Important: Error-handling middleware should be defined last, after other app.use() and routes calls.

// Define a middleware function to log errors
const logErrors = (err, req, res, next) => {
	// Log the error to the console for debugging purposes
	console.error(err);
	console.error("on req:", req.method, req.path);

	// Pass the error to the next middleware in the stack
	next(err);
};

// Mount the logErrors middleware globally
app.use(logErrors);
```
