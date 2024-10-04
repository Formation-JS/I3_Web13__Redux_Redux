import type { Grocery, GroceryNew } from '../../@types/grocery';

import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';


//! Action Creator => Fonction qui créer un objet "Action"

export const groceryAdd = createAction('grocery/add', (elem: GroceryNew) => {
    // Dans le "action creator", vous pouvez générer des valeurs "aleatoire/dynamique"
    const payload : Grocery = {
        ...elem,
        id: nanoid(),
        isCheck: false
    }

    return {  payload }
});

export const groceryCheck = createAction<string>('grocery/check');

export const groceryDelt = createAction<string>('grocery/delt');

export const groceryClear = createAction('grocery/clear');