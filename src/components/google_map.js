import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

class MyMapComponent extends Component{
  render(){
    const GoogleMapExample = withGoogleMap(props => (
        <GoogleMap
          defaultCenter = { { lat: this.props.lat, lng:this.props.lon } }
          defaultZoom = { 13 }
        >
        {props.isMarkerShown && <Marker position={{ lat: this.props.lat, lng: this.props.lon }} />}
        </GoogleMap>
     ));
    return (
      <div>
        <GoogleMapExample
          containerElement={ <div style={{ height: `150px`, width: '200px' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
    )
  }
}



export default MyMapComponent;
