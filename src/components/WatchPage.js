/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import RelatedVideos from "./RelatedVideos";
import {
	YOUTUBE_CHANNEL_DETAILS_API,
	YOUTUBE_VIDEO_DETAILS_API,
} from "../constant";
import store from "../utils/store";
import { abbreviateNumber } from "js-abbreviation-number";
import { BsBellFill } from "react-icons/bs";
import {
	BiLike,
	BiDislike,
	BiSolidDownload,
	BiSolidBadgeDollar,
} from "react-icons/bi";
import { PiShareFat } from "react-icons/pi";
import { TfiMoreAlt } from "react-icons/tfi";
import { MdVerified } from "react-icons/md";
import ReactPlayer from "react-player";

const WatchPage = () => {
	const [searchParams] = useSearchParams();
	const videoId = searchParams.get("v");

	const [videoDetails, setVideoDetails] = useState();
	const [channelDetails, setChannelDetails] = useState();

	const channelId = useSelector((store) => store.channel.channelId);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(closeMenu());
		getChannelDetails();
		getVideoDetails();
	}, [videoId]);

	const getChannelDetails = async () => {
		const response = await fetch(YOUTUBE_CHANNEL_DETAILS_API + channelId);
		const jsonData = await response.json();
		// console.log(jsonData?.items[0]);
		setChannelDetails(jsonData?.items[0]);
	};

	const getVideoDetails = async () => {
		const response = await fetch(YOUTUBE_VIDEO_DETAILS_API + videoId);
		const jsonData = await response.json();
		// console.log(jsonData?.items[0]);
		setVideoDetails(jsonData?.items[0]);
	};

	return !videoDetails ? null : (
		<div className="flex justify-center items-start flex-row m-2 mx-4 w-full">

			{/* video or  channel infomation or comment section */}
			<div className=" flex flex-col justify-center mx-2 w-[900px]">

				{/* video sectio */}
				<div className="flex shadow-sm rounded-xl shadow-slate-50 dark:shadow-slate-50/20">
					<ReactPlayer
						url={`https://www.youtube.com/watch?v=${videoId}`}
						controls
						width="900px"
						height="505px"
						// style={{ backgroundColor: "#000000" }}
						playing={true}
					/>
				</div>

				{/* title section */}
				<div className=" mb-2 ">
					<div className="text-gray-700 dark:text-slate-50/90 font-bold text-lg mt-4 line-clamp-2">
						{videoDetails?.snippet?.title}
					</div>
				</div>

				{/* channel details */}
				<div className="flex justify-between dark:text-white/95">
					<div className=" flex ">
						{/* avatar */}
						<div className="flex h-10 w-10 rounded-full overflow-hidden">
							<img
								alt="avatar"
								className="h-full w-full object-cover"
								src={
									channelDetails?.snippet?.thumbnails?.default
										?.url
								}
							/>
						</div>
						{/* channel title */}
						<div className=" flex flex-col mx-2 ">
							<span className=" text-sm font-semibold flex items-center justify-between ">
								{videoDetails?.snippet?.channelTitle}{" "}
								<MdVerified />
							</span>
							<span className=" text-xs ">
								{abbreviateNumber(
									channelDetails?.statistics?.subscriberCount
								)}{" "}
								subscribes
							</span>
						</div>
						{/* subscribe button */}
						<div className=" flex items-center mx-2">
							<button className=" flex items-center rounded-full border dark:border-slate-100 border-black px-4">
								<BsBellFill />
								Subscribe
							</button>
						</div>
					</div>
					<div className="flex items-center ">
						{/* like button */}
						<div className=" flex mx-2 ">
							<button className=" flex items-center px-2 rounded-l-full border dark:border-slate-100 border-black">
								<BiLike />
								{abbreviateNumber(
									videoDetails?.statistics?.likeCount
								)}
							</button>
							<button className=" flex items-center px-2 rounded-r-full border dark:border-slate-100 border-black">
								<BiDislike />
							</button>
						</div>
						{/* remaining section of share */}
						<div className=" flex items-center">
							<button className="mx-2 flex items-center text-base border border-gray-600 dark:border-slate-100 rounded-full px-2">
								<PiShareFat /> Share
							</button>
							<button className="mx-2 flex items-center text-base border border-gray-600 dark:border-slate-100 rounded-full px-2">
								<BiSolidDownload />
								Download
							</button>
							<button className="mx-2 flex items-center text-base border border-gray-600 dark:border-slate-100 rounded-full px-2">
								<BiSolidBadgeDollar /> Thanks
							</button>
							<bitton className="mx-2 flex items-center text-base border border-gray-600 dark:border-slate-100 rounded-full px-2">
								<TfiMoreAlt />
							</bitton>
						</div>
					</div>
				</div>

				{/* discription */}
				<div className="flex flex-col rounded-lg bg-slate-100 dark:bg-slate-700/60 dark:hover:bg-slate-700/90 hover:bg-slate-300 dark:text-slate-50/80 p-2 mt-3 w-[900px]">
					<div className=" flex items-center ">
						<span>
							{abbreviateNumber(
								videoDetails?.statistics?.viewCount
							)}
							views
						</span>
						<span className=" ml-5 ">
							{videoDetails?.snippet?.publishedAt.split("T")[0]}
						</span>
					</div>
					<div className="flex flex-wrap justify-start ">
						{videoDetails?.snippet?.tags?.map((item, index) => {
							return (
								<div
									key={index}
									className=" text-blue-600 mx-1">
									#{item}
								</div>
							);
						})}
					</div>
					<div className=" text-sm mt-4 line-clamp-2">
						{videoDetails?.snippet?.description}
					</div>
				</div>

				{/* nested comment below */}
				<div className=" dark:text-white">
					<div className=" p-1 mt-3">
						{abbreviateNumber(
							videoDetails?.statistics?.commentCount
						)}{" "}
						comments
					</div>
					<CommentContainer videoId={videoId} />
				</div>

			</div>

			{/* related video & live chat section */}
			<div className=" m-1 mx-2 ">
				{/* <LiveChat /> */}

				{/* related video section */}
				<RelatedVideos channelId={videoDetails?.snippet?.channelId} />
			</div>
		</div>
	);
};

export default WatchPage;
