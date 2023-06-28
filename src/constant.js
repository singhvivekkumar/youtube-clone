export const GOOGLE_API_KEY = "AIzaSyBIldABPhH3Ctw4C3WGQlBjejGGo4FYEiA";

export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_SEARCH_SUGGESTION_API = "http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=chrome&hl=en&q=";
// export const YOUTUBE_SEARCH_SUGGESTION_API = "https://clients1.google.com/complete/search?client=youtube&client=chrome&ds=yt&q=";