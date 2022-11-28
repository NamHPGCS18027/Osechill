import React, { useEffect, useState } from 'react'
import "./TaskST.css"
import iconClosepopup from "../../image/Icon v3/icon_Close_popup.png";
import avatar_icon from "../../image/Sidebar/More/avatar_icon.png";
import { Url } from '../../Url/Url';

function ModleManageTaskDetail({setTaskManageDetail}) {

  const [StaskAc, setStaskAc] = useState([])

  useEffect(() => {
    GetAllAc()
  }, [])
  

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

  const filterTaskAcound = StaskAc.filter(function (StaskAc) {
    return StaskAc.roleName[0] === "staffst";
  });

  const AllManage = filterTaskAcound.map((data) => (
    <option key={data.id} value={data.id}>
      {data.userName} - {data.roleName}
    </option>
  ));

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
          onClick={() => setTaskManageDetail(false)}
        />
      </div>
      <div className='backgrounddetailTaskbtn'>
          <input className='detailTaskbtn'></input>
          <div className='detailTaskbtn'>Add comment</div>
          <select className='detailTaskinput'>
            <option>--</option>
            {AllManage}</select>
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

export default ModleManageTaskDetail