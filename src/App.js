import React from 'react';
import InfoTable from './components/infoTable';
import Search from './components/search';
import MapView from './components/mapView';

class App extends React.Component {

        state = {
            ipAdress : "",
            location : "",
            timezone : "",
            isp : "",
            lat : "",
            lng : ""
        }
    
    user_ip() {
        fetch("https://api.db-ip.com/v2/free/self").then((resp) => resp.json()).then(data => {
            
            this.setState({
                ipAdress : data.ipAddress,
            });   
            this.look_info(data.ipAddress);
    })}

    look_info(ip_adress) {

    const apiUrl = "https://geo.ipify.org/api/v1?apiKey=at_gufK6uuAiURke0IJ56vC2dUt74jfA&ipAddress=";
    if (ip_adress.length >= 8 && ip_adress.split(".").length === 4){
        fetch(apiUrl+ip_adress).then((resp) => resp.json()).then(data => {
            if (data.location.postalcode === undefined) {
                data.location.postalcode = '';
            }
            this.setState({
                ipAdress: ip_adress,
                location : data.location.region + "," + data.location.country + " " + data.location.city + " " + data.location.postalcode,
                timezone : "UTC " + data.location.timezone,
                isp : data.isp,
                lat : data.location.lat,
                lng : data.location.lng
            });

    })

    }
}
    search_ip(ip_adress) {
        this.setState({ipAdress: ip_adress});
        this.look_info(ip_adress);
    }
    componentDidMount() {
       this.user_ip();

      }
    
    render() {
        
        return(
            <div className="app">
                <div className="head">
                <>
                <h2>IP Address Tracker</h2>
                    <Search seek = {this.search_ip.bind(this)} />
                    <InfoTable informations = {this.state} />
                </>
                </div>
                <div className="bottom">
                    <MapView lat = {this.state.lat} lng = {this.state.lng}/>
                </div>
                
            </div>
            

        )
    }
}

export default App;