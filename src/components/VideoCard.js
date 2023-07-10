import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_CHANNEL_DETAILS_API } from "../constant";

const VideoCard = ({ videoInfo }) => {
  const [channelDetails, setChannelDetails] = useState();

  // console.log(videoInfo);
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
    <div className=" flex flex-col mr-4">
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
      <div className="flex ">
        {/* avatar */}
        <div>
          <div>
            <img
              alt="avatar"
              className="h-full w-full object-cover"
              src={channelDetails?.snippet?.thumbnails?.default?.url}
            />
          </div>
        </div>

        {/* title */}
        <div>
          <span>{title}</span>
          <span>{channelTitle}</span>
          <div>
            <span>{} views</span>
            <span>{} </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
