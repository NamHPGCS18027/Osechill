import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import sort from "../../image/Icon v3/sort.png";
import { Url } from '../../Url/Url';

function StaffBooking() {
    const [allBookingStaff, setallBookingStaff] = useState([])

    useEffect(() => {
        allbooking()
      }, []);
    
      const allbooking = () => {
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
    
        fetch(Url + "/api/FE004/GetAllBooking", requestOptions)
          .then((response) => response.json())
          .then((result) => {
            setallBookingStaff(result);
          })
          .catch((error) => {
            console.log("error", error);
          });
      };

      const bookinglist = allBookingStaff.map((data) =>(
        <tr>
            <td><span className="nameAc">{data.userName}</span></td>
            <td>{data.dateAndTimeOfBooking}</td>
            <td>{data.listFacil}</td>
          </tr>
      ))

  return (
    <div>
        <div className='bookingheder'>Staff Booking</div>
        <div className="TaskBody">
        <div className="TaskTitle">All Booking</div>
        <table>
          <tr>
            <th>
                <span className="nameAc">User Name</span>
                <img src={sort} className="iconsort" />
            </th>
            <th>Date And Time Of Booking<img src={sort} className="iconsort" /></th>
            <th>List Facil<img src={sort} className="iconsort" /></th>
          </tr>
          {bookinglist}
        </table>
        <div className="footerTask">1-5 of 5</div>
      </div>
    </div>
  )
}

export default StaffBooking