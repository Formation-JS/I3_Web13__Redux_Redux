import type { Country } from '../../@types/country';
import { createReducer } from '@reduxjs/toolkit';
import { countrySearch } from './countries.action';


type CountriesReducerState = {
    isLoading: boolean;
    data?: Country;
    error?: string;
}

const initialState : CountriesReducerState = {
    isLoading: false,
    data: undefined,
    error: undefined
};


const countriesReducer = createReducer(initialState, builder => {

    builder
        .addCase(countrySearch.pending, (state) => {
            state.isLoading = true;
            state.data = undefined;
            state.error = undefined;
        })
        .addCase(countrySearch.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        .addCase(countrySearch.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message ?? 'Oups !';
        })
});

export default countriesReducer;


