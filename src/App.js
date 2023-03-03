import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './routes/Home/Home';
import ItemList from './routes/ItemList/ItemList';
import ItemDetail from './routes/ItemDetail/ItemDetail';
import NavBarContainer from './components/NavBarContainer/NavBarContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


const App = () => {
  return (
    <div className="App">
    <BrowserRouter>
      <NavBarContainer />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/items" element={<ItemList />}></Route>
        <Route exact path="/items/:id" element={<ItemDetail />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
