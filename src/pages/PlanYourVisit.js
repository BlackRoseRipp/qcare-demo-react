import { Fragment } from "react";
import { BsCheck2Circle } from "react-icons/bs";
import InsuranceSlider from "../components/InsuranceSlider/InsuranceSlider";

const PlanYourVisit = () => {
  return (
    <Fragment>
      <div className="bg-[url(../public/img/pexels-shvets-production-7176317.jpg)] bg-top bg-no-repeat bg-cover">
        <div className="bg-blue-primary/80 banner pb-24">
          <div className="bg-[url(../public/img/Q_outlined_letter.svg)] bg-center bg-no-repeat bg-contain">
            <div className="py-56 container mx-auto">
              <h1 className="heading text-white text-6xl font-semibold text-center">
                Plan Your Visit
              </h1>
              <h3 className="text-white mt-12 text-2xl font-medium text-center w-3/4 mx-auto">
                No appointment needed! Access urgent care and preventative
                healthcare for all ages in New York City
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-24">
        <h2 className="text-blue-primary font-semibold heading text-4xl text-center w-3/4 mx-auto">
          At QCare, we provide a full array of services for New York City
          residents of every age – from infants to seniors.
        </h2>
        <div className="w-full text-center mt-16">
          <a
            href="/locations"
            className="btn-primary text-blue-logo-primary font-medium uppercase border-2 border-blue-logo-primary hover:text-white hover:bg-blue-logo-secondary hover:border-blue-logo-secondary"
          >
            Find a location near you
          </a>
        </div>
      </div>
      <div className="container mx-auto py-24">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="flex items-center justify-center lg:border-r border-blue-logo-secondary">
            <img
              src="/img/pexels-karolina-grabowska-5387256.jpg"
              className="w-4/5 mx-auto rounded-xl"
              alt="documents-on-desk"
            />
          </div>
          <div className="flex flex-col lg:items-start items-center justify-evenly">
            <h2 className="heading text-5xl text-blue-primary font-medium">
              What to Bring
            </h2>
            <div className="flex flex-col justify-center items-start lg:my-0 my-8">
              <p className="text-blue-secondary text-xl mb-4">
                Let’s make your visit to Qcare as smooth and easy as possible.
                Here’s what you need to bring:
              </p>
              <div className="flex items-center my-3">
                <BsCheck2Circle className="text-blue-logo-secondary text-2xl min-w-fit mr-2" />
                <p className="text-blue-primary font-medium">
                  Driver’s license or photo ID
                </p>
              </div>
              <div className="flex items-center my-3">
                <BsCheck2Circle className="text-blue-logo-secondary text-2xl min-w-fit mr-2" />
                <p className="text-blue-primary font-medium">
                  Insurance information
                </p>
              </div>
              <div className="flex items-center my-3">
                <BsCheck2Circle className="text-blue-logo-secondary text-2xl min-w-fit mr-2" />
                <p className="text-blue-primary font-medium">
                  Payment for co-pay or self pay
                </p>
              </div>
              <div className="flex items-center my-3">
                <BsCheck2Circle className="text-blue-logo-secondary text-2xl min-w-fit mr-2" />
                <p className="text-blue-primary font-medium">
                  Updated list of medications, allergies and past surgeries
                </p>
              </div>
            </div>
            <div className="text-center mt-4">
              <a
                href="https://www.yourhealthfile.com/providers/1534226/book-an-appointment-.html"
                className="btn-primary text-blue-logo-primary border-2 border-blue-logo-primary uppercase font-medium hover:bg-blue-logo-secondary hover:border-blue-logo-secondary hover:text-white"
              >
                Book an appointment
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-24">
        <InsuranceSlider />
      </div>
    </Fragment>
  );
};

export default PlanYourVisit;
