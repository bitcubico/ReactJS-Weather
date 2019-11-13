import React from 'react';
import { PropTypes } from 'prop-types';
import WeatherLocation from '.';

const LocationList = ({ cities }) => (
        <div>
            { cities.map(printWheaterLocation) }
        </div>
);

const printWheaterLocation = city => (
    <WeatherLocation key={city} city={city} />
    //console.debug(cities);
);

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
}

export default LocationList;