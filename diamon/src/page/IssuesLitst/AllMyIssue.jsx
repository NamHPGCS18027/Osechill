import React, { useState, useEffect } from "react";
import { Url } from "../../Url/Url";
import avatar_icon from "../../image/Sidebar/More/avatar_icon.png";
import NavbarIssues from "./NavbarIssues";

function AllMyIssue() {
  const [AllMyIssue, setAllMyIssue] = useState([]);
  const token = sessionStorage.getItem("accessToken");

  useEffect(() => {
    GetIssue();
  }, [token]);

  const GetIssue = () => {
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

    fetch(Url + "/api/FE003/GetMyIssues", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setAllMyIssue(result);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const getallmyissue = AllMyIssue.map((data) => (
    <div className="IssuesContainer" key={data.id}>
      <div className="IssuesHeader">
        <div className="IssuesAvatarUser">
          <img src={avatar_icon} className="SeackAvatarIssues" />
        </div>
        <div>
          <div className="UserNameIssues">
            {data.authorName} - Room ID{" "}
            <div className="issutyle">
              {data.status == "New" ? (
                <div className="TaskStatus">New</div>
              ) : data.status == "In Progress" ? (
                <div className="TaskStatusProgress">In Progress</div>
              ) : data.status == "Pending Review" ? (
                <div className="TaskStatusReview">Pending Review</div>
              ) : (
                <div className="TaskStatusDone">Done</div>
              )}
            </div>
          </div>
          <div className="DobIssues">
            {data.createdDate} - {data.status}{" "}
          </div>
          <hr className="LineSeachIssues1" />
        </div>
      </div>
      {/* Body */}
      <div>
        <div className="CategoryIssuesName">Category : {data.listCategory}</div>
        <div className="CategoryIssuesTitle">Title : {data.title}</div>
        <div className="CategoryIssuesTitle">{data.content}</div>
      </div>
      <div>
        <img
          src={Url + `/api/FileHandling/GetFile?fileId=${data.files[0]}`}
          alt=""
          className="ImageIssues"
        />
      </div>
      <div className="detailReplyQuote">
        <div className="ReplyBackground">
          <span className="ReplyNumber">44.4K</span>
          <span className="ReplyTitle">Reply</span>
        </div>
        <div className="ReplyBackground">
          <span className="ReplyNumber">44.4K</span>
          <span className="ReplyTitle">Quote</span>
        </div>
      </div>
    </div>
  ));
  return (
    <div>
      <div>
          <NavbarIssues />
        </div>
      {getallmyissue}
    </div>
  );
}

export default AllMyIssue;
