import React, { Suspense, lazy } from "react";
import Frontend from "./layouts/frontend";
import { Router } from "@reach/router";
import "antd/dist/antd.css";
// import Home from "./pages/home";
// import About from "./pages/about";
// import Contact from "./pages/contact";
import "./utils/styles/global.css";
import Loader from "./utils/loader";
// import "./App.css";

const retry = (fn, retriesLeft = 5, interval = 1000) => {
  return new Promise((resolve, reject) => {
    fn()
      .then(resolve)
      .catch((error) => {
        setTimeout(() => {
          if (retriesLeft === 1) {
            reject(error);
            return;
          }
          retry(fn, retriesLeft - 1, interval).then(resolve, reject);
        }, interval);
      });
  });
};

const homePromise = import("./pages/home");
const Home = lazy(() => retry(() => homePromise));

const aboutPromise = import("./pages/about");
const About = lazy(() => retry(() => aboutPromise));

const contactPromise = import("./pages/contact");
const Contact = lazy(() => retry(() => contactPromise));

function App() {
  
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Router>
          <Frontend path="/">
            <Home path="/" />
            <About path="about" />
            <Contact path="contact" />
          </Frontend>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
