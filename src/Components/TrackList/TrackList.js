import React from 'react';
import './TrackList.css';

class TrackList extends React.Component {
    render() {
        return 
        <div className="TrackList">
            track={this.props.tracks.map(track => {
                     return this.props.track.name, this.props.track.artist, this.props.track.album;
                 })}
        </div>
    }
}

export default TrackList;
