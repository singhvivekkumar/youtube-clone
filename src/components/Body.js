import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const Network = () => {
	return (
		<div className=" absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
			<h2 className=" text-center font-semibold text-2xl text-red-700">Plese check your internet connection</h2>
		</div>
	)
}

const Body = () => {

	if(!navigator?.onLine) {
		return <Network/>
	} 
	return (
		<div className="flex dark:bg-slate-800 ">
			<SideBar />
			<Outlet />
		</div> 
	);
};

export default Body;
