import React, { useState , useEffect } from "react";
import "./Chat.css";
import ChatCategori from "./ChatCategori";
import ChatFile from "./ChatFile";
import ChatMessage from "./ChatMessage";
import avataricon from "../../image/Sidebar/More/avatar_icon.png";
import { Url } from "../../Url/Url";
import iconSearch from "../../image/Issues List v1/icon_Search.png";
import iconContacts from "../../image/Issues List v2/icon_Contacts.png";
import iconCall from "../../image/Issues List v2/icon_Call.png";
import icon_Message from "../../image/Issues List v2/icon_Message.png";
import dropdown from "../../image/Icon v3/dropdown.png";
import dropdown1 from "../../image/Icon v3/dropdown1.png";
import management from "../../image/Icon-v5/management.png";
import timemanagement from "../../image/Icon-v5/time-management.png";
import maintenance from "../../image/Icon-v5/maintenance.png";
import {
  HubConnectionBuilder,
  LogLevel,
  HttpTransportType,
} from "@microsoft/signalr";

function Chat() {
  const [openChatMessage, setopenChatMessage] = useState(true);
  const [DropDownIcon, setDropDownIcon] = useState(true);
  const [DropDownIcon1, setDropDownIcon1] = useState(false);
  const [AlluserChat, setAlluserChat] = useState([]);
  const [chatuser, setchatuser] = useState('');
  const [open, setopen] = useState(false)
  const [userid, setuserid] = useState('')
  const [conecttion, setconecttion] = useState("")
  const [message, setmessage] = useState([]);
  const [roomId, setroomId] = useState('')
  const [reloading, setreloading] = useState(false)
  const [Lastmessage, setLastmessage] = useState('')

  const handleDropDown = () => {
    setDropDownIcon(!DropDownIcon);
  };

  const handleDropDown1 = () => {
    setDropDownIcon1(!DropDownIcon1);
  };

  useEffect(() => {
    GetAlluserchat();
    lastmesse()
  }, []);

  const GetAlluserchat = () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer " + sessionStorage.getItem("accessToken")
    );
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(Url + "/api/Chat/GetAllMyRoomChat", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setAlluserChat(result);

      })
      .catch((error) => {
        console.log("error", error);
      });
  };


  const handlechat = async (data) => {
    setopen(true);
    setchatuser(data);
    setuserid(data.receiverId)
    setroomId(data.roomId)
    setreloading(true)
    const Authorization1 = sessionStorage.getItem("accessToken");
      const connection = new HubConnectionBuilder()
        .withUrl(Url + "/chathub", {
          accessTokenFactory: () => Authorization1,
          skipNegotiation: true,
          transport: HttpTransportType.WebSockets,
        })
        .configureLogging(LogLevel.Information)
        .build();
      connection.on("Chat", (user, message) => {
        console.log(user, message);
        setmessage(messagechat => [...messagechat, { user, message }]);
      });
      await connection.start();
      await connection.invoke("JoinRoom", data.receiverId, "");
      setconecttion(connection)
  };

  const sendMessage = async (message) => {
    try {
      const receiverId = userid;
      await conecttion.invoke("SendMessage", receiverId, message);
    } catch (error) {
      console.log(error);
    }
  };

  
  const lastmesse = () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer " + sessionStorage.getItem("accessToken"))
      
   
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(Url+`/api/Chat/GetLatestMesage?roomId=${roomId}}`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      setLastmessage(result);
    })
    .catch((error) => {
      console.log("error", error);
    });
  };

  console.log(Lastmessage);

  const AllUser = AlluserChat.map((data) => (
    <div className="backGroundUserChat" key={data.id}>
      <div className="userchaticon">
        <img src={avataricon} className="userchaticon" />
      </div>
      <div>
        <div className="ChatUserHeader" onClick={() => handlechat(data)}>
          <span className="userNameChat">{data.roomName}</span>
          <span className="dateUserChat">07/11</span>
        </div>
        <div className="Chattext">
          aaaa
        </div>
      </div>
    </div>
  ));

  

  return (
    <div className="chatbackground">
      <div className="chatcontaineruser">
        {/* Seachuser */}
        <div className="headerchat">
          <div className="seachbackground">
            <img src={iconSearch} className="iconSeachchat" />
            <input
              type="text"
              className="inputseachchat"
              placeholder="Search "
            />
          </div>
          <div className="contactbackground">
            <img src={iconContacts} className="iconContacts" />
          </div>
        </div>
        <div className="chatbody">
          {/* Contact  */}
          <div className="backgroungcontacts">
            <div>
              <div className="contacttitle">CONTACTS</div>
              <div className="ItemContacts">
                <span className="titilecontacticon">Block’s Manager Team</span>
                <img src={iconCall} alt="" className="iconcall" />
                <img src={icon_Message} alt="" className="iconMess" />
              </div>
              <div className="ItemContacts">
                <span className="titilecontacticon">Service Team </span>
                <img src={iconCall} alt="" className="iconcall" />
                <img src={icon_Message} alt="" className="iconMess" />
              </div>
              <div className="ItemContacts">
                <span className="titilecontacticon">Booking Team </span>
                <img src={iconCall} alt="" className="iconcall" />
                <img src={icon_Message} alt="" className="iconMess" />
              </div>
            </div>
          </div>
          {/* Dropdown user */}
          <div>
            <div className="dropDown" onClick={handleDropDown}>
              {DropDownIcon ? (
                <img src={dropdown} className="dropDownImg" />
              ) : (
                <img src={dropdown1} className="dropDownImg" />
              )}
              <span className="dropDownTitle">CONVERSATIONS</span>
            </div>
            {DropDownIcon ? <div>{AllUser}</div> : <></>}
          </div>
          <div>
            <div>
              <div className="dropDown" onClick={handleDropDown1}>
                {DropDownIcon1 ? (
                  <img src={dropdown} className="dropDownImg" />
                ) : (
                  <img src={dropdown1} className="dropDownImg" />
                )}
                <span className="dropDownTitle">ROOM CONVERSATIONS</span>
              </div>
              {DropDownIcon1 ? (
                <div>
                  {/* manage Chat */}
                  <div className="backGroundUserChat">
                    <div className="userchaticon">
                      <img src={management} className="userchaticon" />
                    </div>
                    <div>
                      <div className="ChatUserHeader">
                        <span className="userNameChat">
                          Block’s Manager Team
                        </span>
                        <span className="dateUserChat">07/11</span>
                      </div>
                      <div className="Chattext">
                        Lorem ipsum dolor sit amet consectetur adipisicihgf...
                      </div>
                    </div>
                  </div>
                  {/* User Chat */}
                  <div className="backGroundUserChat">
                    <div className="userchaticon">
                      <img src={timemanagement} className="userchaticon" />
                    </div>
                    <div>
                      <div className="ChatUserHeader">
                        <span className="userNameChat">BOOKING TEAM</span>
                        <span className="dateUserChat">07/11</span>
                      </div>
                      <div className="Chattext">
                        Lorem ipsum dolor sit amet consectetur adipisicihgf...
                      </div>
                    </div>
                  </div>
                  {/* User Chat */}
                  <div className="backGroundUserChat">
                    <div className="userchaticon">
                      <img src={maintenance} className="userchaticon" />
                    </div>
                    <div>
                      <div className="ChatUserHeader">
                        <span className="userNameChat">SERVICE TEAM</span>
                        <span className="dateUserChat">07/11</span>
                      </div>
                      <div className="Chattext">
                        Lorem ipsum dolor sit amet consectetur adipisicihgf...
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
      {open ?
      <div>
      {openChatMessage ? (
        <ChatMessage
          setopenChatMessage={setopenChatMessage}
          chatuser={chatuser}
          userid={userid}
          sendMessage={sendMessage}
          message={message}
          roomId={roomId}
          reloading={reloading}
        />
      ) : (
        <ChatFile setopenChatMessage={setopenChatMessage} />
      )}</div> 
      :
      <div className="chatcontainerselect"><div className="valuecontainer">Select Chat User</div></div>}
      {/* <ChatFile/> */}
    </div>
  );
}

export default Chat;
