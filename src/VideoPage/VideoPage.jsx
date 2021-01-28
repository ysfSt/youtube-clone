import React from "react";
import YouTube from "react-youtube";
import "./VideoPage.scss";
import SideBarVideo from "./SideBarVideo/SideBarVideo";
import VideoPrimaryInfo from './VideoPrimaryInfo/VideoPrimaryInfo'
import VideoSecondaryInfo from './VideoSecondaryInfo/VideoSecondaryInfo'


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
        <VideoPrimaryInfo item={item} isChecked={props.isChecked} />
        <VideoSecondaryInfo item={item} isChecked={props.isChecked} />
        </div>
        <div className="sideBar">
        <h3 className="sideBar__header">Up next</h3>
        {data.map((item) => {
          if (item.id !== id) {
            return <SideBarVideo item={item} data = {data}/>;
          }
          return null;
        })}
      </div>
      
      .
    </div>
  );
};

export default VideoPage;
