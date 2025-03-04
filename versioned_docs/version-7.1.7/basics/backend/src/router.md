---
sidebar_position: 5
sidebar_label: router.ts
pagination_label: src/router.ts
description: Prise en main du fichier router.ts
---

# router.ts

Ce fichier permet de définir toutes nos routes de l'API.

## Usage

Nous allons importer nos actions et définir nos routes ici.

```ts title="server/src/router.ts"
import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

/* ************************************************************************* */

export default router;
```
