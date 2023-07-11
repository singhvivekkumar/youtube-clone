const GOOGLE_API_KEY = "AIzaSyBIldABPhH3Ctw4C3WGQlBjejGGo4FYEiA";

export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_SEARCH_SUGGESTION_API =
	"http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=chrome&hl=en&q=";
// export const YOUTUBE_SEARCH_SUGGESTION_API = "https://clients1.google.com/complete/search?client=youtube&client=chrome&ds=yt&q=";

export const YOUTUBE_LIVECHAT_API = `https://www.googleapis.com/youtube/v3/liveChat/messages?liveChatId=Cg0KCzZwX0pNLUk3RlVnKicKGFVDdmpnWHZCbGJRaXlkZmZaVTdtMV9hdxILNnBfSk0tSTdGVWc&part=snippet,authorDetails&maxResults=200&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_CHANNEL_DETAILS_API = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=${GOOGLE_API_KEY}&id=`;
