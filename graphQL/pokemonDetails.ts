import fetchGraphQL from "./fetchGraphQL";

function fetchPokemon_details(name: string) {
    const query = `query pokemon_details($name: String) {
  pokemon_v2_pokemon(where: {name: {_eq: $name}}) {
    name
    id
    pokemon_v2_pokemonstats {
      pokemon_v2_stat {
        name
        game_index
      }
    }
    weight
    pokemon_v2_pokemontypes {
      pokemon_v2_type {
        name
      }
    }
    pokemon_v2_pokemonmoves {
      pokemon_v2_move {
        name
      }
    }
  }
}
  `;

    return fetchGraphQL(query, { name: name }, "pokemon_details");
}

async function main(pokemon: string) {
    const { errors, data } = await fetchPokemon_details(
        pokemon.toLocaleLowerCase()
    );
    if (errors) {
        console.error(errors);
    }

    return { data, errors };
}

export default main;

// all pokemon

// query MyQuery {
//   pokemon_v2_pokemon {
//     name
//     id
//   }
// }

// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png
// https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/1.svg
