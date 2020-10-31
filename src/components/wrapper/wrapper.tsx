import React, { useState, useEffect } from "react";
import '../search/seach';
import { SearchForm } from '../search/seach';
import  Result from '../result/Result';
import {loadOSMData, Coordinates }  from '../../api/osm';
import {loadRKIData, CaseData } from '../../api/rki';

function Wrapper() {

  const [searchPostalCode, setSearchPostalCode] = useState("");
  const [resultCoords, setResultCoords] = useState<Coordinates | undefined>(undefined);
  const [rkiData, setRKIData] = useState<CaseData>({location: "", riskArea: false, cases: 0, last_update: ""});
  const [error, setError] = useState<boolean>(false);


  useEffect(() => {
      async function fetchOSMLocation() {
          if(!searchPostalCode || searchPostalCode.length !== 5) {
              return;
          }
          try {
              await loadOSMData(searchPostalCode).then(setResultCoords);
              setError(false);
          } catch {
              setError(true);
          }
      }
      fetchOSMLocation();
  }, [searchPostalCode]);

  useEffect(() => {
      async function fetchRKIData() {
        if(!resultCoords || !resultCoords.lat || !resultCoords.lon) {
            return;
        }

          try {
              loadRKIData(resultCoords.lat, resultCoords.lon).then(setRKIData);
          } catch {
            setError(false);
          }
      }
      fetchRKIData();
  }, [resultCoords]);

  
  return (
    <div className="wrapper">
          <SearchForm updateSearchTerm={setSearchPostalCode} />
          <Result caseData={rkiData} error={error}></Result>
    </div>
  );
}

export default Wrapper;
