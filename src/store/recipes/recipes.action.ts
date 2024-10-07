import { nanoid } from 'nanoid';
import type { Recipe, RecipeNew } from '../../@types/recipe';
import { createAction } from '@reduxjs/toolkit';

export const recipeAdd = createAction('recipe/add', (recipe: RecipeNew) => {

    const payload: Recipe = {
        ...recipe,
        id: nanoid()
    };

    return { payload };
});

export const recipeDelt = createAction<string>('recipe/delt');