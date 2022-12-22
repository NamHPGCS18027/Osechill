import React from "react";
import "./Chat.css";
import iconSearch from "../../image/Issues List v1/icon_Search.png";
import iconContacts from "../../image/Issues List v2/icon_Contacts.png";
import iconCall from "../../image/Issues List v2/icon_Call.png";
import icon_Message from "../../image/Issues List v2/icon_Message.png";
import dropdown from "../../image/Icon v3/dropdown.png";
import dropdown1 from "../../image/Icon v3/dropdown1.png";
import avataricon from "../../image/Sidebar/More/avatar_icon.png";
import { useState, useEffect } from "react";
import maintenance from "../../image/Icon-v5/maintenance.png";
import management from "../../image/Icon-v5/management.png";
import timemanagement from "../../image/Icon-v5/time-management.png";
import { Url } from "../../Url/Url";
import ChatMessage from "./ChatMessage";

function ChatCategori() {
  // const [DropDownIcon, setDropDownIcon] = useState(true);
  // const [DropDownIcon1, setDropDownIcon1] = useState(false);
  // const [AlluserChat, setAlluserChat] = useState([]);
  // const [chatuser, setchatuser] = useState([])
  // const [open, setopen] = useState(false)

  // const handleDropDown = () => {
  //   setDropDownIcon(!DropDownIcon);
  // };

  // const handleDropDown1 = () => {
  //   setDropDownIcon1(!DropDownIcon1);
  // };

  // useEffect(() => {
  //   GetAlluserchat();
  // }, []);

  // const GetAlluserchat = () => {
  //   var myHeaders = new Headers();
  //   myHeaders.append(
  //     "Authorization",
  //     "Bearer " + sessionStorage.getItem("accessToken")
  //   );
  //   var requestOptions = {
  //     method: "GET",
  //     headers: myHeaders,
  //     redirect: "follow",
  //   };

  //   fetch(Url + "/api/Chat/GetAllChatUser", requestOptions)
  //     .then((response) => response.json())
  //     .then((result) => {
  //       setAlluserChat(result);
  //     })
  //     .catch((error) => {
  //       console.log("error", error);
  //     });
  // };

  // const handlechat = (data) =>{
  //   setopen(true);
  //   setchatuser(data);
  // }

  

  // const AllUser = AlluserChat.map((data) => (
  //   <div className="backGroundUserChat" key={data.id}>
  //     <div className="userchaticon">
  //       <img src={avataricon} className="userchaticon" />
  //     </div>
  //     <div>
  //       <div className="ChatUserHeader" onClick={() => handlechat(data)}>
  //         <span className="userNameChat">{data.fullname}</span>
  //         <span className="dateUserChat">07/11</span>
  //       </div>
  //       <div className="Chattext">
  //         Lorem ipsum dolor sit amet consectetur adipisicihgf...
  //       </div>
  //     </div>
  //   </div>
  // ));

 
  return (
    <div className="chatcontaineruser">
       {open && <ChatMessage chatuser={chatuser}/>}
      {/* Seachuser */}
      <div className="headerchat">
        <div className="seachbackground">
          <img src={iconSearch} className="iconSeachchat" />
          <input type="text" className="inputseachchat" placeholder="Search " />
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
          {DropDownIcon ? (
            <div>
              {AllUser}
            </div>
          ) : (
            <></>
          )}
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
                      <span className="userNameChat">Block’s Manager Team</span>
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
  );
}

export default ChatCategori;
