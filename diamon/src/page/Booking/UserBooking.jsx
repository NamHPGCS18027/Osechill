import React from 'react'
import './UserBooking.css'

function UserBooking() {
  return (
    <div>
        <div className='backgroundBooking'>
            <h1 className='bookingService'>Booking Service</h1>
        <div className='bookingcontainer'>
            <div>Facility</div>
            <select>
                <option>tennis court</option>
                <option>golf course</option>
                <option>outdoor barbecue</option>
            </select>
        </div>
        <div className='bookingcontainer'>
            <div>Day-Time</div>
            <input type="datetime-local" placeholder='day time'></input>
        </div>
        <div className='btnaddbooking'>
            Add Booking
        </div>
        </div>
    </div>
  )
}

export default UserBooking