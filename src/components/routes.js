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
const Covid = React.lazy(() => import("../pages/Services/Covid"));
const Vaccines = React.lazy(() => import("../pages/Services/Vaccines"));
const Injuries = React.lazy(() => import("../pages/Services/Injuries"));
const Scrapes = React.lazy(() => import("../pages/Services/Scrapes"));
const Strep = React.lazy(() => import("../pages/Services/Strep"));
const Flu = React.lazy(() => import("../pages/Services/Flu"));
const Frostbite = React.lazy(() => import("../pages/Services/Frostbite"));
const Burns = React.lazy(() => import("../pages/Services/Burns"));
const PlanYourVisit = React.lazy(() => import("../pages/PlanYourVisit"));
const Locations = React.lazy(() => import("../pages/Locations"));
const HouseCalls = React.lazy(() => import("../pages/HouseCalls"));
const Insurance = React.lazy(() => import("../pages/Insurance"));
const Privacy = React.lazy(() => import("../pages/Legal/Privacy"));
const Accessibility = React.lazy(() => import("../pages/Legal/Accessibility"));
const Terms = React.lazy(() => import("../pages/Legal/Terms"));
const BlogDetail = React.lazy(() => import("../pages/Blog/BlogDetail"));
const Blog = React.lazy(() => import("../pages/Blog/Blog"));

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
    { path: "/house-calls", component: <HouseCalls /> },
    { path: "/allergies-asthma", component: <Allergies /> },
    { path: "/covid-19", component: <Covid /> },
    { path: "/vaccines", component: <Vaccines /> },
    { path: "/injuries", component: <Injuries /> },
    { path: "/scrapes-&-cuts", component: <Scrapes /> },
    { path: "/strep-throat", component: <Strep /> },
    { path: "/cold-&-flu", component: <Flu /> },
    { path: "/frostbite", component: <Frostbite /> },
    { path: "/burn-care", component: <Burns /> },
    { path: "/insurance", component: <Insurance /> },
    { path: "/privacy", component: <Privacy /> },
    { path: "/terms-and-conditions", component: <Terms /> },
    { path: "/accessibility", component: <Accessibility /> },
    { path: "/blog", component: <Blog /> },
    { path: "/blog/:id", component: <BlogDetail /> },
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
