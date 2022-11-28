import React from "react";
import "./AssignBlock.css";
import sort from "../../image/Icon v3/sort.png";
import { useState } from "react";
import { useEffect } from "react";
import { Url } from "../../Url/Url";
import ModleBockdetail from "./ModleBockdetail";

function AssignBlock() {
  const [AllBlock, setAllBlock] = useState([]);
  const token = sessionStorage.getItem("accessToken");
  const [openBlockDetail, setopenBlockDetail] = useState(false);
  const [DataBlockId, setDataBlock] = useState("");
  const [DataBlockName, setDataBlockName] = useState("");
  const [AllAcound, setAllAcound] = useState([]);
  const [blockId, setblockId] = useState('')
  const [userId, setuserId] = useState('')
  const [reload, setreload] = useState(false)
  useEffect(() => {
    GetAllBlock();
    GetAllAc();
  }, [token , reload]);

  const GetAllBlock = () => {
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

    fetch(Url + "/api/Block/GetAllBlock", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setAllBlock(result);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const GetAllAc = () => {
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

    fetch(Url + `/api/FE001/GetAllUser?getActive=${true}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setAllAcound(result);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const AssignBlockManage = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
        "Authorization",
        "Bearer " + sessionStorage.getItem("accessToken"));
    var raw = JSON.stringify({
        blockId: blockId,
        userId: userId,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(Url + "/api/Block/AssignBlockManager", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        alert(result)
        setreload(true)
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const filterAcound = AllAcound.filter(function (AllAcounds) {
    return AllAcounds.roleName[0] === "blockManager";
  });

  const AllManage = filterAcound.map((data) => (
    <option key={data.id} value={data.id}>
      {data.userName} - {data.roleName}
    </option>
  ));
  const HandleopenBlockDetail = (data) => {
    setopenBlockDetail(true);
    setDataBlock(data.blockId);
    setDataBlockName(data.blockName);
  };

  const AllBlocklist = AllBlock.map((data) => (
    <tr>
      <td>
        <span className="nameAc">{data.blockName} </span>
      </td>
      <td>{data.flourAmount}</td>
      <td>{data.blockManager}</td>
      <td>
        <div
          className="BlockdetailBtn"
          onClick={() => HandleopenBlockDetail(data)}
        >
          {" "}
          Block Detail
        </div>
      </td>
      <td />
    </tr>
  ));

  const BlockName = AllBlock.map((data) =>(
    <option key={data.blockId} value={data.blockId}>{data.blockName}</option>
  ))


  return (
    <div>
      {openBlockDetail && (
        <ModleBockdetail
          setopenBlockDetail={setopenBlockDetail}
          DataBlockId={DataBlockId}
          DataBlockName={DataBlockName}
        />
      )}
      <div className="headerAc">
        <div className="blockpageheader"> View All Block </div>
      </div>
      <div className="backgroundAddblockmanage">
        <div className="titleAddManage">Add Block Manage</div>
        <select className="SelectManage" value={userId} onChange={e => setuserId(e.target.value)}>
          <option>--</option>
          {AllManage}</select>
        <select className="SelectBlock" value={blockId} onChange={e => setblockId(e.target.value)}>
          <option>--</option>
          {BlockName}</select>
        <button className="BtnAddManage" onClick={AssignBlockManage}>Add Manage</button>
      </div>
      <table>
        <tr>
          <th>
            <span className="nameAc">Block Name </span>
            <img src={sort} className="iconsort" />
          </th>
          <th>
            Flour Amount <img src={sort} className="iconsort" />
          </th>
          <th>
            Block Manager <img src={sort} className="iconsort" />
          </th>
          <th>
            View Detail <img src={sort} className="iconsort" />
          </th>
          <th />
        </tr>
        {AllBlocklist}
      </table>
    </div>
  );
}

export default AssignBlock;
