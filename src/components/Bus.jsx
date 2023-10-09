import React from 'react';


const Bus = ({ busData }) => (
    <div className="card">
        <div className="card-content">
        <div className="all-tags">
                <div className="box">
                    {busData.type}
                </div>
                <div className="box">
                    {busData.card_state}
                </div>
            </div>

            <h2 className="card-title">{busData.agency}</h2>
            <p className='class'>{busData.class}</p>

            <div className="bus-info">
                <p><b>Seats Left:</b> {busData.seats_left}</p>
                <p><b>Departure-time:</b> {busData.departure_time}</p>
                <p><b>Duration:</b> {busData.duration}</p>
                <p><b>Destination-time:</b> {busData.destination_time}</p>
                <p><b>Date:</b> {busData.date}</p>
            </div>
            <div className="dest">
                <p><b>Destination:</b> {busData.destination}</p>
                <p><b>Departure:</b> {busData.departure}</p>
            </div>
            <p className="price">Price: ₹ {busData.prices}</p>
        </div>    
    </div>
);

export default Bus