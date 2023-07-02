/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import store from "../utils/store";
import MenuItem from "./MenuItem";

const list = [
  {
    text: "Home",
    icon: "H",
    action: "",
    display: "fixed"
  },
  {
    text: "Library",
    icon: "H",
    action: "",
    display: "fixed"
  },
  {
    text: "Items",
    icon: "H",
    action: "",
    display: "fixed",
    divider: true
  },
]

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return !isMenuOpen? null : (
    <div className=" mx-2 px-2 border ">
      {
        list.map( (items)=> (
          <MenuItem text={items.text} icon={items.icon} action={items.action}/>
        ))
      }
    </div>
  );
};

export default SideBar;
