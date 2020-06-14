import React from 'react';
import PropTypes from 'prop-types';
import Video from "./Video";
VideoList.propTypes = {

};

function VideoList(props) {
    return props.list.map(item => <Video url={item.url} date={item.date} />);
}

export default VideoList;