import { useState } from "react";
import { MessageCircle } from "lucide-react"; // Import the comment icon from lucide-react

// dummy data
const issues = [
  {
    id: 1,
    title: "Broken Streetlight on Oak Avenue",
    category: "Streetlight",
    status: "Pending",
    date: "2023-06-01",
    comments: 5,
  },
  {
    id: 2,
    title: "Large Pothole near Community Center",
    category: "Road",
    status: "In Progress",
    date: "2023-05-28",
    comments: 12,
  },
  {
    id: 3,
    title: "Overflowing Garbage Bin at Park Entrance",
    category: "Garbage",
    status: "Resolved",
    date: "2023-05-25",
    comments: 8,
  },
  {
    id: 4,
    title: "Water Supply Interruption on Maple Street",
    category: "Water Supply",
    status: "Pending",
    date: "2023-06-02",
    comments: 15,
  },
  {
    id: 5,
    title: "Fallen Tree Branch Blocking Sidewalk",
    category: "Other",
    status: "Resolved",
    date: "2023-05-30",
    comments: 3,
  },
];

export default function CommunityIssues() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filteredIssues = issues.filter(
    (issue) =>
      (filter === "all" || issue.status.toLowerCase() === filter) &&
      issue.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center dark:text-white">
        Community Issues
      </h1>
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search issues..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-64 p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
        />

        {/* Filter Select */}
        <div className="relative w-full md:w-40">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          >
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="in progress">In Progress</option>
            <option value="resolved">Resolved</option>
          </select>
        </div>
      </div>

      {/* Issues Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredIssues.map((issue) => (
          <div
            key={issue.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 transition-shadow hover:shadow-lg"
          >
            <div>
              <h3 className="text-lg font-semibold dark:text-white">
                {issue.title}
              </h3>
            </div>
            <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              {issue.category}
            </div>
            <div className="mt-2">
              <span
                className={`px-2 py-1 rounded-full text-sm font-medium ${
                  issue.status === "Resolved"
                    ? "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
                    : issue.status === "In Progress"
                    ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100"
                    : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                }`}
              >
                {issue.status}
              </span>
            </div>
            <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Reported on: {issue.date}
            </div>
            <div className="flex justify-between items-center mt-4">
              <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-sm">
                View Details
              </button>
              <div className="flex items-center">
                <button className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">
                  <MessageCircle className="w-4 h-4 mr-1" />
                  <span className="text-sm">{issue.comments} Comments</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
