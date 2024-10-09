import React, { useState } from 'react';
import PokemonGrid from './PokemonGrid';

const PokemonApp = () => {
  // Estado para manejar el ID del Pokémon
  const [pokemonId, setPokemonId] = useState(6); 

  return (
    <>
      <h1>Pokémon Finder</h1>
      <PokemonGrid pokemonId={pokemonId} />
    </>
  );
};

export default PokemonApp;
