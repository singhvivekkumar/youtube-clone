import React from "react";
import { useRouteError } from "react-router-dom";

const Errorpage = () => {
	const error = useRouteError();

	return (
		<div className=" flex flex-col justify-center ">
			<h1 className=" text-2xl ">Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	);
};

export default Errorpage;
