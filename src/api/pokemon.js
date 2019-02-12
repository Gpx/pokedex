async function fetchResource(resource) {
  const response = await fetch(resource);
  return response.json();
}

export function getPokemons(url) {
  return fetchResource(url ? url : "https://pokeapi.co/api/v2/pokemon/");
}

export async function getPokemon(pokemon) {
  const url =
    typeof pokemon === "string"
      ? `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      : pokemon.url;
  const data = await fetchResource(url);
  const { color } = await fetchResource(data.species.url);
  return { ...data, color };
}
