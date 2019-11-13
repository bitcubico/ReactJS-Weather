import React from 'react';
import PropTypes from 'prop-types'
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import './styles.css'

const WeatherData = ({data: {temperature, weatherStatus, humidity, wind}}) => {
    let tempertureData = {
        temperature,
        weatherStatus,
    };

    return (
        <div className="weatherDataContainer">
            <WeatherTemperature data={tempertureData} />
            <WeatherExtraInfo humidity={humidity} wind={wind} />
        </div>
    );
};

// VALIDATIONS
WeatherData.prototype = {
    data: PropTypes.shape({
        temperture: PropTypes.number.isRequired,
        weatherStatus: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }).isRequired,
}

export default WeatherData;