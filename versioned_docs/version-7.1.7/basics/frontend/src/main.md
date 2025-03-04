---
sidebar_position: 1
sidebar_label: main.tsx
pagination_label: src/main.tsx
description: Prise en main du fichier main.tsx
---

# main.tsx

Ce fichier est le point d'entrée principal de l'application. Il est responsable de l'initialisation de l'application et de l'insertion de l'élément racine dans le DOM.

```tsx title="client/src/main.tsx"
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

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
const rootElement = document.getElementById("root");
if (rootElement == null) {
	throw new Error(
		`Your HTML Document should contain a <div id="root"></div>`
	);
}

// Rendu de notre application
createRoot(rootElement).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
```

## react-router-dom

Nous utilisons le package `react-router-dom` pour gérer les routes de notre application. Il nous permet de définir des routes et de les associer à des composants.

Mais pas seulement, il nous permet également de gérer la navigation entre les différentes routes de notre application.

```jsx title="frontend/src/main.tsx"
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
