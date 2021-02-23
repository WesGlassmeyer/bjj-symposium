import React from "react";
import ReactDOM from "react-dom";
import VideoPageForm from "./VideoPageForm";

it("renders without crashing", () => {
  const video = {
    rating: 1,
    tags: ["Mount", "Arm Bar", "Attack"],
    kind: "youtube#searchResult",
    etag: "wcnsK_EFoI49PVU1HlnQv6lbN9A",
    id: {
      kind: "youtube#video",
      videoId: "QBqwipFt0Ww",
    },
    snippet: {
      publishedAt: "2019-07-27T15:00:08Z",
      channelId: "UCtXtqlLdZYZm3060qVExXkA",
      title:
        "The 3 Most Important Jiu Jitsu Techniques For A BJJ White Belt by John Danaher",
      description:
        "The 3 Most Important Jiu Jitsu Techniques For A BJJ White Belt by John Danaher - In this video the great John Danaher shows what are the 3 most important Jiu ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/QBqwipFt0Ww/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/QBqwipFt0Ww/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/QBqwipFt0Ww/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Bernardo Faria BJJ Fanatics",
      liveBroadcastContent: "none",
      publishTime: "2019-07-27T15:00:08Z",
    },
  };

  const div = document.createElement("div");
  ReactDOM.render(<VideoPageForm video={video} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
