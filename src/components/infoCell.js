import React from 'react';

function InfoCell(props) {


        return(
        <div className="info-block">
            <span className="head-info">{props.info_tag}</span>
            <p className="info-inline" id={props.info_id}>{props.info_value}</p>
        </div>
        );
}

export default InfoCell;