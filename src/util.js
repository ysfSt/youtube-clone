import axios from "axios";

const API_KEY = process.env.REACT_APP_YOUTUBE_API;
export const channelUrl = `channels?&part=snippet,statistics&key=${API_KEY}`;
export const trendingUrl = `videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=20&key=${API_KEY}`;

export const instance = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
});

export const toggleHundler = (isChecked, icon) => {
  return isChecked ? icon["white"] : icon["black"];
};
