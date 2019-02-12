import React from "react";
import { getPokemon } from "api/pokemon";
import getColor from "utils/getColor";
import Card from "components/Card";
import Spacer from "components/Spacer";
import { Name, Id, ImagePlaceholder, Image, Hp, Type } from "./styles";

export default class PokemonCard extends React.Component {
  state = { data: null };

  async componentDidMount() {
    const data = await getPokemon(this.props.pokemon);
    this.setState({ data });
  }

  getId = () => this.props.pokemon.url.match(/^.*\/(\d+)\/$/)[1];

  getColor = () => getColor(this.state.data.color.name);

  getHp = () =>
    this.state.data.stats.find(({ stat }) => stat.name === "hp").base_stat;

  render() {
    const { pokemon } = this.props;
    const { data } = this.state;
    const isLoading = data == null;

    return (
      <Card loading={isLoading} color={isLoading ? null : this.getColor()}>
        <Spacer top={2} right={2} bottom={1} left={2}>
          <Hp>{isLoading ? "--" : this.getHp()}</Hp>
          {isLoading
            ? null
            : data.types
                .sort((a, b) => a.slot - b.slot)
                .map(type => (
                  <Spacer left={1} inline key={type.slot}>
                    <Type>{type.type.name}</Type>
                  </Spacer>
                ))}
          {isLoading ? (
            <ImagePlaceholder />
          ) : (
            <Image src={data.sprites.front_default} />
          )}
          <Spacer top={2} bottom={2}>
            <Name>
              <Id>#{this.getId()}</Id> {pokemon.name}
            </Name>
          </Spacer>
        </Spacer>
      </Card>
    );
  }
}
