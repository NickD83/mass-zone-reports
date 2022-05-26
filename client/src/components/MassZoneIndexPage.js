import React, { useState, useEffect } from "react";
import MassZoneTile from "./MassZoneTile";


const MassZoneIndexPage = (props) => {
  const [massZones, setMassZones] = useState([]);

  const getMassZones = async () => {
    try {
      const response = await fetch("/api/v1/zones")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const body = await response.json();
      setMassZones(body.massZones);
    } catch (err) {
      console.error(`Error in fetch: ${err.message}`);
    }
  };

  useEffect(() => {
    getMassZones();
  }, []);

  const massZoneTiles = massZones.map((massZone) => {

    return <MassZoneTile key={massZone.id} massZone={massZone} />;
  });

  return (
    <div className="maZonesImage">
      <div className="hzone-title button-expanded">
        <h2> Massachusettes Wildlife Zones</h2>
        {massZoneTiles}
      </div>
    </div>)
}

export default MassZoneIndexPage