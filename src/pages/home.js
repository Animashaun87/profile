import React, { useEffect } from "react";
import AboutMe from "../components/about/about-me";
import Experience from "../components/experience";
import Expertise from "../components/portfolios/expertise";
import Portfolio from "../components/portfolios/portfolio";
import colors from "../utils/colors";

function Home() {
  useEffect(() => {
    document.title = "Home";
  });
  return (
    <>
      {/* <Banner/> */}
      {/* <Project /> */}
      {/* <AboutMe /> */}
      {/* <Experience /> */}
      <Expertise />
      {/* <Portfolio /> */}
      {/* <Testimonial /> */}
    </>
  );
}

export default Home;
