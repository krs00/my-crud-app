import React, { useState } from "react"

function AddForm() {

    const [submitMessage, setSubmitMessage] = useState('')

    // This object represents the data from the form
    const [formData, setFormData] = useState({
        name: '',
        messageText: ''
    });

    // This function updates the formData state with user input
    function handleInputChange(e) {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        }); 
    }

    function clearFormInputs() {
        setFormData({
            name: '',
            messageText: ''
        })
    }

    function displaySubmitMessage() {
        setSubmitMessage('Message Posted!') 
        setTimeout(() => {
            setSubmitMessage('');
          }, 2500);
    }

    // This function makes a POST request to the API to upload submitted name and message
    // Also clears the form input when submitted
    async function handleSubmit(e) {
        e.preventDefault() // Prevent the defualt action of form submission

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
        
            
          } catch (error) {
            console.error('Error submitting form:', error);
          }

          clearFormInputs()
          displaySubmitMessage() 
        
        // console.log everything saved
        console.log('Form data submitted:', formData);
        console.log(formData.name, formData.messageText);
    }



    return (
        <>  
            <p className="title">Add a message</p>
            
            <form onSubmit={handleSubmit} >
                <div>
                    <label htmlFor="name">What is your name?</label>
                    <br></br>
                    <input name="name" id="name" value={formData.name} onChange={handleInputChange} required />
                </div>

                <br></br>

                <div>
                    <label htmlFor="messageText">Message:</label>
                    <br></br>
                    <textarea id="messageText" name="messageText" rows="4" cols="25" value={formData.messageText} onChange={handleInputChange} required></textarea>
                </div>
                <br></br>
                <div> 
                    <button onClick={handleSubmit}>Submit</button>
                </div>
                <br></br>
                <p>{submitMessage}</p>
            </form>

            _______________________________________________________

        </>
    )
}

export default AddForm
