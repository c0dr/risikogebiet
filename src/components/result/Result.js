import React from "react";
import './Risk.css';

function Result(props) {
    if (!props.location) {
        return null;
    }

    return (
        <div className={props.riskArea ? "risk" : "norisk"}>
            <h2>{props.location} ist {props.riskArea ? "" : "kein"} Risikogebiet. </h2>
            <p>Neuinfektionen pro 100k in den letzten 7 Tagen: {props.cases}</p>
            <p>Datenstand: {props.last_update}</p>
        </div>
    );
}

export default Result;