import React, { useState, useEffect, useRef } from "react";
import '../search/seach';
import { SearchForm } from '../search/seach';
import  Result from '../result/Result';
import loadOSMData from '../../api/osm';
import loadRKIData from '../../api/rki';

function Wrapper() {

  const [searchPostalCode, setSearchPostalCode] = useState("");
  const [resultCoords, setResultCoords] = useState("");
  const [rkiData, setRKIData] = useState("");

  useEffect(() => {
      async function fetchOSMLocation() {
          if(!searchPostalCode || searchPostalCode.length !== 5) {
              return;
          }
          try {
              await loadOSMData(searchPostalCode).then(setResultCoords);
          } catch {
              console.error("could not load data");
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
              console.error("could not load data");
          }
      }
      fetchRKIData();
  }, [resultCoords]);

  
  return (
    <div className="wrapper">
          <SearchForm updateSearchTerm={setSearchPostalCode} />
          <Result {...rkiData}></Result>
    </div>
  );
}

export default Wrapper;
