import React from "react";
import ShowcaseImg from "../assets/images/showcase.svg";

const Showcase = () => {
  return (
    <section className="bg-[#212529] text-white">
      <div className="container mx-auto">
        <div className="flex items-center">
          <div className="mb-10 text-center md:text-left">
            <h1 className="text-4xl pt-2 font-medium">
              Become a<span className="text-amber-500"> Web Developer </span>
            </h1>
            <p className="my-4 px-10 md:px-0">
              We focus on teaching our students the fundamentals of the latest
              and greatest technologies to prepare them for their first dev role
            </p>
            <button
              className="bg-blue-600 px-3 py-2 text-lg border-blue-600 rounded-md"
              data-bs-toggle="modal"
              data-bs-target="#enroll"
            >
              Start The Enrollment
            </button>
          </div>
          <div className="hidden md:block mb-10">
            <img src={ShowcaseImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
