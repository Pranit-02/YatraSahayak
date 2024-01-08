import React, { useState, useRef } from 'react';
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
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


function Itinerary() {
    const pdfRef = useRef();
    const downloadPDF = () => {
        const input = pdfRef.current;
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4', true);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
            const imgX = (pdfWidth - imgWidth * ratio) / 2;
            const imgY = 15;
            pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
            pdf.save('itinerary.pdf')

        });
    }

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



    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(18000);
    const [filteredHotels, setFilteredHotels] = useState(hotels);
    const [newFilteredResto, setNewFilteredResto] = useState(restaurants)

    const handlePriceRangeChange = (min, max) => {
        setMinPrice(min);
        setMaxPrice(max);

        // Filter hotels based on the selected price range
        const filtered = hotels.filter(hotel => hotel.price >= min && hotel.price <= max);
        setFilteredHotels(filtered);

        
    };

    const handleRestoPriceRangeChange = (min, max) => {
        setMinPrice(min);
        setMaxPrice(max);

        // Filter restaurants based on the selected price range
        const newFiltered = restaurants.filter(restaurant => restaurant.price >= min && restaurant.price <= max)
        setNewFilteredResto(newFiltered);

    }

    const showAllHotels = () => {
        // Show all hotels
        setFilteredHotels(hotels);
    };

    const showAllRestaurants = () => {
        // Show all restaurants
        setNewFilteredResto(restaurants);
    };



    return (

        <div className='container-new' ref={pdfRef} >
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
                <div className="filters">
                    <button className="range" onClick={showAllHotels}>All</button>
                    <button className="range" onClick={() => handlePriceRangeChange(1500, 3000)}>1500-3000</button>
                    <button className="range" onClick={() => handlePriceRangeChange(3000, 6000)}>3000-6000</button>
                    <button className="range" onClick={() => handlePriceRangeChange(6000, 9000)}>6000-9000</button>
                    <button className="range" onClick={() => handlePriceRangeChange(9000, 12000)}>9000-12000</button>
                    <button className="range" onClick={() => handlePriceRangeChange(12000, 15000)}>12000-15000</button>
                    <button className="range" onClick={() => handlePriceRangeChange(15000, 18000)}>15000-18000</button>

                </div>
                <div className="content-card">
                    {filteredHotels.length > 0 ? (
                        filteredHotels.map((hotels, index) => (
                            <Hotels key={index} hotels={hotels} />
                        ))
                    ) : (
                        <p>No hotels are available at this price</p>
                    )}
                </div>
            </div>
            <hr />

            <h2 className='all-sub-head'>Restaurant:</h2>
            <div className='hotel-card'>
                <div className="filters">
                    <button className="range" onClick={showAllRestaurants}>All</button>
                    <button className="range" onClick={() => handleRestoPriceRangeChange(400, 700)}>400-700</button>
                    <button className="range" onClick={() => handleRestoPriceRangeChange(700, 1000)}>700-1000</button>
                    <button className="range" onClick={() => handleRestoPriceRangeChange(1000, 1200)}>1000-1200</button>
                    <button className="range" onClick={() => handleRestoPriceRangeChange(1200, 1500)}>1200-1500</button>
                    <button className="range" onClick={() => handleRestoPriceRangeChange(1500, 1800)}>1500-1800</button>
                    <button className="range" onClick={() => handleRestoPriceRangeChange(1800, 2000)}>1800-2000</button>
                </div>
                <div className="content-card">
                {newFilteredResto.length > 0 ? (
                    newFilteredResto.map((restaurants, index) => (
                        <Restaurants key={index} restaurants={restaurants} />
                    ))
                ) : (
                    <p>No restaurants are available at this price</p>
                )}
                </div>
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

            <hr />
            <div className="link-button1">
                <a href="/">Generate Again</a> <span />
                <button className='btn-hover' onClick={downloadPDF}>Download Itinerary (PDF)</button>
            </div>

        </div>
    );
}



export default Itinerary;
