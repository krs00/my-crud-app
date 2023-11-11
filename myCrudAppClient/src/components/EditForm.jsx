import React, { useState, useEffect } from 'react';

function EditForm() {

    // Data for API call that grabs all current names and messages
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    // list of all names for the dynamically select box
    const [namesArray, setNamesArray] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5001/Messages');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []); // Empty dependency array means this effect runs once after the initial render

    
    


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
                    <select id="selectBox">
                        {/* <select id="selectBox" value={selectedValue} onChange={handleChange}> */}
                        {console.log(typeof data)}
                        <option value="" disabled>Select a Person</option>
                        <option value="option1">Option 1</option>
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
