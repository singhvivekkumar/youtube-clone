import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";
import RelatedVideos from "./RelatedVideos";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex w-full">
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
        </div>

        {/* nested comment below */}
        <div>
          <CommentContainer />
        </div>
      </div>
      {/* section 2nd */}
      <div className=" m-1 mr-5 w-full">
        <LiveChat/>
        <RelatedVideos/>
      </div>
    </div>
  );
};

export default WatchPage;
