import type { Grocery } from '../../@types/grocery';
import { createReducer } from '@reduxjs/toolkit';
import { groceryAdd, groceryCheck, groceryClear, groceryDelt } from './groceries.action';


//! Reducer => Méthode qui résoud une action en modifiant le state du store

export type GroceriesReducerState = {
    list: Grocery[];
    count: number;
};

const initialState: GroceriesReducerState = {
    list: [],
    count: 0
};

const groceriesReducer = createReducer(initialState, builder => {

    builder
        .addCase(groceryAdd, (state, action) => {
            state.list.push(action.payload);
            state.count++;
        })
        .addCase(groceryCheck, (state, action) => {
            const id = action.payload;

            const target = state.list.find(g => g.id === id);
            if (target) {
                target.isCheck = true;
            }
        })
        .addCase(groceryDelt, (state, action) => {
            const id = action.payload;

            state.list = state.list.filter(g => g.id !== id);
            state.count = state.list.length;
        })
        .addCase(groceryClear, (state) => {
            state.list = [];
            state.count = 0;
        });
});

export default groceriesReducer;