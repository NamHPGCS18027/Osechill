import React from "react";
import avatar_icon from "../../image/Sidebar/More/avatar_icon.png";
import benduthuyendiamondisland from "../../image/Sliderimg/ben-du-thuyen-diamond-island.jpg";
import { useState } from "react";
import Modelviewdetailissue from "./Modelviewdetailissue";
import { Url } from "../../Url/Url";
import { useEffect } from "react";

function AllIssues({setreload}) {
  const [ViewIssueDetail, setViewIssueDetail] = useState(false)
  const [GetAllIssue, setGetAllIssue] = useState([])
  const token = sessionStorage.getItem("accessToken");
  const [IssueId, setIssueId] = useState('')
  
  useEffect(() => {
    GetIssue();
  }, [token, setreload]);

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

    fetch(Url + "/api/FE003/GetAllIssues", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setGetAllIssue(result);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const HandelOpenDetail = (data) =>{
    setViewIssueDetail(true)
    setIssueId(data)
  }
  const AllIssueResident = GetAllIssue.map((data) => (
    <div className="IssuesContainer" key={data.id}>
      <div className="IssuesHeader">
          <div className="IssuesAvatarUser">
            <img src={avatar_icon} className="SeackAvatarIssues" />
          </div>
          <div>
            <div className="UserNameIssues">{data.authorName} - Room ID <button className="btnViewdetailIssue" onClick={() => HandelOpenDetail(data)}> View Detail</button></div>
            <div className="DobIssues">{data.createdDate} - {data.status} </div>
            <hr className="LineSeachIssues1" />
          </div>
        </div>
        {/* Body */}
        <div>
          <div className="CategoryIssuesName">Category : {data.listCategory}</div>
          <div className="CategoryIssuesTitle">Title : {data.title}</div>
          <div className="CategoryIssuesTitle">
            {data.content}
          </div>
        </div>
        <div>
          <img src={Url+`/api/FileHandling/GetFile?fileId=${data.files[0]}`} alt="" className="ImageIssues"/>
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
  ))
  return (
    // <div className="BackgroundIssues">
      <div>
        {ViewIssueDetail && <Modelviewdetailissue setViewIssueDetail={setViewIssueDetail} IssueId={IssueId}/>}
        {/* header */}
        {AllIssueResident}
      </div>
  );
}

export default AllIssues;
