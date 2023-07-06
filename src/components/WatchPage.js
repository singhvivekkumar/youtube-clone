import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";
import RelatedVideos from "./RelatedVideos";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("v"));
  const [relatedVideos, setRelatedVideos] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    getRelatedVideos();
  }, []);

  const getRelatedVideos = async (id) => {
    const response = await fetch();
    const jsonData = await response.json();
    console.log(jsonData);
    // setRelatedVideos(jsonData)
  };

  return (
    <div className="flex justify-center flex-row w-full">
      {/* section 1st */}
      <div>
        <div className=" px-10 m-4 ">
          <iframe
            width="1000"
            height="515"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="text-white font-bold text-sm md:text-xl mt-4 line-clamp-2">
            {searchParams?.title}
          </div>
        </div>

        {/* nested comment below */}
        <div>
          <CommentContainer />
        </div>
      </div>
      {/* section 2nd */}
      <div className=" m-1 mr-5 w-full">
        <LiveChat />
        <RelatedVideos />
        <div className="flex flex-col py-6 px-4 overflow-y-auto lg:w-[350px] xl:w-[400px]">
          {relatedVideos?.contents?.map((item, index) => {
            if (item?.type !== "video") return false;
            return <RelatedVideos key={index} video={item?.video} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
