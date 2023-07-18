import React,{useEffect, useState} from 'react';
import { YOUTUBE_CHANNEL_DETAILS_API } from '../constant';
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

const ChannelBar = ({channelId}) => {
	const [channelDetails, setChannelDetails] = useState();

	useEffect(() => {
		getChannelDetails();
	}, [channelId]);

	const getChannelDetails = async () => {
		const response = await fetch(YOUTUBE_CHANNEL_DETAILS_API + channelId);
		const jsonData = await response.json();
		// console.log(jsonData?.items[0]);
		setChannelDetails(jsonData?.items[0]);
	};
  return (
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
								{channelDetails?.snippet?.channelTitle}{" "}
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
									channelDetails?.statistics?.likeCount
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
  )
}

export default ChannelBar;