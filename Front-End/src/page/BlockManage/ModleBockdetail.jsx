import React from 'react'
import './AssignBlock.css'
import sort from "../../image/Icon v3/sort.png";
import iconClosepopup from "../../image/Icon v3/icon_Close_popup.png";
import { useEffect } from 'react';
import { useState } from 'react';
import { Url } from '../../Url/Url';

function ModleBockdetail({setopenBlockDetail ,DataBlockId ,DataBlockName}) {
    const [AllApartment, setAllApartment] = useState([])
    const token = sessionStorage.getItem("accessToken");

    useEffect(() => {
        GetAllApartment();
      }, [token]);
    
      const GetAllApartment = () => {
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
    
        fetch(Url + `/api/Apartment/GetAllApartmentInBlock?blockId=${DataBlockId}`, requestOptions)
          .then((response) => response.json())
          .then((result) => {
            setAllApartment(result);
          })
          .catch((error) => {
            console.log("error", error);
          });
      };

      const Apartmentlist = AllApartment.map((data) =>(
        <tr>
        <td>
          <span className="nameAc">{data.apartmentName}</span>
        </td>
        <td>{data.heartWallArea}</td>
        <td>{data.clearanceArea}</td>
        <td>{data.bedroomAmount}</td>
      </tr>
      ))
  return (
    <div className="modalBackgroundCreate">
      <div className="modalContainerCreate">
        <div className="creacteUserHeader">
          <div className="headerTitle">All Apartment In Block {DataBlockName}</div>
          <img
            src={iconClosepopup}
            className="closeIcon"
            onClick={() => setopenBlockDetail(false)}
          />
        </div>
        <div>
      <table>
        <tr>
          <th>
            <span className="nameAc">Apartment Name</span>
            <img src={sort} className="iconsort" />
          </th>
          <th>
            Heart Wall Area <img src={sort} className="iconsort" />
          </th>
          <th>
            Clearance Area <img src={sort} className="iconsort" />
          </th>
          <th>
            Bedroom Amount <img src={sort} className="iconsort" />
          </th>
          <th />
        </tr>
        {Apartmentlist}
      </table>
    </div>
      </div>
    </div>
  )
}

export default ModleBockdetail