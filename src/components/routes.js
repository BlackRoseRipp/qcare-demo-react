import React, { Component, Suspense } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("../pages/Home"));
const About = React.lazy(() => import("../pages/About"));
const PageNotFound = React.lazy(() => import("../pages/PageNotFound"));
const Team = React.lazy(() => import("../pages/Team"));
const Contact = React.lazy(() => import("../pages/Contact"));
const Services = React.lazy(() => import("../pages/Services/Services"));
const Wellness = React.lazy(() => import("../pages/Services/Wellness"));
const Pediatric = React.lazy(() => import("../pages/Services/Pediatric"));
const UrgentCare = React.lazy(() => import("../pages/Services/UrgentCare"));
const Allergies = React.lazy(() => import("..//pages/Services/Allergies"));
const PlanYourVisit = React.lazy(() => import("../pages/PlanYourVisit"));
const Locations = React.lazy(() => import("../pages/Locations"));
const Insurance = React.lazy(() => import("../pages/Insurance"));
const Privacy = React.lazy(() => import("../pages/Legal/Privacy"));
const Accessibility = React.lazy(() => import("../pages/Legal/Accessibility"));
const Terms = React.lazy(() => import("../pages/Legal/Terms"));
/*
const Covid = React.lazy(() => import("../pages/Services/Covid"));
const Vaccines = React.lazy(() => import("../pages/Services/Vaccines")); */

export const routes = () => {
  const pages = [
    { path: "/", component: <Home /> },
    { path: "/about", component: <About /> },
    { path: "/contact", component: <Contact /> },
    { path: "/team", component: <Team /> },
    { path: "/nyc-urgent-care-services", component: <Services /> },
    { path: "/prevention", component: <Wellness /> },
    { path: "/pediatrics", component: <Pediatric /> },
    { path: "/plan-your-visit", component: <PlanYourVisit /> },
    { path: "/locations", component: <Locations /> },
    { path: "/urgent-care", component: <UrgentCare /> },
    { path: "/allergies-asthma", component: <Allergies /> },
    { path: "/insurance", component: <Insurance /> },
    { path: "/privacy", component: <Privacy /> },
    { path: "/terms-and-conditions", component: <Terms /> },
    { path: "/accessibility", component: <Accessibility /> },
    /*
    { path: "/covid-19", component: <Covid /> },
    { path: "/vaccines", component: <Vaccines /> },
    */
    { path: "*", component: <PageNotFound /> },
  ];

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
  );
};
