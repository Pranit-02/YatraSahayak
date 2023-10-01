import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';

function PlanTrip() {
    const navigate = useNavigate();

    //Dropdown
    const [selectedStart, setSelectedStart] = useState('');
    const handleSelectStart = (event) => {
        setSelectedStart(event.target.value);
    };

    const [selectedEnd, setSelectedEnd] = useState('');
    const handleSelectEnd = (event) => {
        setSelectedEnd(event.target.value);
    };

    //Date
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    //Count Days
    const [days, setDays] = useState(1);

    const handleIncrement = () => {
        setDays(prevDays => prevDays + 1);
    };

    const handleDecrement = () => {
        if (days > 1) {
            setDays(prevDays => prevDays - 1);
        }
    };

    //Price
    const [price, setPrice] = useState('');

    const handleChange = (event) => {
        setPrice(event.target.value);
    };

    //code just for reference
    
    // const handleChange = (event) => {
    //     const newValue = parseFloat(event.target.value) * 100;

    //     setPrice(isNaN(newValue) ? '' : newValue);
    // };

    //No of people
    const [people, setPeople] = useState(1);

    const handlePeople = (event) => {
        const newValue = parseInt(event.target.value, 10); 

        setPeople(isNaN(newValue) ? 1 : newValue);
    };

    // Defined the initial state of the form data
    const [formData, setFormData] = useState({
        selectedStart: "",
        selectedEnd: "",
        startDate: new Date(),
        endDate: new Date(),
        days: 1,
        price: '',
        people: 1,
    });

    // Defined the handleSubmit function that handles the form submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                selectedStart: selectedStart,
                selectedEnd: selectedEnd,
                startDate: startDate,
                endDate: endDate,
                days: days,
                price: price,
                people: people,
            };
        });

        await new Promise(resolve => setTimeout(resolve, 1000));

        navigate('/Itinerary');
    };

    useEffect(() => {
        console.log(formData);
    }, [formData]);

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <section className='trip-content'>
                    <h1>Tell us your travel preferences</h1>

                    <p className='mid-text'>What is the starting location ?</p>
                    <div>
                        <select className='drop-down' value={selectedStart} onChange={handleSelectStart}>
                            <option value="">Select City</option>
                            <option value="option1">Ahmedabad, India</option>

                        </select>
                    </div>
                    <hr />

                    <p className='mid-text'>What is destination of choice ?</p>
                    <div>
                        <select className='drop-down' value={selectedEnd} onChange={handleSelectEnd}>
                            <option value="">Select City</option>
                            <option value="option1">Mumbai, India</option>

                        </select>
                    </div>
                    <hr />

                    <p className='mid-text'>When are you planning to travel ?</p>
                    <div className="datePickerDiv">
                        <DatePicker
                            selected={startDate}
                            onChange={setStartDate}
                            selectsStart
                            startDate={startDate}
                            endDate={endDate}
                            className='Date'
                            dateFormat="dd/MM/yyyy"
                        />
                        <DatePicker
                            selected={endDate}
                            onChange={setEndDate}
                            selectsEnd
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate}
                            className='Date'
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>

                    <hr />

                    <p className='mid-text'>How many days are you planning to travel ?</p>
                    <div className='day-count'>
                        <p>Day</p>
                        <div className='AddSub'>
                            <p className="counter" onClick={handleDecrement} style={{ margin: "10px" }}>
                                -
                            </p>
                            <p style={{ display: "inline-block", margin: "10px" }}>
                                {days}
                            </p>
                            <p className="counter" onClick={handleIncrement} style={{ margin: "10px" }}>
                                +
                            </p>
                        </div>
                    </div>
                    <hr />

                    <p className='mid-text'>What's your budget ?</p>
                    <p>The budget is exclusively allocated for travellingg and dining purposes.</p>

                    <input
                        id="price"
                        name="price"
                        type="number"
                        value={price}
                        onChange={handleChange}
                    />


                    <hr />

                    <p className='mid-text'>What is the number of people travelling ?</p>
                    <div className='people-count'>
                        <input
                            id="people"
                            name="people"
                            type="number"
                            value={people}
                            onChange={handlePeople}
                        />
                    </div>

                </section>

                <div className='submit'>
                    <button type="submit" className='btn-submit'>Submit</button>
                </div>

            </form>
        </div>

    )
}

export default PlanTrip