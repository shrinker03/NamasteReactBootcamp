import { configureStore } from "@reduxjs/toolkit";
import appBarSlice from "./slices/appBarSlice";
import liveChatSlice from "./slices/liveChatSlice";
import videoListSlice from "./slices/videoListSlice";
import watchVideoSlice from "./slices/watchVideoSlice";

export const store = configureStore({
    reducer: {
        appBar: appBarSlice,
        videoList: videoListSlice,
        videoInfo: watchVideoSlice,
        liveChat: liveChatSlice,
    },
})