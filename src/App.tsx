import { Outlet } from 'react-router-dom';
import './App.css'
import Header from './containers/Header/Header';
import NavBar from './containers/NavBar/NavBar';

function App() {
 
  return (
    <>
      <Header fact='Maintenant avec du routing' />
      <NavBar />

      {/* ↓ Composant de react-router qui permet d'afficher un élément via le routing */}
      <Outlet />
    </>
  )
}

export default App
