import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_CHANNEL_DETAILS_API } from "../constant";
import { abbreviateNumber } from "js-abbreviation-number";

const PublishedTimeOfVideo = (publishedAt) => {
	const publishedDate = new Date(publishedAt);
	const currentDate = new Date();
	if (currentDate.getFullYear() - publishedDate.getFullYear()) {
		return (
			currentDate.getFullYear() -
			publishedDate.getFullYear() +
			" years ago"
		);
	} else {
		if (currentDate.getMonth() - publishedDate.getMonth()) {
			return (
				currentDate.getMonth() -
				publishedDate.getMonth() +
				" months ago"
			);
		} else {
			return (
				currentDate.getDate() - publishedDate.getDate() + " days ago"
			);
		}
	}
};

const VideoCard = ({ videoInfo }) => {
	const [channelDetails, setChannelDetails] = useState();

	console.log(videoInfo);
	const { snippet, statistics } = videoInfo;
	const { channelTitle, channelId, title, thumbnails } = snippet;

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
		<div className=" flex flex-col m-3 w-80">
			{/* image seciton */}
			<div>
				<Link to={"/watch?v=" + videoInfo.id}>
					<img
						className=" rounded-md"
						alt="thumbnails"
						src={thumbnails.medium.url}
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
							src={
								channelDetails?.snippet?.thumbnails?.default
									?.url
							}
						/>
					</div>
				</div>

				{/* title */}
				<div className="flex flex-col ml-3 overflow-hidden">
					<span className="text-sm font-bold line-clamp-2">
						{title}
					</span>
					<span className="text-[12px] font-semibold mt-2 text-gray-500 flex items-center">
						{channelTitle}
					</span>
					<div className="flex text-[12px] font-semibold text-gray-500 truncate overflow-hidden">
						<span>
							{abbreviateNumber(statistics?.viewCount)} views
						</span>
						<span className="flex text-[24px] leading-none font-bold text-gray-500 relative top-[-10px] mx-1">
							.
						</span>
						<span className="truncate">
							{PublishedTimeOfVideo(
								snippet?.publishedAt.match(
									/[0-9]+-[0-9]+-[0-9]+/
								)
							)}{" "}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VideoCard;
