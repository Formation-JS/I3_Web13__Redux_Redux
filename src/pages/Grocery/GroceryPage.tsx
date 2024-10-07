import GroceryAddForm from '../../containers/Groceries/GroceryAddForm';
import GroceryList from '../../containers/Groceries/GroceryList';

const GroceryPage = () => {

    return (
        <>
            <h1>Liste de course...</h1>
            <GroceryAddForm />
            <GroceryList />
        </>
    )
}

export default GroceryPage;