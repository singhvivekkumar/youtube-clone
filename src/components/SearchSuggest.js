import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../utils/store";
import { YOUTUBE_SEARCH_SUGGESTION_API } from "../constant";
import { cacheResult } from "../utils/searchSlice";
import { setSearchInput } from "../utils/appSlice";
import { GoSearch } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const SearchSuggest = ({ searchQuery }) => {
	console.log("result", searchQuery);
	const [searchSuggestion, setSearchSuggestion] = useState([]);

	const navigate = useNavigate();
	const searchCache = useSelector((store) => store?.search);

	const dispatch = useDispatch();

	useEffect(() => {
		// API call
		// console.log(searchQuery);
		//make an api call after every key press
		//but if the difference between 2 API calls is <200
		//decline the API call
		const timer = setTimeout(() => {
			if (searchCache[searchQuery]) {
				setSearchSuggestion(searchCache[searchQuery]);
			} else {
				getSuggestionQuery();
			}
		}, 200);
		//we need to clear all timer because it async
		return () => {
			clearTimeout(timer);
		};
	}, [searchQuery]);

	const getSuggestionQuery = async () => {
		const response = await fetch(
			YOUTUBE_SEARCH_SUGGESTION_API + searchQuery
		);
		const jsonData = await response.json();
		console.log(jsonData[1]);
		setSearchSuggestion(jsonData[1]);

		// update the cache
		dispatch(
			cacheResult({
				[searchQuery]: jsonData[1],
			})
		);
	};

	const handleSearchText = (text) => {
		dispatch(setSearchInput(text));
		console.log("div clicked :",text);
	};

	return searchSuggestion?.length === 0 ? null : (
		<div className=" z-50 bg-white dark:bg-slate-800 w-[500px] rounded-lg border border-gray-300 shadow-xl p-2 ">
			{searchSuggestion?.map((suggest, index) => {
				return (
					<div key={index} className=" flex items-center hover:bg-slate-700/50 px-3 rounded-xl mt-[2px] cursor-progress ">
						<GoSearch className="  text-slate-800 dark:text-white " />
						<button
							onClick={() => handleSearchText(suggest)}
							className=" p-[2px] px-5 text-white  rounded-lg">
							{suggest}
						</button>
					</div>
				);
			})}
		</div>
	);
};

export default SearchSuggest;
