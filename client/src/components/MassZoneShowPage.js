import React, { useState, useEffect } from "react";
import ZoneReportForm from "./ZoneReportForm";
import ErrorList from "./layout/ErrorList";
import translateServerErrors from "../services/translateServerErrors.js";
import ReportTile from "./ReportTile";
import Timeline from "./Timeline"
import ZoneInfoBox from "./ZoneInfoBox";

const MassZoneShowPage = (props) => {
  const [massZone, setMassZone] = useState({ reports: [] });
  const [errors, setErrors] = useState({});
  const { id } = props.match.params;
 

  const handleDelete = (reportId) => {
    const updatedReports = massZone.reports.filter((report) => report.id !== reportId)
    setMassZone({
      ...massZone,
      reports: updatedReports
    });
  }

  const getMassZone = async () => {
    try {
      const response = await fetch(`/api/v1/zones/${id}`);
      if (!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`);
      }
      const body = await response.json();
      setMassZone(body.massZone);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getMassZone();
  }, []);

  const postReport = async (reportFormData) => {
    try {
      const response = await fetch(`/api/v1/zones/${id}/reports`, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(reportFormData),
      })
      if (!response.ok) {
        if (response.status === 422) {
          const body = await response.json();
          const newErrors = translateServerErrors(body.errors);
          return setErrors(newErrors)
        } else {
          const errorMessage = `${response.status} (${response.statusText})`
          const error = new Error(errorMessage)
          throw error;
        }
      } else {
        const { report } = await response.json();
        report.canBeDeleted = true
        const updatedReports = massZone.reports.concat(report);
        setErrors([]);
        setMassZone({ ...massZone, reports: updatedReports });
      }
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }

  }

  const reportTiles = massZone.reports.map((report) => {
    // remove ? ^^
    return <ReportTile key={report.id} {...report} handleDelete={handleDelete} />
  })

  return (
    <>
    <h1> Zone {massZone.zoneName}</h1>
   <ZoneInfoBox />
    <div> 
    <Timeline />
    {reportTiles}
    </div>
    <div className="component-container"> 
      <ErrorList errors={errors} />
      <ZoneReportForm postReport={postReport} />
    </div>
    </>
  )
}

export default MassZoneShowPage
