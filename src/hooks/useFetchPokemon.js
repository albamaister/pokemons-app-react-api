// import { useState, useEffect } from "react";
// import {fetchPokemon} from '../services/api'

// export const useFetchPokemon = (pokemon) => {
//     const [state, setState] = useState({
//         data: [],
//         total: 0,
//         loading: true
//     });
//     const getPokemon = async () => {
//         try {
//             setState({
//                 ...state,
//                 loading: true
//             })
//             const data = await fetchPokemon(pokemon);
//             setState({
//                 data: [...data],
//                 loading: false
//             });
//         } catch (error) {
//         }
//     }
//     useEffect(() => {
//         getPokemon();
//     }, []);


//     return [state];
// }