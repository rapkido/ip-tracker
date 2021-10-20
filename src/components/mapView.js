import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import { Icon } from "leaflet";



const skater = new Icon({
  iconUrl: "/assets/images/icon-location.svg"
});

class MapView extends Component {
    constructor(props) {
        super(props);
        this.state = {
          lat: 30,
          lng: 30,
          map: null
        };
      }
    
    componentWillReceiveProps(nextProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.lat !== this.state.lat && nextProps.lat !== "") {
        this.setState({
            lat: nextProps.lat,
            lng: nextProps.lng
        });
        this.changeView([nextProps.lat, nextProps.lng]);
    }
    }
    changeView(pos) {
        const {map} = this.state;
        map.flyTo(pos, 16, {duration: 2});
    }

    

    render(){

        return (
            <div className="mapBox">
              <MapContainer id="mapid" center={[this.state.lat, this.state.lng]} whenCreated={map => this.setState({ map })} zoom={13}>
              <Marker position={[this.state.lat, this.state.lng]} icon={skater} />
                <TileLayer
                  url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicmFwa2lkbyIsImEiOiJja3RrM2NvOHowMzU1Mm5tanRqd2Znejk5In0.FFjGziIQknOOyLIxm-lLDw`}
                  attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>"
                />
              </MapContainer>
            </div>
          )
    }
  }
  
  export default MapView;

