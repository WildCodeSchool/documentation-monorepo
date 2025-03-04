# Parlons du dossier `database`

## Le dossier `database` et l'architecture de la base de données

Le dossier `database` contient les fichiers et dossiers qui permettent de mettre en place la gestion de la base de données de notre application server. Cette architecture permet de séparer les différentes parties de la base de données pour une meilleure organisation et une maintenance simplifiée.

## Contenu du dossier

```txt
server/database/
├── checkConnection.ts
├── client.ts
├── fixtures
│   ├── AbstractSeeder.ts
│   ├── ItemSeeder.ts
│   └── UserSeeder.ts
└── schema.sql

2 directories, 6 files
```

### Détails

1. **client.ts**
    - Permet de configurer et de se connecter à la base de données.
2. **schema.sql**
    - Contient le schéma de la base de données.
3. **fixtures**
    - Permet de générer des données de test pour la base de données.
