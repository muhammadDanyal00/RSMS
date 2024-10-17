import { useState } from "react";

const events = [
  { date: "13 Jan", name: "Lohri", time: "3:00 pm" },
  { date: "14 Jan", name: "Makar Sankranti", time: "10:00 am" },
  { date: "26 Jan", name: "Republic Day", time: "9:00 am" },
  { date: "1 Mar", name: "Maha Shivratri", time: "3:00 pm" },
  { date: "17 Mar", name: "Holika Dahana", time: "9:00 pm" },
  { date: "18 Mar", name: "Holi", time: "10:00 am" },
];

export default function Events() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 dark:text-white">
        Society-Events
      </h1>
      <input
        type="text"
        placeholder="Search events..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 p-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-700 dark:text-white"
      />

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold mb-4 dark:text-white">
          Upcoming Events
        </h2>
        {filteredEvents.map((event, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg shadow-md ${
              index % 2 === 0
                ? "bg-blue-50 dark:bg-blue-900"
                : "bg-white dark:bg-gray-800"
            }`}
          >
            <div className="flex items-center">
              <div className="flex-shrink-0 w-16 text-center">
                <div className="text-2xl font-bold dark:text-white">
                  {event.date.split(" ")[0]}
                </div>
                <div className="text-sm dark:text-gray-300">
                  {event.date.split(" ")[1]}
                </div>
              </div>
              <div className="ml-4 flex-grow">
                <h3 className="text-lg font-semibold dark:text-white">
                  {event.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {event.time}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
