
import React from "react";
import Avatar from "@material-ui/core/Avatar";
import numeral from "numeral";
import { Link } from "react-router-dom";
import moment from "moment";
import "./VideoCard.scss";

const VideoCard = ({ item, data }) => {
  return (
    <div className="videoCard">
      <Link
        to={{
          pathname: `${item.id}`,
          state: { item, data },
        }}
      >
        <img className="videoCard__thumbnail" src={item.image} alt="" />
      </Link>
      <div className="videoCard__Info">
        <Avatar src={item.thumbnailUrl} alt={item.channelTitle} />
        <div className="videoCard__text">
          <h5>{item.title}</h5>
          <p>{item.channel}</p>
          <p>
            {numeral(item.statistics.viewCount).format("0a").toUpperCase()} .{" "}
            {moment(item.publishedAt).fromNow()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
