import React from "react";
import "./VideoPrimaryInfo.scss";
import icons from "../../icons";
import numeral from "numeral";
import moment from "moment";
const VideoPrimaryInfo = ({ item, isChecked }) => {
  return (
    <div className="primary">
      <h2 className="primary__title">{item.title}</h2>
      <div className="primary__info">
        <div className="leftInfo">
          {`${numeral(item.statistics.viewCount).format(
            "0,0"
          )} views . ${moment(item.publishedAt).fromNow()}`}
        </div>
        <div className="RightInfo">
          <ul>
            <li>
              {icons.like}
              {`${numeral(item.statistics.likeCount)
                .format("0a")
                .toUpperCase()}`}
            </li>
            <li>
              {icons.deslike}
              {`${numeral(item.statistics.deslikeCount)
                .format("0a")
                .toUpperCase()}`}
            </li>
            <li>{icons.save} SAVE</li>
            <li>{icons.more}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VideoPrimaryInfo;
