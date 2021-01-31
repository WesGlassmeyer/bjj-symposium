import React from "react";

const VideosContext = React.createContext({
  videos: [],
  filterSelections: [],
  setFilterSelections: () => {},
});

export default VideosContext;
