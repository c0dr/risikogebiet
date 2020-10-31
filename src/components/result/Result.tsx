import React from "react";
import { CaseData } from "../../api/rki";


type CaseDataProps = {
    caseData?: CaseData
}

function Result(props: CaseDataProps) {
    if (!props?.caseData?.location) {
        return null;
    }

    return (
        <div className={`mt-5 ${props.caseData.riskArea ? "has-text-danger" : "has-text-success"}`}>
            <h2><span className="has-text-weight-semibold">{props.caseData.location}</span> ist {props.caseData.riskArea ? "" : "kein"} Risikogebiet. </h2>
            <p> <span className="has-text-weight-semibold">{props.caseData.cases}</span> Neuinfektionen pro 100k in den letzten 7 Tagen</p>
            <p>Datenstand: {props.caseData.last_update}</p>
        </div>
    );
}

export default Result;