import React, { useState } from "react";
import sort from "../../image/Icon v3/sort.png";
import more from "../../image/Icon-v5/more.png";
import txtfile from "../../image/Icon-v5/txt-file.png";
import pngfile from "../../image/Icon-v5/png-file.png";
import pdffile from "../../image/Icon-v5/pdf-file.png";
import docxfile from "../../image/Icon-v5/docx-file.png";
import avataricon from "../../image/Sidebar/More/avatar_icon.png";
import phone from "../../image/Icon-v4/phone.png";
import videocamera from "../../image/Icon-v4/video-camera.png";
import Tooltip from "@mui/material/Tooltip";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import openinbrowser from "../../image/Icon-v5/open-in-browser.png";
import download from "../../image/Icon-v5/download.png";

function ChatFile({ setopenChatMessage }) {
  const [openTooltip, setOpenTooltip] = useState(false);

  const handleTooltipClose = () => {
    setOpenTooltip(false);
  };

  const handleTooltipOpen = () => {
    setOpenTooltip(!openTooltip);
  };

  return (
    <div className="chatcontainer">
      <div className="backgroundChatUserHeader">
        <div className="IconHeaderUserImg">
          <img src={avataricon} className="IconHeaderUserImg" />
        </div>
        <div className="UserChatItem">
          <div className="ChatHeaderItemName">Full Name</div>
          <div className="ChatHeaderItemProfile">Position - Block Name</div>
        </div>
        <div className="itemchat">
          {/* <Link to="/Communication"> */}
          <div
            className="BackGroundChatUser"
            onClick={() => setopenChatMessage(true)}
          >
            <div className="BackGroundButtonChat">Chat</div>
          </div>
          {/* </Link>
        <Link to="/File"> */}
          <div
            className="BackGroundChatUser"
            onClick={() => setopenChatMessage(false)}
          >
            <div className="BackGroundButtonChat1">Files</div>
          </div>
          {/* </Link> */}
        </div>
        <div className="BackGroundIconChatHeader">
          <div className="BackGroundIconVideo">
            <img src={videocamera} className="IconVideo" />
          </div>
          <div className="BackGroundIconPhone">
            <img src={phone} className="IconPhone" />
          </div>
        </div>
      </div>
      {/* Body */}
      <div className="ChatFile">
        <table>
          <tr>
            <th>
              <span className="nameAc">Type</span>
              <img src={sort} className="iconsort" />
            </th>
            <th>
              Name <img src={sort} className="iconsort" />
            </th>
            <th>
              Shared on <img src={sort} className="iconsort" />
            </th>
            <th>
              Sent by <img src={sort} className="iconsort" />
            </th>
            <th>
              More options <img src={sort} className="iconsort" />
            </th>
          </tr>
          {/* File Item */}
          <tr>
            <td>
              <img src={pdffile} className="iconFile" />
            </td>
            <td>Jisoo Kim.pdf</td>
            <td>07/11/2022</td>
            <td>Full Name</td>
            <td>
              <ClickAwayListener onClickAway={handleTooltipClose}>
                <Tooltip
                  PopperProps={{
                    disablePortal: true,
                  }}
                  onClose={handleTooltipClose}
                  open={openTooltip}
                  placement="bottom"
                  className="TooltipMoreFile"
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  title={
                    <div>
                      <div className="ItemTooltipFile">
                        <div className="IconTooltipFile0">
                          <img
                            src={openinbrowser}
                            className="IconTooltipFile"
                          />
                        </div>
                        <div className="fileTooltipTitle">Open in Browser</div>
                      </div>
                      <div className="ItemTooltipFile">
                        <div className="IconTooltipFile0">
                          <img src={download} className="IconTooltipFile" />
                        </div>
                        <div className="fileTooltipTitle">Download</div>
                      </div>
                    </div>
                  }
                >
                  <img
                    src={more}
                    className="iconmoreFile"
                    onClick={handleTooltipOpen}
                  />
                </Tooltip>
              </ClickAwayListener>
            </td>
          </tr>
          {/* File Item */}
          <tr>
            <td>
              <img src={docxfile} className="iconFile" />
            </td>
            <td>Jisoo Kim.pdf</td>
            <td>07/11/2022</td>
            <td>Full Name</td>
            <td>
              <img src={more} className="iconmoreFile" />
            </td>
          </tr>
          {/* File Item */}
          <tr>
            <td>
              <img src={pngfile} className="iconFile" />
            </td>
            <td>Jisoo Kim.pdf</td>
            <td>07/11/2022</td>
            <td>Full Name</td>
            <td>
              <img src={more} className="iconmoreFile" />
            </td>
          </tr>
          {/* File Item */}
          <tr>
            <td>
              <img src={txtfile} className="iconFile" />
            </td>
            <td>Jisoo Kim.pdf</td>
            <td>07/11/2022</td>
            <td>Full Name</td>
            <td>
              <img src={more} className="iconmoreFile" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default ChatFile;
