# Parlons du dossier `src`

## Le dossier `src` et l'architecture modulaire

Le dossier `src` contient les fichiers et dossiers qui permettent de mettre en place le début de l'architecture modulaire de notre application server. Cette architecture permet de séparer les données, la logique métier et l'interface utilisateur.

En sachant que n'utilisons pas de vue dans notre application, nous n'aurons pas de dossier dédiée. Celui-ci est remplacé par notre dossier `client` de notre framework.

## Contenu du dossier

```txt
server/src/
├── app.ts
├── main.ts
├── modules
│   └── item
│       ├── itemActions.ts
│       └── itemRepository.ts
├── router.ts
└── types
    └── express
        └── index.d.ts

5 directories, 6 files
```

C'est parti pour la description de chaque fichier et dossier !
