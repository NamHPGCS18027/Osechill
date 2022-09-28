import React from "react";
import "./IssuesList.css";
import avatar_icon from "../../image/Sidebar/More/avatar_icon.png";
import icon_Everyone_can_reply from "../../image/Issues List v1/icon_Everyone_can_reply.png";
import icon_Category from "../../image/Issues List v1/icon_Category.png";
import icon_Image_Video from "../../image/Issues List v1/icon_Image_Video.png";
import AllIssues from "./AllIssues";
import NavbarIssues from "./NavbarIssues";
import icon_Search from "../../image/Issues List v1/icon_Search.png";
import icon_Call from "../../image/Issues List v2/icon_Call.png";
import icon_Message from "../../image/Issues List v2/icon_Message.png";
import icon_Contacts from "../../image/Issues List v2/icon_Contacts.png";

function IssuesList() {
  return (
    <div className="BackgroundIssuesList">
      <div className="BackGroundContainerIssuesLeft">
        {/* Navbar */}
        <NavbarIssues />
        {/* Seach */}
        <div className="BackGroundSeachIssues">
          <div className="SeachIssues">
            <div className="SeackAvatarIssues">
              <img src={avatar_icon} className="SeackAvatarIssues" />
            </div>
            <div className="InputBackGrpundIssues">
              <div className="SeachIssuesTitle">What's happening?</div>
              <div className="inputIsuesbackground">
                <div className="PlaceholderIconBackground">
                  <img
                    src={icon_Everyone_can_reply}
                    alt=""
                    className="PlaceholderIcon"
                  />
                </div>
                <input
                  type="text"
                  className="InputSeachIssues"
                  placeholder="Everyone can reply"
                />
                <hr className="LineSeachIssues" />
              </div>
            </div>
            <div className="IconNavberIssuesFooter">
              <img
                src={icon_Image_Video}
                alt=""
                className="seachIconIssuesFooter"
              />
              <img
                src={icon_Category}
                alt=""
                className="seachIconIssuesFooter"
              />
              <div className="BtnSeachIssues">SUBMIT</div>
            </div>
          </div>
        </div>
        {/* Issues */}
        <AllIssues />
        <div className="FooterIssuesLeft"></div>
      </div>
      <div className="BackGroundContainerIssuesright">
        <div className="IssuesConatuner">
          {/* Seach */}
          <div className="SeachUserIssues">
            <img src={icon_Search} alt="" className="IconSeachUserIssues" />
            <input
              type="text"
              className="inputSeachUserIssues"
              placeholder="Search...."
            />
          </div>
          {/* Block's Manager */}
          <div className="BackgroundProfileManage">
            <div className="ProfileManageTitle">Your Block's Manager</div>
            <div>
              <img src={avatar_icon} alt="" className="AvatarProfileManage" />
              <div className="ContainerItemprofile">
                <div className="ProfileManageItem">Full Name:</div>
                <div className="ProfileManageItem">Contact:</div>
                <div className="ProfileManageItem">Position:</div>
              </div>
            </div>
          </div>
          <div className="BackGroundIssuesContact">
            <div className="IssuesContacContainer">
              <div className="ContactIssuesTite">CONTACTS</div>
              <div>
                <div className="IssuesContactItemcontainer">
                  <div className="TitleIssuesContactItem">Block’s Manager</div>
                  <img
                    src={icon_Message}
                    alt=""
                    className="IconMessageIssues"
                  />
                  <img src={icon_Call} alt="" className="IconCallIssues" />
                </div>
                <div className="IssuesContactItemcontainer">
                  <div className="TitleIssuesContactItem">Service Team </div>
                  <img
                    src={icon_Message}
                    alt=""
                    className="IconMessageIssues2"
                  />
                  <img src={icon_Call} alt="" className="IconCallIssues" />
                </div>
                <div className="IssuesContactItemcontainer">
                  <div className="TitleIssuesContactItem">Booking Team </div>
                  <img
                    src={icon_Message}
                    alt=""
                    className="IconMessageIssues3"
                  />
                  <img src={icon_Call} alt="" className="IconCallIssues" />
                </div>
              </div>
            </div>
            <div className="BackgorundRoomlist">
              <div className="HeaderRoomList">
                <div className="TitleRoomList">Room Lists</div>
                <img
                  src={icon_Contacts}
                  alt=""
                  className="IconContactRoomlist"
                />
              </div>
              <div>
                <div className="listUserRoom">Block Name - Room ID</div>
                <div className="listUserRoom">Block Name - Room ID</div>
                <div className="listUserRoom">Block Name - Room ID</div>
                <div className="listUserRoom">Block Name - Room ID</div>
                <div className="listUserRoom">Block Name - Room ID</div>
                <div className="listUserRoom">Block Name - Room ID</div>
                <div className="listUserRoom">Block Name - Room ID</div>
                <div className="listUserRoom">Block Name - Room ID</div>
                <div className="listUserRoom">Block Name - Room ID</div>
                <div className="listUserRoom">Block Name - Room ID</div>
                <div className="listUserRoom">Block Name - Room ID</div>
                <div className="listUserRoom">Block Name - Room ID</div>
                <div className="listUserRoom">Block Name - Room ID</div>
                <div className="listUserRoom">Block Name - Room ID</div>
                <div className="listUserRoom">Block Name - Room ID</div>
                <div className="listUserRoom">Block Name - Room ID</div>
                <div className="listUserRoom">Block Name - Room ID</div>
                <div className="listUserRoom">Block Name - Room ID</div>
                <div className="listUserRoom">Block Name - Room ID</div>
                <div className="listUserRoom">Block Name - Room ID</div>
                <div className="listUserRoom">Block Name - Room ID</div>
                
              </div>
            </div>
            <div className="BackgorundRoomlist">
              <div className="HeaderRoomList">
                <div className="TitleRoomList">Room Coversations</div>
              </div>
              <div>
                <div className="listUserRoom">
                  Block Name - Room ID, Block Name - Room ID, Block Name - ....{" "}
                </div>
                <div className="listUserRoom">
                  Block Name - Room ID, Block Name - Room ID, Block Name - ....{" "}
                </div>
                <div className="listUserRoom">
                  Block Name - Room ID, Block Name - Room ID, Block Name - ....{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IssuesList;
