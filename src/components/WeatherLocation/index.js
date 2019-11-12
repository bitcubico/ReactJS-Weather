import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
    CLOUD,
    CLOUDY,
    FOG,
    RAIN,
    SNOW,
    SUN,
    WINDY,
} from '../../constants/weathers';

let weatherData = {
    temperature: 32,
    weatherState: SUN,
    humidity: 30,
    wind: '25 m/s'
};

let locationData = {
    city: 'Necoclí',
    state: 'Antioquia',
    country: 'Colombia',
};

class WeatherLocation extends Component{
    constructor() {
        super();
        this.state = {
            weather: weatherData,
            location: locationData
        }
    }

    handleUpdateClick = () => {
        locationData.city = "Medellín";
        weatherData.temperature = 25;
        weatherData.weatherState = RAIN;
        weatherData.humidity = 10;
        weatherData.wind = "10 m/s";
        
        this.setState(
            {
                weather: this.getWeatherData(),
                location: this.getLocationData(),
            }
        );
    }

    getWeatherData = () => {
        return {
            temperature: 25,
            weatherState: RAIN,
            humidity: 10,
            wind: '35 m/s'
        };
    }

    getLocationData = () => {
        return {
            city: 'Medellín',
            state: 'Antioquia',
            country: 'Colombia',
        };
    }

    render(){
        return (
            <div className="weatherLocationContainer">
                <Location data={this.state.location} />
                <WeatherData data={this.state.weather} />
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        )
    }
}

export default WeatherLocation;