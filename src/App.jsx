import React, { useEffect, useState } from 'react';
import { getCommodityData } from './api/commodityAPI';
import Chart from './components/Chart.jsx';
import './styles/main.css';

function App() {
  const [labels, setLabels] = useState([]);
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCommodityData();
      const sortedData = data.reverse(); // optional: ensure data is sorted by date
      setLabels(sortedData.map(item => item.date));
      setPrices(sortedData.map(item => item.price));
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Commodity Trading Dashboard</h1>
      {loading ? <p>Loading...</p> : <Chart labels={labels} data={prices} />}
    </div>
  );
}

export default App;
