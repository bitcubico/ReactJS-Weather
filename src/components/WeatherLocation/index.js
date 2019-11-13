import React, { Component } from 'react';
import convert from 'convert-units';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
    RAIN,
    SUN,
} from '../../constants/weathers';
import { URL, API_KEY } from '../../constants/apiOpenWeatherMapConfig';

let weatherData = null;

let locationData = {
    city: 'Necoclí',
    countryCode: 'CO',
};

class WeatherLocation extends Component {
    constructor() {
        super();
        this.state = {
            weather: null,
            location: null,
            error: null,
        }

        this.getWeatherData();
    }

    handleUpdateClick = () => {
        locationData.countryCode = 'CO';
        locationData.city = "Medellín";

        weatherData.temperature = 25;
        weatherData.weatherState = RAIN;
        weatherData.humidity = 10;
        weatherData.wind = "10 m/s";

        this.getWeatherData();
    }

    getWeatherData = () => {
        let actionApi = `${URL}?q=${locationData.city},${locationData.countryCode}&appid=${API_KEY}`;
        fetch(actionApi).then(resolve => {
            return resolve.json();
        }).then(data => {
            console.debug(data);

            if(data.cod !== 200){
                this.setState(
                    {
                        weather: null,
                        location: null,
                        error: data.message,
                    }
                );
                return;
            }

            let { humidity, temp } = data.main;
            let { speed } = data.wind;
            let state = data.weather[0].main;
            
            this.setState(
                {
                    weather: {
                        temperature: this.convertTemperature(temp),
                        humidity: humidity,
                        weatherState: this.getWeatherState(state),
                        wind: `${speed} m/s`,
                    },
                    location: locationData,
                    error: null,
                }
            );
        }).catch(error => this.setState({ weather: null, location: null, error: error }));
    }

    convertTemperature = kelvin => {
        return convert(kelvin).from("K").to("C").toFixed(2);
    }

    getWeatherState(state) {
        return SUN;
    }

    render() {
        return this.state.error == null
            ? this.state.location == null || this.state.weather == null 
                ? (
                    <div className="weatherLocationContainer">
                        <span>Loading weather, please wait...</span>
                    </div>
                )
                : (
                    <div className="weatherLocationContainer">
                        <Location data={this.state.location} />
                        <WeatherData data={this.state.weather} />
                        <button onClick={this.handleUpdateClick}>Actualizar</button>
                    </div>
                )
            : (
                <div className="weatherLocationContainer">
                    <h2>ERROR!!!!</h2>
                    <span>{this.state.error}</span>
                </div>
            );
    }
}

export default WeatherLocation;