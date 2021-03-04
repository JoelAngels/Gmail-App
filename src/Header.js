import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { ArrowDropDown } from "@material-ui/icons";

function Header() {
  return (
    <div className="header">
      {/* We are going to start and build from header left */}
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"
          alt=""
        />
      </div>
      <div className="header__middle">
        <SearchIcon />
        <input type="text" placeholder="Search Mail" />
        <ArrowDropDown className="header__inputCaret" />
      </div>
      <div className="header__right"></div>
    </div>
  );
}

export default Header;
