import { useDispatch } from 'react-redux';
import SearchBar from '../../compenents/SearchBar/SearchBar';
import { countrySearch } from '../../store/countries/countries.action';

const CountryRequest = () => {

    const dispatch = useDispatch<any>();

    const handleSearch = (name : string) => {
        dispatch(countrySearch(name));
    };

    return (
        <>
            <SearchBar onSearch={handleSearch} />
        </>
    );
}

export default CountryRequest;