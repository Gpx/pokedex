import React from "react";
import "styled-components/macro";
import Card from "components/Card";
import Spacer from "components/Spacer";

export default function CardListPlaceholder() {
  const cards = [];
  for (let i = 0; i < 10; i++)
    cards.push(
      <Spacer top={2} bottom={2} key={i}>
        <Card loading css="height: 202px;" />
      </Spacer>
    );
  return cards;
}
