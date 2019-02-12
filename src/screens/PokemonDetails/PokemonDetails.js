import React from "react";
import { withRouter } from "react-router-dom";
import getColor from "utils/getColor";
import { getPokemon } from "api/pokemon";
import Panel from "components/Panel";
import Spacer from "components/Spacer";
import Card from "components/Card";
import Container from "components/Container";
import {
  Image,
  ImagePlaceholder,
  CloseButton,
  Name,
  Id,
  StatItem,
  Stats
} from "./styles";

class PokemonDetails extends React.Component {
  state = { pokemon: null };

  async componentDidMount() {
    const pokemon = await getPokemon(this.props.match.params.id);
    this.setState({ pokemon });
  }

  getColor = () => getColor(this.state.pokemon.color.name);

  getHp = () =>
    this.state.pokemon.stats.find(({ stat }) => stat.name === "hp").base_stat;

  render() {
    const { pokemon } = this.state;
    const isLoading = pokemon == null;

    return (
      <Panel background={isLoading ? undefined : this.getColor()}>
        <CloseButton to="/pokemon" />
        <Spacer top={4}>
          {isLoading ? (
            <ImagePlaceholder />
          ) : (
            <>
              <Image src={pokemon.sprites.front_default} />
              <Spacer bottom={2} />
              <Container>
                <Card>
                  <Spacer top={2} bottom={2} left={1} right={1}>
                    <Name>
                      <Id>{pokemon.id}</Id> {pokemon.name}
                    </Name>
                    <Spacer bottom={2} />
                    <Spacer bottom={2} />
                    <Stats>
                      <StatItem stat={this.getHp()} label="HP" />
                      <StatItem stat={pokemon.height / 10} label="m" />
                      <StatItem stat={pokemon.weight / 10} label="kg" />
                    </Stats>
                  </Spacer>
                </Card>
              </Container>
            </>
          )}
        </Spacer>
      </Panel>
    );
  }
}

export default withRouter(PokemonDetails);
