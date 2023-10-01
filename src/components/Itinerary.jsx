import React from 'react';
import Locations from './Locations';
import Hotels from './Hotels';
import Restaurants from './Restaurants';
import Bus from './Bus';
import { busData, busDataReturn, flights, flightsReturn, locationData, train } from './data.jsx';
import { hotels } from './data.jsx';
import { restaurants } from './data.jsx';
import { HiPaperAirplane } from 'react-icons/hi2'
import BusReturn from './BusReturn';
import Flight from './Flight';
import FlightReturn from './FlightReturn';
import Trains from './Trains';


function Itinerary() {
    return (
        <div className='container-new'>
            <h1 className='head-1'>Travel in Mumbai</h1>
            <div className='sub-head'>
                <HiPaperAirplane className='sub-head-img' />
                <h3 className='head-2'>Itinerary</h3>
            </div>

            <div>
                {locationData.length > 0 ? (
                    <div className="locations-container">
                        {locationData.map((item, idx) => (
                            <Locations locationData={item} index={idx} key={idx} />
                        ))}
                    </div>
                ) : (
                    <p>No data available</p>
                )}
            </div>
            <hr />

            <h1 className='head-3'>Estimated Cost (INR)</h1>

            <h2 className='all-sub-head'>Hotel:</h2>
            <div className='hotel-card'>
                {hotels.map((hotels, index) => (
                    <Hotels key={index} hotels={hotels} />
                ))}
            </div>
            <hr />

            <h2 className='all-sub-head'>Restaurant:</h2>
            <div className='hotel-card'>
                {restaurants.map((restaurants, index) => (
                    <Restaurants key={index} restaurants={restaurants} />
                ))}
            </div>

            <hr />

            <h2 className='all-sub-head'>Bus Details:</h2>
            <div className='bus-card'>
                <div className="sub-card">
                    <h2 className="head-4">📤Bus from initial location</h2>
                    {busData.map((busData, index) => (
                        <Bus key={index} busData={busData} />
                    ))}
                </div>

                <div className="sub-card">
                    <h2 className="head-4">📥Bus while returning</h2>
                    {busDataReturn.map((busDataReturn, index) => (
                        <BusReturn key={index} busDataReturn={busDataReturn} />
                    ))}
                </div>
            </div>

            <hr />

            <h2 className='all-sub-head'>Flight Details:</h2>
            <div className='bus-card'>
                <div className="sub-card">
                    <h2 className="head-4">✈️ Flight from initial location</h2>
                    {flights.map((flights, index) => (
                        <Flight key={index} flights={flights} />
                    ))}
                </div>

                <div className="sub-card">
                    <h2 className="head-4">✈️ Flight while returning</h2>
                    {flightsReturn.map((flightsReturn, index) => (
                        <FlightReturn key={index} flightsReturn={flightsReturn} />
                    ))}
                </div>
            </div>

            <hr />

            <h2 className='all-sub-head'>Trains:</h2>
            <div className='train-card'>
                <h2 className="head-4">🚊 Train from initial location</h2>
                {train.map((train, index) => (
                    <Trains key={index} train={train} />
                ))}
            </div>


        </div>
    );
}

export default Itinerary;
