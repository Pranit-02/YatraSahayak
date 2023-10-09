import React from 'react';
import { trainReturn } from './data';


const FlightReturn = ({ flightsReturn }) => (
    <div className="card">
        <div className="card-content">
            <div className="all-tags">
                <div className="box">
                    {flightsReturn.type}
                </div>
                <div className="box">
                    {flightsReturn.card_state}
                </div>
            </div>
            <h2 className="card-title">{flightsReturn.airline}</h2>

            <div className="flights-info">
                <p><b>Duration:</b> {flightsReturn.duration}</p>
                <p><b>Departure-time:</b> {flightsReturn.departure_time}</p>
                <p><b>Destination-time:</b> {flightsReturn.destination_time}</p>
                <p><b>Departure-date:</b> {flightsReturn.departure_date}</p>
                <p><b>Destination-date:</b> {flightsReturn.destination_date}</p>
                <p><b>Formatted-date:</b> {flightsReturn.formatted_date}</p>
            </div>
            <div className="dest">
                <p><b>Destination:</b> {flightsReturn.destination}</p>
                <p><b>Departure:</b> {flightsReturn.departure}</p>
            </div>
            <p className="price">Price: ₹ {flightsReturn.prices}</p>
        </div>
    </div>
);

export default FlightReturn