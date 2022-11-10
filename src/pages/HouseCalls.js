import { Fragment } from "react";
import { BsArrowDown, BsArrowRight, BsCheck2Circle } from "react-icons/bs";
import { CiMedicalCase, CiMedicalMask } from "react-icons/ci";
import { FaUserNurse } from "react-icons/fa";

const HouseCalls = () => {
  return (
    <Fragment>
      <div className="banner bg-blue-primary pb-8">
        <div className="py-56 container mx-auto bg-[url(../public/img/patterns/Q-logo-pattern-home-banner.svg)] bg-center bg-repeat-space bg-contain">
          <h1 className="text-white heading text-6xl font-semibold text-center">
            Why leave home when you can have a house call?
          </h1>
          <h3 className="text-white text-xl font-medium text-center mt-4">
            When you’re not well enough to leave the house, Qcare comes to you
            in as little as one hour
          </h3>
          <div className="text-center mt-12">
            <a
              href="#"
              className="btn-primary uppercase text-white font-medium border-2 border-yellow-logo hover:bg-yellow-logo"
            >
              Book a house call now
            </a>
          </div>
        </div>
      </div>
      <div className="bg-blue-secondary/10 py-24">
        <div className="container mx-auto">
          <h2 className="text-blue-primary font-semibold text-3xl text-center md:w-3/4 w-11/12 mx-auto">
            When you’re sick, the last thing you want to do is go out. With
            Qcare, you don’t have to. Check out our house call option for…
          </h2>
          <div className="mt-12 border-2 rounded-xl bg-white border-blue-primary sm:px-16 px-8 py-8 w-fit mx-auto">
            <div className="flex flex-col items-start justify-center w-fit mx-auto">
              <div className="flex items-center my-2 hover:-translate-y-1 transition-all cursor-pointer">
                <BsCheck2Circle className="text-2xl text-blue-logo-secondary mr-2 min-w-fit" />
                <h5 className="text-blue-secondary">Easy scheduling</h5>
              </div>
              <div className="flex items-center my-2 hover:-translate-y-1 transition-all cursor-pointer">
                <BsCheck2Circle className="text-2xl text-blue-logo-secondary mr-2 min-w-fit" />
                <h5 className="text-blue-secondary">
                  Real time dispatch updates
                </h5>
              </div>
              <div className="flex items-center my-2 hover:-translate-y-1 transition-all cursor-pointer">
                <BsCheck2Circle className="text-2xl text-blue-logo-secondary mr-2 min-w-fit" />
                <h5 className="text-blue-secondary">
                  Follow up support on our Qcare app
                </h5>
              </div>
              <div className="flex items-center my-2 hover:-translate-y-1 transition-all cursor-pointer">
                <BsCheck2Circle className="text-2xl text-blue-logo-secondary mr-2 min-w-fit" />
                <h5 className="text-blue-secondary">
                  Doctor messaging on our app
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-24">
        <h2 className="text-4xl heading text-center font-semibold text-blue-primary md:w-3/4 w-11/12 mx-auto">
          Getting sick or injured is never convenient. With Qcare, we make it a
          little easier to access the care you need.{" "}
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 lg:w-3/4 mx-auto mt-16">
          <div className="flex flex-col items-center justify-start">
            <a
              href="#"
              className="p-10 border-2 border-blue-logo-primary text-blue-logo-primary rounded-full hover:scale-110 mb-4"
            >
              <FaUserNurse className="text-6xl" />
            </a>
            <p className="text-lg text-blue-logo-primary text-center mt-8 w-3/4 mx-auto">
              When you have an urgent care need, skip the ER wait. Our doctors
              come to you.
            </p>
          </div>
          <div className="flex flex-col items-center justify-start">
            <a
              href="#"
              className="p-10 border-2 border-blue-logo-primary text-blue-logo-primary rounded-full hover:scale-110 mb-4"
            >
              <CiMedicalCase className="text-6xl" />
            </a>
            <p className="text-lg text-blue-logo-primary text-center mt-8 w-3/4 mx-auto">
              Traveling? No problem, we can visit your hotel.
            </p>
          </div>
          <div className="flex flex-col items-center justify-start">
            <a
              href="#"
              className="p-10 border-2 border-blue-logo-primary text-blue-logo-primary rounded-full hover:scale-110 mb-4"
            >
              <CiMedicalMask className="text-6xl" />
            </a>
            <p className="text-lg text-blue-logo-primary text-center mt-8 w-3/4 mx-auto">
              Not feeling well enough to leave home? We’ll come to you.
            </p>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col items-center justify-center mt-32 w-5/6 mx-auto">
          <div className="flex flex-col items-center justify-start mx-4 w-2/5">
            <h3 className="text-blue-logo-primary text-3xl font-semibold text-center">
              Step: 1
            </h3>
            <h5 className="text-blue-secondary text-2xl text-center font-medium mt-6">
              Request an appointment
            </h5>
          </div>
          <div className="flex items-center justify-center mx-4">
            <BsArrowRight className="text-blue-logo-primary text-7xl hidden sm:block" />
            <BsArrowDown className="text-blue-logo-primary text-7xl sm:hidden block my-4" />
          </div>
          <div className="flex flex-col items-center justify-start mx-4 w-2/5">
            <h3 className="text-blue-logo-primary text-3xl font-semibold text-center">
              Step: 2
            </h3>
            <h5 className="text-blue-secondary text-2xl text-center font-medium mt-6">
              Same-day care comes to you
            </h5>
          </div>
          <div className="flex items-center justify-center mx-4">
            <BsArrowRight className="text-blue-logo-primary text-7xl hidden sm:block" />
            <BsArrowDown className="text-blue-logo-primary text-7xl sm:hidden block my-4" />
          </div>
          <div className="flex flex-col items-center justify-start mx-4 w-2/5">
            <h3 className="text-blue-logo-primary text-3xl font-semibold text-center">
              Step: 3
            </h3>
            <h5 className="text-blue-secondary text-2xl text-center font-medium mt-6">
              Feel better soon
            </h5>
          </div>
        </div>
        <div className="mt-12 text-center">
          <a
            href="#"
            className="btn-primary text-blue-primary border-blue-primary hover:text-white hover:bg-blue-logo-secondary hover:border-blue-logo-secondary border-2 font-medium uppercase"
          >
            Request a house call
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default HouseCalls;
