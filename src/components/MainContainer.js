import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
	return (
		<div className="flex flex-col bg-slate-800 overflow-hidden ">
			<ButtonList />
			<VideoContainer />
		</div>
	);
};

export default MainContainer;
