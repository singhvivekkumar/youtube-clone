import React from "react";


const MenuItem = ({ text, icon }) => {
	return (
		<div className=" text-base cursor-pointer h-11 px-5 flex items-center rounded-lg">
			<span className="text-xl mr-5">{icon}</span>
			<span className=" font-sans font-medium ">{text}</span>
		</div>
	);
};

export default MenuItem;
