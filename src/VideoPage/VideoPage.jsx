import React from "react";
import YouTube from "react-youtube";

import "./VideoPage.scss";

const opts = {
  height: "450",
  width: "100%",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

const VideoPage = (props) => {
  const { id } = props.match.params;
  const { data, item } = props.location.state;
  return (
    <div className="videoPage">
      <div className="videoPage__player">
        {id && <YouTube videoId={`${id}`} opts={opts} />}
        </div>
      
      .
    </div>
  );
};

export default VideoPage;
