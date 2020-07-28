import React, { useEffect } from "react";
import Banner from "../components/banner";
import Testimonial from "../components/testimonial";
import Project from "../components/projects";
import AboutMe from '../components/about/about-me'
import Experience from "../components/experience";

function Home() {
  useEffect(() => {
    document.title = "Home";
  });
  return (
    <>
      {/* <Banner/> */}
      {/* <Project /> */}
      <AboutMe />
      <Experience />
      {/* <Testimonial /> */}
    </>
  );
}

export default Home;
