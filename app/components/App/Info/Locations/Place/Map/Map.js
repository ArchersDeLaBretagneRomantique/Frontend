import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'

class Map extends Component {
  static propTypes = {
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }

  componentDidMount() {
    const { lat, lng } = this.props

    const center = new window.google.maps.LatLng(lat, lng)

    const mapOptions = {
      zoom: 15,
      center,
    }

    const markerOptions = {
      position: center,
      defaultAnimation: 2,
      draggable: false,
    }

    const map = new window.google.maps.Map(ReactDOM.findDOMNode(this), mapOptions)

    const marker = new window.google.maps.Marker({
      ...markerOptions,
      map,
    })
  }

  render() {
    return (
      <div className="map" />
    )
  }
}

export default Map
