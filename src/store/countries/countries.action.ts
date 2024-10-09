import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCountryByName } from '../../services/country.service';


export const countrySearch = createAsyncThunk(
    'country/search',
    async (name: string) => {
        // Appel de la requete ajax (via un service dans cette démo)
        const result = await fetchCountryByName(name);
        // Envoi du resultat
        return result;
    }
);

// export const countrySearch = createAsyncThunk(
//     'country/search',
//     (name: string) => fetchCountryByName(name)
// );

