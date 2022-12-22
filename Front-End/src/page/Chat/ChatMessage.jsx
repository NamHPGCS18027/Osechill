import React, { useState , useEffect} from "react";
import "./Chat.css";
import send from "../../image/Icon-v4/send.png";
import avataricon from "../../image/Sidebar/More/avatar_icon.png";
import phone from "../../image/Icon-v4/phone.png";
import videocamera from "../../image/Icon-v4/video-camera.png";
import { Url } from "../../Url/Url";

function ChatMessage({ setopenChatMessage, chatuser, message, sendMessage ,roomId ,reloading}) {
  const [messages, setmessages] = useState("");
  const usernamechat = sessionStorage.getItem("Name");
  const [oldmessage, setoldmessage] = useState([])
  const current = new Date();
  

  useEffect(() => {
    oldchat()
  }, [reloading])
  
  const oldchat = () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer " + sessionStorage.getItem("accessToken"))
      
   
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(Url+`/api/Chat/LoadOldMessage?roomId=${roomId}&SearchDate=${current.toJSON()}`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      setoldmessage(result);
    })
    .catch((error) => {
      console.log("error", error);
    });
  };

  

  const oldchatms = oldmessage.map((data ,index) =>(
      <div className={`${usernamechat === data.username ? "thisuser" : "chatvalue"}`} key={index}>
          {data.username} : {data.message}
        </div>
  ))

  const ChatMessage = message.map((m, index) => (
        <div className={`${usernamechat === m.user ? "thisuser" : "chatvalue"}`} key={index}>
          {m.user} : {m.message}
        </div>
  ));

  // className="chatvalue"

  return (
    <div className="chatcontainer">
      <div className="backgroundChatUserHeader">
        <div className="IconHeaderUserImg">
          <img src={avataricon} className="IconHeaderUserImg" />
        </div>
        <div className="UserChatItem">
          <div className="ChatHeaderItemName">{chatuser.roomName}</div>
          <div className="ChatHeaderItemProfile">Position - Block Name</div>
        </div>
        <div className="itemchat">
          {/* <Link to="/Communication"> */}
          <div
            className="BackGroundChatUser"
            onClick={() => setopenChatMessage(true)}
          >
            <div className="BackGroundButtonChat1">Chat</div>
          </div>
          {/* </Link>
        <Link to="/File"> */}
          <div
            className="BackGroundChatUser"
            onClick={() => setopenChatMessage(false)}
          >
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
        <div className="backgroundchatmessage">{oldchatms}{ChatMessage}</div>
      </div>
      {/* footter */}
      <form
        className="InputChat"
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage(messages);
          setmessages("");
        }}
      >
        <input
          className="inputMessage"
          placeholder="Type a new message"
          value={messages}
          onChange={(e) => setmessages(e.target.value)}
        />
        <div className="GroupIconChat">
          {/* <img src={edittext} className="IconChatFooter" />
          <img src={smile} className="IconChatFooter" />
          <img src={attach} className="IconChatFooter" />
          <img src={gif} className="IconChatFooter" />
          <img src={sticker} className="IconChatFooter" /> */}

          <button className="SendMessagebtn" aria-disabled={!messages}>
            <img src={send} className="SendMessageIcon" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChatMessage;
