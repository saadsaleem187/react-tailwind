import React from "react";

const Newsletter = () => {
  return (
    <section className="bg-[#0c6efd] py-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <h3 className="flex-1 mb-3 md:mb-0 text-white text-2xl">
            Sign Up For Our Newsletter
          </h3>
          <div className="flex-1">
            <input
              type="text"
              className="md:w-10/12 p-3 border rounded-tl rounded-bl"
              placeholder="Enter Email"
            />
            <button
              className="bg-[#1d1f23] text-white p-3 border rounded-tr rounded-br border-[#1d1f23] ml-[-3px]"
              type="button"
            >
              Button
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
