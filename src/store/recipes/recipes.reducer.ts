import type { Recipe } from '../../@types/recipe';
import { createReducer } from '@reduxjs/toolkit';
import { recipeAdd, recipeDelt } from './recipes.action';

export type RecipesReducerState = {
    list: Recipe[];
};

const initialState: RecipesReducerState = {
    list: []
};

const recipesReducer = createReducer(initialState, builder => {

    builder
        .addCase(recipeAdd, (state, action) => {
            const recipe = action.payload;
            state.list.push(recipe);
        })
        .addCase(recipeDelt, (state, action) => {
            const recipeId = action.payload;
            state.list = state.list.filter(r => r.id !== recipeId);
        });
});

export default recipesReducer;