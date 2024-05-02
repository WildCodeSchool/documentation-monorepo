# Parlons du dossier `app`

## Le dossier `app` et l'architecture MVC

Le dossier `app` contient les fichiers et dossiers qui permettent de mettre en place le début de l'architecture MVC (Modèle-Vue-Contrôleur) de notre application server. Cette architecture permet de séparer les données, la logique métier et l'interface utilisateur.

En sachant que n'utilisons pas de vue dans notre application, nous n'aurons pas de dossier `views`. Celui-ci est remplacé par notre dossier `client` de notre framework.

## Contenu du dossier

```txt
app
├── config.js
├── controllers
│   └── itemActions.js
├── routers
│   └── api
│       ├── items
│       │   └── router.js
│       └── router.js
└── services

6 directories, 4 files
```

C'est parti pour la description de chaque fichier et dossier !
