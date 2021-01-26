import React from "react";
import "./SideBarItem.scss";
import { Link } from "react-router-dom";
import { toggleHundler } from "../../util";

const SideBarItem = ({ icon, title, isChecked, selected }) => {
  return (
    <Link
      to="/"
      className={`item ${selected && "selected"} ${isChecked && "item--dark"} ${
        selected && isChecked && "selected--dark"
      }`}
    >
      {toggleHundler(isChecked, icon)}
      <div className={`item__title ${isChecked && "item__title--dark"}`}>
        {title}
      </div>
    </Link>
  );
};

export default SideBarItem;
