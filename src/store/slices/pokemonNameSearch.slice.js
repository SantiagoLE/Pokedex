import { createSlice } from "@reduxjs/toolkit";

const pokemonNameSearchSlice = createSlice({
name: "pokemonName",
initialState: false,
reducers: {
    setPokemonName: (state, action) => action.payload
}
})

export const {setPokemonName} = pokemonNameSearchSlice.actions

export default pokemonNameSearchSlice.reducer