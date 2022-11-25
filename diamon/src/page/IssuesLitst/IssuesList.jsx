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
import { Tooltip } from "@mui/material";
import { useState } from "react";
import { Url } from "../../Url/Url";
import { useEffect } from "react";

function IssuesList() {
  const [content, setcontent] = useState("");
  const [isPrivate, setisPrivate] = useState(false);
  const [CateId, setCateId] = useState([]);
  const [fileInput, setfileInput] = useState([]);
  const [cateupload, setcateupload] = useState("");

  const uploadIssue = () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer " + sessionStorage.getItem("accessToken")
    );

    let formdata = new FormData();
    formdata.append("content", content);
    formdata.append("isPrivate", isPrivate);
    formdata.append("listFiles", fileInput, fileInput.name);
    formdata.append("listCateID", cateupload);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(Url + "/api/FE003/AddNewIssue", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        alert(result);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    GetLookup();
  }, []);

  const GetLookup = () => {
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

    fetch(Url + "/api/LookUp/GetAllLookUp", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setCateId(result.listCate);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const catelist = CateId.map((data) => (
    <option key={data.lookUpID} value={data.lookUpID}>
      {data.valueString}
    </option>
  ));

  return (
    <div className="BackgroundIssuesList">
      <div className="BackGroundContainerIssuesLeft">
        {/* Navbar */}
        <div>
          <NavbarIssues />
        </div>

        {/* Seach */}
       
        <div className="CreateIssues">
          <div className="SeackAvatarIssues">
            <img src={avatar_icon} className="SeackAvatarIssues" />
          </div>
          <div className="InputBackGrpundIssues">
            <input
              className="SeachIssuesTitle"
              placeholder="What's happening?"
              value={content}
              onChange={(e) => setcontent(e.target.value)}
            />
            <div className="inputIsuesbackground">
              <div className="PlaceholderIconBackground">
                <img
                  src={icon_Everyone_can_reply}
                  alt=""
                  className="PlaceholderIcon"
                />
              </div>
              <select
                id="tyle"
                className="InputSeachIssues"
                value={isPrivate}
                onChange={(e) => setisPrivate(e.target.value)}
              >
                <option value="false">Everyone can reply</option>
                <option value="true">Private</option>
              </select>
              <hr className="LineSeachIssues" />
            </div>
          </div>
          <div className="IconNavberIssuesFooter">
            <label htmlFor="file">
              <Tooltip
                placement="right"
                title="Image/Video"
                type="dark"
                effect="solid"
              >
                <img
                  src={icon_Image_Video}
                  alt=""
                  className="seachIconIssuesFooter"
                />
              </Tooltip>
            </label>
            <input
              id="file"
              name="file"
              className="inputimg"
              type="file"
              files={fileInput}
              onChange={(e) => setfileInput(e.target.files[0])}
            ></input>
            {fileInput !== null ? (
              <span className="imgTitle">{fileInput.name}</span>
            ) : (
              <></>
            )}
            <label htmlFor="Category">
              <Tooltip
                placement="right"
                title="Category"
                type="dark"
                effect="solid"
              >
                <img
                  src={icon_Category}
                  alt=""
                  className="seachIconIssuesFooter"
                />
              </Tooltip>
              <select
                className="categoryselect"
                value={cateupload}
                onChange={(e) => setcateupload(e.target.value)}
              >
                {catelist}
              </select>
            </label>
            <div className="BtnSeachIssues" onClick={uploadIssue}>
              SUBMIT
            </div>
          </div>
        </div>
        {/* Issues */}
        <div>
          <AllIssues />
        </div>
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
