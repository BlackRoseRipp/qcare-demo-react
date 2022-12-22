import { Fragment } from "react";
import InsuranceSlider from "../../components/InsuranceSlider/InsuranceSlider";

const Scrapes = () => {
  return (
    <Fragment>
      <div className="bg-[url(../public/img/compressed-files/pexels-rodnae-productions-652011.jpg)] bg-center bg-cover bg-no-repeat">
        <div className="bg-blue-primary/80 banner pb-24">
          <div className="bg-[url(../public/img/Q_outlined_letter.svg)] bg-center bg-no-repeat bg-contain">
            <div className="container mx-auto py-56">
              <h1 className="text-white heading font-semibold text-6xl text-center">
                Sutures & Urgent Care
              </h1>
              <h3 className="text-white text-2xl font-medium text-center mt-8">
                Visit QCare mobile care units throughout New York City for all
                your sutures, cuts, and scrapes needs.
              </h3>
              <div className="mt-16 text-center w-full">
                <a
                  href="/locations"
                  className="btn-primary text-white border-yellow-logo hover:bg-yellow-logo font-medium border-2 uppercase"
                >
                  Find a location near you
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-secondary/10">
        <div className="container mx-auto py-24">
          <h4 className="text-blue-primary text-center font-medium text-2xl lg:w-2/3 w-5/6 mx-auto">
            By scheduling a visit at Qcare, we can determine if your cut or
            scrape will require sutures and provide the appropriate treatments
            to help you improve.
            <br />
            <br />
            Our doctors, physician assistants and nurse practitioners have
            extensive education and experience in wound care. They’ll help you
            determine the right course of treatment to help you feel your best.
          </h4>
        </div>
      </div>
      <div className="container mx-auto py-24">
        <InsuranceSlider />
      </div>
    </Fragment>
  );
};

export default Scrapes;
