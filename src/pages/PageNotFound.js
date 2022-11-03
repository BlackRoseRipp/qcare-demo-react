import React, { Fragment } from "react";

const PageNotFound = () => {
  return (
    <Fragment>
      <div className="banner bg-blue-primary pb-24">
        <h1 className="text-white text-9xl heading font-semibold text-center">
          404
        </h1>
      </div>
      <div className="container mx-auto py-16">
        <img
          src="img/404/hanginthere-landscape.jpg"
          className="mx-auto w-1/2"
        />
        <h2 className="text-blue-logo-primary text-3xl font-semibold text-center">
          Uh oh! You found a page that doesn't exist!
        </h2>
        <h4 className="text-blue-secondary text-xl text-center">
          Don't panic. Return to the Home Page to resume your journey towards a
          healthy life.
        </h4>
        <div className="text-center my-12">
          <a
            href="/"
            className="btn-primary border-2 border-blue-logo-primary text-blue-logo-primary uppercase font-medium text-xl hover:bg-blue-logo-primary hover:text-white"
          >
            Return to Home
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default PageNotFound;
