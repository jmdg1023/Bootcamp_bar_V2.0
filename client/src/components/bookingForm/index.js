import React, { useRef, useState } from 'react';
// add styling
// import authenicator for login
// TODO validator for booking availibility

function BookingForm() {
    // state variables
    const [date, setDate] = useState('');
    const dateInputRef = useRef(null);
    const [seatingTime, setSeatingTime] = useState('')
    const [seatingGuests, setSeatingGuests] = useState('')

    const handleInput = (e) => {

        // identify which value/input was changed
        const {target} = e;
        const inputType = target.name;
        const inputValue = target.value;

        // update state based on input target value
        if (inputType === 'date') {
            setDate(inputValue)
        } else if (inputType === 'seatingTime') {
            setSeatingTime (inputValue)
        } else if (inputType === 'seatingGuests') {
            setSeatingGuests (inputValue)
        }
    };

    const handleFormSubmit = (e) => {

        e.preventDefault();

        // TODO validate booking avail, else return function to allow user to make new selection

        // once form is submitted:
        setDate('');
        setSeatingTime('');
        setSeatingGuests('');
        alert('booking submitted!');
    }


    return (
        <div className='center-content'>
            <div className='mt-half-page black-card-bg'>
                <h1>Make a booking below!</h1>
                <form className='flex-col'>
                    <p>Date:</p>
                    <input
                        className='py-1'
                        value={date}
                        name='date'
                        type='date'
                        onChange={handleInput}
                        ref={dateInputRef}
                    />
                    <p>Seating Time:</p>
                    <select
                        className='py-1'
                        value={seatingTime}
                        name='seatingTime'
                        onChange={handleInput}
                        placeholder='Please select a seating time'
                    >
                        <option value='6PM'>6PM</option>
                        <option value='8PM'>8PM</option>
                    </select>
                    <p>Nubmer of guests:</p>
                    <input
                        className='py-1'
                        value={seatingGuests}
                        name='seatingGuests'
                        type='number'
                        min='1'
                        onChange={handleInput}
                    />
                    <button className='my-1' type='button' onClick={handleFormSubmit}> Submit Booking </button>
                </form>
            </div>
        </div>
    );

}

export default BookingForm;