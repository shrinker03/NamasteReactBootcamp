import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    chats: [{id:465, name: 'shivam', msg: 'Hello there'}]
}

export const liveChatSlice = createSlice({
    name: 'liveChats',
    initialState,
    reducers: {
        setChatItem: (state, payload) => {
            if (state.chats.length >= 50) {
                state.chats.pop()
            }
            state.chats.unshift(payload.payload)
        }
    }
})

export const {setChatItem} = liveChatSlice.actions

export default liveChatSlice.reducer