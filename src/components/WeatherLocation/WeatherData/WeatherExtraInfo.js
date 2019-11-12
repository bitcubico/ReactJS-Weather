import React from 'react';
import PropTypes from 'prop-types'


const WeatherExtraInfo = ({humidity, wind}) => (
    <div className="weatherExtraInfoContainer">
        <span className="extraInfoText">{`Humidity: ${humidity}%`}</span>
        <span className="extraInfoText">{`Wind: ${wind}`}</span>
    </div>
);

// VALIDATIONS
WeatherExtraInfo.prototype = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired,
}

export default WeatherExtraInfo;