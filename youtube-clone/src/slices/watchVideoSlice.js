import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    videoInfo: {}
}

export const watchVideoSlice = createSlice({
    name: 'videoList',
    initialState,
    reducers: {
        setVideoInfo: (state, payload) => {
            state.videoInfo = payload
        }
    }
})

export const {setVideoInfo} = watchVideoSlice.actions

export default watchVideoSlice.reducer