import React from 'react'
import "./TaskST.css"
import iconClosepopup from "../../image/Icon v3/icon_Close_popup.png";

function ModleTaskDetail({setTaskDetail}) {
  return (
    <div className="BackGroundResident">
      <div className="ResidentHeaderBackground">
        <div className="headerTitle">Task Detail</div>
        <img
          src={iconClosepopup}
          className="closeIcon"
          onClick={() => setTaskDetail(false)}
        />
      </div>
    </div>
  )
}

export default ModleTaskDetail