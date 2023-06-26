import './App.scss';
import { ItemPage } from './components/ItemPage/ItemPage';
import { Basket } from './components/basket/Basket';
import { Header } from './components/header/Header';
import { ItemList } from './components/items/ItemsList';

function App() {

  return (
    <div>
      <Header />
      <ItemList />

      {/* <ItemPage /> */}
      <Basket />
    </div>
  )
}

export default App
