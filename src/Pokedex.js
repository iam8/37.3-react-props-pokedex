// Ioana A Mititean
// 37.3 - React Props & Pokedex

import React from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";


function Pokedex({cards}) {
    return (
        <div className="Pokedex">
            {cards.map(card => (
                <Pokecard
                    key={card.id}
                    id={card.id}
                    name={card.name}
                    type={card.type}
                    baseExp={card.base_experience} />
            ))}
        </div>
    );
}


export default Pokedex;
