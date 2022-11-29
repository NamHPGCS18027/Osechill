import React, { useState , useEffect} from "react";
import "./TaskST.css";
import iconSearch from "../../image/Issues List v1/icon_Search.png";
import filter from "../../image/Icon v3/filter.png";
import sort from "../../image/Icon v3/sort.png";
import { Link } from "react-router-dom";
import ModleManageTaskFilter from "./ModleManageTaskFilter";
import ModleManageTaskDetail from "./ModleManageTaskDetail";
import HighPriorityIssue from "../../image/Staff-icon/High-Priority-Issue.png"
import HighestPriorityIssue from "../../image/Staff-icon/Highest-Priority-Issue.png"
import LowPriorityIssue from "../../image/Staff-icon/Low-Priority-Issue.png"
import LowestPriorityIssue from "../../image/Staff-icon/Lowest-Priority-Issue.png"
import MediumPriorityIssue from "../../image/Staff-icon/Medium-Priority-Issue.png"
import { Url } from "../../Url/Url";

function ManageTask() {
  const [TaskManageDetail, setTaskManageDetail] = useState(false)
  const [TaskManageFilter, setTaskManageFilter] = useState(false)
  const [TaskTable, setTaskTable] = useState(true)
  const [task, settask] = useState([])
  const [detailtask, setdetailtask] = useState('')

  useEffect(() => {
    GetAlltask();
  }, []);

  const GetAlltask = () => {
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

    fetch(Url + "/api/FE006/GetAllNewIssue", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        settask(result);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const Handleview = (data) =>{
    setTaskManageDetail(true)
    setdetailtask(data)
  }

  const Alltask = task.map((data) =>(
    <tr>
            <td>
                <Link to="" className="nameAc" onClick={() => Handleview(data)}>DA-00001</Link>               
            </td>
            <td>{data.title}</td>
            <td>
              {data.priorityLevel == 5 ?
              <img src={HighestPriorityIssue} className="IconPriority"/>
              : data.priorityLevel == 4 ?
              <img src={HighPriorityIssue} className="IconPriority"/>
              : data.priorityLevel == 3 ?
              <img src={MediumPriorityIssue} className="IconPriority"/>
              : data.priorityLevel == 2 ?
              <img src={LowPriorityIssue} className="IconPriority"/>
              : data.priorityLevel == 1 ?
              <img src={LowestPriorityIssue} className="IconPriority"/>
              :
              <div>--</div>
            }
            </td>
            <td>{data.authorName}</td>
            <td>
            {data.status == "New" ?
            <div className="TaskStatus">New</div>
            : data.status == "In Progress" ?
            <div className="TaskStatusProgress">In Progress</div>
            : data.status == "Pending Review" ?
            <div className="TaskStatusReview">Pending Review</div>
            : <div className="TaskStatusDone">Done</div>
            }
            </td>
          </tr>
  ))
  return (
    <div>
      {TaskManageFilter && <ModleManageTaskFilter setTaskManageFilter={setTaskManageFilter}/>}
      {TaskManageDetail && <ModleManageTaskDetail setTaskManageDetail={setTaskManageDetail} detailtask={detailtask}/>}
     <div className="taskHeader">
     <div className="backgroundContact">
          {/* <div className={`${TaskTable== false ? "navbarContact" :"navbarContactAfter"}`} onClick={() => setTaskTable(false)}>STATISTICS</div> */}
          <div className={`${TaskTable==true ?"navbarContact1" : "navbarContact1After"}`} onClick={() => setTaskTable(true)}>MY TASK</div>
        </div>
     </div>
      <div className="bodyheadTask">
        {/* seach Task */}
        <div className="seachTask">
          <img src={iconSearch} className="iconAcLTask" />
          <input className="inputTask" placeholder="Search" />
          <hr className="line2Task" />
        </div>
        <div className="btnfilterTask" onClick={() => setTaskManageFilter(true)}>
          <img src={filter} className="iconfilterTask" />
          <div className="filtertitleTask">Show filter</div>
        </div>
      </div>
      <div className="TaskBody">
        <div className="TaskTitle">My Tasks - Assigned to Me: August_2022</div>
        <table>
          <tr>
            <th>
                <span className="nameAc">Key</span>
                <img src={sort} className="iconsort" />
            </th>
            <th>Summary<img src={sort} className="iconsort" /></th>
            <th>Priority<img src={sort} className="iconsort" /></th>
            <th>Author Name<img src={sort} className="iconsort" /></th>
            <th>Status<img src={sort} className="iconsort" /></th>
          </tr>
          {Alltask}
        </table>
        <div className="footerTask">1-5 of 5</div>
      </div>
    </div>
  );
}

export default ManageTask;
