import { Link } from 'react-router-dom';
import GroceryList from '../../containers/Groceries/GroceryList';

const GroceryPage = () => {

    return (
        <>
            <h1>Liste de course </h1>
            <button>
                <Link to='add'>Ajouter un élément</Link>
            </button>
            <GroceryList />
        </>
    )
}

export default GroceryPage;