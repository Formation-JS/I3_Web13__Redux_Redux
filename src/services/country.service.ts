import axios from 'axios';
import type { Country, CountryRequestResult } from '../@types/country';

const BASE_URL = 'https://restcountries.com/v3.1/name/__NAME__';

export async function fetchCountryByName(name: string) : Promise<Country> {

    const url = BASE_URL.replace('__NAME__', name);
    const response = await axios.get<CountryRequestResult>(url)

    const data = response.data[0];

    return {
        name: data.name.common,
        officialName : data.name.official,
        shortName: data.cca2,
        capital : data.capital,
        flag: data.flag,
        currencies : Object.values(data.currencies)
    };
};