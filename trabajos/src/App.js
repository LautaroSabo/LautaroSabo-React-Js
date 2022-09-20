import'./App.css';
import Navbar from './components/NavBar/Index';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import {Route, BrowserRouter, Routes,} from "react-router-dom";
import NotFound from './components/NotFound';
import Cart from './containers/cartContainer';


function App() {

  return (
    <BrowserRouter> 
    <Navbar/>
    <Routes>
      <Route path='/' element= {<ItemListContainer/>}/>
      <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
      <Route path='/detail/:productId' element={<ItemDetailContainer/>}/> 
      <Route path='*' element={<NotFound/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes> 
    </BrowserRouter>
  );
}

export default App;
