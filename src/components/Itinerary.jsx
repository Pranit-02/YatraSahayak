import React from 'react';
import Locations from './Locations';
import Hotels from './Hotels';
import Restaurants from './Restaurants';
import Bus from './Bus';
import { busData, busDataReturn, flights, flightsReturn, locationData, train, trainReturn } from './data.jsx';
import { hotels } from './data.jsx';
import { restaurants } from './data.jsx';
import { HiPaperAirplane } from 'react-icons/hi2'
import BusReturn from './BusReturn';
import Flight from './Flight';
import FlightReturn from './FlightReturn';
import Trains from './Trains';
import TrainsReturn from './TrainsReturn';


function Itinerary() {

    const minBusPriceInitial = Math.min(...busData.map((bus) => bus.prices));
    const minBusPriceReturn = Math.min(...busDataReturn.map((bus) => bus.prices));

    const minFlightPriceInitial = Math.min(...flights.map((flight) => flight.prices));
    const minFlightPriceReturn = Math.min(...flightsReturn.map((flight) => flight.prices));

    const minTrainPriceInitial = Math.min(...train.map((train) => train.prices));
    const minTrainPriceReturn = Math.min(...trainReturn.map((train) => train.prices));

    // Determine which mode has the lowest price for the initial and return journeys separately

    let lowestPriceModeInitial = '';
    let lowestPriceModeReturn = '';

    if (minBusPriceInitial <= minFlightPriceInitial && minBusPriceInitial <= minTrainPriceInitial) {
        lowestPriceModeInitial = 'bus';
    } else if (minFlightPriceInitial <= minBusPriceInitial && minFlightPriceInitial <= minTrainPriceInitial) {
        lowestPriceModeInitial = 'flight';
    } else {
        lowestPriceModeInitial = 'train';
    }

    if (minBusPriceReturn <= minFlightPriceReturn && minBusPriceReturn <= minTrainPriceReturn) {
        lowestPriceModeReturn = 'bus';
    } else if (minFlightPriceReturn <= minBusPriceReturn && minFlightPriceReturn <= minTrainPriceReturn) {
        lowestPriceModeReturn = 'flight';
    } else {
        lowestPriceModeReturn = 'train';
    }

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


                <h2 className="all-sub-head">Travel Details :</h2>
            <div className="travel-details">
                {/* <h2 className='all-sub-head'>Bus Details:</h2> */}
                <div className='bus-card'>

                    <div className="sub-card">
                        {/* <h2 className="head-4">📤Bus from initial location</h2> */}
                        {lowestPriceModeInitial === 'bus' &&
                            busData.map((busData, index) => <Bus key={index} busData={busData} />)
                        }
                    </div>

                    <div className="sub-card">
                        {/* <h2 className="head-4">📥Bus while returning</h2> */}
                        {lowestPriceModeReturn === 'bus' &&
                            busDataReturn.map((busDataReturn, index) => <BusReturn key={index} busDataReturn={busDataReturn} />)
                        }
                    </div>
                </div>

                {/* <hr /> */}

                {/* <h2 className='all-sub-head'>Flight Details:</h2> */}
                <div className='flight-card'>
                    <div className="sub-card">
                        {/* <h2 className="head-4">✈️ Flight from initial location</h2> */}
                        {lowestPriceModeInitial === 'flight' &&
                            flights.map((flights, index) => <Flight key={index} flights={flights} />)
                        }
                    </div>

                    <div className="sub-card">
                        {/* <h2 className="head-4">✈️ Flight while returning</h2> */}
                        {lowestPriceModeReturn === 'flight' &&
                            flightsReturn.map((flightsReturn, index) => <FlightReturn key={index} flightsReturn={flightsReturn} />)
                        }
                    </div>
                </div>

                {/* <hr /> */}

                {/* <h2 className='all-sub-head'>Trains:</h2> */}
                <div className="train-card">
                    <div className='sub-card'>
                        {/* <h2 className="head-4">🚊 Train from initial location</h2> */}
                        {lowestPriceModeInitial === 'train' &&
                            train.map((train, index) => <Trains key={index} train={train} />)
                        }
                    </div>

                    <div className='sub-card'>
                        {/* <h2 className="head-4">🚊 Train while returning</h2> */}
                        {lowestPriceModeReturn === 'train' &&
                            trainReturn.map((trainReturn, index) => <TrainsReturn key={index} trainReturn={trainReturn} />)
                        }
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Itinerary;
