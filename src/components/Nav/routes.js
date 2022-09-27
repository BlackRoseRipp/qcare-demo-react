import React, { Component, Suspense } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("../../pages/Home/Home"))
const PageNotFound = React.lazy(() => import("../../pages/PageNotFound/PageNotFound"))
const About = React.lazy(() => import("../../pages/About/About"))
const Team = React.lazy(() => import("../../pages/About/Team"))
const Insurance = React.lazy(() => import("../../pages/Insurance/Insurance"))
const Locations = React.lazy(() => import("../../pages/Locations/Locations"))
const Contact = React.lazy(() => import("../../pages/Contact/Contact"))
const Services = React.lazy(() => import("../../pages/Services/Services"))
const Privacy = React.lazy(() => import("../../pages/LegalPages/Privacy"))
const Accessibility = React.lazy(() => import("../../pages/LegalPages/Accessibility"))
const Terms = React.lazy(() => import("../../pages/LegalPages/Terms"))
const Wellness = React.lazy(() => import("../../pages/Services/Wellness"))
const Pediatric = React.lazy(() => import("../../pages/Services/Pediatric"))
const UrgentCare = React.lazy(() => import("../../pages/Services/UrgentCare"))
const Allergies = React.lazy(() => import("../../pages/Services/Allergies"))
const Covid = React.lazy(() => import("../../pages/Services/Covid"))
const Vaccines = React.lazy(() => import("../../pages/Services/Vaccines"))
const PlanVisit = React.lazy(() => import("../../pages/PlanningVisit/PlanVisit"))

export const routes = () => {
    const pages = [
        { path: "/", component: <Home /> },
        { path: "/about", component: <About />},
        { path: "/team", component: <Team />},
        { path: "/insurance", component: <Insurance />},
        { path: "/locations", component: <Locations />},
        { path: "/contact", component: <Contact />},
        { path: "/nyc-urgent-care-services", component: <Services />},
        { path: "/privacy", component: <Privacy />},
        { path: "/terms-and-conditions", component: <Terms />},
        { path: "/accessibility", component: <Accessibility />},
        { path: "/prevention", component: <Wellness />},
        { path: "/pediatrics", component: <Pediatric />},
        { path: "/urgent-care", component: <UrgentCare />},
        { path: "/allergies-&-asthma", component: <Allergies />},
        { path: "/covid-19", component: <Covid />},
        { path: "/vaccines", component: <Vaccines />},
        { path: "/plan-your-visit", component: <PlanVisit />},
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