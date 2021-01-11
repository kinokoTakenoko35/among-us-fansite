import axios from "axios";
import { google } from "googleapis";
import { useEffect, useState } from "react";

//make GoogleAuth

//Base URL Netlify or Vecelに上げるときにEnviroment variableを別であげる
const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const url = `https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=amongus&maxResults=6&key=?key=${YOUTUBE_API_KEY}`;

//fetch endpoint then transform that to JSON
export const FetchAPI = async (path) => {
  const [youtube, setYoutube] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
};
