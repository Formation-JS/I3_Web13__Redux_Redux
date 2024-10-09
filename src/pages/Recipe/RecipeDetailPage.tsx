import { useParams } from 'react-router-dom';

const RecipeDetailPage = () => {

    const { id } = useParams();

    return (
        <>
            <h2>Detail d'un recette</h2>

            <p>Bah... la recette quoi ¯\_(ツ)_/¯</p>
            <p>Celle de l'id {id}</p>
        </>
    )
}

export default RecipeDetailPage;