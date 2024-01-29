import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
	return (
		<section className=" h-full w-full bg-slate-800 ">
			<ButtonList />
			<VideoContainer />
		</section>
	);
};

export default MainContainer;
