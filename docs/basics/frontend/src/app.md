---
sidebar_position: 2
sidebar_label: App.tsx
pagination_label: src/App.tsx
description: Prise en main du fichier App.tsx
---

# App.tsx

Notre `App.tsx` que nous avons par défaut, est le composant principal de notre application. Il est responsable de l'affichage de notre application.

Vous pouvez le supprimer et le remplacer par votre propre composant principal.

```tsx title="client/src/App.tsx"
function App() {
	return (
		<div>
			<h1>Mon application</h1>
			<p>Bienvenue sur mon application</p>
		</div>
	);
}

export default App;
```

:::note
Je vous rappel le contenu de notre fichier `main.tsx` :

Il y a sur la route principale `/` notre composant `App.tsx` qui est affiché.

```jsx title="client/src/main.tsx"
// Création de notre router
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
]);
```

:::
