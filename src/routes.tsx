import type { RouteObject } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import GroceryPage from './pages/Grocery/GroceryPage';
import GroceryAddPage from './pages/Grocery/GroceryAddPage';
import App from './App';
import NotFoundPage from './pages/Error/NotFoundPage';

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
            }
        ]
    }
];

export default routes;