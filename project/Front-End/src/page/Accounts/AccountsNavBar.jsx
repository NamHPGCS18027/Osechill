import React from 'react'
import './AccountUser.css'
import { Link } from "react-router-dom";

function AccountsNavBar() {
  return (
    <div className="headerAc">
        <div className="AcHead">
          <Link to="/Manage_Accounts">
            <div className="Headitem1">Employees</div>
          </Link>
        </div>
        <div className="AcHead">
          <Link to="/Deleted_employees">
            <div className="Headitem">Deleted employees</div>
          </Link>
        </div>
      </div>
  )
}

export default AccountsNavBar