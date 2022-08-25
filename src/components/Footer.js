import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#212529] p-5">
      <div className="container mx-auto flex justify-center items-center">
        <p className="text-white">Copyright &copy; 2022 Tailwind Landing</p>
        <a href="#" className="absolute right-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="blue"
            className="w-12 h-12"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
