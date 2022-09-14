import'./App.css';
import Navbar from './components/NavBar/Index';
// import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';


function App() {

  return (
    <>
    <Navbar/>
    <div className="App">
      <p
      >Bienvenidos a mi Página!
      </p>
    </div>
    {/* <ItemListContainer greeting={"Hola! Bienvenidos a nuestra app!"}/>
     */}
    <ItemDetailContainer/>
    </>
  );
}

export default App;
