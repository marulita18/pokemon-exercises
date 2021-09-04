const getPokeNames = (pokemons) => {
  return pokemons.map((pokemon) => pokemon.name);
};

const getPokemonById = (pokemons, id) => {
  const singlePokemon = pokemons.find((pokemon) => {
    // console.log('ID OF CURRENT POKEMON:', pokemon.id)
    // console.log("ID WE ARE LOOKING FOR:", id)
    return pokemon.id === id;
  });

  return singlePokemon;
};

const getRarePokemons = (pokemons) => {
  const rarePokemon = pokemons.filter((pokemon) => {
    return pokemon.spawn_chance < 0.1;
  });
  return rarePokemon;
};

const getMidSizedPokemon = (pokemons) => {
  const pokemonThatWeights38 = pokemons.find((pokemon) => {
    return pokemon.weight === "38.0 kg";
  });
  return pokemonThatWeights38;
};

const getAdultPokemons = (pokemons) => {
  const adultPokemon = pokemons.filter((pokemon) => {
    return pokemon.egg === "Not in Eggs";
  });
  return adultPokemon;
};

const getPokemonImages = (pokemons) => {
  const pokemonImages = pokemons.map((pokemon) => {
    return pokemon.img;
  });
  return pokemonImages;
};

module.exports = {
  getPokeNames,
  getPokemonById,
  getRarePokemons,
  getMidSizedPokemon,
  getAdultPokemons,
  getPokemonImages,
};
