import React, { useState, useEffect } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';

function formatDateToDDMMYYYY(date) {
    if (!date) return '';
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
  }

function PlanTrip() {
    const navigate = useNavigate();

    //Dropdown
    const [start_location, setStart_location] = useState('');
    const handleStart_location = (event) => {
        setStart_location(event.target.value);
    };

    const [destination, setDestination] = useState('');
    const handleDestination = (event) => {
        setDestination(event.target.value);
    };

    //Date
    const [date_of_departure, setDate_of_departure] = useState('');
    const [date_of_return, setDate_of_return] = useState('');

    //Count Days
    const [duration_of_stay, setDuration_of_stay] = useState(1);

    const handleIncrement = () => {
        setDuration_of_stay(prevDuration_of_stay => prevDuration_of_stay + 1);
    };

    const handleDecrement = () => {
        if (duration_of_stay > 1) {
            setDuration_of_stay(prevDuration_of_stay => prevDuration_of_stay - 1);
        }
    };

    //Price
    const [budget, setBudget] = useState('');

    // const handleChange = (event) => {
    //     setBudget(event.target.value);
    // };
    const handleChange = (event) => {
        const inputValue = event.target.value;
        if (/^\d*$/.test(inputValue)) { 
            setBudget(Number(inputValue));
        }
    };
    

    //No of people
    const [num_travelers, setNum_travelers] = useState(1);

    const handleNum_travelers = (event) => {
        const newValue = parseInt(event.target.value, 10);

        setNum_travelers(isNaN(newValue) ? 1 : newValue);
    };

    // Defined the initial state of the form data
    const [formData, setFormData] = useState({
        start_location: '',
        destination: '',
        date_of_departure: '',
        date_of_return: '',
        duration_of_stay: 1,
        budget: '',
        num_travelers: 1,
    });

    // Defined the handleSubmit function that handles the form submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                start_location: start_location,
                destination: destination,
                date_of_departure: date_of_departure,
                date_of_return: date_of_return,
                duration_of_stay: duration_of_stay,
                budget: budget,
                num_travelers: num_travelers,
            };
        });

        await new Promise(resolve => setTimeout(resolve, 1000));

        navigate('/Itinerary');
    };

    useEffect(() => {
        const formattedFormData = {
            ...formData,
            date_of_departure: formatDateToDDMMYYYY(formData.date_of_departure),
            date_of_return: formatDateToDDMMYYYY(formData.date_of_return),
        };
        console.log(formattedFormData);
    }, [formData]);

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <section className='trip-content'>
                    <h1>Tell us your travel preferences</h1>

                    <p className='mid-text'>What is the starting location ?</p>
                    <div>
                        <select className='drop-down' value={start_location} onChange={handleStart_location} required>
                            <option value="">Select City</option>
                            <option value="ahamdabad">ahamdabad</option>
                            <option value="bengaluru">bengaluru</option>
                            <option value="delhi">delhi</option>
                            <option value="indore">indore</option>
                            <option value="kolhapur">kolhapur</option>
                            <option value="nagpur">nagpur</option>
                            <option value="nashik">nashik</option>
                            <option value="panaji">panaji</option>
                            <option value="pune">pune</option>

                        </select>
                    </div>
                    <hr />

                    <p className='mid-text'>What is destination of choice ?</p>
                    <div>
                        <select className='drop-down' value={destination} onChange={handleDestination} required>
                            <option value="">Select City</option>
                            <option value="Mumbai">Mumbai</option>

                        </select>
                    </div>
                    <hr />

                    <p className='mid-text'>When are you planning to travel ?</p>
                    

                        <div className="datePickerDiv">
                            <input
                                type='date'
                                name='date_of_departure'
                                className='Date'
                                value={date_of_departure}
                                onChange={(event) => setDate_of_departure(event.target.value)}
                                required
                            />
                            <input
                                type='date'
                                name='date_of_return'
                                className='Date'
                                value={date_of_return}
                                onChange={(event) => setDate_of_return(event.target.value)}
                                min={date_of_departure}
                                required
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
                                {duration_of_stay}
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
                        id="budget"
                        name="budget"
                        type="text"
                        value={budget}
                        onChange={handleChange}
                        required
                    />


                    <hr />

                    <p className='mid-text'>What is the number of people travelling ?</p>
                    <div className='people-count'>
                        <input
                            id="num_travelers"
                            name="num_travelers"
                            type="number"
                            value={num_travelers}
                            onChange={handleNum_travelers}
                            required
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