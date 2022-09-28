import React, { useState } from "react";
import "./Sidebar.css";
import logo_sidebar from "../image/Sidebar/Logo/logo_sidebar.png";
import avatar_icon from "../image/Sidebar/Not Selected/Resident/avatar_icon.png";
import bookings_icon from "../image/Sidebar/Not Selected/Resident/bookings_icon.png";
import communication_icon from "../image/Sidebar/Not Selected/Resident/communication_icon.png";
import entertainment_icon from "../image/Sidebar/Not Selected/Resident/entertainment_icon.png";
import forums_icon from "../image/Sidebar/Not Selected/Resident/forums_icon.png";
import issues_list_icon from "../image/Sidebar/Not Selected/Resident/issues_list_icon.png";
import markets_icon from "../image/Sidebar/Not Selected/Resident/markets_icon.png";
import more_icon from "../image/Sidebar/Not Selected/Resident/more_icon.png";
import my_issues_icon from "../image/Sidebar/Not Selected/Resident/my_issues_icon.png";
import notifications_icon from "../image/Sidebar/Not Selected/Resident/notifications_icon.png";
import services_icon from "../image/Sidebar/Not Selected/Resident/services_icon.png";
import active_icon from "../image/Sidebar/More/active_icon.png";
import Tooltip from "@mui/material/Tooltip";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { NavLink } from "react-router-dom";

function SidebarReaident() {
  const [inactive, setinactive] = useState(false);
  const [openTooltip, setOpenTooltip] = useState(false);

  const handleTooltipClose = () => {
    setOpenTooltip(false);
  };

  const handleTooltipOpen = () => {
    setOpenTooltip(!openTooltip);
  };

  const activebar = () => {
    setinactive(!inactive);
  };
  return (
    <div className={`Sitebarbr ${inactive ? "" : "inactive"}`}>
      <div onClick={() => activebar()}>
        <img src={logo_sidebar} className="sidebarlogo" />
      </div>
      <div>
        <NavLink to="/Issues_List" className="sidebaradmin">
        <Tooltip
            placement="right"
            title="Issues_List"
            type="dark"
            effect="solid"
          >
            <img src={issues_list_icon} className="sidebaritem" />
          </Tooltip>
          
          <span className="titleitem">Issues_List</span>
        </NavLink>
        <div className="sidebaradmin">
        <Tooltip
            placement="right"
            title="Notifications"
            type="dark"
            effect="solid"
          >
            <img src={notifications_icon} className="sidebaritem" />
          </Tooltip>
          
          <span className="titleitem">Notifications</span>
        </div>
        <div className="sidebaradmin">
        <Tooltip
            placement="right"
            title="Communication"
            type="dark"
            effect="solid"
          >
            <img src={communication_icon} className="sidebaritem" />
          </Tooltip>
          
          <span className="titleitem">Communication</span>
        </div>
        <div className="sidebaradmin">
        <Tooltip
            placement="right"
            title="My_Issues"
            type="dark"
            effect="solid"
          >
            <img src={my_issues_icon} className="sidebaritem" />
          </Tooltip>
          
          <span className="titleitem">My_Issues</span>
        </div>
        <div className="sidebaradmin">
        <Tooltip
            placement="right"
            title="Entertainment"
            type="dark"
            effect="solid"
          >
            <img src={entertainment_icon} className="sidebaritem" />
          </Tooltip>
          
          <span className="titleitem">Entertainment</span>
        </div>
        <div className="sidebaradmin">
        <Tooltip
            placement="right"
            title="Bookings"
            type="dark"
            effect="solid"
          >
            <img src={bookings_icon} className="sidebaritem" />
          </Tooltip>
          
          <span className="titleitem">Bookings</span>
        </div>
        <div className="sidebaradmin">
        <Tooltip
            placement="right"
            title="Markets"
            type="dark"
            effect="solid"
          >
            <img src={markets_icon} className="sidebaritem" />
          </Tooltip>
          
          <span className="titleitem">Markets</span>
        </div>
        <div className="sidebaradmin">
        <Tooltip
            placement="right"
            title="Services"
            type="dark"
            effect="solid"
          >
            <img src={services_icon} className="sidebaritem" />
          </Tooltip>
          
          <span className="titleitem">Services</span>
        </div>
        <div className="sidebaradmin">
        <Tooltip
            placement="right"
            title="Forums"
            type="dark"
            effect="solid"
          >
            <img src={forums_icon} className="sidebaritem" />
          </Tooltip>
          
          <span className="titleitem">Forums</span>
        </div>
        <div className="sidefooter">
          <ClickAwayListener onClickAway={handleTooltipClose}>
            <div>
              <Tooltip
                PopperProps={{
                  disablePortal: true,
                }}
                onClose={handleTooltipClose}
                open={openTooltip}
                placement="top"
                className="TooltipUser"
                disableFocusListener
                disableHoverListener
                disableTouchListener
                title={
                  <div>
                    <div className="avartar1">
                      <img src={avatar_icon} className="avartar" />
                    </div>
                    <div className="userinfor">
                      <h5>Full Name - Administrators</h5>
                      <p>Diamond Apartment</p>
                    </div>
                    <div className="moreicon">
                      <img src={active_icon} className="moreicon" />
                    </div>
                    <div className="allinforitem">
                      <div className="infoitem">My Profile</div>
                      <div className="infoitem">Add an existing account</div>
                      <div className="infoitem">Logout </div>
                    </div>
                  </div>
                }
              >
                <div>
                  <div className="avartar">
                    <img src={avatar_icon} className="avartar" />
                  </div>
                  <div className="userinfor">
                    <h5>Full Name - Administrators</h5>
                    <p>Diamond Apartment</p>
                  </div>
                  <div className="moreicon">
                    <img
                      src={more_icon}
                      className="moreicon"
                      onClick={handleTooltipOpen}
                    />
                  </div>
                </div>
              </Tooltip>
            </div>
          </ClickAwayListener>
        </div>
      </div>
    </div>
  );
}

export default SidebarReaident;