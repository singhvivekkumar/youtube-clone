import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";
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

const WatchPage = () => {
	const [searchParams] = useSearchParams();
	const videoId = searchParams.get("v");

	const [videoDetails, setVideoDetails] = useState();
	const [relatedVideos, setRelatedVideos] = useState([]);
	const [channelDetails, setChannelDetails] = useState();

	const channelId = useSelector((store) => store.channel.channelId);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(closeMenu());
		getChannelDetails();
		getVideoDetails();
		// getRelatedVideos();
	}, []);

	const getChannelDetails = async () => {
		const response = await fetch(YOUTUBE_CHANNEL_DETAILS_API + channelId);
		const jsonData = await response.json();
		console.log(jsonData?.items[0]);
		setChannelDetails(jsonData?.items[0]);
	};

	const getVideoDetails = async () => {
		const response = await fetch(YOUTUBE_VIDEO_DETAILS_API + videoId);
		const jsonData = await response.json();
		console.log(jsonData?.items[0]);
		setVideoDetails(jsonData?.items[0]);
	};

	// const getRelatedVideos = async () => {
	// 	const response = await fetch();
	// 	const jsonData = await response.json();
	// 	console.log(jsonData);
	// 	// setRelatedVideos(jsonData)
	// };

	return (
		<div className="flex justify-center flex-row m-2 mx-4 ">
			{/* channel infomation n */}
			<div className=" flex flex-col justify-center mx-2">
				{/* video sectio */}
				<div className="flex">
					<div className="">
						<iframe
							width="900"
							height="515"
							src={"https://www.youtube.com/embed/" + videoId}
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen></iframe>
					</div>
				</div>
				{/* title section */}
				<div>
					<div className="text-gray-700 font-bold text-lg mt-4 line-clamp-2">
						{videoDetails?.snippet?.title}
					</div>
				</div>
				{/* channel details */}
				<div className="flex justify-between">
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
							<button className=" flex items-center rounded-full border border-black px-4">
								<BsBellFill />
								Subscribe
							</button>
						</div>
					</div>
					<div className="flex items-center ">
						{/* like button */}
						<div className=" flex mx-2">
							<button className=" flex items-center px-2 rounded-l-full border border-black">
								<BiLike />
								{abbreviateNumber(
									videoDetails?.statistics?.likeCount
								)}
							</button>
							<button className=" flex items-center px-2 rounded-r-full border border-black">
								<BiDislike />
							</button>
						</div>
						{/* remaining section of share */}
						<div className=" flex items-center">
							<button className="mx-2 flex items-center text-base border border-gray-600 rounded-full px-2">
								<PiShareFat /> Share
							</button>
							<button className="mx-2 flex items-center text-base border border-gray-600 rounded-full px-2">
								<BiSolidDownload />
								Download
							</button>
							<button className="mx-2 flex items-center text-base border border-gray-600 rounded-full px-2">
								<BiSolidBadgeDollar /> Thanks
							</button>
							<bitton className="mx-2 flex items-center text-base border border-gray-600 rounded-full px-2">
								<TfiMoreAlt />
							</bitton>
						</div>
					</div>
				</div>

				{/* discription */}
				<div className="flex flex-col rounded-lg bg-slate-100 hover:bg-slate-300 p-2 mt-1 w-[900px]">
					<div className=" flex items-center ">
						<span>{abbreviateNumber(videoDetails?.statistics?.viewCount)}views</span>
						<span className=" ml-5 ">{Date(videoDetails?.snippet?.publishedAt).split("T")[0]}</span>
					</div>
					<div className="flex items-center">{videoDetails?.snippet?.tags.map( (item) => {
						return (
							<div className=" text-blue-600 mx-1">#{item}</div>
						)
					})}</div>
					<div className=" text-xs mt-4 line-clamp-1">{videoDetails?.snippet?.description}</div>
				</div>
				{/* nested comment below */}
				<div>
					<div>{videoDetails?.statistics?.commentCount}</div>
					<CommentContainer videoId={videoId} />
				</div>
			</div>
			{/* suggestion section */}
			<div className=" m-1 mx-2 ">
				<LiveChat />
				<RelatedVideos />
				<div className="flex flex-col py-6 px-4 overflow-y-auto ">
					{relatedVideos?.contents?.map((item, index) => {
						if (item?.type !== "video") return false;
						return (
							<RelatedVideos key={index} video={item?.video} />
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default WatchPage;
