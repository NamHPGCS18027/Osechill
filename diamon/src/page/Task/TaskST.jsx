import React, { useState , useEffect} from "react";
import "./TaskST.css";
import iconSearch from "../../image/Issues List v1/icon_Search.png";
import filter from "../../image/Icon v3/filter.png";
import sort from "../../image/Icon v3/sort.png";
import { Link } from "react-router-dom";
import ModleTaskDetail from "./ModleTaskDetail";
import ModleTaskFilter from "./ModleTaskFilter";
import { Url } from "../../Url/Url";
import HighPriorityIssue from "../../image/Staff-icon/High-Priority-Issue.png"
import HighestPriorityIssue from "../../image/Staff-icon/Highest-Priority-Issue.png"
import LowPriorityIssue from "../../image/Staff-icon/Low-Priority-Issue.png"
import LowestPriorityIssue from "../../image/Staff-icon/Lowest-Priority-Issue.png"
import MediumPriorityIssue from "../../image/Staff-icon/Medium-Priority-Issue.png"

function TaskST() {
  const [TaskDetail, setTaskDetail] = useState(false)
  const [TaskFilter, setTaskFilter] = useState(false)
  const [task, settask] = useState([])
  const [detailtask1, setdetailtask1] = useState('')

  useEffect(() => {
    GetAllmytask();
  }, []);

  const GetAllmytask = () => {
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

    fetch(Url + "/api/FE006/GetMyIssues", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        settask(result);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const Handleview = (data) =>{
    setTaskDetail(true)
    setdetailtask1(data)
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
      {TaskFilter && <ModleTaskFilter setTaskFilter={setTaskFilter}/>}
      {TaskDetail && <ModleTaskDetail setTaskDetail={setTaskDetail} detailtask1={detailtask1}/>}
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
            <th>Author Name<img src={sort} className="iconsort" /></th>
            <th>Status<img src={sort} className="iconsort" /></th>
          </tr>
          {Alltask.length === 0 ? 
          <div className='noissued'>No issued Assigned to you</div> 
          : 
          Alltask}
        </table>
        <div className="footerTask">1-5 of 5</div>
      </div>
    </div>
  );
}

export default TaskST;
