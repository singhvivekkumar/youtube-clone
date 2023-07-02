import React from "react";

const MenuItem = ({ text, action, icon }) => {
  return (
    <div
      className=" text-sm cursor-pointer h-10 flex items-center px-2 mb-1 rounded-lg hover:bg-gray-200"
      onClick={action}
    >
      <span>{icon}</span>
      {text}
    </div>
  );
};

export default MenuItem;
