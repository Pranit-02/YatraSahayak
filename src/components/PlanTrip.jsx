
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function PlanTrip() {
    //Dropdown
    const [selectedOption, setSelectedOption] = useState('');
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    //Date
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());


    //Counter
    const [count, setCount] = useState(1);

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };

    const handleDecrement = () => {
        if (count > 1) {
            setCount(prevCount => prevCount - 1);
        }
    };

    //Price

    const [price, setPrice] = useState(0);

    const handleChange = (event) => {
        setPrice(event.target.value);
    };

    //No of people
    const [people, setPeople] = useState(1);

    const handlePeople = (event) => {
        setPeople(event.target.value);
    };


    // Defined the initial state of the form data
    const [formData, setFormData] = useState({
        selectedOption: "",
        startDate: null,
        endDate: null,
        count: 0,
        price: 0,
        people: 0
    });

    // Defined the handleSubmit function that handles the form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(formData);

        setFormData({
            selectedOption: "",
            startDate: null,
            endDate: null,
            count: 0,
            price: 0,
            people: 0
        });
    };



    return (

        <div className='container'>
            <form onSubmit={handleSubmit}>
                <section className='trip-content'>
                    <h1>Tell us your travel preferences</h1>

                    <p className='mid-text'>What is destination of choice ?</p>
                    <div>
                        <select className='drop-down' value={selectedOption} onChange={handleSelectChange}>
                            <option value="">Select City</option>
                            <option value="option1">Mumbai, India</option>

                        </select>
                    </div>
                    <hr />

                    <p className='mid-text'>When are you planning to travel ?</p>
                    <DatePicker
                        placeholderText='Start Date'
                        selected={startDate}
                        onChange={setStartDate}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        className='Date'
                    />
                    <DatePicker
                        placeholderText='End Date'
                        selected={endDate}
                        onChange={setEndDate}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        className='Date'
                    />

                    <hr />

                    <p className='mid-text'>How many days are you planning to travel ?</p>
                    <div className='day-count'>
                        <p>Day</p>
                        <div>
                            <button className="counter" onClick={handleDecrement} style={{ margin: "10px" }}>
                                -
                            </button>
                            <p style={{ display: "inline-block", margin: "10px" }}>
                                {count}
                            </p>
                            <button className="counter" onClick={handleIncrement} style={{ margin: "10px" }}>
                                +
                            </button>
                        </div>
                    </div>
                    <hr />

                    <p className='mid-text'>What's your budget ?</p>
                    <p>The budget is exclusively allocated for travellingg and dining purposes.</p>
                    <div className='price-input'>
                        <input
                            id="price"
                            name="price"
                            type="number"
                            value={price}
                            onChange={handleChange}
                        />
                    </div>

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