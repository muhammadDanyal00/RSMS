import { useState } from "react";

// dummy data
const initialAnnouncements = [
  {
    id: 1,
    date: "Feb 19 2025",
    title: "Society Meeting",
    description:
      "Society Meeting is held on 1st March 2022 at 7:00 pm in the Society Clubhouse",
  },
  {
    id: 2,
    date: "Feb 19 2025",
    title: "Increase in Maintenance Bill",
    description:
      "This Month's Maintenance Bill has been increased by 4000 Rs as decided in the last society meeting",
  },
  {
    id: 3,
    date: "Feb 19 2025",
    title: "Committee Election",
    description: "Annual Committee election on 3rd March",
  },
  {
    id: 4,
    date: "Feb 10 2025",
    title: "Swimming Pool Closed",
    description: "Swimming pool will be closed on 11th Feb",
  },
];

export default function Announcements() {
  const [announcements] = useState(initialAnnouncements);

  // Group announcements by date
  const groupedAnnouncements = announcements.reduce((groups, announcement) => {
    if (!groups[announcement.date]) {
      groups[announcement.date] = [];
    }
    groups[announcement.date].push(announcement);
    return groups;
  }, {});

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 dark:text-white">
        Announcements by Society Admin
      </h1>

      <div className="space-y-6">
        {Object.entries(groupedAnnouncements).map(
          ([date, dateAnnouncements]) => (
            <div key={date}>
              <h2 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
                {date}
              </h2>
              <div className="space-y-4">
                {dateAnnouncements.map((announcement) => (
                  <div
                    key={announcement.id}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 transition-transform transform hover:scale-105"
                  >
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      {announcement.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {announcement.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
