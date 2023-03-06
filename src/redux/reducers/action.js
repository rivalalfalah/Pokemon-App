import ACTION_STRING from '../actions/actionStrings';

const initialState = {
  isError: false,
  isLoading: false,
  isFullfiled: false,
  error: null,
  pokemon: {
    image: {
      front: '',
      back: '',
    },
    name: '',
    baseExp: [],
    height: '',
    weight: '',
    types: [],
    moves: [],
    abilities: [],
    stats: [],
  },
};

const actionReducers = (prevState = initialState, {type, payload}) => {
  const {pokemon, Fulfilled, reject, pending} = ACTION_STRING;

  switch (type) {
    case pokemon + pending:
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFullfiled: false,
        error: null,
      };
    case pokemon + reject:
      return {
        ...prevState,
        isLoading: false,
        isFullfiled: false,
        isError: true,
        error: payload.error.response.data.msg,
      };
    case pokemon + Fulfilled:
      console.log(payload.data)
      return {
        ...prevState,
        isLoading: false,
        isFullfiled: true,
        isError: false,
        pokemon: {
          image: {
            front: payload.data.sprites.front_default,
            back: payload.data.sprites.back_default,
          },
          name: payload.data.name,
          baseExp: payload.data.base_experience,
          height: payload.data.height,
          weight: payload.data.weight,
          types: payload.data.types,
          moves: payload.data.moves,
          abilities: payload.data.abilities,
          stats: payload.data.stats,
        },
      };

    default:
      return prevState;
  }
};

export default actionReducers;
