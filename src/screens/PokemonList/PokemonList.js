import React from "react";
import { Link } from "react-router-dom";
import { getPokemons } from "api/pokemon";
import Container from "components/Container";
import Header from "components/Header";
import PokemonCard from "components/PokemonCard";
import Spacer from "components/Spacer";
import InfiniteScroll from "components/InfiniteScroll";
import CardListPlaceholder from "components/CardListPlaceholder";

export default class PokemonList extends React.Component {
  state = { pokemons: null, nextPage: null };
  isLoading = false;

  async componentDidMount() {
    this.isLoading = true;
    const { results: pokemons, next: nextPage } = await getPokemons();
    this.setState({ pokemons, nextPage }, () => (this.isLoading = false));
  }

  loadNextPage = async () => {
    const { nextPage } = this.state;
    if (nextPage == null || this.isLoading) return;
    this.isLoading = true;
    const { results, next } = await getPokemons(nextPage);
    this.setState(
      ({ pokemons }) => {
        return { pokemons: [...pokemons, ...results], nextPage: next };
      },
      () => (this.isLoading = false)
    );
  };

  getId = pokemon => pokemon.url.match(/^.*\/(\d+)\/$/)[1];

  render() {
    const { pokemons } = this.state;
    const isLoading = pokemons === null;

    return (
      <>
        <Header>Pokédex</Header>
        <Container>
          {isLoading ? (
            <CardListPlaceholder />
          ) : (
            <>
              {pokemons.map(pokemon => (
                <Spacer top={2} bottom={2} key={pokemon.url}>
                  <Link to={`/pokemon/${this.getId(pokemon)}`}>
                    <PokemonCard pokemon={pokemon} />
                  </Link>
                </Spacer>
              ))}
              <InfiniteScroll
                offset={600}
                onBottomReached={this.loadNextPage}
              />
            </>
          )}
        </Container>
      </>
    );
  }
}
