---
sidebar_position: 2
sidebar_label: App.tsx
pagination_label: src/App.tsx
description: Prise en main du fichier App.tsx
---

# App.tsx

Notre `App.tsx` que nous avons par défaut, est le composant principal de notre application. Il est responsable de l'affichage de notre application.

:::note

Je vous rappel le contenu de notre fichier `main.jsx` :

Il y a sur la route principale `/` notre composant `App.tsx` qui est affiché.

```jsx title="client/src/main.jsx"
// Création de notre router
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
]);
```

:::
