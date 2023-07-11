import { createSlice } from "@reduxjs/toolkit";

const channelSlice = createSlice({
	name: "channel",
	initialState: {
		channelId: "",


	},
	reducers: {
		setChannelId: (state, action) => {
			state.channelId = action.payload;
		},
	},
});

export const {setChannelId} = channelSlice.actions;

export default channelSlice.reducer;
