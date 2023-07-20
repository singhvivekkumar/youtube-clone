import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../constant";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		getVideos();
	}, []);

	const getVideos = async () => {
		const response = await fetch(YOUTUBE_VIDEOS_API);
		const jsonData = await response.json();
		// console.log(jsonData.items);
		setVideos(jsonData?.items);
	};
	return !videos? null: (
		<div className=" flex flex-wrap justify-evenly h-full overflow-y-auto  gap-2">
			{videos.map((item) => (
				<VideoCard videoInfo={item} key={item?.id} />
			))}
		</div>
	);
};

export default VideoContainer;
