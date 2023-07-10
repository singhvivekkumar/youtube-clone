import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useFetchData from "../utils/help";
import { GOOGLE_API_KEY } from "../constant";

const VideoCard = ({ videoInfo }) => {
  console.log(videoInfo);
  const { snippet, statistics } = videoInfo;
  const { channelTitle, channelId, title, thumbnails } = snippet;
  const promiseChannelData = useFetchData(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${GOOGLE_API_KEY}`);

  // promise is empty object promise =undefined promise= { promisestate:"pending", promiseresult: undefined}
  // promise is empty object promise= { promisestate:"fulfill", promiseresult: {data}}
  useEffect( ()=> {
    console.log(promiseChannelData);
    
  }, []);

  return (
    <div className=" flex flex-col ">
      <Link to={"/watch?v=" + videoInfo.id}>
        <img
          className=" rounded-md"
          alt="thumbnails"
          src={thumbnails.medium.url}
        />
      </Link>

      <div className=" font-semibold text-sm">{title}</div>
      <ul className=" flex justify-around">
        <li className=" text-xs font-semibold text-gray-700">{channelTitle}</li>
        <li className=" text-xs">{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
