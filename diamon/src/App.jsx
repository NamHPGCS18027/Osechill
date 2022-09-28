import { useState } from "react";
import {Routes , Route} from 'react-router-dom'
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Homepage from "./page/Home/Homepage";
import SidebarReaident from "./sidebar/SidebarReaident";
import SiderbarManage from "./sidebar/SiderbarManage";
import SidebarStaffBt from "./sidebar/SidebarStaffBt";
import SidebarStaffSt from "./sidebar/SidebarStaffSt";
import SidebarAdmin from "./sidebar/SidebarAdmin";
import AccountUser from "./page/Accounts/AccountUser";
import DeleteUser from "./page/Accounts/DeleteUser";
import Chat from "./page/Chat/Chat";
import TestChat from "./TestChat/TestChat";
import ChatFile from "./page/Chat/ChatFile";
import Chat1 from "./TestChat/Chat1";
import IssuesList from "./page/IssuesLitst/IssuesList";

function App() {
  return (
    <div className="App">
      {/* <SidebarReaident/> */}
      {/* <SiderbarManage/> */}
      {/* <SidebarStaffBt/> */}
      {/* <SidebarStaffSt/> */}
      <SidebarAdmin/>
      <div className="controller" >
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Manage_Accounts" element={<AccountUser/>} />
        <Route path="/Deleted_employees" element={<DeleteUser/>} />
        <Route path="/Communication" element={<Chat/>} />
        <Route path="/File" element={<ChatFile/>} />
        <Route path="/Issues_List" element={<IssuesList/>} />
      </Routes>
        {/* <AccountUser/> */}
        {/* <DeleteUser/> */}
        {/* <Chat/> */}
        {/* <TestChat/> */}
      </div>
    </div>
    // <div>
    //   <Chat1/>
    // </div>
  );
}

export default App;
