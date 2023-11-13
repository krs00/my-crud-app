import React, { useState, useEffect } from 'react';

function EditForm(props) {

    const { data, loading, error } = props;
    
    const [selectedOption, setSelectedOption] = useState('');

    // Updates selectedOption variable to chosen name from select box 
    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value)
    }

    // Defines a options variable to populate select box
    const options = data.map((item) => (
        <option key={item.id} value={item.name}>
            {item.name}
        </option>
    ))

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <>
            <p className="title">Edit a message</p>

            <form>
                <div>
                    <label htmlFor="selectBox">Select a person to edit their message</label>
                    <br></br>

                    <select value={selectedOption} onChange={handleSelectChange}>
                        <option value="" disabled>
                            Select an option
                        </option>
                        {options}
                    </select>

                </div>

                <br></br>

                <div>
                    <label htmlFor="messageText">Message:</label>
                    <br></br>
                    <textarea id="messageText" name="messageText" rows="4" cols="25" required></textarea>
                </div>
                <br></br>
                <div>
                    <button>Submit</button>
                </div>
            </form>

            _______________________________________________________

        </>
    )
}

export default EditForm
