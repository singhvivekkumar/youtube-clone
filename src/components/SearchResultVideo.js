import React, { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_VIDEO_API } from "../constant";
import { Link, useSearchParams } from "react-router-dom";
import { PublishedTimeOfVideo } from "../utils/help";

const SearchResultVideo = () => {
	const [searchParams] = useSearchParams();
	const query = searchParams.get("q");
	const [searchVideo, setSearchVideo] = useState();

	useEffect(() => {
		getSearchResult();
	}, []);

	const getSearchResult = async () => {
		const response = await fetch(YOUTUBE_SEARCH_VIDEO_API + query);
		const jsonData = await response.json();
		console.log(jsonData?.items);
		setSearchVideo(jsonData?.items);
	};
	return !searchVideo ? null : (
		<div>
			{searchVideo.map((item) => {
				return (
					<Link key={item?.videoId} to={"/watch?v=" + item?.videoId}>
						<div className=" my-1 flex hover:bg-zinc-200 p-1 rounded-lg">
							<img
								alt="thumbnails"
								className=" px-1 rounded-lg h-40"
								src={item?.snippet?.thumbnails?.medium?.url}
							/>
							<div className=" flex flex-col ">
								<div className=" font-semibold text-lg line-clamp-2">
									{item?.snippet?.title}
								</div>
								<div className=" text-slate-700 font-semibold text-sm">
									{item?.snippet?.channelTitle}
								</div>
								<div className=" text-slate-600 text-sm">
									{PublishedTimeOfVideo(
										item?.snippet?.publishedAt
									)}
								</div>
							</div>
						</div>
					</Link>
				);
			})}
		</div>
	);
};

export default SearchResultVideo;
