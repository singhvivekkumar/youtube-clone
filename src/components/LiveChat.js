import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/ChatSlice";

const LiveChat = () => {
	const dispatch = useDispatch();
	const liveMessages = useSelector((store) => store.chat.messages);

	useEffect(() => {
		const messageInterval = setInterval(() => {
			// console.log("set Interval start");
			dispatch(
				addMessage({
					name: "Kishan Nayak",
					text: "Abhi kuch nahi kr rahe hai",
				})
			);
		}, 3000);

		return () => clearInterval(messageInterval);
	}, []);

	return (
		<div className=" w-full h-[600px] bg-gray-100 rounded-lg border border-black overflow-y-scroll">
			<div className="border-b border-black">
				<span className=" font-semibold text-xl mx-5 ">Live Chat </span>
			</div>
			<div className="">
				{liveMessages.map((message, i) => (
					<ChatMessage key={i} {...message} />
				))}
			</div>
		</div>
	);
};

export default LiveChat;
