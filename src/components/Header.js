import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchInput, toggleMenu } from "../utils/appSlice";
import SearchSuggest from "./SearchSuggest";
import store from "../utils/store";
import { Link, useNavigate } from "react-router-dom";
import { BiMenu, BiUserCircle } from "react-icons/bi";
import { GoSearch } from "react-icons/go";
import logo from "../images/yt-logo.png";
import logoMobile from "../images/yt-logo-mobile.png";

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
		console.log("search input ", searchInput)
	};

	return (
		<div className="sticky top-0 z-10 flex flex-row bg-white dark:bg-slate-800 justify-between h-14 p-2 px-4 items-center border-b-[1px] border-slate-700 ">
			{/* { loading && <loader/> } */}
			{/* menu or logo */}
			<div className=" flex h-5 items-center ">
				<BiMenu
					className=" hidden md:block text-2xl text-slate-800 dark:text-white mx-4 cursor-pointer "
					onClick={() => handleToggleMenu()}
				/>
				<Link to="/" className="flex h-5 items-center">
					<img
						className=" h-full hidden dark:md:block "
						alt="logo"
						src={logo}
					/>
					<img
						className=" h-full rounded-lg md:hidden "
						alt="logo"
						src={logoMobile}
					/>
				</Link>
			</div>
			{/* search bar section */}
			<div className=" relative flex flex-col justify-center ">
				<div className="group flex items-center">
					<div className=" flex h-8 md:h-9 md:ml-10 md:pl-5 border border-slate-700 rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0 ">
						<div className="w-10 items-center justify-center hidden md:group-focus-within:flex">
							<GoSearch className="text-white text-xl" />
						</div>
						<input
							type="text"
                            placeholder="Search"
							onFocus={() => setShowSuggestion(true)}
							onBlur={() => setShowSuggestion(true)}
							value={searchInput}
							onChange={(e) => handleSearchInput(e.target.value)}
							className=" bg-transparent outline-none text-white px-5 md:pl-0 w-44 md:group-focus-within:pl-2 md:w-64 lg:w-[500px] "
						/>
					</div>
					<button
						onClick={() => searchQueryHandler()}
						className="w-[40px] md:w-[60px] h-8 md:h-9 flex items-center justify-center border border-l-0 border-slate-700 rounded-r-3xl bg-white/[0.1]">
						<GoSearch className="text-white text-xl" />
					</button>
					{showSuggestion && (
					<div className=" hidden group-focus-within:block absolute top-10 left-1/2 translate-x-[-50%] z-50 ">
						<SearchSuggest searchQuery={searchInput} />
					</div>
				)}
				</div>
				
			</div>
			{/* profile section */}
			<div className="flex justify-center items-center text-3xl dark:text-slate-100 h-8">
				<BiUserCircle className=""/>
			</div>
		</div>
	);
};

export default Header;
