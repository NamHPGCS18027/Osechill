import React from "react";
import avatar_icon from "../../image/Sidebar/More/avatar_icon.png";
import benduthuyendiamondisland from "../../image/Sliderimg/ben-du-thuyen-diamond-island.jpg";
import icon_Reply from "../../image/Issues List v2/icon_Reply.png";
import icon_Share from "../../image/Issues List v2/icon_Share.png";

function AllIssues() {
  return (
    <div className="BackgroundIssues">
      <div className="IssuesContainer">
        {/* header */}
        <div className="IssuesHeader">
          <div className="IssuesAvatarUser">
            <img src={avatar_icon} className="SeackAvatarIssues" />
          </div>
          <div>
            <div className="UserNameIssues">Author Name - Room ID</div>
            <div className="DobIssues">Date Time - Status</div>
            <hr className="LineSeachIssues1" />
          </div>
        </div>
        {/* Body */}
        <div>
          <div className="CategoryIssuesName">CATEGORY NAME</div>
          <div className="CategoryIssuesTitle">
            One simple and effective method is minification, which is
            essentially compressing a text resource by removing its whitespace
            and unnecessary characters without changing its validity or
            functionality. It doesn't sound that useful, but it is. For example,
            this little function initially contains 348 characters.
          </div>
        </div>
        <div>
          <img src={benduthuyendiamondisland} alt="" className="ImageIssues" />
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
            <div className="DetailCmtcontainer">
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
            <div className="DetailCmtcontainer">
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
  );
}

export default AllIssues;
