---
sidebar_position: 4
sidebar_label: <entity>Repository.ts
pagination_label: src/modules/<entity>Repository.ts
description: Prise en main du fichier <entity>Repository.ts
---

# `<entity>Repository.ts`

Ce fichier permet de définir les opérations de base de données de notre entité, le fameux `CRUD`.

## Installations

Créez un fichier `<entity>Repository.ts` dans le dossier `modules/<entity>` de
votre application.

:::info
`<entity>` est le nom de votre entité.
:::

Assurez-vous que chaque fichier `<entity>Repository.ts` contient les deux import suivant :

```ts title="server/src/modules/<entity>/<entity>Repository.ts"
// Import database client
import databaseClient from "../../../database/client";

// Import type Result and Rows
import type { Result, Rows } from "../../../database/client";
```

## Opérations du Repository

Le fichier `<entity>Repository.ts` contient les opérations de base de données dans un classe qui porte le même nom que l'entité.

```ts title="server/src/modules/<entity>/<entity>Repository.ts"
// Nous devons définir le type de notre entité

type Item = {
	id: number;
	title: string;
	user_id: number;
};

class ItemRepository {
	// Opération Create
	async create(item: Omit<Item, "id">) {
		const [result] = await databaseClient.query<Result>(
			"insert into item (title, user_id) values (?, ?)",
			[item.title, item.user_id]
		);

		return result.insertId;
	}

	// Opération Read
	async read(id: number) {
		const [rows] = await databaseClient.query<Rows>(
			"select * from item where id = ?",
			[id]
		);

		return rows[0] as Item;
	}

	// Opération ReadAll
	async readAll() {
		const [rows] = await databaseClient.query<Rows>("select * from item");

		return rows as Item[];
	}

	// Opération Update
	async update(item: Item) {
		await databaseClient.query<Result>(
			"update item set title = ?, user_id = ? where id = ?",
			[item.title, item.user_id, item.id]
		);
	}

	// Opération Delete
	async delete(id: number) {
		await databaseClient.query<Result>("delete from item where id = ?", [
			id,
		]);
	}
}

export default new ItemRepository();
```

:::info
Il est évident que vous devez adapter les opérations CRUD à votre entité, ici, l'exemple est basé sur une entité `Item` qui est disponible par défaut dans le monorepo.
:::
