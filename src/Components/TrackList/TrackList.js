import React from 'react';
import './Track';
import './TrackList.css';

class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList"> 
                {this.props.tracks.map(track => {
                    return <Track track={track}
                        key={track.id}
                        onAdd={this.props.onAdd}
                        addTrack={this.props.track}
                        onRemove={this.props.onRemove} 
                        />
                    })
                }
            </div>
        );
    }
}

export default TrackList;
