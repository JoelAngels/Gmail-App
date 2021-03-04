import { Button } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import SidebarOption from "./SidebarOption";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/LabelImportant";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Sidebar() {
  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon fontSize="large" />}
        className="sidebar__compose"
      >
        Compose
      </Button>
      {/* This is for the inbox */}
      <SidebarOption
        Icon={InboxIcon}
        title={"Inbox"}
        number={54}
        selected={true}
      />
      {/* This is for the starred */}
      <SidebarOption Icon={StarIcon} title={"Starred"} number={30} />
      {/* This is for the snoozed */}
      <SidebarOption Icon={AccessTimeIcon} title={"Snoozed"} number={7} />
      {/* This is for the sent */}
      <SidebarOption Icon={NearMeIcon} title={"Sent"} number={54} />
      {/* This is for the Important */}
      <SidebarOption
        Icon={LabelImportantIcon}
        title={"Important"}
        number={21}
      />
      {/* This is for the Drafts */}
      <SidebarOption Icon={NoteIcon} title={"Drafts"} number={45} />
      {/* This is for the More */}
      <SidebarOption Icon={ExpandMoreIcon} title={"More"} />
    </div>
  );
}

export default Sidebar;
