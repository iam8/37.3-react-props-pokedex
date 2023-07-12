// Ioana A Mititean
// 37.3 - React Props & Pokedex

import React from "react";
import Pokecard from "./Pokecard";


function Pokedex({cards}) {
    return (
        <>
            {cards.map(card => (
                <Pokecard
                    key={card.id}
                    id={card.id}
                    name={card.name}
                    type={card.type}
                    baseExp={card.base_experience} />
            ))}
        </>
    );
}


export default Pokedex;
