import React from 'react';
import './track.css.;'

class Track extends React.Component {
    constructor(props) {
        super(props);
        this.addTrack = this.addTrack.bind(this);
    }
    render() {
        return 
        <div className="Track">
            <div className="Track-information">
                <h3>/*<-- track name will go here -->*/</h3>
                <p>/*<-- track artist will go here--> | <!-- track album will go here -->*/</p>
            </div>
            <a className="Track-action">onClick={this.addTrack}</a>
        </div>
    };

    renderAction() {
        return 
            if (this.isRemoval) {
                console.log(<a className="Track-action">-</a>);
            } else {
                console.log(<a className="Track-action">+</a>);
            }
    }
}

export default Track;
