// Ioana A Mititean
// 37.3 - React Props & Pokedex

import React from "react";
import "./Pokecard.css"


function Pokecard(props) {

    const {id, name, type, baseExp} = props;
    const imgPath =
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    const imgAlt = `${name} Pokemon`;

    return (
        <div className="Pokecard">

            <h3 className="Pokecard-name">{name}</h3>
            <img src={imgPath} alt={imgAlt}></img>
            <div>Type: {type}</div>
            <div>EXP: {baseExp}</div>

        </div>
    );
}


export default Pokecard;
