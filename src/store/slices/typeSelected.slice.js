import { createSlice } from "@reduxjs/toolkit";

const typePokemonSelectSlice = createSlice({
    name: "typeSelect",
    initialState: "allPokemons",
    reducers:{
        setTypePokemon: (state, action) => action.payload
    }
})

export const {setTypePokemon} = typePokemonSelectSlice.actions

export default typePokemonSelectSlice.reducer
