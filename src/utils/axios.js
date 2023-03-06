import axios from "axios"; 

export const GetPokemon = (url) => {
    return axios.get(url,{})
}

export const GetDetailPokemon = (pokemon) => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`,{})
}