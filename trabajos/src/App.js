import'./App.css';
import Navbar from './components/NavBar/Index';
import ItemListContainer from './containers/ItemListContainer';


function App() {

  return (
    <>
    <Navbar/>
    <div className="App">
      <p
      >Bienvenidos a mi Página!
      </p>
    </div>
    <ItemListContainer greeting={"Hola! Bienvenidos a nuestra app!"}/>
    </>
  );
}

export default App;
