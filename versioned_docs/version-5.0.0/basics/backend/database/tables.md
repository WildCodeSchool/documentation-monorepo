---
sidebar_position: 2
sidebar_label: tables.js
pagination_label: app/database/tables.js
description: Prise en main du fichier tables.js
---

# tables.js

Ce fichier contient un script qui facilite l'enregistrement des gestionnaires de données pour différentes tables de la base de données. Il offre une structure modulaire pour gérer les opérations de données sur ces tables.

### Importation des Modules de Gestionnaires

```js title="server/app/database/tables.js"
// Importer les modules des gestionnaires responsables des opérations sur les tables
const ItemRepository = require("./models/ItemRepository");
```

Cette section importe les modules des gestionnaires responsables de traiter les opérations de données sur les tables.

### Initialisation de l'Objet des Gestionnaires de Tables

```js title="server/app/database/tables.js"
// Créer un objet vide pour stocker les gestionnaires de données pour différentes tables
const tables = {};
```

Un objet vide `tables` est créé. Cet objet sera utilisé pour stocker les instances de gestionnaires de tables.

### Enregistrement des Gestionnaires

```js title="server/app/database/tables.js"
// Enregistrer chaque gestionnaire comme point d'accès aux données pour sa table respective
tables.item = new ItemRepository();
```

### Utilisation d'un Proxy pour la Personnalisation des Erreurs

```js title="server/app/database/tables.js"
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
En résumé, ce fichier simplifie l'enregistrement des gestionnaires de données. Il suffit de déclarer nos gestionnaires ici `(ItemRepository par exemple)` et ils seront pris en compte dans l'ensemble de notre projet.
:::
