import { Routes, Route } from 'react-router-dom';

import { ItemPage } from './components/ItemPage/ItemPage';
import { ItemList } from './components/items/ItemsList';

import './App.scss';
import { Layout } from './components/Layout';

function App() {

  return (
    <div>  
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<ItemList />} />
          <Route path='/:model' element={<ItemPage />} />
          <Route path='*' element={<p>This page is not exist</p>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
