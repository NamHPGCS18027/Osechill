import React from 'react'
import "./IssuesList.css";
import avatar_icon from "../../image/Sidebar/More/avatar_icon.png";
import benduthuyendiamondisland from "../../image/Sliderimg/ben-du-thuyen-diamond-island.jpg";
import icon_Reply from "../../image/Issues List v2/icon_Reply.png";
import icon_Share from "../../image/Issues List v2/icon_Share.png";
import iconClosepopup from "../../image/Icon v3/icon_Close_popup.png";
import { Url } from '../../Url/Url';

function Modelviewdetailissue({setViewIssueDetail ,IssueId}) {
  return (
    <div className="modalBackgroundIssue">
      <div className="modalContainerIssue">
        {/* header */}
        <div className="IssuesHeader">
          <div className="IssuesAvatarUser">
            <img src={avatar_icon} className="SeackAvatarIssues" />
          </div>
          <div>
            <div className="UserNameIssues1">{IssueId.authorName} - Room ID <img
            src={iconClosepopup}
            className="closeIconIssue"
            onClick={() => setViewIssueDetail(false)}
          /></div>
            <div className="DobIssues">{IssueId.createdDate} - {IssueId.status} </div>
            <hr className="LineSeachIssues2" />
          </div>
        </div>
        {/* Body */}
        <div>
        <div className="CategoryIssuesName">Category : {IssueId.listCategory}</div>
          <div className="CategoryIssuesTitle">Title : {IssueId.title}</div>
          <div className="CategoryIssuesTitle1">
            {IssueId.content}
          </div>
        </div>
        <div className='backgroundImg'>
          <img src={Url+`/api/FileHandling/GetFile?fileId=${IssueId.files[0]}`} alt="" className="ImageIssuesdetail" />
        </div>
        <div>
          <hr className="LineSeachIssues2" />
          <div>
            <div className="ReplyBackground">
              <span className="ReplyNumber">44.4K</span>
              <span className="ReplyTitle">Reply</span>
            </div>
            <div className="ReplyBackground">
              <span className="ReplyNumber">44.4K</span>
              <span className="ReplyTitle">Quote</span>
            </div>
          </div>
          <hr className="LineSeachIssues2" />
        </div>
        <div>
          <img src={icon_Reply} alt="" className="ReplyIcon" />
          <img src={icon_Share} alt="" className="ShareIcon" />
          <hr className="LineSeachIssues3" />
        </div>
        {/* CMT */}
        <div className="BackgroundCmt">
          <div className="HeaderCmt">
            <div className="BackgroundIconUser">
              <img src={avatar_icon} alt="" className="IconUserCmt" />
            </div>
            <div className="CmtTitleHeader">
              <div className="CmtUserName">Author Name - Room ID</div>
              <div className="CmtDate">Date Time</div>
            </div>
          </div>
          <div className="BackgroundDetailCmt">
            <div className="DetailCmtcontainer1">
              <div className="CmtTital">
                One simple and effective method is minification.
              </div>
              <div className="CmtImageBachground">
                <img
                  src={benduthuyendiamondisland}
                  alt=""
                  className="CmtImage"
                />
              </div>
            </div>
          </div>
          <div className="btnReplyCmt">Reply</div>
        </div>
        {/* CMT */}
        <div className="BackgroundCmt">
          <div className="HeaderCmt">
            <div className="BackgroundIconUser">
              <img src={avatar_icon} alt="" className="IconUserCmt" />
            </div>
            <div className="CmtTitleHeader">
              <div className="CmtUserName">Author Name - Room ID</div>
              <div className="CmtDate">Date Time</div>
            </div>
          </div>
          <div className="BackgroundDetailCmt">
            <div className="DetailCmtcontainer1">
              <div className="CmtTital">
                One simple and effective method is minification.
              </div>
              <div className="CmtImageBachground">
                <img
                  src={benduthuyendiamondisland}
                  alt=""
                  className="CmtImage"
                />
              </div>
            </div>
          </div>
          <div className="btnReplyCmt">Reply</div>
        </div>
      </div>
    </div>
  )
}

export default Modelviewdetailissue