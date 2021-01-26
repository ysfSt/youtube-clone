import React from "react";
import "./Header.scss";
import icons from '../icons'
import { toggleHundler } from "../util";
import { Link } from "react-router-dom";

const Header = ({ isChecked }) => {
  const rightIcons = [
    icons.video,
    icons.app,
    icons.notifications,
    icons.avatar,
  ];
  return (
    <div className="header">
      <div className="header__left">
        {toggleHundler(isChecked, icons.menu)}
        <Link to="/">
          <img
            className="logo__image"
            src={toggleHundler(isChecked, icons.youtube)}
            alt="Youtube"
          />
        </Link>
      </div>
      <div className="header__middle">
        <input
          type="text"
          placeholder="Search"
          className={isChecked && "input--dark"}
        />
        <div
          className={`search__container ${
            isChecked && "search__container--dark"
          }`}
        >
          {icons.searchIcon}
        </div>
      </div>
      <div className="header__right">
        {rightIcons.map((icon) => toggleHundler(isChecked, icon))}
      </div>
    </div>
  );
};

export default Header;
