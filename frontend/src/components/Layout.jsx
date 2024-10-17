import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/shared/Sidebar";
import Navbar from "../components/shared/Navbar";
import MobileNav from "../components/shared/MobileNav";
import { useDarkMode } from "../contexts/DarkModeContext";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setSidebarOpen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div
      className={`flex h-screen bg-gray-100 dark:bg-gray-900 ${
        isDarkMode ? "dark" : ""
      }`}
    >
      {!isMobile && (
        <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      )}
      <div
        className={`flex-1 flex flex-col ${
          !isMobile && (sidebarOpen ? "md:ml-64" : "md:ml-20")
        }`}
      >
        <Navbar isMobile={isMobile} />
        <main className="flex-1 p-4 bg-gray-100 dark:bg-gray-900 overflow-y-auto">
          <Outlet />
        </main>
        {isMobile && <MobileNav />}
      </div>
    </div>
  );
};

export default Layout;
