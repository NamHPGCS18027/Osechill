import React from 'react'

function NavbarIssues() {
  return (
    <div className="NavbarIssues">
          <div className="NavbarIssuesBackgroundItem">
            <div className="NavbarIssuesItemActiva">All</div>
          </div>
          <div className="NavbarIssuesBackgroundItem">
            <div className="NavbarIssuesItem">New</div>
          </div>
          <div className="NavbarIssuesBackgroundItem">
            <div className="NavbarIssuesItem">In Progress</div>
          </div>
          <div className="NavbarIssuesBackgroundItem">
            <div className="NavbarIssuesItem">Pending Review</div>
          </div>
          <div className="NavbarIssuesBackgroundItem">
            <div className="NavbarIssuesItem">Review Results</div>
          </div>
          <div className="NavbarIssuesBackgroundItem">
            <div className="NavbarIssuesItem">Done</div>
          </div>
        </div>
  )
}

export default NavbarIssues