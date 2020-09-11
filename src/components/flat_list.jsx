import React, { Component } from 'react';
import Flat from './flat';

class Flatlist extends Component {
  renderList = (props) => {
    return this.props.flats.flats.map((flat) => {
      return (
        <Flat
          flat={flat}
          key={flat.lat}
        />
      );
    });
  }

  render() {
    return (
      this.renderList()
    );
  }
}

export default Flatlist;
