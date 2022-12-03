import React from "react";
import "./Chat.css";
import attach from "../../image/Icon-v4/attach.png"
import edittext  from "../../image/Icon-v4/edit-text.png"
import gif from "../../image/Icon-v4/gif.png"
import smile from "../../image/Icon-v4/smile.png"
import sticker from "../../image/Icon-v4/sticker.png"
import send from "../../image/Icon-v4/send.png"
import avataricon from "../../image/Sidebar/More/avatar_icon.png";
import phone from "../../image/Icon-v4/phone.png";
import videocamera from "../../image/Icon-v4/video-camera.png";

function ChatMessage({setopenChatMessage}) {
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
          <div className="BackGroundChatUser" onClick={() => setopenChatMessage(true)}>
            <div className="BackGroundButtonChat1">Chat</div>
          </div>
        {/* </Link>
        <Link to="/File"> */}
          <div className="BackGroundChatUser" onClick={() => setopenChatMessage(false)}>
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
      {/* Body */}
      <div className="message">
          chat aaaaaaa
      </div>
      {/* footter */}
      <div className="InputChat">
        <input className="inputMessage" placeholder="Type a new message"/>
        <div className="GroupIconChat">
          <img src={edittext} className="IconChatFooter"/>
          <img src={smile} className="IconChatFooter"/>
          <img src={attach} className="IconChatFooter"/>
          <img src={gif} className="IconChatFooter"/>
          <img src={sticker} className="IconChatFooter"/>
          <img src={send} className="SendMessageIcon"/>
        </div>
      </div>
    </div>
  );
}

export default ChatMessage;
