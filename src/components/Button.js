import React from "react";

const Button = ({ name }) => {
	return (
		<div>
			<button className=" p-1 px-2 m-1 mx-1 text-sm bg-gray-200 rounded-md">
				{name}
			</button>
		</div>
	);
};

export default Button;
