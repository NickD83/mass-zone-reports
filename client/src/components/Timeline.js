import React from "react";
import { Chart } from "react-google-charts";


const Timeline = () => {
  const columns = [
    { type: "string", id: "Term"},
    { type: "string", id: "Season" },
    { type: "date", id: "Start" },
    { type: "date", id: "End" },
  ];

  const rows = [
    ["1", "Archery(Zones 10-14)", new Date(2022, 9, 3), new Date(2022, 10, 26)],
    ["2", "Archery(Zones 1-9", new Date(2022, 9, 17), new Date(2022, 10, 26)],
    ["3", "Shotgun", new Date(2022, 10, 28), new Date(2022, 11, 10)],
    ["4", "Primitive Firearms", new Date(2022, 11, 12), new Date(2022, 11, 31)],
  ];

  const data = [columns, ...rows];

  return (
    <Chart chartType="Timeline" data={data} width="300%" height="400px"></Chart>
  )

}

export default Timeline