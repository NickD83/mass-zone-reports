import React, { useState } from "react";
import isValid from "../services/isValid.js"

const ZoneReportForm = ({ postReport }) => {
  const [newReport, setNewReport] = useState({
    reportDate: "",
    reportText: "",
  });

  const handleChange = (event) => {
    setNewReport({
      ...newReport,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postReport(newReport);
    if (isValid(newReport)) {
      clearForm();
    }
  };

  const clearForm = () => {
    setNewReport({
      reportDate: "",
      reportText: "",
    });
  };



  return (
    <div>
      <h4>Submit a Report</h4>
      <form onSubmit={handleSubmit}>
      <label htmlFor="reportDate">
        Date:
        <input
          type="text"
          name="reportDate"
          placeholder="YYYY-MM-DD"
          value={newReport.reportDate}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="reportText">
        <textarea
          id="reportText"
          name="reportText"
          rows="5"
          cols="33"
          value={newReport.reportText}
          onChange={handleChange}>
        </textarea>
      </label>

      <input type="submit" value="Submit" className="button-cursor"/>
      </form>
    </div>
  )

}

export default ZoneReportForm;