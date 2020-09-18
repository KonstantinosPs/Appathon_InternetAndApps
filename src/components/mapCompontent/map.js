import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker,InfoWindow } from 'google-maps-react';
import Geocode from "react-geocode";

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
        lat:[],
        lng:[], 
        isLoaded:false,
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
    }

}
onMarkerClick = (props, marker, e) =>
this.setState({
  selectedPlace: props,
  activeMarker: marker,
  showingInfoWindow: true
});

Geocoding(){
  const locationcountries = this.props.countries;
  var {lat,lng} =this.state
  locationcountries.map((value,index)=>{

  Geocode.setApiKey("AIzaSyCBbic6PCUgvwek845odRkbI5ezAXL6nMc");
  Geocode.setLanguage("en");
  Geocode.fromAddress(value)  
    .then(
    response => {
        lat[index]=response.results[0].geometry.location.lat
        lng[index]=response.results[0].geometry.location.lng
        this.setState({
          lat:lat,
          lng:lng,
          isLoaded: true
        })
    },
    error => {
      console.error(error);
    }
    )


  })
  

}
  
  render() {
    const locationcountries = this.props.countries;
    const nrofstudies = this.props.studies;
    var {isLoaded} = this.state;
    if (!isLoaded){
    this.Geocoding();
    }
    const {lat,lng}= this.state;
    return (
      <div>
              
      <Map
        google={this.props.google}
        zoom={2}
        style={mapStyles}
        initialCenter={
          {
            lat: 0,
            lng: 0
          }
        }
    >
      {locationcountries.map((value,index)=>(
        
      <Marker 
      id={index}
      key={index}
      position={{ lat:lat[index], lng:lng[index] }}
      onClick={this.onMarkerClick}
      name={value}
      number={nrofstudies[index]}
    >
          
    
    </Marker>
    

      ))} 
     <InfoWindow
             marker={this.state.activeMarker}
             visible={this.state.showingInfoWindow}>
              <div>
                
                <h2>{this.state.selectedPlace.name}</h2>          
                <h5>In this country made {this.state.selectedPlace.number} {this.state.selectedPlace.number === 1 ?"study":"studies"} !</h5>
              </div>
          </InfoWindow>

    </Map>
    
    </div>
      );
    }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCBbic6PCUgvwek845odRkbI5ezAXL6nMc"
})(MapContainer);
