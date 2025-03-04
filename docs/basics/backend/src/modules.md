---
sidebar_position: 2
sidebar_label: modules
pagination_label: src/modules
description: Parlons des modules
---

# modules

Le dossier modules contient les entité de l'application.

Voilà la structure de ce dossier quand on l'initialise :

```plaintext title="server/src/modules"
server/src/modules/
└── item
    ├── itemActions.ts
    └── itemRepository.ts

2 directories, 2 files
```

Parlons de chaque fichier dans les sections suivantes 😁

:::note
Dans les prochaines sections, vous allez rencontrer la syntaxe suivante :

`<entity>Actions.ts` ou `<entity>Repository.ts`, ici, `<entity>` défini un nom générique lié à vos entités.

Par exemple, à l'initialisation du monorepo, nous n'avons que `item` qui est initialisé, du coup, nous avons :

-   itemActions.ts
-   itemRepository.ts

:::
