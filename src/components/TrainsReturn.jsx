import React from 'react';


const TrainsReturn = ({ trainReturn }) => (
    <div className="card">
        <div className="card-content">
            <div className="all-tags">
                <div className="box">
                    {trainReturn.type}
                </div>
                <div className="box">
                    {trainReturn.card_state}
                </div>
            </div>
            <h2 className="card-title">{trainReturn.name}</h2>
            <div className="train-info">
                <p><b>Train no:</b> {trainReturn.number}</p>
                <p><b>Duration:</b> {trainReturn.duration}</p>
                <p><b>Departure-time:</b> {trainReturn.departure_time}</p>
                <p><b>Destination-time:</b> {trainReturn.destination_time}</p>
                <p><b>Departure-station</b> {trainReturn.departure_station}</p>
                <p><b>Destination-station:</b> {trainReturn.destination_station}</p>
                <p><b>Departure-date:</b> {trainReturn.departure_date}</p>
                <p><b>Destination-date:</b> {trainReturn.destination_date}</p>
                <p><b>Duration-minutes:</b> {trainReturn.duration_minutes}</p>
            </div>
            <p className="price">Price: ₹ {trainReturn.prices}</p>
        </div>
    </div>
);

export default TrainsReturn

