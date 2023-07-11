import React from "react";
import Button from "./Button";

const ButtonList = () => {
	return (
		<div className=" flex ">
			<Button name="All" />
			<Button name="Live" />
			<Button name="Home" />
			<Button name="World" />
			<Button name="wifi wifi" />
			<Button name="World" />
		</div>
	);
};

export default ButtonList;
