import React from 'react'
import "./Chat.css";
import iconSearch from "../../image/Issues List v1/icon_Search.png";
import iconContacts from "../../image/Issues List v2/icon_Contacts.png";
import iconCall from "../../image/Issues List v2/icon_Call.png";
import icon_Message from "../../image/Issues List v2/icon_Message.png";
import dropdown from "../../image/Icon v3/dropdown.png";
import dropdown1 from "../../image/Icon v3/dropdown1.png";
import avataricon from "../../image/Sidebar/More/avatar_icon.png";
import { useState } from "react";
import maintenance from "../../image/Icon-v5/maintenance.png"
import management from "../../image/Icon-v5/management.png"
import timemanagement from "../../image/Icon-v5/time-management.png"

function ChatCategori() {
    const [DropDownIcon, setDropDownIcon] = useState(true);
  const [DropDownIcon1, setDropDownIcon1] = useState(false);

  const handleDropDown = () => {
    setDropDownIcon(!DropDownIcon);
  };

  const handleDropDown1 = () => {
    setDropDownIcon1(!DropDownIcon1);
  };
  return (
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
            {DropDownIcon ? (
              <div>
                {/* User Chat */}
                <div className="backGroundUserChat">
                  <div className="userchaticon">
                    <img src={avataricon} className="userchaticon" />
                  </div>
                  <div>
                    <div className="ChatUserHeader">
                      <span className="userNameChat">Full Name</span>
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
                    <img src={avataricon} className="userchaticon" />
                  </div>
                  <div>
                    <div className="ChatUserHeader">
                      <span className="userNameChat">Full Name</span>
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
                    <img src={avataricon} className="userchaticon" />
                  </div>
                  <div>
                    <div className="ChatUserHeader">
                      <span className="userNameChat">Full Name</span>
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
  )
}

export default ChatCategori