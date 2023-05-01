import { configureStore } from "@reduxjs/toolkit";
import trainerName from "./slices/trainerName.slice";
import filterTypePokemon from "./slices/filterTypePokemons.slice"

export default configureStore({  //tambien se puede guardar en una variable y exportar la variable
    reducer:{
trainerName,
filterTypePokemon
    }
})