import React, { useState } from "react";
import "./Sidebar.css";
import logo_sidebar from "../image/Sidebar/Logo/logo_sidebar.png";
import avatar_icon from "../image/Sidebar/Not Selected/Resident/avatar_icon.png";
import more_icon from "../image/Sidebar/Not Selected/Resident/more_icon.png";
import notifications_icon from "../image/Sidebar/Not Selected/Resident/notifications_icon.png";
import active_icon from "../image/Sidebar/More/active_icon.png";
import new_issue_icon from "../image/Sidebar/Not Selected/Manager/new_issue_icon.png"
import manage_issues_icon from "../image/Sidebar/Not Selected/Manager/manage_issues_icon.png"
import landlord_history_icon from "../image/Sidebar/Not Selected/Manager/landlord_history_icon.png"
import manage_accounts_icon from "../image/Sidebar/Not Selected/Manager/manage_accounts_icon.png"
import communication_icon from "../image/Sidebar/Not Selected/Manager/communication_icon.png"
import Tooltip from "@mui/material/Tooltip";
import ClickAwayListener from "@mui/material/ClickAwayListener";

function SiderbarManage() {
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
        <div className="sidebaradmin">
        <Tooltip
            placement="right"
            title="New_Issue"
            type="dark"
            effect="solid"
          >
            <img src={new_issue_icon} className="sidebaritem" />
          </Tooltip>
          
          <span className="titleitem">New_Issue</span>
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
            title="Manage_Issues"
            type="dark"
            effect="solid"
          >
            <img src={manage_issues_icon} className="sidebaritem" />
          </Tooltip>
          
          <span className="titleitem">Manage_Issues</span>
        </div>
        <div className="sidebaradmin">
        <Tooltip
            placement="right"
            title="Landlord_History"
            type="dark"
            effect="solid"
          >
            <img src={landlord_history_icon} className="sidebaritem" />
          </Tooltip>
          
          <span className="titleitem">Landlord_History</span>
        </div>
        <div className="sidebaradmin">
        <Tooltip
            placement="right"
            title="Manage_Accounts"
            type="dark"
            effect="solid"
          >
            <img src={manage_accounts_icon} className="sidebaritem" />
          </Tooltip>
          
          <span className="titleitem">Manage_Accounts</span>
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

export default SiderbarManage;