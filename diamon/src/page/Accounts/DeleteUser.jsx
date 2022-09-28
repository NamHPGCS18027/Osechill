import React, { useState } from "react";
import "./AccountUser.css";
import iconSearch from "../../image/Issues List v1/icon_Search.png";
import sort from "../../image/Icon v3/sort.png";
import restore from "../../image/Icon-v4/restore.png";
import ModelRestore from "./RestoreUser/ModelRestore";
import { Link } from "react-router-dom";
function DeleteUser() {
  const [RestoreUser, setRestoreUser] = useState(false);
  return (
    <div>
      {RestoreUser && <ModelRestore setRestoreUser={setRestoreUser} />}
      {/* header Accounts */}
      <div className="headerAc">
        <div className="AcHead">
          <Link to="/Manage_Accounts">
            <div className="Headitem">Employees</div>
          </Link>
        </div>
        <div className="AcHead">
          <Link to="/Deleted_employees">
            <div className="Headitem1">Deleted employees</div>
          </Link>
        </div>
      </div>
      {/* body Accounts */}
      <div className="Acoutsbody">
        {/* header body Accounts */}
        <div className="bodyheadAc">
          {/* seach Accounts */}
          <div className="seachAc">
            <img src={iconSearch} className="iconAcL" />
            <input
              className="inputAc"
              placeholder="Employee Name / Phone number"
            />
            <hr className="line2" />
          </div>
          <div className="shownumberEmploy">Showing 4 out of 4 employees</div>
        </div>
      </div>
      {/* table Accounts */}
      <table>
        <tr>
          <th>
            <span className="nameAc">Employee Name </span>
            <img src={sort} className="iconsort" />
          </th>
          <th>
            Age <img src={sort} className="iconsort" />
          </th>
          <th>
            Phone <img src={sort} className="iconsort" />
          </th>
          <th>
            Email <img src={sort} className="iconsort" />
          </th>
          <th>
            Role <img src={sort} className="iconsort" />
          </th>
          <th />
        </tr>
        <tr>
          <td>
            <span className="nameAc">Jennie Kim</span>
          </td>
          <td>25</td>
          <td>0123456789</td>
          <td>jenniekim@gmail.com</td>
          <td>Block's manager - A</td>
          <td>
            <img
              src={restore}
              className="iconrestore"
              onClick={() => setRestoreUser(true)}
            />
          </td>
        </tr>
        <tr>
          <td>
            <span className="nameAc">Roseanne Park </span>
          </td>
          <td>26</td>
          <td>0123456789</td>
          <td>rosepark@gmail.com</td>
          <td>Block's manager - B</td>
          <td>
            <img
              src={restore}
              className="iconrestore"
              onClick={() => setRestoreUser(true)}
            />
          </td>
        </tr>
        <tr>
          <td>
            <span className="nameAc">Shawn Peter Raul Mendes</span>
          </td>
          <td>35</td>
          <td>0123456789</td>
          <td>shawnmendes@gmail.com</td>
          <td>Staff - Booking Team</td>
          <td>
            <img
              src={restore}
              className="iconrestore"
              onClick={() => setRestoreUser(true)}
            />
          </td>
        </tr>
        <tr>
          <td>
            <span className="nameAc">Taylor Alison Swift </span>
          </td>
          <td>40</td>
          <td>0123456789</td>
          <td>taylorswift@gmail.com</td>
          <td>Staff - Service Team</td>
          <td>
            <img
              src={restore}
              className="iconrestore"
              onClick={() => setRestoreUser(true)}
            />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default DeleteUser;
