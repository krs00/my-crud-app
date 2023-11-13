import React, { useState } from 'react';

function DeleteForm(props) {

    const { data } = props;

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


    return (
        <>
            <p className="title">Delete a message</p>

            <form>
                <div>
                    <label htmlFor="selectBox">Select a person to delete their message</label>
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
                    <button>Delete</button>
                </div>
            </form>

            _______________________________________________________

        </>
    )
}

export default DeleteForm
