---
sidebar_position: 1
sidebar_label: models
pagination_label: le dossier models
description: Parlons des models
---

# Les modèles

Les modèles sont des classes qui représentent vos entités de la base de données pour les opérations CRUD (Create, Read, Update, Delete). Chaque modèle a accès aux opérations CRUD de nos gestionnaires, facilitant ainsi la gestion des interactions avec les éléments de la base de données.

## AbstractRepository

La classe `AbstractRepository` est une classe abstraite qui fournit un accès à quelques opérations CRUD de la base de données. Elle est utilisée comme classe parente pour les modèles de vos entités. Nous avons mis en place cette classe pour vous éviter de répéter le code pour chaque modèle.

```js title="server/database/models/AbstractRepository.js"
// Import database client
const database = require("../client");

// Provide database access through AbstractRepository class
class AbstractRepository {
	constructor({ table }) {
		// thx https://www.codeheroes.fr/2017/11/08/js-classes-abstraites-et-interfaces/
		if (this.constructor === AbstractRepository) {
			throw new TypeError(
				"Abstract class 'AbstractRepository' cannot be instantiated directly"
			);
		}

		// Store the table name
		this.table = table;
		// Provide access to the database client
		this.database = database;
	}

	// The Rs of CRUD - Read operations
	async readAll() {
		// Execute the SQL SELECT query to retrieve all from this.table
		const [rows] = await this.database.query(`select * from ${this.table}`);
		return rows;
	}

	// The Rs of CRUD - Read operations
	async read(id) {
		// Execute the SQL SELECT query to retrieve a specific data by its ID
		const [rows] = await this.database.query(
			`select * from ${this.table} where id = ?`,
			[id]
		);

		return rows;
	}

	// The D of CRUD - Delete operation
	async delete(id) {
		// Execute the SQL DELETE query to remove a specific data by its ID
		const [rows] = await this.database.query(
			`delete from ${this.table} where id = ?`,
			[id]
		);

		return rows;
	}
}

// Ready to export
module.exports = AbstractRepository;
```

## ItemRepository

La classe `ItemRepository` est une classe qui étend la classe `AbstractRepository` et qui fournit un accès aux opérations CRUD de la base de données pour une entitée donné.

:::info
`ItemRepository` est un exemple, vous devez adapter votre repository à votre entité.

Ex: `UserRepository`, `PostRepository`, `CommentRepository`, etc.
:::

```js title="server/database/models/ItemRepository.js"
const AbstractRepository = require("./AbstractRepository");

class ItemRepository extends AbstractRepository {
	constructor() {
		// Transmet le nom de la table "item" comme configuration
		super({ table: "item" });
	}

	// The C of CRUD - Create operation
	async create(item) {
		// Execute the SQL INSERT query to add a new item to the "item" table
		const [result] = await this.database.query(
			`insert into ${this.table} (title) values (?)`,
			[item.title]
		);

		// Return the ID of the newly inserted item
		return result.insertId;
	}

	// The U of CRUD - Update operation
	async update(item) {
		// Execute the SQL UPDATE query to update a specific item by its ID
		const [result] = await this.database.query(
			`update ${this.table} set title = ? where id = ?`,
			[item.title, item.id]
		);

		// Return the result
		return result;
	}
}

module.exports = ItemRepository;
```
