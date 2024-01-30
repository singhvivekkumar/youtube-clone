/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import MenuItem from "./MenuItem";
import { NavMenuList } from "../utils/help";
import { Link } from "react-router-dom";

const SideBar = () => {

	const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

	return !isMenuOpen ? null : (
		<section className=" w-1/6 h-full sticky hidden md:block overflow-y-auto dark:bg-slate-800 dark:text-slate-100 ">
			<div className=" w-full h-full flex flex-col z-10 px-2 pt-3 ">
				{NavMenuList.map((items, index) => {
					return (
						<div className=" rounded-xl hover:bg-slate-700" key={index}>
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
		</section>
	);
};

export default SideBar;
