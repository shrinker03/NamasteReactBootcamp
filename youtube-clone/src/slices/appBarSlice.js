import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    open: true
}

export const appBarSlice = createSlice({
    name: 'appBar',
    initialState,
    reducers: {
        toggleAppBar: (state) => {
            state.open = !state.open
        },
        closeAppBar: (state) => {
            state.open = false
        }
    }
})

export const {toggleAppBar, closeAppBar} = appBarSlice.actions

export default appBarSlice.reducer