import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { StyledGraph } from "./Graph.styled";


const Graph = ({data}) => {
  return (
    <StyledGraph>
      <div className="graphchart">
        <LineChart
          width={1500}
          height={500}
          data={data}
          margin={{
            top: 10,
            right: 20,
            left: 50,
            bottom: 5,
          }}
        >
          <XAxis value  />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Line
            type="monotone"
            dataKey="Purchased"
            stroke="#1ab394"
            activeDot={{ r: 7 }}
            background={{ fill: "#eee" }}
          />
          <Line
            type="monotone"
            dataKey="Remaining"
            stroke="#0d3c5c"
            activeDot={{ r: 7 }}
            background={{ fill: "#eee" }}
          />
          <Line
            type="monotone"
            dataKey="Used"
            stroke="#a90894"
            activeDot={{ r: 7 }}
            background={{ fill: "red" }}
          />
        </LineChart>
      </div>
    </StyledGraph>
  );
}

export default Graph;