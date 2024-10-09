# React 🧡 Redux 🧡 Routing

## Fonctionnalité dans la démo
- Gestion d'une liste de course
  - Ajouter un élément avec ca quantité
  - Cocher un élément
  - Supprimer un élément
  - Vider la liste
- Gestion de recettes
  - Ajouter une recette
  - Supprimer une recette
- BONUS : 
  - Quand on ajoute des ingrédients à une recette, ils sont ajoutés a la liste de course

## Installation
Package pour mettre en place Redux
```
npm i redux @reduxjs/toolkit
```

Package pour lier l'app React et le store Redux
```
npm i react-redux
```

Package pour mettre en place du routing avec "React-router"
```
npm i react-router-dom
```


## Mise en place du store de Redux
- Store Redux
  - Création des *ActionCreators* et du *Reducer* (ou d'un *Slice*)
  - Configuration du store 

- Interaction entre React et Redux
  - Rendre accessible le store dans l'application
  - Acceder au store depuis les composants via des Hooks de "React-redux"

## Mise en place du routing (Client -> SPA)
- Initialiser un composant router « BrowserRouter »
  - Créer les composants "page"
  - Définir le systeme de routing (routes)