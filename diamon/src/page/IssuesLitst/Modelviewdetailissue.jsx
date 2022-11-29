import React, { useState } from "react";
import "./IssuesList.css";
import avatar_icon from "../../image/Sidebar/More/avatar_icon.png";
import benduthuyendiamondisland from "../../image/Sliderimg/ben-du-thuyen-diamond-island.jpg";
import icon_Reply from "../../image/Issues List v2/icon_Reply.png";
import icon_Share from "../../image/Issues List v2/icon_Share.png";
import iconClosepopup from "../../image/Icon v3/icon_Close_popup.png";
import { Url } from "../../Url/Url";
import { useEffect } from "react";

function Modelviewdetailissue({ setViewIssueDetail, IssueId }) {
  const [commentopen, setcommentopen] = useState(false);
  const [contencmt, setcontencmt] = useState("");
  const [Allcmt, setAllcmt] = useState([])
  const [reloading, setreloading] = useState(false)
  const [numbercmt, setnumbercmt] = useState('')

  useEffect(() => {
    GetAllcmt()
    Getfileconment();
  }, [reloading])

  const cmt = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      "Bearer " + sessionStorage.getItem("accessToken")
    );

    var raw = JSON.stringify({
      issueId: IssueId.id,
      content: contencmt,
      isChild: false,
      isPrivate: false,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(Url + "/api/Comment/CreateComment", requestOptions)
      .then((response) => {
        response.text();
      })
      .then((result) => {
        console.log(result);
        alert(result);
        setreloading(true)
      })
      .catch((error) => {
        console.log("error", error);
        alert(error);
      });
  };

  const Getfileconment = () => {
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

    fetch(
      Url + `/api/FE003/GetCommentCount?issueID=${IssueId.id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setnumbercmt(result)
        console.log(result);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  
  

  const GetAllcmt = () => {
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

    fetch(Url + `/api/Comment/GetComment?issueID=${IssueId.id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setAllcmt(result);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const Listcmt = Allcmt.map((data) =>(
    <div className="BackgroundCmt">
          <div className="HeaderCmt">
            <div className="BackgroundIconUser">
              <img src={avatar_icon} alt="" className="IconUserCmt" />
            </div>
            <div className="CmtTitleHeader">
              <div className="CmtUserName">{data.authorName}</div>
              <div className="CmtDate">Date Time</div>
            </div>
          </div>
          <div className="BackgroundDetailCmt">
            <div className="DetailCmtcontainer1">
              <div className="CmtTital">
                {data.content}
              </div>
            </div>
          </div>
          <div className="btnReplyCmt">Reply</div>
        </div>
  ))

  return (
    <div className="modalBackgroundIssue">
      <div className="modalContainerIssue">
        {/* header */}
        <div className="IssuesHeader">
          <div className="IssuesAvatarUser">
            <img src={avatar_icon} className="SeackAvatarIssues" />
          </div>
          <div>
            <div className="UserNameIssues1">
              {IssueId.authorName} - Room ID{" "}
              <img
                src={iconClosepopup}
                className="closeIconIssue"
                onClick={() => setViewIssueDetail(false)}
              />
            </div>
            <div className="DobIssues">
              {IssueId.createdDate} - {IssueId.status}{" "}
            </div>
            <hr className="LineSeachIssues2" />
          </div>
        </div>
        {/* Body */}
        <div>
          <div className="CategoryIssuesName">
            Category : {IssueId.listCategory}
          </div>
          <div className="CategoryIssuesTitle">Title : {IssueId.title}</div>
          <div className="CategoryIssuesTitle1">{IssueId.content}</div>
        </div>
        <div className="backgroundImg">
          <img
            src={Url + `/api/FileHandling/GetFile?fileId=${IssueId.files[0]}`}
            alt=""
            className="ImageIssuesdetail"
          />
        </div>
        <div>
          <hr className="LineSeachIssues2" />
          <div>
            <div className="ReplyBackground">
              <span className="ReplyNumber">{numbercmt}</span>
              <span className="ReplyTitle">Reply</span>
            </div>
          </div>
          <hr className="LineSeachIssues2" />
        </div>
        <div>
          <img
            src={icon_Reply}
            alt=""
            className="ReplyIcon"
            onClick={() => setcommentopen(!commentopen)}
          />
          
          <hr className="LineSeachIssues3" />
        </div>
        {commentopen == true ? (
          <div className="backgroundinputcmt">
            <input
              className="inputcmt"
              value={contencmt}
              onChange={(e) => setcontencmt(e.target.value)}
            ></input>
            <button className="cmtbtn" onClick={cmt}>
              Add Cmt
            </button>
          </div>
        ) : (
          <></>
        )}
        {/* CMT */}
        {Listcmt}
      </div>
    </div>
  );
}

export default Modelviewdetailissue;
