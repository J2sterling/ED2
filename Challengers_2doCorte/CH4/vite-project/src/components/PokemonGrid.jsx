import React, { useState, useEffect } from 'react';

const PokemonGrid = ({ pokemonId }) => {
  // Estado para almacenar los datos del Pokémon
  const [pokemonData, setPokemonData] = useState(null);

  // Función asíncrona para obtener los datos del Pokémon desde la API
  const getPokemonData = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  // useEffect para llamar a la función de obtener Pokémon cuando se monte el componente
  useEffect(() => {
    getPokemonData(pokemonId)
      .then((data) => {
        console.log(data); // Imprime en consola los datos obtenidos
        setPokemonData(data); // Actualiza el estado con los datos del Pokémon
      })
      .catch((error) => console.error(error));
  }, [pokemonId]);

  // Si no hay datos, mostrar un mensaje de carga
  if (!pokemonData) {
    return <p>Loading...</p>;
  }

  // Mostrar los datos del Pokémon
  return (
    <div className="pokemon-grid">
      <h3>{pokemonData.name}</h3>
      <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
      <p>Height: {pokemonData.height}</p>
      <p>Weight: {pokemonData.weight}</p>
      <p>Base experience: {pokemonData.base_experience}</p>
    </div>
  );
};

export default PokemonGrid;
