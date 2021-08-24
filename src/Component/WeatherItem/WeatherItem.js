import React from "react";
import "./WeatherItem.css";

const weatherItem = (props) => {
  return (
    <div className="container">
      {props.temp && <p>temp: {props.temp} </p>}
      {props.humidity && <p>humidity: {props.humidity}</p>}
      {props.city && <p>city: {props.city}</p>}
      {props.country && <p>country: {props.country}</p>}
    </div>
  );
};

export default weatherItem;
