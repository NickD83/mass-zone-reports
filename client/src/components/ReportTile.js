import React from "react";
import DeleteReport from "./DeleteReport";

const ReportTile = ({ reportDate, reportText, id }) => {

//const deleteButton = canBeDeleted ? <DeleteReport reportId={id} handleDelete={handleDelete} /> : ""

return (
  <div className="report-box">
    <h6 className="date">{reportDate}</h6>
    <h6>{reportText}</h6>
  </div>
)
}

export default ReportTile      

