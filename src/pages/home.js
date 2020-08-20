import React, { useEffect } from "react";
import Banner from "../components/banner";
import AboutMe from "../components/about/about-me";
import Experience from "../components/experience";
import Expertise from "../components/portfolios/expertise";
import Portfolio from "../components/portfolios/portfolio";

function Home() {
  useEffect(() => {
    document.title = "Home";
  });
  return (
    <>
      {/* <Banner /> */}
      {/* <Project /> */}
      {/* <AboutMe /> */}
      {/* <Experience /> */}
      <Expertise />
      <Portfolio />
      {/* <Testimonial /> */}
    </>
  );
}

export default Home;
