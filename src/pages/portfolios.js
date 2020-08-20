import React, { useEffect } from "react";
import PortfolioBanner from "../components/portfolios/portfolio-banner";
import Expertise from "../components/portfolios/expertise";
import Portfolio from "../components/portfolios/portfolio";

function Portfolios() {
  useEffect(() => {
    document.title = "Portfolio";
  });
  return (
    <>
      <PortfolioBanner />
      <Expertise />
      <Portfolio />
    </>
  );
}

export default Portfolios;
