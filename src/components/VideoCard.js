import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ videoInfo }) => {
  // console.log(videoInfo);
  const { snippet, statistics } = videoInfo;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className=" m-2 w-80 ">
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
