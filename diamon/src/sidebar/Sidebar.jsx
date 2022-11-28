import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Url } from '../Url/Url';
import SidebarAdmin from './SidebarAdmin';
import SidebarReaident from './SidebarReaident';
import SidebarStaffBt from './SidebarStaffBt';
import SidebarStaffSt from './SidebarStaffSt';
import SiderbarManage from './SiderbarManage';

function Sidebar() {
    const [Userdetail, setUserdetail] = useState({});
    const [role, setrole] = useState("");
    const token = sessionStorage.getItem("accessToken");
  
    useEffect(() => {
      if(token !== null){
        loadDataProfile()
      }
      }, [token])
      
      const loadDataProfile = () => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + sessionStorage.getItem("accessToken"));
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
    
        fetch(Url+"/api/Auth/GetProfile", requestOptions)
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error(response.status)
                }
            })
            .then(result => {
                setUserdetail(result);
                setrole(result.role);
            })
            .catch(error => {
                console.log('error', error)
            });
      }

      let SideBarRole
      if (role[0]==="admin") {
        SideBarRole = (<SidebarAdmin Userdetail={Userdetail}/>)
      } else if(role[0]==="resident"){
        SideBarRole = (<SidebarReaident Userdetail={Userdetail}/>)
      } else if(role[0]==="staffbt"){
        SideBarRole = (<SidebarStaffBt Userdetail={Userdetail}/>)
      } else if(role[0]==="staffst"){
        SideBarRole = (<SidebarStaffSt Userdetail={Userdetail}/>)
      } else if(role[0]==="blockManager"){
        SideBarRole = (<SiderbarManage Userdetail={Userdetail}/>)
      }
  return (
    <div>
        {SideBarRole}
    </div>
  )
}

export default Sidebar