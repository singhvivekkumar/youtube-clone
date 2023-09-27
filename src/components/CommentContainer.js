import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import { YOUTUBE_COMMENT_DETAILS_API } from "../constant";

const commentData = [
	{
		name: "Vivek Kumar 0",
		id: 11,
		text: "React Hook useEffect has a missing dependency: 'dispatch'.",
		replies: [],
	},
	{
		name: "Vivek Kumar 1",
		id: 12,
		text: "React Hook useEffect has a missing dependency: 'dispatch'.",
		replies: [],
	},
	{
		name: "Vivek Kumar2 ",
		id: 13,
		text: "React Hook useEffect has a missing dependency: 'dispatch'.",
		replies: [
			{
				name: "Vivek Kumar22",
				id: 14,
				text: "React Hook useEffect has a missing dependency: 'dispatch'.",
				replies: [
					{
						name: "Vivek Kumar23",
						id: 15,
						text: "React Hook useEffect has a missing dependency: 'dispatch'.",
						replies: [],
					},
					{
						name: "Vivek Kumar43",
						id: 16,
						text: "React Hook useEffect has a missing dependency: 'dispatch'.",
						replies: [
							{
								name: "Vivek Kumar54",
								id: 17,
								text: "React Hook useEffect has a missing dependency: 'dispatch'.",
								replies: [
									{
										name: "Vivek Kumar54",
										id: 18,
										text: "React Hook useEffect has a missing dependency: 'dispatch'.",
										replies: [
											{
												name: "Vivek Kumar4",
												id: 19,
												text: "React Hook useEffect has a missing dependency: 'dispatch'.",
												replies: [],
											},
										],
									},
								],
							},
						],
					},
				],
			},
			{
				name: "Vivek Kumar47",
				id: 22,
				text: "React Hook useEffect has a missing dependency: 'dispatch'.",
				replies: [],
			},
			{
				name: "Vivek Kumar54",
				id: 23,
				text: "React Hook useEffect has a missing dependency: 'dispatch'.",
				replies: [],
			},
		],
	},
	{
		name: "Vivek Kumar32",
		id: 24,
		text: "React Hook useEffect has a missing dependency: 'dispatch'.",
		replies: [],
	},
	{
		name: "Vivek Kumar33",
		id: 25,
		text: "React Hook useEffect has a missing dependency: 'dispatch'.",
		replies: [],
	},
];

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
