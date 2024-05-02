---
sidebar_position: 4
sidebar_label: controllers
pagination_label: src/controllers
description: Parlons des controllers
---

# Les contrôleurs

Les contrôleurs occupent une position centrale dans la gestion de votre application, utilisant l'acronyme `B. R. E. A. D.` pour structurer nos opérations. Chaque contrôleur a accès aux opérations CRUD de nos gestionnaires, facilitant ainsi la gestion des interactions avec les éléments de la base de données.

## Installation

Assurez-vous d'importer correctement l'accès aux tables de la base de données, comme illustré dans les exemples ci-dessous :

```js title="backend/src/controllers/<item>Controllers.js"
// Import access to database tables
const tables = require("../tables");
```

:::info
Ici, tables est un objet qui contient les instances de nos gestionnaires de tables. Nous allons voir cela plus en détail dans la section [tables.js](/docs/basics/backend/src/tables).
:::

## Opérations des Contrôleurs

### 1. Browse (lire tous les éléments)

La fonction `browse` permet de récupérer tous les éléments de la base de données.

```js title="backend/src/controllers/<item>Controllers.js"
const browse = async (req, res, next) => {
    try {
        const items = await tables.<entity>.readAll();
            res.json(items);
        } catch (err) {
            next(err);
    }
};
```

### 2. Read (lire un élément)

La fonction `read` permet de récupérer un élément spécifique basé sur l'ID fourni.

```js title="backend/src/controllers/<item>Controllers.js"
const read = async (req, res, next) => {
    try {
        const item = await tables.<entity>.read(req.params.id);
        if (item == null) {
            res.sendStatus(404);
        } else {
            res.json(item);
        }
    } catch (err) {
        next(err);
    }
};

```

### 3. Edit (mettre à jour un élément)

La fonction `edit` permet de mettre à jour un élément spécifique dans la base de données.

```js title="backend/src/controllers/<item>Controllers.js"
const edit = async (req, res, next) => {
	const updatedData = req.body;
	try {
		await tables.<entity>.update(req.params.id, updatedData);
		res.sendStatus(200);
	} catch (err) {
		next(err);
	}
};
```

### 4. Add (créer un nouvel élément)

La fonction `add` permet d'insérer un nouvel élément dans la base de données.

```js title="backend/src/controllers/<item>Controllers.js"
const add = async (req, res, next) => {
    const item = req.body;
    try {
        const insertId = await tables.<entity>.create(item);
        res.status(201).json({ insertId });
    } catch (err) {
        next(err);
    }
};

```

### 5. Destroy (supprimer un élément)

La fonction `destroy` permet de supprimer un élément spécifique de la base de données.

```js title="backend/src/controllers/<item>Controllers.js"
const destroy = async (req, res, next) => {
	try {
		await tables.<entity>.delete(req.params.id);
		res.sendStatus(204);
	} catch (err) {
		next(err);
	}
};
```

:::note
Toutes les fonctions ci-dessus utilisent la fonction `next` pour passer les erreurs à la fonction de gestion des erreurs Express. Nous avons vu cela plus en détail dans la section [Gestion des Erreurs](/docs/basics/backend/src/app#middleware-de-gestion-des-erreurs).
:::

:::info
`<entity>` est le nom de l'entité que vous souhaitez gérer. Par exemple, si vous souhaitez accéder au CRUD de votre table `user` pour gérer les utilisateurs, vous devez remplacer `<entity>` par `user`.
:::

## Utilisation

Prêtes à être exportées, ces fonctions peuvent être intégrées dans vos routes Express pour gérer les interactions avec les éléments de la base de données.

```js title="backend/src/controllers/<item>Controllers.js"
module.exports = {
	browse,
	read,
	edit,
	add,
	destroy,
};
```

Utilisez ces fonctions de contrôleur dans vos routes Express pour construire une API robuste et flexible pour la gestion des entités dans votre application.
