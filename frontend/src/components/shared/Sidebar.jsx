import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Megaphone,
  FileText,
  ClipboardList,
  Users,
  Calendar,
  User,
  LogOut as LogOutIcon,
  Menu,
  ChevronLeft,
} from "lucide-react";
import Logout from "../../pages/Logout";
import { motion } from "framer-motion";

// Navigation items array
const navItems = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { name: "Announcements", icon: Megaphone, path: "/announcements" },
  { name: "Report Issue", icon: FileText, path: "/report-issue" },
  { name: "My Reports", icon: ClipboardList, path: "/my-reports" },
  { name: "Community Issues", icon: Users, path: "/community-issues" },
  { name: "Events", icon: Calendar, path: "/events" },
  { name: "Profile", icon: User, path: "/profile" },
];

const Sidebar = ({ sidebarOpen, toggleSidebar }) => {
  const location = useLocation();

  const handleLogoClick = () => {
    window.location.reload();
  };

  return (
    <aside
      className={`${
        sidebarOpen ? "w-64" : "w-20"
      } bg-white dark:bg-gray-700 shadow-lg transition-all duration-300 ease-in-out overflow-hidden flex flex-col fixed h-full z-10`}
    >
      {/* Sidebar Header with Enhanced Logo */}
      <div className="p-4 flex items-center justify-between">
        {sidebarOpen ? (
          <div
            className="flex items-center cursor-pointer"
            onClick={handleLogoClick}
          >
            <img
              src="/RSMS-logo.png"
              alt="RSMS Logo"
              className="h-12 w-auto mr-3"
            />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              RSMS
            </h2>
          </div>
        ) : (
          <button
            onClick={toggleSidebar}
            className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
          >
            <Menu size={28} />
          </button>
        )}
        {sidebarOpen && (
          <button
            onClick={toggleSidebar}
            className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
          >
            <ChevronLeft size={28} />
          </button>
        )}
      </div>

      {/* Sidebar Navigation with Hover Effects */}
      <nav className="flex-1 px-2 space-y-1">
        {navItems.map((item) => (
          <motion.div
            key={item.name}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to={item.path}
              className={`flex items-center p-3 rounded-lg text-gray-700 dark:text-gray-200 hover:text-white hover:bg-blue-600 transition-all duration-200 ease-in-out ${
                location.pathname === item.path
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 dark:bg-gray-700"
              }`}
            >
              <item.icon size={26} className="mr-4" />
              {sidebarOpen && <span className="font-medium">{item.name}</span>}
            </Link>
          </motion.div>
        ))}
      </nav>

      {/* Sidebar Footer with Separator */}
      <div className="mt-auto p-4 border-t border-gray-200 dark:border-gray-600">
        <Logout>
          {(handleLogout) => (
            <button
              onClick={handleLogout}
              className="flex items-center text-red-500 hover:text-red-700 w-full"
            >
              <LogOutIcon
                size={24}
                className={sidebarOpen ? "mr-4" : "mx-auto"}
              />
              {sidebarOpen && <span>Logout</span>}
            </button>
          )}
        </Logout>
      </div>
    </aside>
  );
};

export default Sidebar;
