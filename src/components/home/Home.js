import React, { useState, useEffect, useRef } from "react";
import Wrapper from '../wrapper/wrapper';
import './Home.css'


function Home() {

  
  return (
    <div className="home">
      <div className="columns">
        <div className="column">
          <h1 className="title">Jetzt schnell herausfinden, ob ein Ort im Risikogebiet liegt</h1>
          <h2 className="subtitle">Dank OSM und den aktuellen Daten vom Robert-Koch-Institut</h2>
          <Wrapper />
        </div>
      </div>
    </div>
  );
}

export default Home;
