import { Fragment } from "react";

const About = () => {
  return (
    <Fragment>
      <div className="banner bg-blue-primary pb-24">
        <div className="py-32 container mx-auto">
          <h1 className="heading text-white text-5xl font-semibold md:w-2/3 w-full md:text-start text-center">
            Urgent and preventative healthcare when and where you need it
          </h1>
          <h6 className="text-xl text-white mt-8 md:w-2/3 w-full">
            A sudden sickness or injury can leave you feeling lousy while also
            disrupting your carefully planned schedule. Our QCare mobile care
            units provides New Yorkers access to quick, convenient, expert
            medical care anywhere you are.
          </h6>
          <div className="mt-8">
            <a
              href="/nyc-urgent-care-services"
              className="btn-primary uppercase text-white border-2 border-white hover:border-yellow-logo hover:bg-yellow-logo font-medium md:mx-0"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
