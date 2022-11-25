import React, { useState } from "react";
import "./TaskST.css";
import iconSearch from "../../image/Issues List v1/icon_Search.png";
import filter from "../../image/Icon v3/filter.png";
import sort from "../../image/Icon v3/sort.png";
import { Link } from "react-router-dom";
import ModleTaskDetail from "./ModleTaskDetail";
import ModleTaskFilter from "./ModleTaskFilter";

function TaskST() {
  const [TaskDetail, setTaskDetail] = useState(false)
  const [TaskFilter, setTaskFilter] = useState(false)
  return (
    <div>
      {TaskFilter && <ModleTaskFilter setTaskFilter={setTaskFilter}/>}
      {TaskDetail && <ModleTaskDetail setTaskDetail={setTaskDetail}/>}
      <div className="bodyheadTask">
        {/* seach Task */}
        <div className="seachTask">
          <img src={iconSearch} className="iconAcLTask" />
          <input className="inputTask" placeholder="Search" />
          <hr className="line2Task" />
        </div>
        <div className="btnfilterTask" onClick={() => setTaskFilter(true)}>
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
                <Link to="" className="nameAc" onClick={()=> setTaskDetail(true)}>DA-00001</Link>               
            </td>
            <td>Issue Title</td>
            <td>--</td>
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
            <td>--</td>
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
            <td>--</td>
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
            <td>--</td>
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

export default TaskST;
