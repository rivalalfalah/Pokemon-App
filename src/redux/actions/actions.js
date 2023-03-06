import ACTION_STRING from './actionStrings';
import { GetDetailPokemon} from '../../utils/axios';

const DetailPending = () => ({
    type: ACTION_STRING.pokemon.concat(ACTION_STRING.pending)
})

const DetailRejected = (error) => ({
    type: ACTION_STRING.pokemon.concat(ACTION_STRING.reject),
    payload: {error}
})

const DetailFullfiled = (data) => ({
    type: ACTION_STRING.pokemon.concat(ACTION_STRING.Fulfilled),
    payload: {data}
})

const DetailThunk = (pokemon) => {
    return async dispatch => {
        try {
            dispatch(DetailPending())
            const result = await GetDetailPokemon(pokemon)
            console.log(result.data)
            dispatch(DetailFullfiled(result.data))   
        } catch (error) {
            dispatch(DetailRejected(error))
        }
    }
}

const action = {
    DetailThunk
}

export default action