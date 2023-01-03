import React, { useEffect, useState } from 'react';
import TutorialList from './components/TutorialList';
import axiosInstance from './config/api';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get("posts");
      setData(response?.data);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="App">
      {error && <h2>Error...</h2>}
      {
        loading ? <h2>Loading...</h2> : <TutorialList data={data} />
      }
    </div>
  );
}

export default App;
