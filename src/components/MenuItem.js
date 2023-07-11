import React from "react";


const MenuItem = ({ text, action, icon }) => {
	return (
		<div className=" text-base cursor-pointer h-8 flex items-center px-4 mb-3 rounded-lg hover:bg-gray-200">
			<span className="text-xl mr-5">{icon}</span>
			<span className=" font-sans font-semibold">{text}</span>
		</div>
	);
};

export default MenuItem;
