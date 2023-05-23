import React from "react";
import "../assets/styles/style.css";
import pokemons from "../data/pokemons.json";

import { useParams } from "react-router-dom";

function Details() {
  const { id } = useParams(); // Récupère l'ID de l'URL

  // Recherche du Pokémon correspondant à l'ID
  const pokemon = pokemons.find((p) => p.id == id);

  // Vérification si le Pokémon a été trouvé
  if (!pokemon) {
    return <h2 style={{ marginLeft: "10%" }}>Ce Pokémon n'existe pas</h2>;
  }

  // Affichage des détails du Pokémon
  return (
    <div className="infos-pokemon">
      <h2>Caractéristiques techniques de {pokemon.nom}</h2>
      <div className="content">
        <div className="content-left">
          <ul>
            <li>
              <b>PV :</b> {pokemon.PV}
            </li>
            <li>
              <b>Attaque :</b> {pokemon.attaque}
            </li>
            <li>
              <b>Défense :</b> {pokemon.defense}
            </li>
            <li>
              <b>Attaque Spé :</b> {pokemon.attaque_spe}
            </li>
            <li>
              <b>Défense Spé :</b> {pokemon.defense_spe}
            </li>
            <li>
              <b>Vitesse :</b> {pokemon.vitesse}
            </li>
          </ul>
        </div>
        <div className="content-right">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Details;
