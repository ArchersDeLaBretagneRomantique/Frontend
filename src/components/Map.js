import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

class Map extends Component {
  propTypes: {
    coord: PropTypes.object.isRequired
  }

  componentDidMount(rootNode) {
    const center = new window.google.maps.LatLng(this.props.coord.lat, this.props.coord.lng);

    const mapOptions = {
      zoom: 15,
      center
    };

    const markerOptions = {
      position: center,
      defaultAnimation: 2,
      draggable: false
    };

    const map = new window.google.maps.Map(ReactDOM.findDOMNode(this), mapOptions);

    const marker = new window.google.maps.Marker({...markerOptions, map});
  }

  render() {
    return (
      <div className="map" />
    );
  }
}

export default Map;
