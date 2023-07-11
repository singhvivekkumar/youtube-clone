import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";
import RelatedVideos from "./RelatedVideos";
import { YOUTUBE_CHANNEL_DETAILS_API, YOUTUBE_VIDEO_DETAILS_API } from "../constant";
import store from "../utils/store";
import { abbreviateNumber } from "js-abbreviation-number";
import { BsBellFill } from "react-icons/bs";
import { BiLike, BiDislike } from "react-icons/bi";


const WatchPage = () => {
	const [searchParams] = useSearchParams();
	const videoId = (searchParams.get("v"));
	const [videoDetails, setVideoDetails] = useState();
	
	const [relatedVideos, setRelatedVideos] = useState([]);
	const [channelDetails, setChannelDetails] = useState();

	const channelId = useSelector(store=> store.channel.channelId)

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
							src={
								"https://www.youtube.com/embed/" +videoId
							}
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen></iframe>
					</div>
				</div>
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
							<img alt="avatar" className="h-full w-full object-cover"
							 src={channelDetails?.snippet?.thumbnails?.default?.url}/>
						</div>
						{/* channel title */}
						<div className=" flex flex-col ">
							<span className=" text-sm my-1">{videoDetails?.snippet?.channelTitle}</span>
							<span className=" text-xs ">{abbreviateNumber(channelDetails?.statistics?.subscriberCount)} subscribes</span>
						</div>
						{/* subscribe button */}
						<div>
							<button className=" rounded-full text-lg">
								<BsBellFill/>
								subscribe</button>
						</div>
					</div>
					<div className="flex ">
						<div className=" flex h-8">
							<button className=" flex items-center px-2 rounded-l-full border border-black">
								<BiLike/>
								{abbreviateNumber(videoDetails?.statistics?.likeCount)}
							</button>
							<button className=" flex items-center px-2 rounded-r-full border border-black">
								<BiDislike/>
							</button>
						</div>
						<div>
							<span>share</span>
							<span>download</span>
							<span>thanks</span>
							<span>...</span>
						</div>
					</div>
				</div>

				{/* nested comment below */}
				<div>
					<CommentContainer />
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
