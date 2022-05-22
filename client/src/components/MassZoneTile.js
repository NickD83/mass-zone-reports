import React from "react";
import { Link } from "react-router-dom"


const MassZoneTile = (props) => {
  const { zoneName, id } = props.massZone


  return (
    <div className="index-container tile-box hover-2">
      <Link to={`/zones/${id}`} className="react-link">
      <h5>{zoneName}</h5>
      </Link>
    </div>
  )
} 

export default MassZoneTile