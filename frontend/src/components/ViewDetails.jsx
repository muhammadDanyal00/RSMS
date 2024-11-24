// ViewDetails.jsx
import React, { useEffect, useState } from "react";
import api from "../api/api";

const ViewDetails = ({ isOpen, onClose, issueId }) => {
  const [issueDetails, setIssueDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchIssueDetails = async () => {
      if (!issueId) return;

      try {
        setLoading(true);
        const response = await api.get(`/${issueId}`);
        setIssueDetails(response.data);
        setError("");
      } catch (err) {
        setError("Failed to fetch issue details. Please try again later.");
        console.error("Error fetching issue details:", err);
      } finally {
        setLoading(false);
      }
    };

    if (isOpen) {
      fetchIssueDetails();
    }
  }, [issueId, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-50 w-full max-w-2xl bg-white dark:bg-gray-800 rounded-lg shadow-xl mx-4">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Issue Details
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {loading && (
            <div className="text-center text-gray-600 dark:text-gray-300">
              Loading details...
            </div>
          )}

          {error && (
            <div className="text-center text-red-500 dark:text-red-400">
              {error}
            </div>
          )}

          {!loading && !error && issueDetails && (
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  Title
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-300">
                  {issueDetails.title}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  Category
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-300">
                  {issueDetails.category}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  Status
                </h3>
                <span
                  className={`mt-1 inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                    issueDetails.status === "Resolved"
                      ? "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
                      : issueDetails.status === "In Progress"
                      ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100"
                      : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                  }`}
                >
                  {issueDetails.status}
                </span>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  Description
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-300">
                  {issueDetails.description}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  Location
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-300">
                  {issueDetails.location}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  Created At
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-300">
                  {new Date(issueDetails.createdAt).toLocaleString()}
                </p>
              </div>

              {issueDetails.updatedAt && (
                <div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    Last Updated
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">
                    {new Date(issueDetails.updatedAt).toLocaleString()}
                  </p>
                </div>
              )}

              {/* <div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  Images
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-300">
                  {issueDetails.images}
                </p>
              </div> */}

              {/* Add any additional fields you want to display */}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-end p-4 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
