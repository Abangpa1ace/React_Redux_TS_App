import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from 'Store';
import { GetPokemon } from './Actions/PokemonAction';

const App: React.FC = () => {
  const [pokemonName, setPokemonName] = useState('');
  const pokemonState = useSelector((state: RootStore) => state.pokemon)
  const dispatch = useDispatch();

  const updateSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonName(event.target.value);
  }

  const submitSearch = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(GetPokemon(pokemonName));
  }
  
  return (
    <div className="App">
      <div>
        <img src={pokemonState.pokemon?.sprites.front_default} alt="pokemon-img" />
        <ul>
          {pokemonState.pokemon?.abilities.map(ability => <li><a href={ability.ability.url}>{ability.ability.name}</a></li>)}
        </ul>
      </div>
      <form onSubmit={submitSearch}>
        <input type="text" onChange={updateSearch} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default App;
