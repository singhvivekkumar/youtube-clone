import React from "react";
import { abbreviateNumber } from "js-abbreviation-number";
import { BiLike, BiDislike } from "react-icons/bi";


const Comment = ({ snippet }) => { 
	// console.log(snippet);
	// const {authorDisplayName, authorProfileImageUrl,textDisplay} = snippet;
	return !snippet.authorProfileImageUrl? null: (
		<div className=" relative flex my-2 p-1 px-1 dark:bg-slate-700/70 dark:hover:bg-slate-700/90 bg-gray-100 hover:bg-gray-200 rounded-lg ">
			<img
				className=" h-8 rounded-full "
				alt="user"
				src={snippet?.authorProfileImageUrl}
			/>
			<div className=" flex flex-col pl-2 ">
				<span className=" text-sm font-semibold mb-1">{snippet?.authorDisplayName}</span>
				<span className=" flex text-[13px] flex-wrap line-clamp-2">{snippet?.textDisplay}</span>
				<div className="flex items-center justify-between w-20">
					<button className=" flex items-center">
						<BiLike />
						{abbreviateNumber(snippet?.likeCount)}
					</button>
					<button className="flex items-center"><BiDislike/></button>
				</div>
			</div>
			<div className=" absolute right-0 top-0 text-xs p-2 pr-5 ">
				edited on : {(snippet?.updatedAt.match(/[0-9]+-[0-9]+-[0-9]+/))}
			</div>
		</div>
	);
};

export default Comment;
