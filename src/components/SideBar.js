/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import store from "../utils/store";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return !isMenuOpen? null : (
    <div className=" mx-2 px-2 border ">
      <div>
        <ul>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </ul>
      </div>
      <div>
        <div>Subcribtion</div>
        <ul>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </ul>
      </div>
      <div>
        <div>Explore</div>
        <ul>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
