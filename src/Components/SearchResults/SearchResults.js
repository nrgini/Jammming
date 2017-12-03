import React from 'react';
import './SearchResults.css';
import './Components/TrackList/TrackList.js';


export class SearchResults extends React.Component {
    render () {
        return
            <div className="SearchResults">
                <h2>Results</h2>
                <TrackList tracks={this.props.searchResults} 
                 key={track.id} />
                />
             </div>
    }

    newMethod() {
        return this;
    }
}

export default SearchResults;
