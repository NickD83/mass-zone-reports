import React from "react";
import { Chart } from "react-google-charts";


const Timeline = () => {
  const columns = [
    { type: "string", id: "Season" },
    { type: "date", id: "Start" },
    { type: "date", id: "End" },
  ];

  const rows = [
    ["Archery(Zones 10-14)", new Date(2022, 9, 3), new Date(2022, 10, 26)],
    ["Archery(Zones 1-9)", new Date(2022, 9, 17), new Date(2022, 10, 26)],
    ["Shotgun", new Date(2022, 10, 28), new Date(2022, 11, 10)],
    ["Primitive Firearms", new Date(2022, 11, 12), new Date(2022, 11, 31)],
  ];

  const data = [columns, ...rows];

  return (
    <div>
    <Chart 
    chartType="Timeline" 
    data={data} 
    width="100%" 
    height="400px"
    title="2022 MA Deer Season">

    </Chart>
    </div>
  )

}

export default Timeline