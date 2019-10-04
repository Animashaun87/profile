import React, { Suspense } from "react";
import Frontend from "./layouts/frontend";
import { Router } from "@reach/router";
import "antd/dist/antd.css";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import "./utils/styles/global.css";
import Loader from "./utils/loader";
// import "./App.css";

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Frontend>
          <Router>
            <Home path="/" />
            <About path="/about" />
            <Contact path="/contact" />
          </Router>
        </Frontend>
      </Suspense>
    </>
  );
}

export default App;
