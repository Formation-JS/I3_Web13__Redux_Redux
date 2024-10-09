import { Outlet } from 'react-router-dom';

const RecipeLayout = () => {

    return (
        <>
            <h1>Recette 🍽️</h1>
            <hr />
            <Outlet />
        </>
    )
}

export default RecipeLayout;