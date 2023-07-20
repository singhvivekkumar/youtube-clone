import React from "react";

const Button = ({ name }) => {
	return (
		<div className="">
			<button className=" p-1 px-2 m-1 mx-1 text-sm dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-200 dark:hover:text-slate-900 bg-gray-200 rounded-md">
				{name}
			</button>
		</div>
	);
};

export default Button;
