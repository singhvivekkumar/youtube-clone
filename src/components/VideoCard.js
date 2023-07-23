import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_CHANNEL_DETAILS_API } from "../constant";
import { abbreviateNumber } from "js-abbreviation-number";
import { useDispatch } from "react-redux";
import store from "../utils/store";
import { setChannelId } from "../utils/channelSlice";
import { PublishedTimeOfVideo } from "../utils/help";


const VideoCard = ({ videoInfo }) => {
	const [channelDetails, setChannelDetails] = useState();

	// console.log(videoInfo);
	const { snippet, statistics } = videoInfo;
	const { channelTitle, channelId, title, thumbnails } = snippet;

	const dispatch = useDispatch();

	// promise is empty object promise =undefined promise= { promisestate:"pending", promiseresult: undefined}
	// promise is empty object promise= { promisestate:"fulfill", promiseresult: {data}}
	useEffect(() => {
		getChannelDetails();
		// console.log(channelDetails);
	}, []);

	const getChannelDetails = async () => {
		const response = await fetch(YOUTUBE_CHANNEL_DETAILS_API + channelId);
		const jsonData = await response.json();
		// console.log(jsonData?.items[0]);
		setChannelDetails(jsonData?.items[0]);
	};

	return (
		<div className=" flex flex-col w-[312px] ">
			{/* image seciton */}
			<div>
				<Link to={"/watch?v=" + videoInfo.id}>
					<img
						className=" rounded-md"
						alt="thumbnails"
						src={thumbnails?.medium?.url}
						onClick={()=> dispatch(setChannelId(channelId))}
					/>
				</Link>
			</div>
			{/* details section */}
			<div className="flex mt-2">
				{/* avatar */}
				<div className="flex items-start pt-1">
					<div className="flex h-9 w-9 rounded-full overflow-hidden">
						<img
							alt="avatar"
							className="h-full w-full object-cover"
							src={channelDetails?.snippet?.thumbnails?.default?.url}
						/>
					</div>
				</div>

				{/* title */}
				<div className="flex flex-col dark:text-slate-200 ml-3 overflow-hidden">
					<span className="text-sm font-semibold line-clamp-2">
						{title}
					</span>
					<span className="text-[12px] font-semibold mt-2 text-gray-400 flex items-center">
						{channelTitle}
					</span>
					<div className="flex text-[12px] font-semibold text-gray-400 truncate overflow-hidden">
						<span>
							{abbreviateNumber(statistics?.viewCount)} views
						</span>
						<span className="flex text-[24px] leading-none font-bold text-gray-400 relative top-[-10px] mx-1">
							.
						</span>
						<span className="truncate">
							{PublishedTimeOfVideo(
								snippet?.publishedAt.match(
									/[0-9]+-[0-9]+-[0-9]+/
								)
							)}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VideoCard;
