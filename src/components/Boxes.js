import React from "react";

const Boxes = () => {
  return (
    <section className="p-5 mt-10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-x-6 gap-y-6">
          <div className="bg-[#212529] text-white px-2 py-5 border rounded">
            <div className="text-center">
              <div className="mb-3 flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-12 h-12"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-3xl">Virtual</h3>
              <p className="mb-6">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                odit vero quis sapiente? Blanditiis, ducimus.
              </p>
              <a
                href="#"
                className="bg-blue-600 px-3 py-2 text-lg border-blue-600 rounded-md"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="bg-[#6c757d] text-white px-2 py-5 border rounded">
            <div className="text-center">
              <div className="mb-3 flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-12 h-12"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-3xl">Hybrid</h3>
              <p className="mb-6">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                odit vero quis sapiente? Blanditiis, ducimus.
              </p>
              <a
                href="#"
                className="bg-[#212529] px-3 py-2 text-lg border-blue-600 rounded-md"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="bg-[#212529] text-white px-2 py-5 border rounded">
            <div className="text-center">
              <div className="mb-3 flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-12 h-12"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-3xl">In Person</h3>
              <p className="mb-6">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                odit vero quis sapiente? Blanditiis, ducimus.
              </p>
              <a
                href="#"
                className="bg-blue-600 px-3 py-2 text-lg border-blue-600 rounded-md"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Boxes;
