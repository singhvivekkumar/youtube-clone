import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import store from "../utils/store";
import { YOUTUBE_SEARCH_SUGGESTION_API } from "../constant";

const SearchSuggestion = ({ searchQuery }) => {
  const [searchResult, setSearchResult] = useState([]);
  // const searchInput = useSelector( store => store.app.searchInput);
  console.log(searchQuery);
  useEffect(() => {
    // API call
    // console.log(searchQuery);
    //make an api call after every key press
    //but if the difference between 2 API calls is <200
    //decline the API call
    const timer = setTimeout(() => {
      getSuggestionQuery();
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
    setSearchResult(jsonData[1]);
  };

  return (
    <div className=" bg-white p-2 px-3 w-[500px] rounded-lg border border-gray-300 shadow-xl">
      <ul>
        {searchResult.map((suggest) => (
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

export default SearchSuggestion;
