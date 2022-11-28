import React, { useState } from "react";
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

function ManageTask() {
  const [TaskManageDetail, setTaskManageDetail] = useState(false)
  const [TaskManageFilter, setTaskManageFilter] = useState(false)
  const [TaskTable, setTaskTable] = useState(true)
  return (
    <div>
      {TaskManageFilter && <ModleManageTaskFilter setTaskManageFilter={setTaskManageFilter}/>}
      {TaskManageDetail && <ModleManageTaskDetail setTaskManageDetail={setTaskManageDetail}/>}
     <div className="taskHeader">
     <div className="backgroundContact">
          <div className={`${TaskTable== false ? "navbarContact" :"navbarContactAfter"}`} onClick={() => setTaskTable(false)}>STATISTICS</div>
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
            <th>Assignee<img src={sort} className="iconsort" /></th>
            <th>Status<img src={sort} className="iconsort" /></th>
          </tr>
          <tr>
            <td>
                <Link to="" className="nameAc" onClick={()=> setTaskManageDetail(true)}>DA-00001</Link>               
            </td>
            <td>Issue Title</td>
            <td><img src={HighPriorityIssue} className="IconPriority"/></td>
            <td>Full Name</td>
            <td>
                <div className="TaskStatus">New</div>
            </td>
          </tr>
          <tr>
            <td>
                <Link to="" className="nameAc">DA-00001</Link>               
            </td>
            <td>Issue Title</td>
            <td><img src={HighestPriorityIssue} className="IconPriority"/></td>
            <td>Full Name</td>
            <td>
                <div className="TaskStatusProgress">In Progress</div>
            </td>
          </tr>
          <tr>
            <td>
                <Link to="" className="nameAc">DA-00001</Link>               
            </td>
            <td>Issue Title</td>
            <td><img src={LowPriorityIssue} className="IconPriority"/></td>
            <td>Full Name</td>
            <td>
                <div className="TaskStatusReview">Pending Review</div>
            </td>
          </tr>
          <tr>
            <td>
                <Link to="" className="nameAc">DA-00001</Link>               
            </td>
            <td>Issue Title</td>
            <td><img src={LowestPriorityIssue} className="IconPriority"/></td>
            <td>Full Name</td>
            <td>
                <div className="TaskStatusDone">Done</div>
            </td>
          </tr>
          <tr>
            <td>
                <Link to="" className="nameAc">DA-00001</Link>               
            </td>
            <td>Issue Title</td>
            <td><img src={MediumPriorityIssue} className="IconPriority"/></td>
            <td>Full Name</td>
            <td>
                <div className="TaskStatusDone">Done</div>
            </td>
          </tr>
        </table>
        <div className="footerTask">1-5 of 5</div>
      </div>
    </div>
  );
}

export default ManageTask;
