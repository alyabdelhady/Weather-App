import React, { Component } from "react";
import WeatherItem from "./Component/WeatherItem/WeatherItem";
import FormItem from "./Component/Form/FormItem";
import "./App.css";

const apiKey = "d3eda2e2ca7f6716a3acdf96a0c75874";

class App extends Component {
  state = {
    temp: "",
    humidity: "",
    city: "",
    country: "",
  };

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`
    );
    const data = await api.json();
    this.setState({
      temp: data.main.temp,
      humidity: data.main.humidity,
      city: data.name,
      country: data.sys.country,
    });
  };

  render() {
    return (
      <div className="app">
        <h1>Weather App</h1>
        <FormItem getWeather={this.getWeather} />
        <WeatherItem
          temp={this.state.temp}
          humidity={this.state.humidity}
          city={this.state.city}
          country={this.state.country}
        />
      </div>
    );
  }
}

export default App;
