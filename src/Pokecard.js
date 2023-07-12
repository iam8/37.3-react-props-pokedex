// Ioana A Mititean
// 37.3 - React Props & Pokedex

import React from "react";


function Pokecard(props) {

    const {id, name, type, baseExp} = props;
    const imgPath =
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    const imgAlt = `${name} Pokemon`;

    return (
        <div>
            <h3>{name}</h3>
            <img src={imgPath} alt={imgAlt}></img>
            <div>Type: {type}</div>
            <div>EXP: {baseExp}</div>
        </div>
    );
}


export default Pokecard;
