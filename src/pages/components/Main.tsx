import Link from "next/link";
import { fetchAPI } from "../api/youtubeApi";

export default function Home({ data }) {
  console.log("data", data);
}

export const Main: React.FC = () => {
  return (
    <div className="wrapper">
      <div className="main-hero">
        <div className="search-section">
          <input type="text" />
          <button>Search</button>
        </div>
        <div className="video-section">
          <h3>Youtube</h3>
        </div>
      </div>
    </div>
  );
};
