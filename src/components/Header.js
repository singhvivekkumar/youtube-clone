import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchInput, toggleMenu } from "../utils/appSlice";
import SearchSuggest from "./SearchSuggest";
import store from "../utils/store";
import { Link, useNavigate } from "react-router-dom";
import { BiMenu } from "react-icons/bi";

import logo from "../images/yt-logo.png"
import logoMobile from "../images/yt-logo-mobile.png"

const Header = () => {
	// const [searchQuery, setSearchQuery] = useState("");
	const [showSuggestion, setShowSuggestion] = useState(false);
	const searchInput = useSelector((store) => store?.app?.searchInput);

	const dispatch = useDispatch();
	// const resultQuery = useSelector( (store)=> store?.search?.resultQuery);
	const navigate = useNavigate();

	const handleToggleMenu = () => {
		dispatch(toggleMenu());
	};

	const handleSearchInput = (text) => {
		dispatch(setSearchInput(text));
	};

	const searchQueryHandler = () => {
		navigate("/search?q=" + searchInput);
	};

	return (
		<div className="sticky top-0 z-10 flex flex-row bg-white dark:bg-slate-800 justify-between h-14 p-2 px-4 items-center ">
			{/* { loading && <loader/> } */}
			{/* menu or logo */}
			<div className=" flex h-5 items-center ">
				<BiMenu
					className=" text-2xl text-slate-800 dark:text-white mx-4 cursor-pointer "
					onClick={() => handleToggleMenu()}
				/>
				<Link to="/" className="flex h-5 items-center">
				<img
					className=" h-full hidden dark:md:block "
					alt="logo"
					src={logo}
				/>
				<img
					className=" h-full md:hidden "
					alt="logo"
					src={logoMobile}
				/>
				</Link>
			</div>
			{/* search bar section */}
			<div className=" relative text-lg">
				<div>
					<input
						onFocus={() => setShowSuggestion(true)}
						onBlur={() => setShowSuggestion(false)}
						value={searchInput}
						onChange={(e) => handleSearchInput(e.target.value)}
						className=" border border-gray-400 p-1 px-8 rounded-l-full w-[500px]"
					/>
					<button
						onClick={() => searchQueryHandler()}
						className=" border border-gray-400 p-1 px-4  rounded-r-full">
						🔍
					</button>
				</div>
				{showSuggestion && (
					<div className=" absolute">
						<SearchSuggest searchQuery={searchInput} />
					</div>
				)}
			</div>
			{/* profile section */}
			<div>
				<img
					className=" h-8 mx-12"
					alt="user"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmEwalaRUsDXz_hi03tVaA56X2bP3ocnStKw&usqp=CAU"
				/>
			</div>
		</div>
	);
};

export default Header;
