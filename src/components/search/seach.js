import React, { useState, useEffect, useRef } from "react";
import Result from '../result/Result';
import loadRKIData from '../../api/rki';
import loadOSMData from '../../api/osm';

export function SearchForm(props) {

    const [searchterm, setSearchTerm] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.updateSearchTerm(searchterm);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="field has-addons">
                <div className="control">
                    <input
                        type="text"
                        value={searchterm}
                        className="input"
                        autoComplete="postal-code"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="control">
                    <input className="button is-success" type="submit" value="Suchen" />
                </div>
            </div>
        </form>
    );
}