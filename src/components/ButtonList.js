import React from "react";
import Button from "./Button";

const listItem = ["Popular", "New", "CSS", "TypeScript", "HTML", "JAVA", "wifi studes"];

const ButtonList = () => {
	return (
		<div className=" flex md:gap-x-3 pl-5 py-2 ">
			{
				listItem.map( (item, index)=> (<Button key={index} name={item} />))
			}
		</div>
	);
};

export default ButtonList;
