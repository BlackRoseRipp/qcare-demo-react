import React, { Component, Suspense } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("../../pages/Home/Home"))
const PageNotFound = React.lazy(() => import("../../pages/PageNotFound/PageNotFound"))
const About = React.lazy(() => import("../../pages/About/About"))
const Team = React.lazy(() => import("../../pages/About/Team"))
const Insurance = React.lazy(() => import("../../pages/Insurance/Insurance"))
const Locations = React.lazy(() => import("../../pages/Locations/Locations"))
const Contact = React.lazy(() => import("../../pages/Contact/Contact"))

export const routes = () => {
    const pages = [
        { path: "/", component: <Home /> },
        { path: "/about", component: <About />},
        { path: "/team", component: <Team />},
        { path: "/insurance", component: <Insurance />},
        { path: "/locations", component: <Locations />},
        { path: "/contact-null", component: <Contact />},
        { path: "*", component: <PageNotFound />}
    ]
  
    return (
      <Suspense
        fallback={
          <h3 style={{ textAlign: "center", padding: "50px" }}>Loading...</h3>
        }
      >
        <Routes>
          {pages.map((page) => {
            return <Route path={page.path} exact element={page.component} />;
          })}
        </Routes>
      </Suspense>
    )
}