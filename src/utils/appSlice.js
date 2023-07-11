import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
	name: "app",
	initialState: {
		isMenuOpen: true,
		searchInput: "",
	},
	reducers: {
		toggleMenu: (state) => {
			state.isMenuOpen = !state.isMenuOpen;
		},
		closeMenu: (state) => {
			state.isMenuOpen = false;
		},
		setSearchInput: (state, action) => {
			state.searchInput = action.payload;
		},
	},
});

export const { toggleMenu, closeMenu, setSearchInput } = appSlice.actions;

export default appSlice.reducer;
