import React, { useEffect } from "react";
import AboutBanner from "../components/about/aboutBanner";
import AboutMe from "../components/about/about-me";
import Quote from "../components/about/quote";

function About() {
  useEffect(() => {
    document.title = "About";
  });
  return (
    <>
      <AboutBanner />
      <AboutMe />
      <Quote />
    </>
  );
}

export default About;
