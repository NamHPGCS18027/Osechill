import React, { useState } from "react";
import "./Sidebar.css";
import logo_sidebar from "../image/Sidebar/Logo/logo_sidebar.png";
import avatar_icon from "../image/Sidebar/Not Selected/Resident/avatar_icon.png";
import more_icon from "../image/Sidebar/Not Selected/Resident/more_icon.png";
import active_icon from "../image/Sidebar/More/active_icon.png";
import manage_blocks_icon from "../image/Sidebar/Selected/Admin/manage_blocks_icon.png";
import manage_accounts_icon from "../image/Sidebar/Selected/Admin/manage_accounts_icon.png";
import communication_icon from "../image/Sidebar/Selected/Admin/communication_icon.png";
import Tooltip from "@mui/material/Tooltip";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { NavLink, useNavigate  } from "react-router-dom";

function SidebarAdmin({Userdetail}) {
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
        <NavLink
          to="Admin_Accounts"
          className={({ isActive }) =>
            `sidebaradmin ${isActive ? "active" : ""}`
          }
        >
          <Tooltip
            placement="right"
            title="Admin_Accounts"
            type="dark"
            effect="solid"
          >
              <img
                src={manage_accounts_icon}
                className="sidebaritem"
              />
          </Tooltip>
          <span className="titleitem" >
            Manage_Accounts
          </span>
        </NavLink>
        <NavLink
          to="/AssignBlock"
          className={({ isActive }) =>
            `sidebaradmin ${isActive ? "active" : ""}`
          }
        >
          <Tooltip
            placement="right"
            title="AssignBlock"
            type="dark"
            effect="solid"
          >
            <img src={manage_blocks_icon} className="sidebaritem" />
          </Tooltip>
          <span className="titleitem">AssignBlock</span>
        </NavLink>
        {/* <NavLink
          to="/Communication"
          className={({ isActive }) =>
            `sidebaradmin ${isActive ? "active" : ""}`
          }
        >
          <Tooltip
            placement="right"
            title="Communication"
            type="dark"
            effect="solid"
          >
              <img
                src={communication_icon}
                className="sidebaritem"
              />
          </Tooltip>
          <span className="titleitem">
            Communication
          </span>
        </NavLink> */}

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

export default SidebarAdmin;
