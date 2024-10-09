import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

//! Import du necessaire pour utiliser le store de Redux
import store from './store/store.ts';
import { Provider } from 'react-redux';

//! Mise en place du routing
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes.tsx';

const router = createBrowserRouter(routes);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
