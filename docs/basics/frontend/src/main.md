---
sidebar_position: 1
sidebar_label: main.jsx
pagination_label: src/main.jsx
description: Prise en main du fichier main.jsx
---

# main.jsx

Ce fichier est le point d'entrée principal de l'application. Il est responsable de l'initialisation de l'application et de l'insertion de l'élément racine dans le DOM. 

```jsx title="frontend/src/main.jsx"
import React from "react";
import ReactDOM from "react-dom/client";

// Nous utilisons le package react-router-dom pour gérer les routes de notre application
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import de notre composant App
import App from "./App";

// Création de notre router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

// Insertion de notre élément racine dans le DOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendu de notre application
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

## react-router-dom

Nous utilisons le package `react-router-dom` pour gérer les routes de notre application. Il nous permet de définir des routes et de les associer à des composants.

Mais pas seulement, il nous permet également de gérer la navigation entre les différentes routes de notre application.

```jsx title="frontend/src/main.jsx"
import { createBrowserRouter } from "react-router-dom";

/**
 * Exemple de route
 * path: la route
 * element: le composant associé à la route
 */

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);
```

:::info
Pour en savoir plus : [react-router-dom](https://reactrouter.com/en/6.21.1/start/overview)
:::