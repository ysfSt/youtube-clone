import React from "react";
import "./SideBar.scss";
import SideBarItem from "./SideBarItem/SideBarItem";
import icons from "../icons";

const SideBar = ({ isChecked }) => {
  return (
    <div className={`sidebar ${isChecked && "sidebar--dark"}`}>
      <SideBarItem
        selected
        isChecked={isChecked}
        icon={icons.home}
        title="Home"
      />
      <SideBarItem
        isChecked={isChecked}
        icon={icons.trending}
        title="Trending"
      />
      <SideBarItem
        isChecked={isChecked}
        icon={icons.subscriptions}
        title="subscriptions"
      />
      <hr />
      <SideBarItem isChecked={isChecked} icon={icons.library} title="Library" />
      <SideBarItem isChecked={isChecked} icon={icons.history} title="History" />
      <SideBarItem
        isChecked={isChecked}
        icon={icons.watchLater}
        title="Watch later"
      />
      <SideBarItem
        isChecked={isChecked}
        icon={icons.showMore}
        title="Show more"
      />
      <hr />
    </div>
  );
};

export default SideBar;
