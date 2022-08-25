import React from "react";
import Fundamentals from "../assets/images/fundamentals.svg";
import ReactImg from "../assets/images/react.svg";

const Learn = () => {
  return (
    <>
      <section id="learn" className="mt-10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-1">
              <img src={Fundamentals} alt="" className="px-10 md:px-0" />
            </div>
            <div className="flex-1 p-10 md:p-20 text-center md:text-left">
              <h2 className="text-3xl font-medium">Learn The Fundamentals</h2>
              <p className="font-light py-4 text-xl">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatum eligendi dolorum id corporis consequatur cumque.
              </p>
              <p className="mb-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem, accusamus deleniti facilis quaerat vero voluptatum.
                Ducimus culpa, odit, id maxime temporibus commodi praesentium et
                sequi, soluta itaque rem perspiciatis impedit?
              </p>
              <a href="#" className="bg-[#f9fafb] p-3">
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="learn" className="mt-10 bg-[#212529] text-white pb-5">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-1 p-10 md:p-20 text-center md:text-left">
              <h2 className="text-3xl font-medium">Learn React</h2>
              <p className="font-light py-4 text-xl">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatum eligendi dolorum id corporis consequatur cumque.
              </p>
              <p className="mb-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem, accusamus deleniti facilis quaerat vero voluptatum.
                Ducimus culpa, odit, id maxime temporibus commodi praesentium et
                sequi, soluta itaque rem perspiciatis impedit?
              </p>
              <a href="#" className="bg-white p-3 text-black border rounded">
                Read More
              </a>
            </div>
            <div className="flex-1">
              <img src={ReactImg} alt="" className="px-10 md:px-0" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Learn;
