# Parlons du dossier `src`

## Le dossier `src` et l'architecture MVC

Le dossier `src` contient les fichiers et dossiers qui permettent de mettre en place l'architecture MVC (Modèle-Vue-Contrôleur) de notre application backend. Cette architecture permet de séparer les données, la logique métier et l'interface utilisateur.

En sachant que n'utilisons pas de vue dans notre application, nous n'aurons pas de dossier `views`. Celui-ci est remplacé par notre dossier `frontend` de notre framework.

## Contenu du dossier

```txt
src
├── app.js
├── controllers
│   └── itemControllers.js
├── models
│   ├── AbstractManager.js
│   └── ItemManager.js
├── router.js
├── services
│   └── .gitkeep
└── tables.js
```

C'est parti pour la description de chaque fichier et dossier !
