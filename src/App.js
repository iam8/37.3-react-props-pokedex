// Ioana A Mititean
// 37.3 - React Props & Pokedex

import React from "react";
import Pokedex from "./Pokedex";


function App({pokemon}) {
    return (
        <div className="App">
            <h2>Pokedex</h2>
            <Pokedex cards={pokemon}/>
        </div>
    )
}


export default App;
