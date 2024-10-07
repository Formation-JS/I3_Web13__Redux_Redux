import './App.css'
import Header from './containers/Header/Header';
import GroceryPage from './pages/Grocery/GroceryPage';

function App() {
 
  return (
    <>
      <Header fact='Il ne pleut pas' />

      <GroceryPage />
    </>
  )
}

export default App
