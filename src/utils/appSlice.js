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
		openMenu: (state) => {
			state.isMenuOpen = true;
		},
		setSearchInput: (state, action) => {
			state.searchInput = action.payload;
		},
	},
});

export const { toggleMenu, closeMenu, openMenu, setSearchInput } = appSlice.actions;

export default appSlice.reducer;
