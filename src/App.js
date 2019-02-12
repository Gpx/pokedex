import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import PokemonList from "screens/PokemonList";
import PokemonDetails from "screens/PokemonDetails";

export default function App() {
  return (
    <Router>
      <>
        <Route path="/pokemon" component={PokemonList} />
        <Route path="/pokemon/:id(\d+)" component={PokemonDetails} />
        <Route path="/" exact render={() => <Redirect to="/pokemon" />} />
      </>
    </Router>
  );
}
