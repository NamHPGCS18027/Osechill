import React from 'react'
import './ModleManageResident.css'
import iconClosepopup from "../../../image/Icon v3/icon_Close_popup.png";
import sort from "../../../image/Icon v3/sort.png";

function ModleManageResident({setResidentOpen}) {
  return (
    <div className='BackGroundResident'>
      <div className='ResidentHeaderBackground'>
        <div className='TitleResidentHeader'>Retrieve resident info</div>
        <img src={iconClosepopup} alt="" className='IconCloseResident' onClick={()=>setResidentOpen(false)}/>
      </div>
      <div className='TitleResidentBody'>Fill at least one of the following fields to search</div>
      <div className='SeachResident'>
        <div className='inputFullNameResidentBackGround'>
          <div className='titleFullName'>Full Name</div>
          <input className='inputFullNameResident'/>
          <hr className='lineFullName'/>
        </div>
        <div className='inputIDNumberResidentBackGround'>
          <div className='titleIdnumber' >ID Number</div>
          <input className='inputIDNumberResident' placeholder='e.g. CitizenID/Passport'/>
          <hr className='lineNumber'/>
        </div>
        <div className='inputPhonenumberResidentBackground'>
          <div className='titlePhonenumber'>Phone number</div>
          <select className='inputPhonenumberResident'>
            <option>+84</option>
            <option>+84</option>
            <option>+84</option>
          </select>
          <hr className='linePhone'/>
        </div>
        <div className='inputAllnumberResidentBackground'>
          <input className='inputAllnumberResident' placeholder='Phone no.'/>
          <hr className='lineAllphone'/>
        </div>
        <div className='SearchResident'>Search</div>
      </div>
      <div>
        <table>
          <tr>
            <th className='TableHeader'>Resident name <img src={sort} className="iconsort" /></th>
            <th className='TableHeader'>ID Number <img src={sort} className="iconsort" /></th>
            <th className='TableHeader'>Phone <img src={sort} className="iconsort" /></th>
            <th className='TableHeader'>Block <img src={sort} className="iconsort" /></th>
            <th className='TableHeader'>Apartment name <img src={sort} className="iconsort" /></th>
          </tr>
          <tr>
            <td className='TableHeader'>1</td>
            <td className='TableHeader'>1</td>
            <td className='TableHeader'>1</td>
            <td className='TableHeader'>1</td>
            <td className='TableHeader'>1</td>
          </tr>
          <tr>
            <td className='TableHeader'>1</td>
            <td className='TableHeader'>1</td>
            <td className='TableHeader'>1</td>
            <td className='TableHeader'>1</td>
            <td className='TableHeader'>1</td>
          </tr>
        </table>
        <div className='notfoundbackground'>
          <h1 className='notfoundHeader'>No results found</h1>
          <div className='notfoundbody'>We were unable to retrieve the resident info based <br/> on the criteria that you have entered.</div>
        </div>
      </div>
    </div>
  )
}

export default ModleManageResident