import React from 'react';
import WeatherLocation from '.';

const LocationList = () => (
    <div>
        <WeatherLocation city="Bogotá" countryCode="CO" />
        <WeatherLocation city="Medellín" countryCode="CO" />
        <WeatherLocation city="Cali" countryCode="CO" />
        <WeatherLocation city="Barranquilla" countryCode="CO" />
        <WeatherLocation city="Cartagena" countryCode="CO" />
    </div>
);

export default LocationList;