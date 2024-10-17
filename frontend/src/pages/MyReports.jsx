import React from "react";

const reports = [
  {
    id: 1,
    title: "Broken Streetlight",
    category: "Streetlight",
    status: "Pending",
    date: "2023-06-01",
  },
  {
    id: 2,
    title: "Pothole on Main Street",
    category: "Road",
    status: "In Progress",
    date: "2023-05-28",
  },
  {
    id: 3,
    title: "Overflowing Garbage Bin",
    category: "Garbage",
    status: "Resolved",
    date: "2023-05-25",
  },
  {
    id: 4,
    title: "Water Leakage",
    category: "Water Supply",
    status: "Pending",
    date: "2023-06-02",
  },
  {
    id: 5,
    title: "Fallen Tree Branch",
    category: "Other",
    status: "Resolved",
    date: "2023-05-30",
  },
];

export default function MyReports() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center dark:text-white">
        My Reports
      </h1>
      <div className="overflow-x-auto md:hidden">
        {/* Mobile Card Layout */}
        {reports.map((report) => (
          <div
            key={report.id}
            className="mb-4 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm rounded-lg"
          >
            <h2 className="text-lg font-semibold dark:text-white">
              {report.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              <strong>Category:</strong> {report.category}
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              <strong>Status:</strong>{" "}
              <span
                className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
                  report.status === "Resolved"
                    ? "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
                    : report.status === "In Progress"
                    ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100"
                    : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                }`}
              >
                {report.status}
              </span>
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              <strong>Date:</strong> {report.date}
            </p>
            <button className="mt-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-700 dark:hover:bg-blue-600">
              View Details
            </button>
          </div>
        ))}
      </div>

      <div className="hidden md:block">
        {/* Desktop Table Layout */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm rounded-lg">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr
                  key={report.id}
                  className="border-t border-gray-200 dark:border-gray-700"
                >
                  <td className="px-6 py-4 whitespace-nowrap dark:text-gray-300">
                    {report.title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap dark:text-gray-300">
                    {report.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                        report.status === "Resolved"
                          ? "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
                          : report.status === "In Progress"
                          ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100"
                          : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                      }`}
                    >
                      {report.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap dark:text-gray-300">
                    {report.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-700 dark:hover:bg-blue-600">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
