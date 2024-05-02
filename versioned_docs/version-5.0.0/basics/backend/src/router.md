---
sidebar_position: 2
sidebar_label: router.js
pagination_label: src/router.js
description: Prise en main du fichier router.js
---

# router.js

Ce fichier permet de définir toutes nos routes de l'API.

## Usage

Nous allons importer nos contrôleurs et définir nos routes ici.

```js title="backend/src/router.js"
const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");

// Route to get a list of items
router.get("/items", itemControllers.browse);

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);

// Route to add a new item
router.post("/items", itemControllers.add);

/* ************************************************************************* */

module.exports = router;
```

