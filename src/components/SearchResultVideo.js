import React, { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_VIDEO_API } from "../constant";
import { Link, useSearchParams } from "react-router-dom";
import { PublishedTimeOfVideo } from "../utils/help";
import { useDispatch } from "react-redux";
import { setChannelId } from "../utils/channelSlice";
import { openMenu } from "../utils/appSlice";
import ButtonList from "./ButtonList";

const SearchResultVideo = () => {
	const [searchParams] = useSearchParams();
	const query = searchParams.get("q");
	const [searchVideo, setSearchVideo] = useState();
	let check= false;

	const dispatch = useDispatch();
	dispatch(openMenu());

	useEffect(() => {
		getSearchResult();
		// eslint-disable-next-line
	}, [query]);

	const getSearchResult = async () => {
		const response = await fetch(YOUTUBE_SEARCH_VIDEO_API + query);
		const jsonData = await response.json();
		console.log(jsonData?.items);
		setSearchVideo(jsonData?.items);
	};
	return !searchVideo ? null : (
		<div className="flex flex-col justify-center w-full">
			<ButtonList/>
			<div className=" w-5/6">
				{searchVideo.map((item) => {
					if (item?.id?.kind==="youtube#video") check = true;
					return check && (
						<Link key={item?.videoId} to={"/watch?v=" + item?.id?.videoId} 
						onClick={()=> dispatch(setChannelId(item?.snippet?.channelId))}>
							<div className=" my-2 flex hover:bg-slate-200/90 dark:hover:bg-slate-700/70 p-1 rounded-lg">
								<img
									alt="thumbnails"
									className=" px-1 rounded-lg h-44"
									src={item?.snippet?.thumbnails?.medium?.url}
								/>
								<div className=" flex flex-col text-slate-700 dark:text-white/90 ">
									<div className=" font-semibold text-lg line-clamp-2">
										{item?.snippet?.title}
									</div>
									<div className=" font-semibold text-sm">
										{item?.snippet?.channelTitle}
									</div>
									<div className=" text-sm">
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
		</div>
	);
};

export default SearchResultVideo;
