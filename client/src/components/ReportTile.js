import React from "react";
import DeleteReport from "./DeleteReport";

const ReportTile = ({ reportDate, reportText, id }) => {

const deleteButton = canBeDeleted ? <DeleteReport reportId={id} handleDelete={handleDelete} /> : ""

return (
  <div>
    <h6>{reportDate}</h6>
    <p>{reportText}</p>
    <div>
      {deleteButton}
    </div>
  </div>
)
}

export default ReportTile      

