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

const apiConfig = {
    url: 'https://api.openweathermap.org/data/2.5/weather',
    apiKey: '71ca367d1b8f3136845d19400c79532b',
}

let weatherData = {
    temperature: 32,
    weatherState: SUN,
    humidity: 30,
    wind: '25 m/s'
};

let locationData = {
    city: 'Necoclí',
    countryCode: 'CO',
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
        locationData.countryCode = 'CO';
        locationData.city = "Medellín";

        weatherData.temperature = 25;
        weatherData.weatherState = RAIN;
        weatherData.humidity = 10;
        weatherData.wind = "10 m/s";
        
        this.getWeatherData();
    }

    getWeatherData = () => {
        let actionApi = `${apiConfig.url}?q=${locationData.city},${locationData.countryCode}&appid=${apiConfig.apiKey}`;
        fetch(actionApi).then(resolve => {
            return resolve.json();
        }).then( data => {
            let { humidity, temp } = data.main;
            let { speed } = data.wind;
            let state = SUN;

            this.setState(
                {
                    weather: {
                        temperature: temp,
                        humidity: humidity,
                        weatherState: state,
                        wind: `${speed} m/s`,
                    },
                    location: locationData,
                }
            );
        });
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