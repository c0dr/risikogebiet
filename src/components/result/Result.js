import React from "react";
import './Risk.css';

function Result(props) {
    if (!props.location) {
        return null;
    }

    return (
        <div className={`mt-5 ${props.riskArea ? "has-text-danger" : "has-text-success"}`}>
            <h2><span className="has-text-weight-semibold">{props.location}</span> ist {props.riskArea ? "" : "kein"} Risikogebiet. </h2>
            <p> <span className="has-text-weight-semibold">{props.cases}</span> Neuinfektionen pro 100k in den letzten 7 Tagen</p>
            <p>Datenstand: {props.last_update}</p>
        </div>
    );
}

export default Result;