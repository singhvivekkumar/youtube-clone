import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv, MdVideoLibrary } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";

export const NavMenuList = [
	
	{ text: "Home", icon: <AiFillHome />, action: "/", display: "fixed" },
	{ text: "Shorts", icon: <MdVideoLibrary/> , action: "", display: "fixed" },
	{
		text: "Trending",
		icon: <MdLocalFireDepartment />,
		action: "",
		display: "fixed",
	},
	{ text: "Music", icon: <CgMusicNote />, action: "", display: "fixed" },
	{ text: "Films", icon: <FiFilm />, action: "", display: "fixed" },
	{ text: "Live", icon: <MdLiveTv />, action: "", display: "fixed" },
	{
		text: "Gaming",
		icon: <IoGameControllerSharp />,
		action: "",
		display: "fixed",
	},
	{ text: "News", icon: <ImNewspaper />, action: "", display: "fixed" },
	{ text: "Sports", icon: <GiDiamondTrophy />, action: "", display: "fixed" },
	{
		text: "Learning",
		icon: <RiLightbulbLine />,
		action: "",
		display: "fixed",
	},
	{
		text: "Fashion",
		icon: <GiEclipse />,
		action: "",
		display: "fixed",
		divider: true,
	},
	{ text: "Settings", icon: <FiSettings />, action: "", display: "fixed" },
	{
		text: "Report History",
		icon: <AiOutlineFlag />,
		action: "",
		display: "fixed",
	},
	{ text: "Help", icon: <FiHelpCircle />, action: "", display: "fixed" },
	{
		text: "Send feedback",
		icon: <RiFeedbackLine />,
		action: "",
		display: "fixed",
	},
];

export const PublishedTimeOfVideo = (publishedAt) => {
	const publishedDate = new Date(publishedAt);
	const currentDate = new Date();
	if (currentDate.getFullYear() - publishedDate.getFullYear()) {
		return (
			currentDate.getFullYear() -
			publishedDate.getFullYear() +
			" years ago"
		);
	} else {
		if (currentDate.getMonth() - publishedDate.getMonth()) {
			return (
				currentDate.getMonth() -
				publishedDate.getMonth() +
				" months ago"
			);
		} else {
			return (
				currentDate.getDate() - publishedDate.getDate() + " days ago"
			);
		}
	}
};