import { createSlice } from "@reduxjs/toolkit";



const allTypesPokemonsSlice =  createSlice({
name: "typePokemons",
initialState: [],
reducers:{
setAllTypesPokemons: (state, action) => action.payload
}
})

export const {setAllTypesPokemons} = allTypesPokemonsSlice.actions

export default allTypesPokemonsSlice.reducer