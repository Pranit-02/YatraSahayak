import React from 'react';


const Trains = ({ train }) => (
    <div className="card">
        <div className="card-content">
            <div className="all-tags">
                <div className="box">
                    {train.type}
                </div>
                <div className="box">
                    {train.card_state}
                </div>
            </div>
            <h2 className="card-title">{train.name}</h2>
            <div className="train-info">
                <p><b>Train no:</b> {train.number}</p>
                <p><b>Duration:</b> {train.duration}</p>
                <p><b>Departure-time:</b> {train.departure_time}</p>
                <p><b>Destination-time:</b> {train.destination_time}</p>
                <p><b>Departure-station</b> {train.departure_station}</p>
                <p><b>Destination-station:</b> {train.destination_station}</p>
                <p><b>Departure-date:</b> {train.departure_date}</p>
                <p><b>Destination-date:</b> {train.destination_date}</p>
                <p><b>Duration-minutes:</b> {train.duration_minutes}</p>
            </div>
            <p className="price">Price: ₹ {train.prices}</p>
        </div>
    </div>
);

export default Trains

