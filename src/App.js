import React from "react";
import {
  Boxes,
  Contact,
  Footer,
  Header,
  Instructors,
  Learn,
  Newsletter,
  Showcase,
} from "./components";

function App() {
  return (
    <>
      <Header />
      <Showcase />
      <Newsletter />
      <Boxes />
      <Learn />
      <Instructors />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
