import React from 'react';
import './SearchResults.css';
import './Components/TrackList/TrackList.js';


export class SearchResults extends React.Component {
    render () {
        return
            <div className="SearchResults">
                <h2>Results</h2>
                <TrackList tracks={this.props.searchResults} 
                 key={track.id} track={this.props.tracks.map(track => {
                     return this.props.track.name, this.props.track.artist, this.props.track.album;
                 })}
                />
             </div>
    }

    newMethod() {
        return this;
    }
}

export default SearchResults;
