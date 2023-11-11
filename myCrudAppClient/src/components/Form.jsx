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

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            const response = await fetch('http://localhost:5001/Messages', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
            });
        
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
        
            const responseData = await response.json();
            console.log('Response from server:', responseData);
        
            // Handle success or any other logic here
          } catch (error) {
            console.error('Error submitting form:', error);
        
            // Handle error or show a user-friendly message
          }
        

        // console.log everything saved
        console.log('Form data submitted:', formData);
    }



    return (
        <>
            <form onSubmit={handleSubmit} >
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
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </form>

            <p>{formData.name}</p>
            <p>{formData.message}</p>

        </>
    )
}

export default Form
