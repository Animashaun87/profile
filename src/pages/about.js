import React, { useEffect } from "react";
import AboutMe from "../components/about/about-me";
import Quote from "../components/about/quote";

function About() {
  useEffect(() => {
    document.title = "About";
  });
  return (
    <>
      <AboutMe />
      <Quote />
    </>
  );
}

export default About;
