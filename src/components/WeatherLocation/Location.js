import React from 'react';
import PropTypes from 'prop-types'
import './styles.css'

const Location = ({data: { city, state, country }}) => {    
    return (
        <div className="locationContainer">
            <h1>{city}, {state}, {country}</h1>
        </div>
    );
};

// VALIDACIONES
Location.propTypes = {
    data: PropTypes.shape({
        city: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
    }).isRequired,
}

export default Location;