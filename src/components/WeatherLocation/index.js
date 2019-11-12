import React from 'react';
import Location from './Location'
import WeatherData from './WeatherData'
import './styles.css'
import {
    CLOUD,
    CLOUDY,
    FOG,
    RAIN,
    SNOW,
    SUN,
    WINDY,
} from '../../constants/weathers'

const weatherData = {
    temperature: 32,
    weatherState: SUN,
    humidity: 30,
    wind: '25 m/s'
}

const locationData = {
    city: 'Necoclí',
    state: 'Antioquia',
    country: 'Colombia',
}

const WeatherLocation = () => (
    <div className="weatherLocationContainer">
        <Location data={locationData} />
        <WeatherData data={weatherData} />
    </div>
)

export default WeatherLocation;