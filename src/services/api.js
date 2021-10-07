export const fetchPokemon = async (pokemon) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const resp = await fetch( url );
        const data = await resp.json();
        return data;
    } catch (error) {

    }
}

// listado
export const fetchPokemons = async (limit=4, offset=0) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
        const resp = await fetch( url );
        const data = await resp.json();
        return data;
    } catch (error) {

    }
}

//Detalles
export const getPokemonData = async ( url ) => {
    try {
        const resp = await fetch( url );
        const data = await resp.json();
        return data;
    } catch (error) {

    }

}