import React from "react";
import Wrapper from '../wrapper/wrapper';
import './Home.scss'


export default function Home() {
  return (
    <div className="home">
      <div className="columns">
        <div className="column">
          <h1 className="title is-size-1">Risikogebiet oder nicht?</h1>
          <h2 className="subtitle is-size-3">Einfach PLZ eingeben und schnell erfahren</h2>
          <Wrapper />

          <div className="has-text-weight-light is-size-6 mt-6">
            <p>PLZ-Mapping mit Hilfe von © OpenStreetMap contributors, <a href="www.openstreetmap.org/copyright">Lizenz</a></p>
            <p>Corona-Daten von Robert Koch-Institut (RKI), dl-de/by-2-0</p>
            <p><a href="https://simon-schraeder.de/contact/">Erstellt in Stuttgart von Simon, Kontakt</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}