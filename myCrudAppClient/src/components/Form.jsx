import React, { useState } from "react"

function Form() {

    // This object represents the data from the form
    const [formData, setFormData] = useState({
        name: '',
        message: '',
    });

    function handleInputChange(e) {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }



    return (
        <>
            <form >
                <div>
                    <label htmlFor="name">What is your name?</label>
                    <br></br>
                    <input name="name" id="name" value={formData.name} onChange={handleInputChange} required />
                </div>

                <br></br>

                <div>
                    <label htmlFor="message">Message:</label>
                    <br></br>
                    <textarea id="message" name="message" rows="4" cols="25" value={formData.message} onChange={handleInputChange} required></textarea>
                </div>
                <br></br>
                <div>
                    <button>Submit</button>
                </div>
            </form>

            <p>{formData.name}</p>
            <p>{formData.message}</p>

        </>
    )
}

export default Form
