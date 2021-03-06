const config = {
  API_ENDPOINT: "https://www.googleapis.com/youtube/v3/search",
  API_KEY: process.env.REACT_APP_API_KEY,
  SERVER_endpoint:
    process.env.REACT_APP_SERVER_ENDPOINT || "http://localhost:8000/fav_items",
};

export default config;
