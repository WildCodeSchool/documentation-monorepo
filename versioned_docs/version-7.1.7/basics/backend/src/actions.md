---
sidebar_position: 3
sidebar_label: <entity>Actions.ts
pagination_label: src/modules/<entity>Actions.ts
description: Prise en main du fichier <entity>Actions.ts
---

# `<entity>Actions.ts`

:::info
`<entity>` ici est un mot générique pour définir le nom de vos entités, à l'initialisation du monorepo, nous n'avons que `item` dans nos actions.
:::

Les actions (ou contrôleurs) occupent une position centrale dans la gestion de votre application, utilisant l'acronyme `B. R. E. A. D.` pour structurer nos opérations. Chaque contrôleur a accès aux opérations CRUD de nos gestionnaires, facilitant ainsi la gestion des interactions avec les éléments de la base de données.

## Installation

Créez un fichier `<entity>Actions.ts` dans le dossier `modules/<entity>` de votre application.

Ne pas oublier d'importer le type `RequestHandler` d'Express pour définir les types de nos fonctions.

```ts title="server/src/modules/<entity>/<entity>Actions.ts"
import type { RequestHandler } from "express";
```

Assurez-vous d'importer correctement l'accès aux tables de la base de données, comme illustré dans les exemples ci-dessous :

```ts title="server/src/modules/<entity>/<entity>Actions.ts"
// Import access to data
import <entity>Repository from "./<entity>Repository";
```

## Opérations des Actions

### 1. Browse (lire tous les éléments)

La fonction `browse` permet de récupérer tous les éléments de la base de données.

```ts title="server/src/modules/<entity>/<entity>Actions.ts"
const browse: RequestHandler = async (req, res, next) => {
	try {
		const items = await itemRepository.readAll();
		res.json(items);
	} catch (err) {
		next(err);
	}
};
```

### 2. Read (lire un élément)

La fonction `read` permet de récupérer un élément spécifique basé sur l'ID fourni.

```ts title="server/src/modules/<entity>/<entity>Actions.ts"
const read: RequestHandler = async (req, res, next) => {
	try {
		const itemId = Number(req.params.id);
		const item = await (<entity>Repository.read(itemId));
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

```ts title="server/src/modules/<entity>/<entity>Actions.ts"
const edit: RequestHandler = async (req, res, next) => {
	try {
		const updatedItem = req.body;

		// Update the item
		const success = await itemRepository.update(
			Number(req.params.id),
			updatedItem
		);

		if (!success) {
			res.sendStatus(404);
		} else {
			res.sendStatus(204);
		}
	} catch (err) {
		next(err);
	}
};
```

### 4. Add (créer un nouvel élément)

La fonction `add` permet d'insérer un nouvel élément dans la base de données.

```ts title="server/src/modules/<entity>/<entity>Actions.ts"
const add: RequestHandler = async (req, res, next) => {
	try {
		const newItem = req.body;
		const insertId = await itemRepository.create(newItem);
		res.status(201).json({ insertId });
	} catch (err) {
		next(err);
	}
};
```

### 5. Destroy (supprimer un élément)

La fonction `destroy` permet de supprimer un élément spécifique de la base de données.

```ts title="server/src/modules/<entity>/<entity>Actions.ts"
const destroy: RequestHandler = async (req, res, next) => {
	try {
		const itemId = Number(req.params.id);
		const success = await itemRepository.delete(itemId);
		if (!success) {
			res.sendStatus(404);
		} else {
			res.sendStatus(204);
		}
	} catch (err) {
		next(err);
	}
};
```

:::note
Toutes les fonctions ci-dessus utilisent la fonction `next` pour passer les erreurs à la fonction de gestion des erreurs Express. Nous avons vu cela plus en détail dans la section [Gestion des Erreurs](/docs/basics/backend/src/app#middleware-de-gestion-des-erreurs).
:::

## Utilisation

Prêtes à être exportées, ces fonctions peuvent être intégrées dans vos routes Express pour gérer les interactions avec les éléments de la base de données.

```ts title="backend/src/<entity>Controllers.js"
export default {
	browse,
	read,
	edit,
	add,
	destroy,
};
```

Utilisez ces fonctions de contrôleur dans vos routes Express pour construire une API robuste et flexible pour la gestion des entités dans votre application.
