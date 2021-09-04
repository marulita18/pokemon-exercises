const getGymLeader = (gym, trainers) => {
  const { trainerId } = gym;
  const gymLeader = trainers.find((trainer) => {
    return trainer.id === trainerId;
  });
  return gymLeader;
};

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
  //   console.log("Trainer pokemons are:", qtrainerPokemons);
  return trainerPokemons;
};

const getTrainersPokemons = (trainers, pokemons) => {
//  const { pokemonIds } = trainers;
//  const trainersPokemons =
//
//}

const getBigGyms = (gyms, trainers) => {
  const { city } = gyms;
  console.log("the gyms are", gyms)
  const bigGyms = gyms.filter((gym) => {
    return 
  });
};

const getRarestGym = (gyms, trainers, pokemons) => {};

module.exports = {
  getGymLeader,
  getTrainerPokemons,
  getTrainersPokemons,
  getBigGyms,
  getRarestGym,
};
