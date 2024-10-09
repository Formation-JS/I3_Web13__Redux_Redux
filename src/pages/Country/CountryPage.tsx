import CountryRequest from '../../containers/Country/CountryRequest';
import CountryResult from '../../containers/Country/CountryResult';

const CountryPage = () => {

    return (
        <>
            <h1>Recherche les informations d'un pays</h1>
            <CountryRequest />
            <CountryResult />
        </>
    )
}

export default CountryPage;