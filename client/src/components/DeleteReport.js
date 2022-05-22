import React from "react";

const DeleteReport = props => {

  const deleteReport = async () => {
    try {
      const response = await fetch(`/api/v1/reports/${props.reportId}`, {
        method: "DELETE",
        headers: new Headers({
          "Content-Type": "application/json"
        })
      })
      if (!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`)
      }
      props.handleDelete(props.reportId)
    } catch (error) {

    }
  }

  return (
    <div>
      <button onClick={deleteReport} className="button">Delete Report</button>
    </div>
  )
}

export default DeleteReport;