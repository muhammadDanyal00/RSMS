// import { useState, useEffect } from "react";
// import { Link, useLocation, Outlet } from "react-router-dom";
// import {
//   LayoutDashboard,
//   Megaphone,
//   FileText,
//   ClipboardList,
//   Users,
//   Calendar,
//   LogOut as LogOutIcon,
//   Menu,
//   ChevronLeft,
//   Sun,
//   Moon,
//   User,
// } from "lucide-react";
// import Logout from "../pages/Logout";
// import { useDarkMode } from "../contexts/DarkModeContext";

// const sidebarItems = [
//   { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
//   { name: "Announcements", icon: Megaphone, path: "/announcements" },
//   { name: "Report Issue", icon: FileText, path: "/report-issue" },
//   { name: "My Reports", icon: ClipboardList, path: "/my-reports" },
//   { name: "Community Issues", icon: Users, path: "/community-issues" },
//   { name: "Events", icon: Calendar, path: "/events" },
//   { name: "Profile", icon: User, path: "/profile" },
// ];

// function Layout() {
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [isMobile, setIsMobile] = useState(false);
//   const location = useLocation();
//   const { isDarkMode, toggleDarkMode } = useDarkMode();

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//       if (window.innerWidth < 768) {
//         setSidebarOpen(false);
//       } else {
//         setSidebarOpen(true);
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     handleResize();

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

//   const getCurrentPageTitle = () => {
//     const currentItem = sidebarItems.find(
//       (item) => item.path === location.pathname
//     );
//     return currentItem ? currentItem.name : "Dashboard";
//   };

//   return (
//     <div
//       className={`flex h-screen bg-gray-100 dark:bg-gray-900 ${
//         isDarkMode ? "dark" : ""
//       }`}
//     >
//       {/* Sidebar */}
//       <aside
//         className={`${
//           sidebarOpen ? "w-64" : "w-20"
//         } bg-white dark:bg-gray-800 shadow-md transition-all duration-300 ease-in-out overflow-hidden flex flex-col fixed h-full z-10`}
//       >
//         <div className="flex items-center justify-between p-4">
//           {sidebarOpen && (
//             <h1 className="text-xl font-bold dark:text-white">RSMS</h1>
//           )}
//           <button
//             onClick={toggleSidebar}
//             className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
//           >
//             {sidebarOpen ? <ChevronLeft size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//         <nav className="flex-grow overflow-y-auto">
//           {sidebarItems.map((item) => (
//             <Link
//               key={item.name}
//               to={item.path}
//               className={`flex items-center p-4 ${
//                 location.pathname === item.path
//                   ? "bg-gray-200 dark:bg-gray-700 text-blue-600 dark:text-blue-400"
//                   : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
//               }`}
//             >
//               <item.icon
//                 size={24}
//                 className={sidebarOpen ? "mr-4" : "mx-auto"}
//               />
//               {sidebarOpen && <span>{item.name}</span>}
//             </Link>
//           ))}
//         </nav>
//         <div className="p-4">
//           <Logout>
//             {(handleLogout) => (
//               <button
//                 onClick={handleLogout}
//                 className="flex items-center text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 w-full"
//               >
//                 <LogOutIcon
//                   size={24}
//                   className={sidebarOpen ? "mr-4" : "mx-auto"}
//                 />
//                 {sidebarOpen && <span>Logout</span>}
//               </button>
//             )}
//           </Logout>
//         </div>
//       </aside>

//       {/* Main content */}
//       <div
//         className={`flex-1 flex flex-col ${
//           sidebarOpen ? "md:ml-64" : "md:ml-20"
//         }`}
//       >
//         {/* Header */}
//         <header className="bg-white dark:bg-gray-800 shadow-sm p-4 flex items-center justify-between">
//           <div className="flex items-center">
//             {isMobile && (
//               <button
//                 onClick={toggleSidebar}
//                 className="mr-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
//               >
//                 <Menu size={24} />
//               </button>
//             )}
//             <h2 className="text-xl font-semibold dark:text-white">
//               {getCurrentPageTitle()}
//             </h2>
//           </div>
//           <button
//             onClick={toggleDarkMode}
//             className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
//           >
//             {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
//           </button>
//         </header>

//         {/* Main area */}
//         <main className="flex-1 p-8 bg-gray-100 dark:bg-gray-900 overflow-y-auto">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// }

// export default Layout;

//    ------------------------    -----------------------------   ---------------------------------

// import React from "react";
// import { Link } from "react-router-dom";

// const LandingPage = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
//       {/* Header */}
//       <header className="w-full py-6 bg-white shadow-md sticky top-0 z-10">
//         <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
//           <h1 className="text-2xl font-bold text-gray-900">RSMS</h1>
//           <nav className="space-x-6">
//             <Link to="/admin" className="text-blue-600 hover:text-blue-800">
//               Admin?
//             </Link>
//           </nav>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 py-16">
//         <div className="md:w-1/2 mb-8 md:mb-0">
//           <h2 className="text-4xl font-bold mb-4 leading-tight">
//             Manage Your Society with Ease
//           </h2>
//           <p className="text-lg text-gray-600 mb-6">
//             RSMS helps you track issues, manage events, and keep your society
//             running smoothly. Join us and make your residential management
//             simple and efficient.
//           </p>
//           <button
//             className="px-8 py-4 text-white bg-blue-600 font-semibold rounded-md shadow hover:bg-blue-500 transition-all"
//             onClick={() => alert("Get Started Clicked!")}
//           >
//             Get Started
//           </button>
//         </div>
//         <div className="md:w-1/2">
//           <div className="overflow-hidden rounded-lg shadow-lg">
//             <img
//               src="https://imgs.search.brave.com/Bqnvd1W9exLdNks0inm4_sAgpsAoXM_C3yPN-Gk02hs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/djIvMSo1a0ZKRFVB/aTVSQ3hnaXJoR3NI/SHFBLmpwZWc"
//               alt="Society"
//               className="w-full h-auto"
//             />
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section className="bg-gray-100 py-16">
//         <div className="max-w-7xl mx-auto px-4">
//           <h3 className="text-3xl font-bold mb-8 text-center">
//             About Our Society
//           </h3>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div>
//               <h4 className="text-xl font-semibold mb-2">Community Driven</h4>
//               <p className="text-gray-600">
//                 We believe in building a community where every resident’s voice
//                 is heard. RSMS makes it easy to report issues and track their
//                 progress.
//               </p>
//             </div>
//             <div>
//               <h4 className="text-xl font-semibold mb-2">Easy Management</h4>
//               <p className="text-gray-600">
//                 Manage events, reports, and community discussions all in one
//                 place. No more paperwork, just clean digital management.
//               </p>
//             </div>
//             <div>
//               <h4 className="text-xl font-semibold mb-2">Real-Time Updates</h4>
//               <p className="text-gray-600">
//                 Get real-time updates on the progress of your reports and
//                 events. Stay informed and engaged in your community.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="py-16 max-w-7xl mx-auto px-4">
//         <h3 className="text-3xl font-bold mb-8 text-center">Our Services</h3>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <h4 className="text-xl font-semibold mb-2">Issue Tracking</h4>
//             <p className="text-gray-600">
//               Track and manage issues with ease. Get them resolved faster.
//             </p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <h4 className="text-xl font-semibold mb-2">Event Management</h4>
//             <p className="text-gray-600">
//               Organize society events, from planning to execution, with our
//               all-in-one tool.
//             </p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <h4 className="text-xl font-semibold mb-2">Community Engagement</h4>
//             <p className="text-gray-600">
//               Keep your community informed and involved with real-time updates.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="bg-gray-100 py-16">
//         <div className="max-w-7xl mx-auto px-4">
//           <h3 className="text-3xl font-bold mb-8 text-center">Contact Us</h3>
//           <div className="flex flex-col md:flex-row items-center justify-between">
//             <div className="md:w-1/2 mb-8 md:mb-0">
//               <h4 className="text-xl font-semibold mb-2">Get in Touch</h4>
//               <p className="text-gray-600">
//                 Have any questions? Reach out to us and we’ll get back to you
//                 shortly.
//               </p>
//               <ul className="mt-4">
//                 <li>Email: support@rsms.com</li>
//                 <li>Phone: +123 456 7890</li>
//               </ul>
//             </div>
//             <div className="md:w-1/2">
//               <div className="overflow-hidden rounded-lg shadow-lg">
//                 <img
//                   src="https://imgs.search.brave.com/7sRVSDR6aQsF50qWTcMOCEzWrf96YAOY1ObCmeZesc4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/Y29udGFjdC11cy1s/ZXR0ZXJpbmcuanBn/P3dpZHRoPTEwMDAm/Zm9ybWF0PXBqcGcm/ZXhpZj0wJmlwdGM9/MA"
//                   alt="Contact Us"
//                   className="w-full h-auto"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-white py-6">
//         <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
//           <p className="text-gray-500">© 2024 RSMS. All rights reserved.</p>
//           <div className="space-x-4">
//             <Link to="/privacy" className="text-gray-500 hover:text-gray-800">
//               Privacy Policy
//             </Link>
//             <Link to="/terms" className="text-gray-500 hover:text-gray-800">
//               Terms of Service
//             </Link>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };
// export default LandingPage;

// ------------------------    -----------------------------   ---------------------------------

// The old layout.jsx **********************

// import { useState, useEffect } from "react";
// import { Link, useLocation, Outlet } from "react-router-dom";
// import {
//   LayoutDashboard,
//   Megaphone,
//   FileText,
//   ClipboardList,
//   Users,
//   Calendar,
//   LogOut as LogOutIcon,
//   Menu,
//   ChevronLeft,
//   Sun,
//   Moon,
//   User,
// } from "lucide-react";
// import Logout from "../pages/Logout";
// import { useDarkMode } from "../contexts/DarkModeContext";

// const navItems = [
//   { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
//   { name: "Announcements", icon: Megaphone, path: "/announcements" },
//   { name: "Report Issue", icon: FileText, path: "/report-issue" },
//   { name: "My Reports", icon: ClipboardList, path: "/my-reports" },
//   { name: "Community Issues", icon: Users, path: "/community-issues" },
//   { name: "Events", icon: Calendar, path: "/events" },
//   { name: "Profile", icon: User, path: "/profile" },
// ];

// function Layout() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const location = useLocation();
//   const { isDarkMode, toggleDarkMode } = useDarkMode();

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//       setSidebarOpen(window.innerWidth >= 768);
//     };

//     window.addEventListener("resize", handleResize);
//     handleResize();

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

//   return (
//     <div
//       className={`flex h-screen bg-gray-100 dark:bg-gray-900 ${
//         isDarkMode ? "dark" : ""
//       }`}
//     >
//       {/* Sidebar for desktop */}
//       {!isMobile && (
//         <aside
//           className={`${
//             sidebarOpen ? "w-64" : "w-20"
//           } bg-white dark:bg-gray-800 shadow-md transition-all duration-300 ease-in-out overflow-hidden flex flex-col fixed h-full z-10`}
//         >
//           {/* Sidebar top: RSMS logo or Hamburger and ChevronLeft */}
//           <div className="p-4 flex items-center justify-between">
//             {sidebarOpen ? (
//               <h2 className="text-xl font-semibold dark:text-white">RSMS</h2>
//             ) : (
//               <button
//                 onClick={toggleSidebar}
//                 className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
//               >
//                 <Menu size={24} />
//               </button>
//             )}
//             {sidebarOpen && (
//               <button
//                 onClick={toggleSidebar}
//                 className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
//               >
//                 <ChevronLeft size={24} />
//               </button>
//             )}
//           </div>

//           <div className="flex-1 flex flex-col justify-between">
//             {/* Sidebar nav items */}
//             <nav className="flex-1 px-2 space-y-1">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.name}
//                   to={item.path}
//                   className={`flex items-center p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 ${
//                     location.pathname === item.path
//                       ? "text-blue-600 dark:text-blue-400"
//                       : ""
//                   }`}
//                 >
//                   <item.icon size={24} className="mr-3" />
//                   {sidebarOpen && <span>{item.name}</span>}
//                 </Link>
//               ))}
//             </nav>

//             {/* Sidebar bottom: Logout button */}
//             <div className="p-4">
//               <Logout>
//                 {(handleLogout) => (
//                   <button
//                     onClick={handleLogout}
//                     className="flex items-center text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 w-full"
//                   >
//                     <LogOutIcon
//                       size={24}
//                       className={sidebarOpen ? "mr-4" : "mx-auto"}
//                     />
//                     {sidebarOpen && <span>Logout</span>}
//                   </button>
//                 )}
//               </Logout>
//             </div>
//           </div>
//         </aside>
//       )}

//       {/* Main content */}
//       <div
//         className={`flex-1 flex flex-col ${
//           !isMobile && (sidebarOpen ? "md:ml-64" : "md:ml-20")
//         }`}
//       >
//         {/* Header */}
//         <header className="bg-white dark:bg-gray-800 shadow-sm p-4 flex items-center justify-between">
//           <div className="flex items-center">
//             <h2 className="text-xl font-semibold dark:text-white">
//               {isMobile ? "RSMS" : ""}
//             </h2>
//           </div>
//           <div className="flex items-center">
//             <button
//               onClick={toggleDarkMode}
//               className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
//             >
//               {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
//             </button>
//             {/* Logout button for mobile */}
//             {isMobile && (
//               <Logout>
//                 {(handleLogout) => (
//                   <button
//                     onClick={handleLogout}
//                     className="ml-4 p-2 rounded-full text-red-600 dark:text-red-400  text-gray-800 dark:text-gray-200"
//                   >
//                     <LogOutIcon size={24} />
//                   </button>
//                 )}
//               </Logout>
//             )}
//           </div>
//         </header>

//         {/* Main area */}
//         <main className="flex-1 p-4 bg-gray-100 dark:bg-gray-900 overflow-y-auto">
//           <Outlet />
//         </main>

//         {/* Bottom navigation for mobile */}
//         {isMobile && (
//           <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-md">
//             <div className="flex justify-around items-center p-2">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.name}
//                   to={item.path}
//                   className={`flex flex-col items-center p-2 ${
//                     location.pathname === item.path
//                       ? "text-blue-600 dark:text-blue-400"
//                       : "text-gray-700 dark:text-gray-300"
//                   }`}
//                 >
//                   <item.icon size={20} />
//                   <span className="text-xs mt-1">{item.name}</span>
//                 </Link>
//               ))}
//             </div>
//           </nav>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Layout;

// -----------------------------   ---------------------------------   ---------------------------------
