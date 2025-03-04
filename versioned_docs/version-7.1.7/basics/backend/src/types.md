---
sidebar_position: 6
sidebar_label: types.ts
pagination_label: src/types/express/index.d.ts
description: Comprendre le fichier index.d.ts
---

# index.d.ts

Le fichier `index.d.ts` se trouvant dans `server/src/types/express/index.d.ts` permet de modifier un type d'express dans l'ensemble de notre projet

```ts title="server/src/types/express/index.d.ts"
// to make the file a module and avoid the TypeScript error
export type {};

declare global {
	namespace Express {
		// Nous allons ajouter des propriétés
		// custom à notre type Request d'express.
		export interface Request {
			/* *************************************** */
			// user?: { ... }
			/* *************************************** */
		}
	}
}
```

:::info
Il est possible aussi d'avoir d'autres fichiers en `*.d.ts` qui permet d'avoir la déclaration de type dans l'ensemble du projet ! Du coup, pas d'avoir à l'importer !
:::
