import React from "react";
import numeral from "numeral";
import moment from "moment";
import "./SideBarVideo.scss";
import { Link } from "react-router-dom";

const SideBarVideo = ({ item , data}) => {
    console.log(item);
  return (
      
    <div className="sideBarVideo">
        <Link className='videoCard__link' to = {
            {
                pathname : `${item.id}`,
                state : {item, data}
            }
        }>
        <img className="videoCard__thumbnail" src={item.image} alt="" />
        </Link>
      <div className="videoCard__Info">
        <div className="videoCard__text">
          <h5>
            {item.title.length > 40
              ? `${item.title.substring(0, 40)}...`
              : item.title}
          </h5>
          <p>{item.channel}</p>
          <p>{`${numeral(item.statistics.viewCount)
            .format("0a")
            .toUpperCase()} views`}</p>
          <p>{moment(item.publishedAt).fromNow()}</p>
        </div>
      </div>
    </div>
  );
};

export default SideBarVideo;
