# Parlons du dossier `database`

## Le dossier `database` et l'architecture de la base de données

Le dossier `database` contient les fichiers et dossiers qui permettent de mettre en place la gestion de la base de données de notre application server. Cette architecture permet de séparer les différentes parties de la base de données pour une meilleure organisation et une maintenance simplifiée.

## Contenu du dossier

```txt
database
├── client.js
├── fixtures
│   ├── AbstractSeeder.js
│   ├── ItemSeeder.js
│   └── UserSeeder.js
├── models
│   ├── AbstractRepository.js
│   └── ItemRepository.js
├── schema.sql
└── tables.js

3 directories, 8 files
```

### Détails

1. **client.js**
    - Permet de configurer et de se connecter à la base de données.
2. **schema.sql**
    - Contient le schéma de la base de données.
3. **fixtures**
    - Permet de générer des données de test pour la base de données.
4. **models**
    - Permet de définir les modèles de données pour les différentes tables de la base de données.
