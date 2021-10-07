import { useState, useEffect } from "react";
import {fetchPokemons, getPokemonData} from '../services/api'

export const useFetchPokemons = () => {
    const [state, setState] = useState({
        data: [],
        total: 0,
        loading: true
    });
    const [page, setPage] = useState(0);
    const [reload, setReload] = useState(false);

    const getPokemons = async () => {
        try {
            setState({
                ...state,
                loading: true
            })
            const data = await fetchPokemons(4, 4 * page);
            const promises = data.results.map(async (pokemon) => {
                return await getPokemonData(pokemon.url);
            });
            const results = await Promise.all(promises);
            setState({
                data: results,
                total: data.count,
                loading: false
            });
        } catch (error) {
        }
    }
    useEffect(() => {
        getPokemons();
    }, [page, reload]);


    return [state, page, setPage, setReload];
}