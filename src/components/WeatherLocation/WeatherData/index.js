import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import {
    CLOUD,
    CLOUDY,
    FOG,
    RAIN,
    SNOW,
    SUN,
    WINDY,
} from '../../../constants/weathers'
import './styles.css'

const WeatherData = () => (
    <div className="weatherDataContainer">
        <WeatherTemperature temperture={28} weatherState={CLOUD}/>
        <WeatherExtraInfo humidity={80} wind={"20 m/s"} />
    </div>
);

export default WeatherData;