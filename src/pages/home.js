import React, { useEffect } from "react";
import Banner from "../components/banner";
import Testimonial from "../components/testimonial";
import Project from "../components/projects";
import Create from "../components/create";

function Home() {
  useEffect(() => {
    document.title = "Home";
  });
  return (
    <>
      <Banner />
      {/* <Create /> */}
      <Project />
      {/* <Testimonial /> */}
    </>
  );
}

export default Home;
