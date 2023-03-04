import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemList from './routes/ItemList/ItemList';
import ItemDetail from './routes/ItemDetail/ItemDetail';
import NavBarContainer from './components/NavBarContainer/NavBarContainer';


const App = () => {
  return (
    <div className="App">
    <BrowserRouter>
      <NavBarContainer />
      <Routes>
        <Route exact path="/" element={<ItemList />}></Route>
        <Route exact path="/category/:id" element={<ItemList />}></Route>
        <Route exact path="/item/:id" element={<ItemDetail />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
