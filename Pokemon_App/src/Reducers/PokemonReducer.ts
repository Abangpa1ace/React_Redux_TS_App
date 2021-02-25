import { PokemonDispatchTypes, PokemonInfo, POKEMON_LOADING, POKEMON_SUCCESS, POKEMON_FAIL } from "Actions/PokemonActionTypes";

interface StateI {
  loading: boolean,
  pokemon?: PokemonInfo,
}

const initialState: StateI = {
  loading: false,

};

const PokemonReducer = (state: StateI = initialState, action: PokemonDispatchTypes): StateI => {
  switch(action.type) {
    case POKEMON_LOADING:
      return {
        loading: true,
      }
    case POKEMON_FAIL: 
      return {
        loading: false,
      }
    case POKEMON_SUCCESS:
      return {
        loading: false,
        pokemon: action.payload
      }
    default:
      return state;
    }
}

export default PokemonReducer;