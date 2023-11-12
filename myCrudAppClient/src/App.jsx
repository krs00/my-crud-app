import AddForm from "./components/AddForm"
import EditForm from "./components/EditForm"
 
import React, { useState, useEffect } from 'react';

function App() {

  // Data for API call that grabs all current names and messages
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // API call grabs all names and messages on mount
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



  return (
    <>
      <AddForm /> 
      {data !== null && <EditForm data={data} loading={loading} error={error} />}


    </>
  )
}

export default App
