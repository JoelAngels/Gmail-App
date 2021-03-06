import { Button, IconButton } from "@material-ui/core";
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
import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice";

function Sidebar() {
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon fontSize="large" />}
        className="sidebar__compose"
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>
      {/* This is for the inbox */}
      <SidebarOption
        Icon={InboxIcon}
        title={"Inbox"}
        number={33}
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
      <SidebarOption Icon={ExpandMoreIcon} title={"More"} number={10} />

      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
