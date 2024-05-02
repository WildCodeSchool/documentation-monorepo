---
sidebar_position: 3
sidebar_label: router.js
pagination_label: app/routers/api/router.js
description: Prise en main du fichier router.js
---

# router.js

Ce fichier permet de définir toutes nos routes de l'API.

## Usage

Nous allons importer nos contrôleurs et définir nos routes ici.

```js title="server/app/routers/api/router.js"
const express = require("express");
const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

/* ************************************************************************* */

module.exports = router;
```

:::note
Le router se divise en plusieurs parties, en effet, pour une meilleure organisation, chaque partie du router est séparée dans un dossier spécifique. Ces dossiers contiendront des fichiers `router.js` sont ensuite importés dans le fichier principal `router.js`.

Ex: `routers/api/items/router.js`, `routers/api/users/router.js`, `routers/api/auth/router.js`, etc.

Le fichier `router.js` principal se trouve dans `routers/api/router.js` et importe tous les autres fichiers `router.js` des dossiers spécifiques.
:::
