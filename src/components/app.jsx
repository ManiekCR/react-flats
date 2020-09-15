import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import flats from '../../data/flats.js';
import FlatList from './flat_list';
import Marker from './marker';


class App extends Component {
  static defaultProps = {
    center: {
      lat: 48.884211,
      lng: 2.34689
    },
    zoom: 11
  };

  constructor(props) {
    super(props);

    this.state = {
      flats,
      selectedFlat: flats[0]
    };
  }

  render() {
    return (
      <div>
        <div className="flat-list">
          <FlatList flats={this.state.flats} />
        </div>
        <div className="map-container">
          <GoogleMapReact defaultCenter={this.props.center} defaultZoom={this.props.zoom}>
            <Marker />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
