import React from 'react';
import Location from './Location'
import WeatherData from './WeatherData'
import './styles.css'

const WeatherLocation = () => (
    <div className="weatherLocationContainer">
        <Location city={"Necoclí"} state={"Antioquia"} country={"Colombia"}/>
        <WeatherData />
    </div>
)

export default WeatherLocation;