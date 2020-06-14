import React from 'react';
import PropTypes from 'prop-types';

DateTime.propTypes = {
    
};

function DateTime(props) {
    return (
        <p className="date">{props.date}</p>
    )
}

export default DateTime;