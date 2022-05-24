import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

const MethodDataVis = (props) => {
  const [chartData, setChartData] = useState({});


  const getMethodData = async () => {
    try {
      const response = await fetch("/api/v1/methods")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const body = await response.json();
      setChartData(body.methodBody)
    } catch (err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  };

  useEffect(() => {
    getMethodData();
  }, []);

  const season = body.methods.map((x) => x.method)
  const start = body.methods.map((x) => x.startDate)
  const end = body.methods.map((x) => x.endDate)

  const columns = [
    { type: "string", id: "Season" },
    { type: "date", id: "Start" },
    { type: "date", id: "End" },
  ];

  const rows = [
    [season, start, end]
  ];

  const data = [
    [columns, ...rows]
  ];

  const timeline = () => {
  return <Chart chartType="TimeLine" data={data} width="100%" height="400px"></Chart> 
  }
}

export default MethodDataVis;
