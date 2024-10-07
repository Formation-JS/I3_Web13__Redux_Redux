import type { StateStore } from '../../store/store';
import { useSelector } from 'react-redux';

const GroceryList = () => {

    const count = useSelector<StateStore, number>(state => state.groceries.count);
    // const count = useSelector((state : StateStore) => state.groceries.count);

    return (
        <>
            <h2>Liste des course</h2>
            <h3>Nombre d'élément : {count}</h3>

            {/* TODO : Afficher la liste */}
        </>
    )
}

export default GroceryList;