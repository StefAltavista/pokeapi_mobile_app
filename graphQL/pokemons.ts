import fetchGraphQL from "./fetchGraphQL";

function allPokemons() {
    const query = `query allPokemons {
        pokemon_v2_pokemon {
          name
          id
        }
      }
  `;

    return fetchGraphQL(query, {}, "allPokemons");
}

async function main() {
    const { errors, data } = await allPokemons();
    if (errors) {
        console.error(errors);
    }
    // console.log(JSON.stringify(data, null, 2));
    return { data, errors };
}

export default main;
