import axios from "axios";

const KEY = "AIzaSyCgsSiJpklNx-QC1zSPawTOa31z_F9oi9c";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY
  }
});
