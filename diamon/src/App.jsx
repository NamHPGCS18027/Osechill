import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, Router } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Homepage from "./page/Home/Homepage";
import AccountUser from "./page/Accounts/AccountUser";
import DeleteUser from "./page/Accounts/DeleteUser";
import Chat from "./page/Chat/Chat";
import TestChat from "./TestChat/TestChat";
import ChatFile from "./page/Chat/ChatFile";
import Chat1 from "./TestChat/Chat1";
import IssuesList from "./page/IssuesLitst/IssuesList";
import Sidebar from "./sidebar/Sidebar";

function App() {
  
  return (
    <div className="App">
      {/* <Sidebar/> */}
        <Routes>
          <Route exact path="/" element={<Homepage />} />
        </Routes>
        <Sidebar />
      <div className="controller">
        <Routes>
          <Route exact path="/Manage_Accounts" element={<AccountUser />} />
          <Route exact path="/Deleted_employees" element={<DeleteUser />} />
          <Route exact path="/Communication" element={<Chat />} />
          <Route exact path="/File" element={<ChatFile />} />
          <Route exact path="/Issues_List" element={<IssuesList />} />
        </Routes>
      </div>
      {/* <AccountUser/> */}
      {/* <DeleteUser/> */}
      {/* <Chat/> */}
      {/* <TestChat/> */}
    </div>
  );
}

export default App;
