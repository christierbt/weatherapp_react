import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CurrentWeather from "./CurrentWeather";

function App() {
  return (
    <div className="App">
      <CurrentWeather />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
