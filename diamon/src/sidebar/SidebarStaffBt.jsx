import React, { useState } from "react";
import "./Sidebar.css";
import logo_sidebar from "../image/Sidebar/Logo/logo_sidebar.png";
import avatar_icon from "../image/Sidebar/Not Selected/Resident/avatar_icon.png";
import more_icon from "../image/Sidebar/Not Selected/Resident/more_icon.png";
import active_icon from "../image/Sidebar/More/active_icon.png";
import my_tasks_icon from '../image/Sidebar/Not Selected/Staff/my_tasks_icon.png'
import notifications_icon from '../image/Sidebar/Not Selected/Staff/notifications_icon.png'
import communications_icon from '../image/Sidebar/Not Selected/Staff/communications_icon.png'
import manage_bookings_icon from '../image/Sidebar/Not Selected/Staff/manage_bookings_icon.png'
import Tooltip from "@mui/material/Tooltip";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { useNavigate } from "react-router-dom";

function SidebarStaffBt({Userdetail}) {
  const [inactive, setinactive] = useState(false);
  const [openTooltip, setOpenTooltip] = useState(false);
  const Navigate = useNavigate() ; 

  const handleTooltipClose = () => {
    setOpenTooltip(false);
  };

  const handleTooltipOpen = () => {
    setOpenTooltip(!openTooltip);
  };

  const activebar = () => {
    setinactive(!inactive);
  };

  const logout = () => {
    sessionStorage.removeItem("accessToken")
    Navigate("/")
  }

  return (
    <div className={`Sitebarbr ${inactive ? "" : "inactive"}`}>
      <div onClick={() => activebar()}>
        <img src={logo_sidebar} className="sidebarlogo" />
      </div>
      <div>
        <div className="sidebaradmin">
        <Tooltip
            placement="right"
            title="My_Tasks"
            type="dark"
            effect="solid"
          >
            <img src={my_tasks_icon} className="sidebaritem" />
          </Tooltip>
          
          <span className="titleitem">My_Tasks</span>
        </div>
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
            <img src={communications_icon} className="sidebaritem" />
          </Tooltip>
          
          <span className="titleitem">Communication</span>
        </div>
        <div className="sidebaradmin">
        <Tooltip
            placement="right"
            title="Manage_Bookings"
            type="dark"
            effect="solid"
          >
            <img src={manage_bookings_icon} className="sidebaritem" />
          </Tooltip>
          
          <span className="titleitem">Manage_Bookings</span>
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
                      <h5>{Userdetail.username} - {Userdetail.role}</h5>
                      <p>Diamond Apartment</p>
                    </div>
                    <div className="moreicon">
                      <img src={active_icon} className="moreicon" />
                    </div>
                    <div className="allinforitem">
                      <div className="infoitem">My Profile</div>
                      <div className="infoitem">Add an existing account</div>
                      <div className="infoitem" onClick={logout}>Logout </div>
                    </div>
                  </div>
                }
              >
                <div>
                  <div className="avartar">
                    <img src={avatar_icon} className="avartar" />
                  </div>
                  <div className="userinfor">
                    <h5>{Userdetail.username} - {Userdetail.role}</h5>
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

export default SidebarStaffBt;
