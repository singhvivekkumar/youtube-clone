/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import store from "../utils/store";
import MenuItem from "./MenuItem";
import { NavMenuList } from "../utils/help";

const SideBar = () => {
	const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
	return !isMenuOpen ? null : (
		<div className=" h-full ">
			<div className=" flex flex-col px-5 z-10">
				{NavMenuList.map((items, index) => {
					return (
						<div key={index}>
							<MenuItem
								text={items.text}
								icon={items.icon}
								action={items.action}
							/>
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
