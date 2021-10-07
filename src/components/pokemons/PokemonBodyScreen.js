import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm'
import { PokemonCard } from './PokemonCard';
import { PokemonCardDetail } from './PokemonCardDetail';
import { fetchPokemon } from '../../services/api';

export const PokemonBodyScreen = ({pokemons, setReload}) => {

    const [selectedPokemon, setSelectedPokemon] = useState();
    const [formValues, handleInputChange] = useForm({searchPokemon: ''});
    const { searchPokemon } = formValues;
    const [pokemonsSearch, setPokemonsSearch] = useState([]);
    const [notFound, setNotFound] = useState(false);
    
    const onSearch = async (pokemon) => {
        if (!pokemon) {
            setPokemonsSearch([]);
            setReload(true);
            setNotFound(false);
        } else {
            try {
                const result = await fetchPokemon(pokemon.toLowerCase());
                if (!result) {                    
                    setNotFound(true);
                } else {
                    setPokemonsSearch([result]);
                    setNotFound(false);
                }
            } catch (err) {
                setNotFound(true);
            }
        }
      };

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(formValues.searchPokemon);
    }

    const handleClick = (pokemonDetail) => {
        setSelectedPokemon(pokemonDetail);
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <form onSubmit={handleSearch} className='container'>
                        <input
                            type='text'
                            placeholder='Buscar'
                            className='form-control'
                            name='searchPokemon'
                            value={searchPokemon}
                            onChange={handleInputChange}
                            autoComplete='off'
                        />
                    </form>

                    <div className="pokemons-grid"> 
                        {/* para listar todos los pokemones */}
                        { !pokemons.loading && pokemonsSearch.length ===0 &&
                            pokemons.data.map((pokemon, idx) => (
                                <PokemonCard 
                                    key={idx}
                                    pokemon={pokemon}
                                    handleClick={handleClick}
                                />
                             ))
                        }
                        {/* para la busqueda del pokemon */}
                        { pokemonsSearch.length > 0 &&
                            <PokemonCard                                     
                                pokemon={pokemonsSearch[0]}
                                handleClick={handleClick}
                            />                        
                        }
                        { notFound &&
                            <h2>No enconrado</h2>
                        }
                        { pokemons.loading &&
                            <div>Cargando...</div>
                        }
                    </div>
                </div>


                
                <div className='col-6'>
                    {selectedPokemon &&
                    <PokemonCardDetail selectedPokemon={selectedPokemon}/>

                    }

                </div>
            </div>
        </div>
    )
}
