import { useState } from "react";
import "./App.css";
import TimeComponent from "./TimeComponent";
import WeatherComponent from "./WeatherComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TimeComponent></TimeComponent>
      <WeatherComponent></WeatherComponent>
    </>
  );
}

export default App;
