import React from "react";
import "../assets/styles/style.css";
import { Link } from "react-router-dom";
import typeColor from "../data/typeColors.json"
import TypePill from "../components/typePill";

function Home({ pokemons }) {
  const elements = pokemons.map((pokemon) => {
    return (
      <Link key={pokemon.id} to={`/details/${pokemon.id}`} className="card px-3 py-1 mb-5 me-3 col-lg-2 col-sm-3 bg-light">
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} className="card-img-top"></img>
        <h2 className="h4">#{pokemon.id} - {pokemon.nom}</h2>
        <ul>
          {pokemon.types.map((type) => <TypePill key={type} type={type} color={typeColor[type]}/>)}
        </ul>
      </Link>
    );
  });
  return <main className="container">
    <div className="row justify-content-around">
      {elements}
    </div>
  </main>;
}

export default Home;
