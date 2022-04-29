import './App.css';
import { images } from './constants';

const App = () => {
  return (
    <>
      <div class="Navegation-Bar">
        <h1>InfoYa</h1>

        <form>
          <input id="SearchBar" placeholder="¿Que estas buscando?" ></input>
          <button>Search</button>
        </form>

        <h2>Menu</h2>
      </div>
    </>
  );
}

export default App;
