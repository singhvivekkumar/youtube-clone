import React from "react";
import Button from "./Button";

const listItem = ["Popular", "New", "world affairs", "wifi studes","world affairs", "wifi studes"];

const ButtonList = () => {
	return (
		<div className=" flex flex-row md:gap-x-3 md:pl-10 ">
			{
				listItem.map( (item, index)=> (<Button key={index} name={item} />))
			}
		</div>
	);
};

export default ButtonList;
