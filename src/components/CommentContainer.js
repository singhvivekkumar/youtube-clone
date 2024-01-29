import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import { YOUTUBE_COMMENT_DETAILS_API } from "../constant";

const CommentsList = ({ comments }) => {
	
	return comments.map((comment) => (
		<div key={comment.id} className=" ">
			<Comment commentDetails={comment} />
			<div className="ml-2 pl-4 border-l border-black">
				<CommentsList comments={comment.replies} />
			</div>
		</div>
	));
};

const CommentContainer = ({videoId}) => {

	const [commentDetails, setCommentDetails] = useState([]);
	useEffect(()=>{
		getCommentList();
		// eslint-disable-next-line
	}, []);

	const getCommentList = async ()=> {
		const response = await fetch(YOUTUBE_COMMENT_DETAILS_API+ videoId);
		const jsonData = await response.json();
		console.log(jsonData);
		setCommentDetails(jsonData?.items);
	}
	return (
		!commentDetails ? null : <div className=" mx-2 p-1 w-[900px] ">
			<div className=" p-2 ">
				{
					commentDetails.map( (item) => {
						return(
							<Comment snippet={item?.snippet?.topLevelComment?.snippet} key={item.id} />
						)
					})
				}
				{/* <Comment snippet={commentDetails[0]?.snippet?.topLevelComment?.snippet}/> */}
			</div>
		</div>
	);
};

export default CommentContainer;
