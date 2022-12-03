import React, { useState } from "react";
import "./Chat.css";
import ChatCategori from "./ChatCategori";
import ChatFile from "./ChatFile";
import ChatMessage from "./ChatMessage";

function Chat() {
  const [openChatMessage , setopenChatMessage] =useState(true)
  return (
    <div className="chatbackground">
      <ChatCategori/>
      {openChatMessage ?  <ChatMessage setopenChatMessage={setopenChatMessage}/> : <ChatFile setopenChatMessage={setopenChatMessage}/> }
      {/* <ChatFile/> */}
    </div>
  );
}

export default Chat;
