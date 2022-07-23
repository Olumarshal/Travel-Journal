import React from "react";

export default function Travel(props) {
    return (
        <div>
            <img 
            src={`../images/${props.imageUrl}`}
            className="travel__image" alt="" />
            <div>
                <img src="../images/location icon.png" alt="" />
                <span> {props.location} </span>
                <span><a href={props.googleMapsUrl}>View on Google Maps</a></span>
            </div>
            <h2>{props.title}</h2>
            <p>{props.startDate} - {props.endDate}</p>
            <p>{props.description}</p>
            <hr />
        </div>
    )
}