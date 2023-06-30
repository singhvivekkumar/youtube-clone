import React from "react";

const Comment = ({ commentDetails }) => {
  const { name, text} = commentDetails;
  return (
    <div className=" flex my-2 p-1 bg-gray-200 rounded-lg ">
      <img
        className=" h-6 rounded-full "
        alt="user"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmEwalaRUsDXz_hi03tVaA56X2bP3ocnStKw&usqp=CAU"
      />
      <div>
        <p className=" font-semibold ">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
