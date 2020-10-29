import React, { useState, useEffect, useRef } from "react";
import Wrapper from '../wrapper/wrapper';
import './Home.css'


function Home() {

  
  return (
    <div className="home">
      <div className="columns">
        <div className="column">
          <h1 className="title is-size-1">Risikogebiet oder nicht?</h1>
          <h2 className="subtitle is-size-3">Mit den aktuellen Daten vom Robert Koch-Institut</h2>
          <h2 className="subtitle is-size-5">PLZ-Mapping mit Hilfe von © OpenStreetMap contributors, <a href="www.openstreetmap.org/copyright">Lizenz</a></h2>
          <Wrapper />
        </div>
      </div>
    </div>
  );
}

export default Home;
