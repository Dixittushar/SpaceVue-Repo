import { AgGridReact } from "ag-grid-react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [missions, setMissions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.ag-grid.com/example-assets/space-mission-data.json"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new TypeError("Invalid content type. Expected JSON.");
        }
        const data = await response.json();
        setMissions(data);
      } catch (error) {
        console.log("Error fetching mission data", error);
      }
    };
    fetchData();
  }, []);

  const successfulMissionsCount = missions.filter(
    (mission) => mission.successful
  ).length;
  const unsuccessfulMissionsCount = missions.length - successfulMissionsCount;
  const pieChartData = [
    { name: "Successful", value: successfulMissionsCount },
    { name: "Unsuccessful", value: unsuccessfulMissionsCount },
  ];

  const barChartData = [
    { name: "Successful", value: successfulMissionsCount, color: "#00C49F" },
    {
      name: "Unsuccessful",
      value: unsuccessfulMissionsCount,
      color: "#FF8042",
    },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h2>SpaceVue</h2>

      <div
        className="ag-theme-alpine"
        style={{ height: "300px", width: "100%" }}
      >
        <AgGridReact
          columnDefs={[
            { headerName: "Mission", field: "mission" },
            { headerName: "Company", field: "company" },
            { headerName: "Location", field: "location" },
            { headerName: "Date", field: "date" },
            { headerName: "Time", field: "time" },
            { headerName: "Rocket", field: "rocket" },
            {
              headerName: "Price",
              field: "price",
              valueFormatter: (params) => `$${params.value.toLocaleString()}`,
            },
            {
              headerName: "Successful",
              field: "successful",
              cellRenderer: "agAnimateShowChangeCellRenderer",
            },
          ]}
          defaultColDef={{
            sortable: true,
            resizable: true,
          }}
          animateRows={true}
          rowData={missions}
        />
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ flex: 1, margin: "20px" }}>
          <h3>Pie Chart: Missions Success Rate</h3>
          <PieChart width={400} height={200}>
            <Pie
              data={pieChartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
            >
              <Cell key="successful" fill="#00C49F" />
              <Cell key="unsuccessful" fill="#FF8042" />
            </Pie>
            <Legend />
          </PieChart>
        </div>

        <div style={{ flex: 1, margin: "20px" }}>
          <h3>Bar Chart: Missions Success Rate</h3>
          <BarChart width={400} height={200} data={barChartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value">
              {barChartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
