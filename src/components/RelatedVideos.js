import React, { useEffect, useState } from "react";
import { YOUTUBE_RELATED_VIDEO_LIST_API } from "../constant";
import { PublishedTimeOfVideo } from "../utils/help";
import { Link } from "react-router-dom";

const RelatedVideos = ({ channelId }) => {
	console.log("channelid" + channelId);

	const [relatedVideoList, setRelatedVideoList] = useState([]);
	let check = false;

	useEffect(() => {
		getRelatedVideos();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [channelId]);

	const getRelatedVideos = async () => {
		const response = await fetch(
			YOUTUBE_RELATED_VIDEO_LIST_API + channelId
		);
		const jsonData = await response.json();
		console.log(jsonData?.items);
		setRelatedVideoList(jsonData?.items);
	};
	return !relatedVideoList ? null : (
		<div className=" w-[340px]">
			<div className="flex flex-col justify-start">
				{/* { relatedVideoList[0].snippet.title} */}
				{relatedVideoList.map((item) => {
					if (item?.kind==="youtube#activity") check = true;
					return check && (
                        <Link key={item?.id} to={"/watch?v=" + item?.contentDetails?.upload?.videoId}>
						    <div className=" my-1 flex hover:bg-zinc-100 dark:hover:bg-slate-600/80 dark:bg-slate-700/60 p-1 rounded-lg">			
								<img
									alt="thumbnails"
									className=" px-1 rounded-lg h-20 w-36"
									src={item?.snippet?.thumbnails?.medium?.url}
								/>
								<div className=" flex flex-col  ">
									<div className=" dark:text-slate-100/90 font-semibold text-sm line-clamp-2">
										{item?.snippet?.title}
									</div>
									<div className=" dark:text-slate-100/70 text-slate-700 font-semibold text-xs">
										{item?.snippet?.channelTitle}
									</div>
									<div className=" dark:text-slate-100/70 text-slate-600 text-xs">
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

export default RelatedVideos;
