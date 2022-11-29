import React, { useState } from "react";
import "./TaskST.css";
import iconClosepopup from "../../image/Icon v3/icon_Close_popup.png";
import avatar_icon from "../../image/Sidebar/More/avatar_icon.png";
import { Url } from "../../Url/Url";
import { useEffect } from "react";

function ModleTaskDetail({ setTaskDetail, detailtask1 }) {
  const [fileInput, setfileInput] = useState([]);
  const [feedBackvalue, setfeedBackvalue] = useState("");
  const [feedbacgtask, setfeedbacgtask] = useState("");
  const [idimg, setidimg] = useState("");
  const [reloading, setreloading] = useState(false)

  const ConfirmedTask = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      "Bearer " + sessionStorage.getItem("accessToken")
    );

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      Url +
        `/api/FE006/ConfirmIssue?isConfirmed=true&issueID=${detailtask1.id}`,
      requestOptions
    )
      .then((response) => {
        response.text();
      })
      .then((result) => {
        console.log(result);
        alert("Success");
      })
      .catch((error) => {
        console.log("error", error);
        alert(error);
      });
  };

  const ConfirmedTask1 = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      "Bearer " + sessionStorage.getItem("accessToken")
    );

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      Url +
        `/api/FE006/ConfirmIssue?isConfirmed=false&issueID=${detailtask1.id}`,
      requestOptions
    )
      .then((response) => {
        response.text();
      })
      .then((result) => {
        console.log(result);
        alert(result);
      })
      .catch((error) => {
        console.log("error", error);
        alert(error);
      });
  };

  const uploadFeedback = () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer " + sessionStorage.getItem("accessToken")
    );

    let formdata = new FormData();
    formdata.append("assignIssueID", detailtask1.id);
    formdata.append("staffFeedback", feedBackvalue);
    formdata.append("listFiles", fileInput, fileInput.name);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(Url + "/api/FE006/AddStaffFeedback", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        alert("Your Feedback has been sent to the apartment manager");
        setreloading(true)
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    Getfeedback()
  }, [reloading])
  

  const Getfeedback = () => {
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
      Url + `/api/FE006/GetStaffFeedback?issueId=${detailtask1.id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setfeedbacgtask(result.staffFeedback);
        setidimg(result.listFileID);
        console.log(result);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <div className="BackGroundResident">
      <div className="ResidentHeaderBackground">
        <div className="headerTitleDetaiTask">
          <img src={avatar_icon} className="AvatarTaskdetail"></img>
          <span>{detailtask1.authorName}</span>
          <br />
          <span>Key : DA-00001</span>
        </div>
        <img
          src={iconClosepopup}
          className="closeIcon"
          onClick={() => setTaskDetail(false)}
        />
      </div>
      <div className="backgrounddetailTaskbtn">
        <div className="detailTaskbtnApprove" onClick={ConfirmedTask}>
          Approve
        </div>
        <div className="detailTaskbtnReject" onClick={ConfirmedTask1}>
          Reject
        </div>
      </div>
      <div className="Backgrounddetailtask">
        <div className="containerdetailTask">
          <div className="TaskTableName">Details</div>
          <div className="detailTask">
            <span className="detailTaskTitle">Summary</span> :{" "}
            {detailtask1.title}
          </div>
          <div className="detailTask">
            <span className="detailTaskTitle">Author Name</span> :{" "}
            {detailtask1.authorName}
          </div>
          <div className="detailTask">
            <span className="detailTaskTitle">Created Date</span> :{" "}
            {detailtask1.createdDate}
          </div>
          <div className="detailTask">
            <span className="detailTaskTitle">last Modified Date</span> :{" "}
            {detailtask1.lastModifiedDate}
          </div>
          <div className="detailTask">
            <span className="detailTaskTitle">Distription</span> :{" "}
            {detailtask1.content}
          </div>
          <div className="detailTask">
            <span className="detailTaskTitle">Priority</span> :{" "}
            <span>
              {detailtask1.priorityLevel == 5 ? (
                <img src={HighestPriorityIssue} className="IconPriority" />
              ) : detailtask1.priorityLevel == 4 ? (
                <img src={HighPriorityIssue} className="IconPriority" />
              ) : detailtask1.priorityLevel == 3 ? (
                <img src={MediumPriorityIssue} className="IconPriority" />
              ) : detailtask1.priorityLevel == 2 ? (
                <img src={LowPriorityIssue} className="IconPriority" />
              ) : detailtask1.priorityLevel == 1 ? (
                <img src={LowestPriorityIssue} className="IconPriority" />
              ) : (
                <div>--</div>
              )}
            </span>
          </div>
          <div className="detailTask">
            <span className="detailTaskTitle">Status</span> :{" "}
            {detailtask1.status}
          </div>
          <div className="detailTask">
            <span className="detailTaskTitle">Feedback</span> :{" "}
            {detailtask1.feedback}
          </div>
        </div>
        <div className="backgroundFeedback">
          <div className="feedbacktitle">Feedback</div>
          <input
            className="inputfeedback"
            value={feedBackvalue}
            onChange={(e) => setfeedBackvalue(e.target.value)}
          ></input>
          <input
            type="file"
            files={fileInput}
            onChange={(e) => setfileInput(e.target.files[0])}
          ></input>
          <button className="btnfeedback" onClick={uploadFeedback}>
            Summit
          </button>
        </div>
        <div>
          <div className="titlefeedback">Feedback Value : {feedbacgtask}</div>
          <img
            src={Url + `/api/FileHandling/GetFile?fileId=${idimg}`}
            className="feadbackimg"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default ModleTaskDetail;
