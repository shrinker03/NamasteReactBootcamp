import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    videos: []
}

export const videoListSlice = createSlice({
    name: 'videoList',
    initialState,
    reducers: {
        setVideoList: (state, payload) => {
            state.videos = payload
        }
    }
})

export const {setVideoList} = videoListSlice.actions

export default videoListSlice.reducer