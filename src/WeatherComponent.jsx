import React from "react";
import { useState, useEffect } from "react";

const WeatherComponent = () => {
  const [temp, setTemp] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiData =
    "https://api.open-meteo.com/v1/forecast?latitude=10.823&longitude=106.6296&current=temperature_2m,relative_humidity_2m";

  const fetchData = async () => {
    try {
      const response = await fetch(apiData); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();
      setTemp(data.current.temperature_2m);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h3>
        Temp: <h2>{temp}</h2>°C
      </h3>
    </div>
  );
};

export default WeatherComponent;
