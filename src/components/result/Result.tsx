import React from "react";
import { CaseData } from "../../api/rki";
import './Result.scss'

type CaseDataProps = {
    caseData?: CaseData,
    error?: Boolean,
}

function Result(props: CaseDataProps) {
    if(props.error){
        return <div className="notification is-danger mt-5">Leider konnten die Daten nicht gelanden werden.</div>
    }

    if (!props?.caseData?.location) {
        return null;
    }

    return (
        <div className={`mt-5 notification ${props.caseData.riskArea ? "is-danger" : "is-success"}`}>
            <h2><span className="has-text-weight-semibold">{props.caseData.location}</span> ist {props.caseData.riskArea ? "" : "kein"} Risikogebiet. </h2>
            <p> <span className="has-text-weight-semibold">{props.caseData.cases}</span> Neuinfektionen pro 100k in den letzten 7 Tagen</p>
            <p>Datenstand: {props.caseData.last_update}</p>
        </div>
    );
}

export default Result;