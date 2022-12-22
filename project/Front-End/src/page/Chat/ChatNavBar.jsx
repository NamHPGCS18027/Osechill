import React from "react";
import "./Chat.css";
import avataricon from "../../image/Sidebar/More/avatar_icon.png";
import phone from "../../image/Icon-v4/phone.png";
import videocamera from "../../image/Icon-v4/video-camera.png";
import { Link } from "react-router-dom";

function ChatNavBar({setopenChatMessage}) {
  return (
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
          <div className="BackGroundChatUser" onClick={setopenChatMessage(true)}>
            <div className="BackGroundButtonChat1">Chat</div>
          </div>
        {/* </Link>
        <Link to="/File"> */}
          <div className="BackGroundChatUser" onClick={setopenChatMessage(false)}>
            <div className="BackGroundButtonChat">Files</div>
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
  );
}

export default ChatNavBar;
