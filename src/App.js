import { PokemonBodyScreen } from './components/pokemons/PokemonBodyScreen';
import { useFetchPokemons } from './hooks/useFetchPokemons';
import { Navbar } from './components/navbar/Navbar';
import { Pagination } from './components/pagination/Pagination';
import './App.css';

function App() {
  const [pokemons, page, setPage, setReload] = useFetchPokemons();
  const paginaAnterior = () => {
    setPage(page <= 0 ? 0 : page - 1);
  }
  const paginaSiguiente = () => {
    const totalPaginas = pokemons.total / 4;
    setPage( page < totalPaginas ?  page + 1 : page );
  }
  return (
    <div className="App">
      <Navbar/> 
      <PokemonBodyScreen setReload={setReload} pokemons={pokemons}/>
      <Pagination onIzquierdaClick={paginaAnterior} onDerechaClick={paginaSiguiente} />
    </div>
  );
}

export default App;
