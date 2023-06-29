import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../utils/store";
import { YOUTUBE_SEARCH_SUGGESTION_API } from "../constant";
import { cacheResult } from "../utils/searchSlice";

const SearchSuggest = ({ searchQuery }) => {
  const [searchSuggestion, setSearchSuggestion] = useState([]);

  const searchCache = useSelector((store) => store.search);

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
    const response = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + searchQuery);
    const jsonData = await response.json();
    console.log(jsonData[1]);
    setSearchSuggestion(jsonData[1]);

    // update the cache
    dispatch(cacheResult({
      [searchQuery]: jsonData[1]
    }));
  };

  return (
    <div className=" bg-white p-2 px-3 w-[500px] rounded-lg border border-gray-300 shadow-xl">
      <ul>
        {searchSuggestion.map((suggest) => (
          <li
            key={suggest}
            className=" p-[2px] px-5 cursor-pointer hover:bg-gray-200 rounded-lg"
          >
            {suggest}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchSuggest;
