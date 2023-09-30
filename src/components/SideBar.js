/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import store from "../utils/store";
import MenuItem from "./MenuItem";
import { NavMenuList } from "../utils/help";
import { Link } from "react-router-dom";

const SideBar = () => {

	const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

	return !isMenuOpen ? null : (
		<div className=" hidden md:block h-full dark:bg-slate-800 dark:text-slate-100 static ">
			<div className=" flex flex-col px-5 z-10 overflow-y-auto ">
				{NavMenuList.map((items, index) => {
					return (
						<div key={index}>
							<Link to={items.action}>
							<MenuItem
								text={items.text}
								icon={items.icon}
							/></Link>
							{items.divider && (
								<hr className=" my-5 border-gray-200" />
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default SideBar;
