import React from 'react';
import PropTypes from 'prop-types';
import DateTime from "./DateTime";
import DateTimePretty from "./DateTimePretty";
Video.propTypes = {
    
};

function Video(props) {
    const PrettyTime=DateTimePretty(DateTime);
    return (
        <div className="video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <PrettyTime date={props.date} />
        </div>
    )
}

export default Video;