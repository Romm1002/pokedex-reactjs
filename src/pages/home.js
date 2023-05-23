import React from "react";
import "../assets/styles/style.css";
import { Link } from "react-router-dom";


function Home({ pokemons }) {
  const elements = pokemons.map((pokemon) => {
    return (
      <Link to={`/details/${pokemon.id}`} className="card">
        <h2>#{pokemon.id} - {pokemon.nom}</h2>
        <ul>
          {pokemon.types.map((type) => (
            <li>{type}</li>
          ))}
        </ul>
        {/* <p>PV: {pokemon.PV}</p>
        <p>Attaque: {pokemon.attaque}</p>
        <p>Défense: {pokemon.defense}</p>
        <p>Attaque Spé.: {pokemon.attaque_spe}</p>
        <p>Défense Spé.: {pokemon.defense_spe}</p>
        <p>Vitesse: {pokemon.vitesse}</p> */}
      </Link>
    );
  });
  return <main className="container">{elements}</main>;
}

export default Home;
