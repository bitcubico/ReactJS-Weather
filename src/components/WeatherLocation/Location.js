import React from 'react';
import PropTypes from 'prop-types'
import './styles.css'

const Location = (props) => {
    console.debug("Argumentos de Locations")
    console.debug(props);
    //debugger;

    /* Asignación normal
    let city = props.city;
    let state = props.state;
    let country = props.country;
    */

    /* Destructuring */
    let { city, state, country } = props;
    
    return (
        <div className="locationContainer">
            <h1>{city}, {state}, {country}</h1>
        </div>
    );
};

// VALIDACIONES
Location.propTypes = {
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
}

export default Location;