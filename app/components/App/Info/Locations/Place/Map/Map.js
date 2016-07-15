import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'

class Map extends Component {
  static propTypes = {
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }

  componentDidMount() {
    const { lat, lng } = this.props

    const center = {
      lat,
      lng,
    }

    const map = new window.google.maps.Map(ReactDOM.findDOMNode(this), {
      zoom: 15,
      center,
      scrollwheel: false,
    })

    const marker = new window.google.maps.Marker({
      position: center,
      defaultAnimation: 2,
      draggable: false,
      map,
    })
  }

  render() {
    return (
      <div />
    )
  }
}

export default Map
