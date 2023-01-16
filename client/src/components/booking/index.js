import React, { useRef, useState } from 'react';
// add styling
// import authenicator for login
// TODO validator for booking availibility

function Booking() {
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
        } else (inputType === 'seatingGuests') {
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
    }


    return (
        <div>
            <p> Please pick a booking time here </p>
            <form>
                <input
                    value={date}
                    name='date'
                    type='date'
                    onChange={handleInput}
                    ref={dateInputRef}
                />
                <select
                    value={seatingTime}
                    name='seatingTime'
                    onChange={handleInput}
                />
                <input
                    value={seatingGuests}
                    name='seatingGuests'
                    type='number'
                    onChange={handleInput}
                />
                <button type='button' onClick={handleFormSubmit}> Submit Booking </button>
            </form>
        </div>
    );

}

export default Booking;