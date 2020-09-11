import React, { Component } from 'react';
import flats from '../../data/flats.js';
import FlatList from './flat_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.flats = { flats };
  }

  render() {
    return(
      <div>
        <div className="flat-list">
          <FlatList flats={this.flats} />
        </div>
        <div className="map-container"></div>
      </div>
    );
  }
}

export default App;
