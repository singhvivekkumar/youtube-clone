import React, { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_VIDEO_API } from "../constant";

const SearchResultVideo = ({ query }) => {
	console.log(query);
	const [searchVideo, setSearchVideo] = useState();

	useEffect(() => {
        getSearchResult();
    }, []);

	const getSearchResult = async () => {
		const response = await fetch(YOUTUBE_SEARCH_VIDEO_API + query);
		const jsonData = await response.json();
		console.log(jsonData);
		setSearchVideo(jsonData?.items);
	};
	return !searchVideo ? null : (
		<div>
            <h1 className=" flex justify-center items-center text-3xl font-bold">vivek</h1>
			{query}
		</div>
	);
};

export default SearchResultVideo;
