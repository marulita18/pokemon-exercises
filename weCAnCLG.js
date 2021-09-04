const pokemons = require("./pokeData");
const trainers = require("./trainerData");
const gyms = require("./gymData");

const trainer = trainers[3];

const getTrainerPokemons = (trainer, pokemons) => {
  const { pokemonIds } = trainer;
  //console.log("Pokemons Ids:", pokemonIds);

  const trainerPokemons = pokemonIds.map((pokemonId) => {
    // console.log("ID", pokemonId);
    const pokemonFound = pokemons.find((pokemon) => {
      //   console.log(
      //     `Is ${pokemon.id} equal to ${pokemonId}:`,
      //     pokemon.id === pokemonId
      //   );
      return pokemon.id === pokemonId;
    });
    // console.log("pokemon:", pokemonFound);
    return pokemonFound;
  });
  //   console.log("Trainer pokemons are:", trainerPokemons);
  return trainerPokemons;
};

getTrainerPokemons(trainer, pokemons);

const getTrainersPokemons = (trainers, pokemons) => {
  const { pokemonIds } = trainers;
  console.log("pokemon ids are", pokemonIds);
};

getTrainerPokemons();

const getBigGyms = (gyms, trainers) => {
  const { city } = gyms;
  console.log("the gyms are", gyms);
  const bigGyms = gyms.filter((gym) => {
    return;
  });
};
