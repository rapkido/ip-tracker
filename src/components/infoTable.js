import React from 'react';
import InfoCell from './infoCell';

class InfoTable extends React.Component {


    render() {
        const {informations} = this.props;

        return(
        <div className="card">
            <div className="container">
                    <InfoCell info_id = "ip_adresss" info_tag = "IP Adress" info_value = {informations.ipAdress} />
                    <hr />
                    <InfoCell info_id = "location" info_tag = "Location" info_value = {informations.location} />
                    <hr />
                    <InfoCell info_id = "timezone" info_tag = "Timezone" info_value = {informations.timezone} />
                    <hr />
                    <InfoCell info_id = "isp" info_tag = "ISP" info_value = {informations.isp} />
                </div>
        </div>
        );
    }
}

export default InfoTable;