import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import convert from 'convert-units';
import CircularProgress from '@material-ui/core/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
    CLOUD,
    RAIN,
    SNOW,
    SUN,
    THUNDER,
    DRIZZLE,
    CLOUDY,
} from '../../constants/weathers'

import { URL, API_KEY } from '../../constants/apiOpenWeatherMapConfig';

class WeatherLocation extends Component {
    locationData = {
        city: '',
        countryCode: '',
    };

    constructor(props) {
        super(props);

        this.locationData.city = props.city;
        this.locationData.countryCode = props.countryCode;

        this.state = {
            weather: null,
            location: null,
            error: null,
        }

        this.getWeatherData();
    }

    handleUpdateClick = () => {
        this.locationData.countryCode = 'CO';
        this.locationData.city = "Medellín";

        this.getWeatherData();
    }

    getWeatherData = () => {
        let actionApi = `${URL}?q=${this.locationData.city},${this.locationData.countryCode}&appid=${API_KEY}`;
        fetch(actionApi).then(resolve => {
            return resolve.json();
        }).then(data => {
            console.debug(data);

            if(data.cod !== 200){
                this.setState(
                    {
                        weather: null,
                        location: null,
                        error: data.message,
                    }
                );
                return;
            }

            let { humidity, temp } = data.main;
            let { speed } = data.wind;
            let state = data.weather[0];
            
            this.setState(
                {
                    weather: {
                        temperature: this.convertTemperature(temp),
                        humidity: humidity,
                        weatherState: this.getWeatherState(state),
                        wind: `${speed} m/s`,
                    },
                    location: this.locationData,
                    error: null,
                }
            );
        }).catch(error => this.setState({ weather: null, location: null, error: error }));
    }

    convertTemperature = kelvin => {
        return convert(kelvin).from("K").to("C").toFixed(2);
    }

    getWeatherState = state => {
        // Estados https://openweathermap.org/weather-conditions
        let { id } = state;
        if(id < 300)
            return THUNDER;
        else if(id < 400)
            return DRIZZLE;
        else if(id < 600)
            return RAIN;
        else if(id < 700)
            return SNOW;
        else if(id < 800)
            return CLOUDY;
        else if(id === 800)
            return SUN;
        
        return CLOUD;
    }

    render() {
        return this.state.error == null
            ? this.state.location == null || this.state.weather == null 
                ? (
                    <div className="weatherLocationContainer">
                        <CircularProgress />
                    </div>
                )
                : (
                    <div className="weatherLocationContainer">
                        <Location data={this.state.location} />
                        <WeatherData data={this.state.weather} />
                        <button onClick={this.handleUpdateClick}>Actualizar</button>
                    </div>
                )
            : (
                <div className="weatherLocationContainer">
                    <h2>ERROR!!!!</h2>
                    <span>{this.state.error}</span>
                </div>
            );
    }
}

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    countryCode: PropTypes.string.isRequired,
}

export default WeatherLocation;