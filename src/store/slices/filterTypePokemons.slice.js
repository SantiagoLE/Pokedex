import { createSlice } from "@reduxjs/toolkit";



const filterTypePokemonSlice =  createSlice({
name: "typePokemons",
initialState: false,
reducers:{
setFilterTypePokemon: (state, action) => action.payload
}
})

export const {setFilterTypePokemon} = filterTypePokemonSlice.actions

export default filterTypePokemonSlice.reducer