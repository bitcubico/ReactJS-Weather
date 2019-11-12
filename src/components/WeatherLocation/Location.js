import React from 'react';
import PropTypes from 'prop-types'
import './styles.css'

const Location = ({data: { city, countryCode }}) => {    
    return (
        <div className="locationContainer">
            <h1>{city}, {countryCode}</h1>
        </div>
    );
};

// VALIDACIONES
Location.propTypes = {
    data: PropTypes.shape({
        city: PropTypes.string.isRequired,
        countryCode: PropTypes.string.isRequired,
    }).isRequired,
}

export default Location;