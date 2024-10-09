import type { StateStore } from '../../store/store';

import Loader from '../../compenents/Loader/Loader';
import { useSelector } from 'react-redux';

const CountryResult = () => {

    const {isLoading, data, error} = useSelector((state: StateStore) => state.countries);

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : data ? (
                <CountryResultData {...data} />
            ) : error && (
                <p>{error}</p>
            )}
        </>
    );
};

type CountryResultDataProps = { name: string, flag: string, capital: string[] }
const CountryResultData = ({ name, flag, capital } : CountryResultDataProps) => {
    return (
        <>
            <p>{name} {flag}</p>
            <p>Capital : {capital.join(', ')}</p>
        </>
    );
};


export default CountryResult;