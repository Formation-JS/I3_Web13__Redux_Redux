import { useDispatch } from 'react-redux';
import { GroceryNew } from '../../@types/grocery';
import GroceryForm from '../../compenents/GroceryForm/GroceryForm';
import { groceryAdd } from '../../store/groceries/groceries.action';

//! Composant pour interagir avec le store Redux
const GroceryAddForm = () => {

    //! Acces au dispatcher du store
    const dispatch = useDispatch();

    const handleGrocerySubmit = (data: GroceryNew) => {

        //! Envoyer une action au store via le dispatch
        //? - L'object "Action" à envoyé
        const action = groceryAdd(data);
        //? - Utilisation du "dispatch"
        dispatch(action);

        //! Version raccourci
        //dispatch(groceryAdd(data));
    }

    return (
        <>
            <h2>Ajouter un produit</h2>
            <GroceryForm onGrocerySubmit={handleGrocerySubmit} />
        </>
    )
}

export default GroceryAddForm;