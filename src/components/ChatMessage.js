import React from "react";

const ChatMessage = ({ name, text }) => {
	return (
		<div className=" flex items-center m-1 p-1 border border-gray-400 bg-slate-50 rounded-lg">
			<img
				className=" h-6 px-2"
				alt="user"
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmEwalaRUsDXz_hi03tVaA56X2bP3ocnStKw&usqp=CAU"
			/>
			<span className=" px-2 font-semibold">{name}</span>
			<span className=" ">{text}</span>
		</div>
	);
};

export default ChatMessage;
