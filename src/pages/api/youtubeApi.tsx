import axios from "axios";
import { google } from "googleapis";

//Base URL Netlify or Vecelに上げるときにEnviroment variableを別であげる
const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const url = `https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=amongus&maxResults=6&key=?key=${YOUTUBE_API_KEY}`;

//fetch endpoint then transform that to JSON
export const fetchAPI = async (path) => {
  const res = await fetch(`${url}`);

  if (!res.ok) {
    console.error(await res.text());
    throw new ErrorEvent("Failed to fetch API");
  }
  const data = await res.json();
  if (data.errors) {
    console.error(data.errors);
    throw new Error("Failed to fetch API");
  }
  return {
    props: {
      data,
    },
  };
};

// const fetchAllVideos = () => {
//     const params =
// }

// export const getAllVideos = async() =>{
//     const data = await fetchAllVideos()
//     return data
// }

//Search
// const onSearchYoutube = (keyword) => {

//   axios.get(url).then((response) => {
//     this.setState({
//       videos: response.data.items,
//     });
//   });
// };
