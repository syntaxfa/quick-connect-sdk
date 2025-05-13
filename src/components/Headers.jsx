import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Headers = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "خانه", path: "/" },
    { name: "درباره ما", path: "/about" },
    { name: "خدمات", path: "/services" },
    { name: "تماس", path: "/contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 text-white  w-full  shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        <div className="text-2xl font-bold">MyApp</div>
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:items-center absolute md:static top-16 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent p-4 md:p-0 transition-all duration-300`}
        >
          <ul className="flex flex-col md:flex-row md:gap-6 text-center">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`block py-2 text-white hover:text-gray-300 transition-colors duration-300 ${
                    location.pathname === item.path &&
                    "font-semibold border-b-4 border-blue-400"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none" aria-label="Toggle menu">
            <div className="space-y-1.5">
              <span
                className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Headers;
