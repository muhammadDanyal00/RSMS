import { Sun, Moon, LogOut as LogOutIcon } from "lucide-react";
import { useDarkMode } from "../../contexts/DarkModeContext";
import Logout from "../../pages/Logout";

const Navbar = ({ isMobile }) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm p-4 flex items-center justify-between">
      <div className="flex items-center">
        <h2 className="text-xl font-semibold dark:text-white">
          {isMobile ? "RSMS" : ""}
        </h2>
      </div>
      <div className="flex items-center">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {isMobile && (
          <Logout>
            {(handleLogout) => (
              <button
                onClick={handleLogout}
                className="ml-4 p-2 rounded-full text-red-600 dark:text-red-400"
              >
                <LogOutIcon size={24} />
              </button>
            )}
          </Logout>
        )}
      </div>
    </header>
  );
};

export default Navbar;
