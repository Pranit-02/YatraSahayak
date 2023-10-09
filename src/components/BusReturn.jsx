import React from 'react';


const BusReturn = ({ busDataReturn }) => (
    <div className="card">
        <div className="card-content">
            <div className="all-tags">
                <div className="box">
                    {busDataReturn.type}
                </div>
                <div className="box">
                    {busDataReturn.card_state}
                </div>
            </div>

            <h2 className="card-title">{busDataReturn.agency}</h2>
            <p className='class'>{busDataReturn.class}</p>

            <div className="bus-info">
                <p><b>Seats Left:</b> {busDataReturn.seats_left}</p>
                <p><b>Departure-time:</b> {busDataReturn.departure_time}</p>
                <p><b>Duration:</b> {busDataReturn.duration}</p>
                <p><b>Destination-time:</b> {busDataReturn.destination_time}</p>
                <p><b>Date:</b> {busDataReturn.date}</p>
            </div>
            <div className="dest">
                <p><b>Destination:</b> {busDataReturn.destination}</p>
                <p><b>Departure:</b> {busDataReturn.departure}</p>
            </div>
            <p className="price">Price: ₹ {busDataReturn.prices}</p>
        </div>
    </div>
);

export default BusReturn

// 🕹️📕📜📤📥📌