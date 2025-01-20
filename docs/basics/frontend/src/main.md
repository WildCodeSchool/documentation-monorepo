---
sidebar_position: 1
sidebar_label: main.tsx
pagination_label: src/main.tsx
description: Prise en main du fichier main.tsx
---

# main.tsx

Ce fichier est le point d'entrée principal de l'application. Il est responsable de l'initialisation de l'application et de l'insertion de l'élément racine dans le DOM.

```tsx title="frontend/src/main.tsx"// Import necessary modules from React and React Router
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

/* ************************************************* */
import App from "./App";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
]);

/* ************************************************* */

// Find the root element in the HTML document
const rootElement = document.getElementById("root");
if (rootElement == null) {
	throw new Error(
		`Your HTML Document should contain a <div id="root"></div>`
	);
}

// Render the app inside the root element
createRoot(rootElement).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
```

## react-router-dom

Nous utilisons le package **`react-router-dom`** pour gérer la navigation de notre application React. Cet outil permet de définir des routes et de les associer à des composants spécifiques, tout en offrant des fonctionnalités avancées telles que la navigation programmatique, la gestion des paramètres d'URL et la hiérarchie des routes.

Grâce à `react-router-dom`, nous pouvons structurer notre application en différentes vues et gérer la navigation sans rechargement de page, offrant ainsi une expérience utilisateur fluide.

### Exemple de configuration de route de base

Dans l'exemple ci-dessous, nous définissons une route pour la racine (`"/"`) de notre application, qui affiche le composant `App` :

```tsx title="frontend/src/main.tsx"
import { createBrowserRouter } from "react-router-dom";
import App from "./App";

/**
 * Configuration des routes principales de l'application
 * path: définit l'URL de la route
 * element: spécifie le composant à afficher pour cette route
 */

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
]);

export default router;
```

### Gestion des routes imbriquées

L'architecture de notre application permet également de définir des **routes imbriquées**, où certaines pages peuvent être affichées à l'intérieur d'une vue parent.

Dans l'exemple suivant, nous avons une route parent `/` qui affiche le composant `App`, et une sous-route `/about` pour le composant `About` :

```tsx title="frontend/src/main.tsx"
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./About";

/**
 * Exemple de routes imbriquées
 * La route "/about" est un enfant de la route "/"
 */

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "about",
				element: <About />,
			},
		],
	},
]);

export default router;
```

Dans cette configuration :

-   Lorsqu'un utilisateur accède à `/`, le composant `App` est affiché.
-   Lorsqu'il navigue vers `/about`, le composant `About` est affiché **dans la mise en page** définie par `App`.

### Navigation entre les pages

Pour naviguer entre les différentes pages de l'application, nous utilisons le composant **`<Link>`** fourni par `react-router-dom` :

```tsx
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav>
			<Link to="/">Accueil</Link>
			<Link to="/about">À propos</Link>
		</nav>
	);
}
```

:::info
Pour en savoir plus : [react-router-dom](https://reactrouter.com/en/6.21.1/start/overview)
:::
