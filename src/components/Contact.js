import React from "react";
import GoogleMap from "../assets/images/google-map.png";

const Contact = () => {
  return (
    <section className="p-10" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1">
            <h2 className="mb-4 text-center text-3xl font-medium">
              Contact Info
            </h2>
            <ul>
              <li>
                <span className="font-bold text-xl">Main Location:</span> 50
                Main st Boston MA
              </li>
              <li>
                <span className="font-bold text-xl">Enrollment Phone:</span>{" "}
                (555) 555-5555
              </li>
              <li>
                <span className="font-bold text-xl">Student Phone:</span> (555)
                555-5555
              </li>
              <li>
                <span className="font-bold text-xl">Enrollment Email:</span>
                test@test.com
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <img src={GoogleMap} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
