import React from 'react';
import './SearchResults.css';
import Tracklist from './Components/TrackList/TrackList';

class SearchResults extends React.Component {
    render () {
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                <TrackList tracks={this.props.searchResults} 
                 key={track.id} onAdd={this.props.onAdd} />
             </div>
        );
    }
};

export default SearchResults;
