// // Mobile view navigation
// import { Link, useLocation } from "react-router-dom";
// import {
//   LayoutDashboard,
//   Megaphone,
//   FileText,
//   ClipboardList,
//   Users,
//   Calendar,
//   User,
// } from "lucide-react";

// const navItems = [
//   { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
//   { name: "Announcements", icon: Megaphone, path: "/announcements" },
//   { name: "Report Issue", icon: FileText, path: "/report-issue" },
//   { name: "My Reports", icon: ClipboardList, path: "/my-reports" },
//   { name: "Community Issues", icon: Users, path: "/community-issues" },
//   { name: "Events", icon: Calendar, path: "/events" },
//   { name: "Profile", icon: User, path: "/profile" },
// ];

// const MobileNav = () => {
//   const location = useLocation();

//   return (
//     <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-md">
//       <div className="flex justify-around items-center p-2">
//         {navItems.map((item) => (
//           <Link
//             key={item.name}
//             to={item.path}
//             className={`flex flex-col items-center p-2 ${
//               location.pathname === item.path
//                 ? "text-blue-600 dark:text-blue-400"
//                 : "text-gray-700 dark:text-gray-300"
//             }`}
//           >
//             <item.icon size={20} />
//             <span className="text-xs mt-1">{item.name}</span>
//           </Link>
//         ))}
//       </div>
//     </nav>
//   );
// };

// export default MobileNav;

import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Megaphone,
  FileText,
  ClipboardList,
  Users,
  Calendar,
  User,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { name: "Announcements", icon: Megaphone, path: "/announcements" },
  { name: "Report Issue", icon: FileText, path: "/report-issue" },
  { name: "My Reports", icon: ClipboardList, path: "/my-reports" },
  { name: "Community Issues", icon: Users, path: "/community-issues" },
  { name: "Events", icon: Calendar, path: "/events" },
  { name: "Profile", icon: User, path: "/profile" },
];

const MobileNav = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-md">
      <div className="flex justify-around items-center p-2 space-x-4 overflow-x-auto">
        {navItems.slice(0, 4).map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex flex-col items-center p-2 ${
              location.pathname === item.path
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-700 dark:text-gray-300"
            }`}
          >
            <item.icon size={20} />
            <span className="text-xs mt-1">{item.name}</span>
          </Link>
        ))}
        {/* Scroller for additional apps */}
        <div className="flex justify-around items-center overflow-x-auto space-x-4 p-2">
          {navItems.slice(4).map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex flex-col items-center p-2 ${
                location.pathname === item.path
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              <item.icon size={20} />
              <span className="text-xs mt-1">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
