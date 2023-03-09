import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemListContainer from './routes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './routes/ItemDetailContainer/ItemDetailContainer';
import NavBarContainer from './components/NavBarContainer/NavBarContainer';


const App = () => {
  return (
    <div className="App">
    <BrowserRouter>
      <NavBarContainer />
      <Routes>
        <Route exact path="/" element={<ItemListContainer />}></Route>
        <Route exact path="/category/:id" element={<ItemListContainer />}></Route>
        <Route exact path="/item/:id" element={<ItemDetailContainer />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
