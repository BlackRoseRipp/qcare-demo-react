import { Fragment } from "react";
import InsuranceData from "../components/InsuranceSlider/insurance.json";

const Insurance = () => {
  return (
    <Fragment>
      <div className="banner bg-blue-primary pb-8">
        <div className="container mx-auto py-64 bg-[url(../public/img/patterns/Q-logo-pattern-home-banner.svg)] bg-center bg-no-repeat bg-contain">
          <h1 className="text-white heading text-6xl font-semibold text-center">
            We Accept These Insurances
          </h1>
        </div>
      </div>
      <div className="bg-blue-secondary/10 py-24">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 px-4 py-8 border-2 bg-white border-blue-primary rounded-xl">
            {InsuranceData.map((insurance) => (
              <div
                className="flex flex-col justify-center items-center"
                id="insuranceItem"
              >
                <img
                  src={"/img/insurance/" + insurance.logo}
                  className="w-3/4 mx-auto"
                />
                <h5 className="text-blue-primary text-2xl font-semibold text-center">
                  {insurance.name}
                </h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Insurance;
