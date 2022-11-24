import React from "react";
import sort from "../../../image/Icon v3/sort.png";

function ContactsAvilable() {
  return (
    <div>
      <table>
        <tr>
          <th>
            <span className="nameAc">Full Name </span>
            <img src={sort} className="iconsort" />
          </th>
          <th>
            Day Start <img src={sort} className="iconsort" />
          </th>
          <th>
            Day End <img src={sort} className="iconsort" />
          </th>
          <th>
            Email <img src={sort} className="iconsort" />
          </th>
          <th>
            Apartment <img src={sort} className="iconsort" />
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
          <td>00</td>
        </tr>
      </table>
    </div>
  );
}

export default ContactsAvilable;
