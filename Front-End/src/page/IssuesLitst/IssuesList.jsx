import React from "react";
import "./IssuesList.css";
import avatar_icon from "../../image/Sidebar/More/avatar_icon.png";
import icon_Everyone_can_reply from "../../image/Issues List v1/icon_Everyone_can_reply.png";
import icon_Category from "../../image/Issues List v1/icon_Category.png";
import icon_Image_Video from "../../image/Issues List v1/icon_Image_Video.png";
import AllIssues from "./AllIssues";
import NavbarIssues from "./NavbarIssues";
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
  const [Title, setTitle] = useState("")
  const [reload, setreload] = useState(false)

  const uploadIssue = () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer " + sessionStorage.getItem("accessToken")
    );

    let formdata = new FormData();
    formdata.append("title", Title);
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
        alert("Your problem has been sent to the apartment manager");
        setreload(!reload)
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
        
      {/* <div className="hearmyissue">.</div> */}

        {/* Seach */}
       
        <div className="CreateIssues">
          <div className="SeackAvatarIssues">
            <img src={avatar_icon} className="SeackAvatarIssues" />
          </div>
          <div className="InputBackGrpundIssues">
          <input
              className="SeachIssuesTitle"
              placeholder="Title"
              value={Title}
              onChange={(e) => setTitle(e.target.value)}
            />
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
          <AllIssues setreload={setreload}/>
        </div>
        <div className="FooterIssuesLeft"></div>
      </div>
    </div>
  );
}

export default IssuesList;
