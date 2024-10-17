import React from "react";
import { Link } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Sample data
const data = [
  { name: "Jan", issues: 10 },
  { name: "Feb", issues: 3 },
  { name: "Mar", issues: 2 },
  { name: "Apr", issues: 7 },
  { name: "May", issues: 5 },
  { name: "Jun", issues: 6 },
];

// Custom Card component
const Card = ({ children }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
    {children}
  </div>
);

// Custom CardHeader component
const CardHeader = ({ title, icon }) => (
  <div className="flex flex-row items-center justify-between space-y-0 pb-2">
    <h2 className="text-sm font-medium dark:text-gray-200">{title}</h2>
    {icon}
  </div>
);

// Custom CardContent component
const CardContent = ({ value, text }) => (
  <div>
    <div className="text-2xl font-bold dark:text-white">{value}</div>
    <p className="text-xs text-gray-400 dark:text-gray-500">{text}</p>
  </div>
);

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold dark:text-white">Personal-Dashboard</h1>

      {/* Stats Section */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Total Reports */}
        <Card>
          <CardHeader title="Total Reports Upto today" />
          <CardContent value="127" />
        </Card>

        {/* Resolved Issues */}
        <Card>
          <CardHeader title="Resolved Issues  Upto today" />
          <CardContent value="89" />
        </Card>

        {/* Pending Issues */}
        <Card>
          <CardHeader title="Pending Issues Upto today" />
          <CardContent value="38" />
        </Card>
      </div>

      {/* Monthly Issues Reported Chart */}
      <Card>
        <div>
          <h2 className="text-lg font-bold mb-4 dark:text-white">
            Monthly Issues Reported
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="name" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1F2937",
                  border: "none",
                  borderRadius: "0.5rem",
                  color: "#F3F4F6",
                }}
              />
              <Bar dataKey="issues" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Custom Button */}
      {/* <button>View All Reports</button> */}

      <div className="flex justify-end">
        <Link
          to="/my-reports"
          className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg py-2 px-4 shadow-lg hover:shadow-xl transition-all duration-150"
        >
          View All Reports
        </Link>
      </div>
    </div>
  );
}
