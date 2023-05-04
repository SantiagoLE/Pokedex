import { createSlice } from "@reduxjs/toolkit";


const currentPageSlice = createSlice({
    name: "current page",
    initialState: 1,
    reducers: {
        setCurrentPage: (state, action) => action.payload
    }
})

export const {setCurrentPage} = currentPageSlice.actions

export default currentPageSlice.reducer

