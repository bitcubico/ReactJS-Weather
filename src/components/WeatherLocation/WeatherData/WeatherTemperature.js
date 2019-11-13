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
    THUNDER,
    DRIZZLE,
} from '../../../constants/weathers'

// Iconos que se puden desplegar, esto se obtienen desde la documentación de react-weathericos
const icons = {
    [CLOUD]: CLOUD,
    [CLOUDY]: CLOUDY,
    [DRIZZLE]: DRIZZLE,
    [FOG]: FOG,
    [RAIN]: RAIN,
    [SNOW]: SNOW,
    [SUN]: SUN,
    [THUNDER]: THUNDER,
}

const getWeatherIconTemplate = (weatherState) => {
    let icon = icons[weatherState];
    icon = icon == null ? icons.SUN : icon;
    return <WeatherIcons name={icon} size="4x" className="wicon" />
}

const WeatherTemperature = ({data: {temperature, weatherState}}) => (
    <div className="weatherTemperatureContainer">
        { getWeatherIconTemplate(weatherState) }
        <span className="temperature">{temperature}</span>
        <span className="temperatureType">°C</span>
    </div>
);

// VALIDATIONS
WeatherTemperature.prototype = {
    data: PropTypes.shape({
        weatherState: PropTypes.string.isRequired,
        temperture: PropTypes.number.isRequired,
    }).isRequired,
}

export default WeatherTemperature;