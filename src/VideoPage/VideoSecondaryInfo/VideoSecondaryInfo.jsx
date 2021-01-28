import React from "react";
import "./VideoSecondaryInfo.scss";
import Avatar from "@material-ui/core/Avatar";
import numeral from "numeral";
import icons from "../../icons";

const VideoSecondaryInfo = ({ item, isChecked }) => {
  return (
    <div className="secondary">
      <div className="secondary__Info">
        <div className="channel">
          <Avatar className="channelImg" src={item.thumbnailUrl} alt="" />
          <div className="channelInfo">
            <h4>{item.channelTitle}</h4>
            <p className="channelInfo__subsc">{`${numeral(item.subscriberCount)
              .format("0a")
              .toUpperCase()} subscribers`}</p>
            <p>
              {item.description.length > 500
                ? `${item.description.substring(0, 500)}...`
                : item.description}
            </p>
          </div>
        </div>
        <button className="subscribeBtn">SUBSCRIBE</button>
      </div>
      <div className="comment">
        <div className="commentCount">{`${numeral(
          item.statistics.commentCount
        ).format("0,0")} Comments`}</div>
        <div className="sortBy">{icons.sort} SORT BY</div>
      </div>
    </div>
  );
};

export default VideoSecondaryInfo;
