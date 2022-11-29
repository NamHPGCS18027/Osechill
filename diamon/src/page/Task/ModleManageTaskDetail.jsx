import React, { useEffect, useState } from "react";
import "./TaskST.css";
import iconClosepopup from "../../image/Icon v3/icon_Close_popup.png";
import avatar_icon from "../../image/Sidebar/More/avatar_icon.png";
import { Url } from "../../Url/Url";
import HighPriorityIssue from "../../image/Staff-icon/High-Priority-Issue.png";
import HighestPriorityIssue from "../../image/Staff-icon/Highest-Priority-Issue.png";
import LowPriorityIssue from "../../image/Staff-icon/Low-Priority-Issue.png";
import LowestPriorityIssue from "../../image/Staff-icon/Lowest-Priority-Issue.png";
import MediumPriorityIssue from "../../image/Staff-icon/Medium-Priority-Issue.png";

function ModleManageTaskDetail({ setTaskManageDetail, detailtask }) {
  const [StaskAc, setStaskAc] = useState([]);
  const [taskid, settaskid] = useState("");
  const [feedbacgtask, setfeedbacgtask] = useState("");
  const [idimg, setidimg] = useState("");

  useEffect(() => {
    GetAllAc();
    Getfeedback();
  }, []);

  const GetAllAc = () => {
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

    fetch(Url + `/api/FE001/GetAllUser?getActive=${true}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setStaskAc(result);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

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
      Url + `/api/FE006/GetStaffFeedback?issueId=${detailtask.id}`,
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


  const filterTaskAcound = StaskAc.filter(function (StaskAc) {
    return StaskAc.roleName[0] === "staffst";
  });

  const AllManage = filterTaskAcound.map((data) => (
    <option key={data.id} value={data.id}>
      {data.userName} - {data.roleName}
    </option>
  ));

  const Assigntask = () => {
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
        `/api/FE006/AssignIssueToStaff?staffID=${taskid}&issueID=${detailtask.id}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        alert(result);
        setreload(true);
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
          <span>{detailtask.authorName}</span>
          <br />
          <span>Key : DA-00001</span>
        </div>
        <img
          src={iconClosepopup}
          className="closeIcon"
          onClick={() => setTaskManageDetail(false)}
        />
      </div>
      <div className="backgrounddetailTaskbtn">
        <select
          className="detailTaskinput"
          value={taskid}
          onChange={(e) => settaskid(e.target.value)}
        >
          <option>--</option>
          {AllManage}
        </select>
        <div className="detailTaskbtn" onClick={Assigntask}>
          Assign
        </div>
      </div>
      <div className="Backgrounddetailtask">
        <div className="containerdetailTask">
          <div className="TaskTableName">Details</div>
          <div className="detailTask">
            <span className="detailTaskTitle">Summary</span> :{" "}
            {detailtask.title}
          </div>
          <div className="detailTask">
            <span className="detailTaskTitle">Author Name</span> :{" "}
            {detailtask.authorName}
          </div>
          <div className="detailTask">
            <span className="detailTaskTitle">Created Date</span> :{" "}
            {detailtask.createdDate}
          </div>
          <div className="detailTask">
            <span className="detailTaskTitle">last Modified Date</span> :{" "}
            {detailtask.lastModifiedDate}
          </div>
          <div className="detailTask">
            <span className="detailTaskTitle">Distription</span> :{" "}
            {detailtask.content}
          </div>
          <div className="detailTask">
            <span className="detailTaskTitle">Priority</span> :{" "}
            <span>
              {detailtask.priorityLevel == 5 ? (
                <img src={HighestPriorityIssue} className="IconPriority" />
              ) : detailtask.priorityLevel == 4 ? (
                <img src={HighPriorityIssue} className="IconPriority" />
              ) : detailtask.priorityLevel == 3 ? (
                <img src={MediumPriorityIssue} className="IconPriority" />
              ) : detailtask.priorityLevel == 2 ? (
                <img src={LowPriorityIssue} className="IconPriority" />
              ) : detailtask.priorityLevel == 1 ? (
                <img src={LowestPriorityIssue} className="IconPriority" />
              ) : (
                <div>--</div>
              )}
            </span>
          </div>
          <div className="detailTask">
            <span className="detailTaskTitle">Status</span> :{" "}
            {detailtask.status}
          </div>
          <div className="detailTask">
            <span className="detailTaskTitle">Feedback</span> :{" "}
            {detailtask.feedback}
          </div>
        </div>
        <div className="containerdetailTask">
          <div>
            <div>
              <div className="titlefeedback">
                Feedback Value : {feedbacgtask}
              </div>
              <img
                src={Url + `/api/FileHandling/GetFile?fileId=${idimg}`}
                className="feadbackimg"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModleManageTaskDetail;
