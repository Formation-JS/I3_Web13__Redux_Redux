import type { Grocery } from '../../@types/grocery';
import { groceryCheck, groceryDelt } from '../../store/groceries/groceries.action';
import type { StateStore } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';

const GroceryList = () => {

    // const count = useSelector<StateStore, number>(state => state.groceries.count);
    // const count = useSelector((state : StateStore) => state.groceries.count);

    const { count, list: groceries } = useSelector((state : StateStore) => state.groceries);

    return (
        <>
            <h2>Liste des course</h2>
            <h3>Nombre d'élément : {count}</h3>

            {groceries.map(grocery => (
                <GroceryListItem {...grocery} key={grocery.id} />
            ))}
        </>
    )
}

const GroceryListItem = ({id, isCheck, name, quantity } : Grocery) => {

    const dispatch = useDispatch();

    const handleCheck = () => {
        dispatch(groceryCheck(id));
    }

    const handleDelt = () => {
        dispatch(groceryDelt(id));
    }

    return (
        <div style={{border: 'solid 0.1ch black', marginBottom: '1ch'}}>
            <p>[{isCheck ? 'V' : ' '}] {name} {quantity}</p>

            <button onClick={handleCheck}>Check</button>
            <button onClick={handleDelt}>Supprimer</button>
        </div>
    )
}



export default GroceryList;