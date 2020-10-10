import React, { useEffect } from "react";
import PageBanner from "../components/pages-banner";
import AboutMe from "../components/about/about-me";
import Skills from "../components/about/skills";
import Quote from "../components/about/quote";
import { ScrollToTop } from "../utils/back-top";

function About() {
  useEffect(() => {
    document.title = "About";
  });

  const info =
    "Hi, I'm Abidemi Animashaun. I am a software engineer who basically";
  return (
    <>
      <PageBanner title={"About"} />
      <AboutMe about={info} />
      <Skills />
      <Quote />
      <ScrollToTop />
    </>
  );
}

export default About;
