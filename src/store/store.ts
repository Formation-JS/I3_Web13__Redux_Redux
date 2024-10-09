import { configureStore } from '@reduxjs/toolkit';
import groceriesReducer from './groceries/groceries.reducer';
import recipesReducer from './recipes/recipes.reducer';
import countriesReducer from './countries/countries.reducer';

//! Configuration du store de Redux
export const store = configureStore({
    reducer: {
        groceries : groceriesReducer,
        recipes : recipesReducer,
        countries: countriesReducer
    },
    devTools: import.meta.env.DEV
});

// Export du typage pour l'utilisation de Redux
export type AppStore = typeof store;
export type StateStore = ReturnType<AppStore['getState']>;

// Export du store
export default store;
