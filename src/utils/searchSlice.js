import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
	name: "search",
	initialState: {
		searchQuery: [],
		resultQuery: ""
	},
	reducers: {
		cacheResult: (state, action) => {
			state.searchQuery = Object.assign(state, action.payload);
		},
		setResult: (state, action) => {
			state.resultQuery = action.payload;
		}
	},
});

export const { cacheResult, setResult} = searchSlice.actions;

export default searchSlice.reducer;
