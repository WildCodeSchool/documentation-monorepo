---
sidebar_position: 4
sidebar_label: tables.js
pagination_label: src/table.js
description: Prise en main du fichier tables.js
---

# tables.js

Ce fichier contient un script qui facilite l'enregistrement des gestionnaires de données pour différentes tables de la base de données. Il offre une structure modulaire pour gérer les opérations de données sur ces tables.

### Importation des Modules de Gestionnaires

```js
// Importer les modules des gestionnaires responsables des opérations sur les tables
const ItemManager = require("./models/ItemManager");

const managers = [
	ItemManager,
	// Ajouter d'autres gestionnaires ici
];
```

Cette section importe les modules des gestionnaires responsables de traiter les opérations de données sur les tables. Vous pouvez étendre le tableau `managers` en ajoutant d'autres gestionnaires pour différentes tables.

### Initialisation de l'Objet des Gestionnaires de Tables

```js
// Créer un objet vide pour stocker les gestionnaires de données pour différentes tables
const tables = {};
```

Un objet vide `tables` est créé. Cet objet sera utilisé pour stocker les instances de gestionnaires de tables.

### Enregistrement des Gestionnaires

```js
// Enregistrer chaque gestionnaire comme point d'accès aux données pour sa table respective
managers.forEach((ManagerClass) => {
	const manager = new ManagerClass();

	tables[manager.table] = manager;
});
```

Chaque gestionnaire est enregistré comme point d'accès aux données pour sa table respective. La boucle `forEach` crée une instance de chaque gestionnaire et l'ajoute à l'objet `tables` avec la propriété `table` de l'instance du gestionnaire comme clé.

:::info

```js
const manager = new ManagerClass();

tables[manager.table] = manager;
```

est équivalent à

```js
tables["item"] = new ItemManager();
```

C'est grâce à cela, que dans nos controllers, nous pouvons accéder à nos gestionnaires de données de la manière suivante :

```js
const browse = async (req, res, next) => {
	try {
		const items = await tables.item.readAll();
		res.json(items);
	} catch (err) {
		next(err);
	}
};
```

:::

### Utilisation d'un Proxy pour la Personnalisation des Erreurs

```js
// Exporter l'instance du Proxy avec une gestion d'erreur personnalisée
module.exports = new Proxy(tables, {
	get(obj, prop) {
		// Vérifier si la propriété (table) existe dans l'objet tables
		if (prop in obj) return obj[prop];

		// Si la propriété (table) n'existe pas, lancer une ReferenceError avec un message d'erreur personnalisé
		throw new ReferenceError(
			`tables.${prop} n'est pas défini. L'avez-vous enregistré dans ${__filename}?`
		);
	},
});
```

Dans cette section, une instance de Proxy est créée avec l'objet `tables` comme cible. Le Proxy est utilisé pour personnaliser les messages d'erreur lors de la tentative d'accès à une table qui n'existe pas. Le piège `get` vérifie si la propriété (table) existe dans l'objet `tables` et renvoie la valeur si elle existe. Sinon, il lance une ReferenceError avec un message d'erreur personnalisé.

---

:::note
En résumé, ce fichier simplifie l'enregistrement des gestionnaires de données. Il suffit de déclarer nos gestionnaires ici `(ItemManager par exemple)` et ils seront pris en compte dans l'ensemble de notre projet.
:::
