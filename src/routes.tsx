import type { RouteObject } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import GroceryPage from './pages/Grocery/GroceryPage';
import GroceryAddPage from './pages/Grocery/GroceryAddPage';
import App from './App';
import NotFoundPage from './pages/Error/NotFoundPage';
import CountryPage from './pages/Country/CountryPage';
import RecipeLayout from './pages/Recipe/RecipeLayout';
import RecipeIndexPage from './pages/Recipe/RecipeIndexPage';
import RecipeListPage from './pages/Recipe/RecipeListPage';
import RecipeDetailPage from './pages/Recipe/RecipeDetailPage';
import RecipeFormPage from './pages/Recipe/RecipeFormPage';

const routes : RouteObject[] = [
    {
        path: '',
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path:'*', // Si aucunne route match 
                element:<NotFoundPage />
            },
            {
                path: 'grocery',
                element: <GroceryPage />
            },
            {
                path: 'grocery/add',
                element: <GroceryAddPage />
            },
            {
                path: 'country',
                element: <CountryPage />
            },
            {
                path: 'recipe',
                element: <RecipeLayout />,
                children: [
                    { 
                        index: true,
                        element: <RecipeIndexPage />
                    },
                    {
                        path: 'list',
                        element: <RecipeListPage />
                    },
                    {
                        path: 'detail/:id',
                        element: <RecipeDetailPage />
                    },
                    {
                        path: 'add',
                        element: <RecipeFormPage />
                    }
                ]
            }
        ]
    }
];

export default routes;