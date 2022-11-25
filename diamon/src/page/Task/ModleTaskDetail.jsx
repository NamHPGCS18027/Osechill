import React from 'react'
import "./TaskST.css"
import iconClosepopup from "../../image/Icon v3/icon_Close_popup.png";
import avatar_icon from "../../image/Sidebar/More/avatar_icon.png";

function ModleTaskDetail({setTaskDetail}) {
  return (
    <div className="BackGroundResident">
      <div className="ResidentHeaderBackground">
      <div className="headerTitleDetaiTask">
          <img src={avatar_icon} className="AvatarTaskdetail"></img>
          <span>User Name</span>
          <br/>
          <span>Key : DA-00001</span>
      </div>
        <img
          src={iconClosepopup}
          className="closeIcon"
          onClick={() => setTaskDetail(false)}
        />
      </div>
      <div className='backgrounddetailTaskbtn'>
          <div className='detailTaskbtn'>Edit</div>
          <div className='detailTaskbtn'>Add comment</div>
          <div className='detailTaskbtn'>Assign</div>
      </div>
      <div className='containerdetailTask'>
        <div className='TaskTableName'>Details</div>
        <div className='detailTask'><span className='detailTaskTitle'>Summary</span> : Issue Title</div>
        <div className='detailTask'><span className='detailTaskTitle'>Assignee</span> : Full Name</div>
        <div className='detailTask'><span className='detailTaskTitle'>Day</span> : 11/24/2022</div>
        <div className='detailTask'><span className='detailTaskTitle'>Time</span> : 9:52 pm</div>
        <div className='detailTask'><span className='detailTaskTitle'>Distription</span> : ascascascascascacsasc</div>
        <div className='detailTask'><span className='detailTaskTitle'>Priority</span> : Lowest</div>
        <div className='detailTask'><span className='detailTaskTitle'>Status</span> : New</div>
      </div>
    </div>
  )
}

export default ModleTaskDetail