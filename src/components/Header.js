import React from "react";

const Header = () => {
  const toggleMenu = () => {
    var nav = document.getElementById("nav");
    var menu = document.getElementById("menu");
    nav.classList.add = "flex-col";
    menu.classList.toggle("hidden");
  };

  return (
    <nav className="bg-[#212529] px-2 py-3 sticky top-0">
      <div className="block lg:hidden absolute right-2 top-2">
        <button
          onClick={toggleMenu}
          className="flex items-center px-3 py-2 border rounded border-[#ffffff1a] text-[#ffffff8c]"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className="container mx-auto flex flex-col md:flex-row align-center justify-between"
        id="nav"
      >
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="text-xl cursor-pointer">Tailwind Landing</span>
        </div>
        <div className="hidden lg:block" id="menu">
          <a
            href="#learn"
            onClick={toggleMenu}
            className="block py-3 lg:inline-block lg:mt-0 text-[#ffffff8c] hover:text-white mr-4"
          >
            What You'll Learn
          </a>
          <a
            href="#contact"
            onClick={toggleMenu}
            className="block py-3 lg:inline-block lg:mt-0 text-[#ffffff8c] hover:text-white mr-4"
          >
            Contact
          </a>
          <a
            href="#instructors"
            onClick={toggleMenu}
            className="block py-3 lg:inline-block lg:mt-0 text-[#ffffff8c] hover:text-white"
          >
            Instructors
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
