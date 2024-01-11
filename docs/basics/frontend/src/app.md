---
sidebar_position: 2
sidebar_label: App.jsx
pagination_label: src/App.jsx
description: Prise en main du fichier App.jsx
---

# App.jsx

Notre `App.jsx` que nous avons par défaut, est le composant principal de notre application. Il est responsable de l'affichage de notre application.

```jsx title="frontend/src/App.jsx"
// import de notre composant Counter
import Counter from "./components/Counter";

// import de notre logo
import logo from "./assets/logo.svg";

// import de notre fichier css
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React !</p>

          {/* Utilisation de notre composant Counter */}
        <Counter />

        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
```

:::note

Je vous rappel le contenu de notre fichier `main.jsx` :

Il y a sur la route principale `/` notre composant `App.jsx` qui est affiché.

```jsx title="frontend/src/main.jsx"
// Création de notre router
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
]);
```
:::