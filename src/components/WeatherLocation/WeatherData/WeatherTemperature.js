import React from 'react';
import PropTypes from 'prop-types'
import WeatherIcons from 'react-weathericons'
import {
    CLOUD,
    CLOUDY,
    FOG,
    RAIN,
    SNOW,
    SUN,
    WINDY,
} from '../../../constants/weathers'

// Iconos que se puden desplegar, esto se obtienen desde la documentación de react-weathericos
// https://erikflowers.github.io/weather-icons/
const icons = {
    [CLOUD]: CLOUD,
    [CLOUDY]: CLOUDY,
    [FOG]: FOG,
    [RAIN]: RAIN,
    [SNOW]: SNOW,
    [SUN]: SUN,
    [WINDY]: WINDY,
}

const getWeatherIconTemplate = (weatherState) => {
    let icon = icons[weatherState];
    icon = icon == null ? icons.sun : icon;
    return <WeatherIcons name={icon} size="4x" className="wicon" />
}

const WeatherTemperature = ({temperture, weatherState}) => (
    <div className="weatherTemperatureContainer">
        { getWeatherIconTemplate(weatherState) }
        <span className="temperature">{temperture}</span>
        <span className="temperatureType">°C</span>
    </div>
);

// VALIDATIONS
WeatherTemperature.prototype = {
    weatherState: PropTypes.string.isRequired,
    temperture: PropTypes.number.isRequired,
}

export default WeatherTemperature;