import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import ChatSlice from "./ChatSlice";
import channelSlice from "./channelSlice";

const store = configureStore({
	reducer: {
		app: appSlice,
		search: searchSlice,
		chat: ChatSlice,
		channel: channelSlice
	},
});

export default store;
