import { Fragment } from "react";
import { BsArrowDown, BsArrowRight, BsCheck2Circle } from "react-icons/bs";
import { CiMedicalCase, CiMedicalMask } from "react-icons/ci";
import { FaUserNurse } from "react-icons/fa";
import { IoIosMedical } from "react-icons/io";
import InsuranceSlider from "../components/InsuranceSlider/InsuranceSlider";

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
        <div className="flex lg:flex-row flex-col items-center justify-center mt-32 w-5/6 mx-auto">
          <div className="flex flex-col items-center justify-start mx-4 w-2/5">
            <h3 className="text-blue-logo-primary text-3xl font-semibold text-center">
              Step: 1
            </h3>
            <h5 className="text-blue-secondary text-2xl text-center font-medium mt-6">
              Request an appointment
            </h5>
          </div>
          <div className="flex items-center justify-center mx-4">
            <BsArrowRight className="text-blue-logo-primary text-7xl hidden lg:block" />
            <BsArrowDown className="text-blue-logo-primary text-7xl lg:hidden block my-4" />
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
            <BsArrowRight className="text-blue-logo-primary text-7xl hidden lg:block" />
            <BsArrowDown className="text-blue-logo-primary text-7xl lg:hidden block my-4" />
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
      <div className="bg-blue-secondary/10 py-24">
        <div className="container mx-auto">
          <h2 className="heading text-blue-primary text-5xl font-semibold text-center">
            Same-day house calls every day of the week
          </h2>
          <p className="text-blue-logo-primary font-medium text-xl text-center md:w-2/3 w-11/12 mx-auto mt-8">
            When you need medical care, our house calls teams are equipped to
            manage all of the most common illnesses and injuries. Schedule a
            house call if you’re experiencing any of the following conditions:
          </p>
          <div className="mt-12 border-2 rounded-xl bg-white border-blue-primary sm:px-16 px-8 py-8 w-fit mx-auto">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
              <div className="flex items-center my-2 hover:-translate-y-1 transition-all cursor-pointer">
                <IoIosMedical className="text-2xl text-blue-logo-secondary mr-2 min-w-fit" />
                <h5 className="text-blue-secondary">Primary or routine care</h5>
              </div>
              <div className="flex items-center my-2 hover:-translate-y-1 transition-all cursor-pointer">
                <IoIosMedical className="text-2xl text-blue-logo-secondary mr-2 min-w-fit" />
                <h5 className="text-blue-secondary">Urgent care</h5>
              </div>
              <div className="flex items-center my-2 hover:-translate-y-1 transition-all cursor-pointer">
                <IoIosMedical className="text-2xl text-blue-logo-secondary mr-2 min-w-fit" />
                <h5 className="text-blue-secondary">
                  Cuts, wounds, minor burns or rashes
                </h5>
              </div>
              <div className="flex items-center my-2 hover:-translate-y-1 transition-all cursor-pointer">
                <IoIosMedical className="text-2xl text-blue-logo-secondary mr-2 min-w-fit" />
                <h5 className="text-blue-secondary">Ear, nose and throat</h5>
              </div>
              <div className="flex items-center my-2 hover:-translate-y-1 transition-all cursor-pointer">
                <IoIosMedical className="text-2xl text-blue-logo-secondary mr-2 min-w-fit" />
                <h5 className="text-blue-secondary">Flu and cold symptoms</h5>
              </div>
              <div className="flex items-center my-2 hover:-translate-y-1 transition-all cursor-pointer">
                <IoIosMedical className="text-2xl text-blue-logo-secondary mr-2 min-w-fit" />
                <h5 className="text-blue-secondary">Sinus infections</h5>
              </div>
              <div className="flex items-center my-2 hover:-translate-y-1 transition-all cursor-pointer">
                <IoIosMedical className="text-2xl text-blue-logo-secondary mr-2 min-w-fit" />
                <h5 className="text-blue-secondary">Allergies and asthma</h5>
              </div>
              <div className="flex items-center my-2 hover:-translate-y-1 transition-all cursor-pointer">
                <IoIosMedical className="text-2xl text-blue-logo-secondary mr-2 min-w-fit" />
                <h5 className="text-blue-secondary">Headaches</h5>
              </div>
              <div className="flex items-center my-2 hover:-translate-y-1 transition-all cursor-pointer">
                <IoIosMedical className="text-2xl text-blue-logo-secondary mr-2 min-w-fit" />
                <h5 className="text-blue-secondary">Nausea and vomiting</h5>
              </div>
              <div className="flex items-center my-2 hover:-translate-y-1 transition-all cursor-pointer">
                <IoIosMedical className="text-2xl text-blue-logo-secondary mr-2 min-w-fit" />
                <h5 className="text-blue-secondary">Fever</h5>
              </div>
              <div className="flex items-center my-2 hover:-translate-y-1 transition-all cursor-pointer">
                <IoIosMedical className="text-2xl text-blue-logo-secondary mr-2 min-w-fit" />
                <h5 className="text-blue-secondary">
                  Urinary tract infections
                </h5>
              </div>
              <div className="flex items-center my-2 hover:-translate-y-1 transition-all cursor-pointer">
                <IoIosMedical className="text-2xl text-blue-logo-secondary mr-2 min-w-fit" />
                <h5 className="text-blue-secondary">
                  STI (sexually transmitted infections) testing
                </h5>
              </div>
            </div>
          </div>
          <div className="bg-[url(../public/img/patterns/Q-logo-pattern.svg)] bg-center bg-no-repeat bg-contain">
            <p className="text-blue-primary font-medium text-xl text-center md:w-2/3 w-11/12 mx-auto mt-16">
              The team at Qcare makes every effort to get you healthy faster so
              you can avoid going to the hospital.{" "}
              <span className="font-bold text-red-secondary">
                If you’re having a life-threatening emergency, call 911.
              </span>
              <br />
              <br />
              You should be seen in the Emergency Room if you’re experiencing
              any of these symptoms:
            </p>
            <div className="flex flex-col items-start justify-center w-fit mx-auto mt-12">
              <div className="flex items-center my-2 hover:-translate-y-1 transition-all cursor-pointer">
                <IoIosMedical className="text-2xl text-red-primary mr-2 min-w-fit" />
                <h5 className="text-red-secondary font-medium text-lg">
                  Chest pain
                </h5>
              </div>
              <div className="flex items-center my-2 hover:-translate-y-1 transition-all cursor-pointer">
                <IoIosMedical className="text-2xl text-red-primary mr-2 min-w-fit" />
                <h5 className="text-red-secondary font-medium text-lg">
                  Difficulty breathing
                </h5>
              </div>
              <div className="flex items-center my-2 hover:-translate-y-1 transition-all cursor-pointer">
                <IoIosMedical className="text-2xl text-red-primary mr-2 min-w-fit" />
                <h5 className="text-red-secondary font-medium text-lg">
                  Uncontrolled bleeding
                </h5>
              </div>
              <div className="flex items-center my-2 hover:-translate-y-1 transition-all cursor-pointer">
                <IoIosMedical className="text-2xl text-red-primary mr-2 min-w-fit" />
                <h5 className="text-red-secondary font-medium text-lg">
                  Medication overdose
                </h5>
              </div>
              <div className="flex items-center my-2 hover:-translate-y-1 transition-all cursor-pointer">
                <IoIosMedical className="text-2xl text-red-primary mr-2 min-w-fit" />
                <h5 className="text-red-secondary font-medium text-lg">
                  A serious head injury
                </h5>
              </div>
            </div>
            <p className="text-blue-primary font-medium text-xl text-center md:w-2/3 w-11/12 mx-auto mt-16">
              Not sure if a house call is right for you? Give us a call, and
              we’ll help you decide.
            </p>
            <div class="mt-12 text-center">
              <a
                href="#"
                className="btn-primary text-red-primary border-red-primary hover:text-white hover:bg-red-secondary hover:border-red-secondary border-2 font-medium uppercase"
              >
                Request a house call
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-24">
        <h2 className="heading text-blue-primary text-5xl font-semibold text-center">
          Benefits of in-home care
        </h2>
        <p className="text-blue-logo-primary font-medium text-xl text-center md:w-2/3 w-11/12 mx-auto mt-16">
          When you’re not feeling well, you don’t need to spend your energy
          running out to doctors’ appointments or to complete lab tests. With
          Qcare house calls, we make sure you conserve your energy to get better
          soon.
        </p>
        <div className="grid lg:grid-cols-2 gap-8 mt-12">
          <div className="flex items-center justify-center">
            <img
              src="/img/pexels-pavel-danilyuk-6753277.jpg"
              className="w-5/6 mx-auto rounded-xl"
            />
          </div>
          <div className="flex flex-col items-start justify-evenly">
            <p className="text-blue-secondary font-medium text-xl lg:text-start text-center">
              Plus, we meet you on your terms. Want to spend more time getting
              your questions answered? No problem, our providers will give you
              all the time you need. In a hurry? We can meet that demand too.
            </p>
            <div className="flex flex-col items-start justify-center w-fit mx-auto lg:mx-0 lg:ml-2 mt-8 lg:mt-0">
              <div className="flex items-center my-2">
                <IoIosMedical className="text-2xl text-blue-logo-secondary mr-2 min-w-fit" />
                <h5 className="text-blue-secondary">
                  Convenient appointment times
                </h5>
              </div>
              <div className="flex items-center my-2">
                <IoIosMedical className="text-2xl text-blue-logo-secondary mr-2 min-w-fit" />
                <h5 className="text-blue-secondary">
                  Unparalleled professionalism
                </h5>
              </div>
              <div className="flex items-center my-2">
                <IoIosMedical className="text-2xl text-blue-logo-secondary mr-2 min-w-fit" />
                <h5 className="text-blue-secondary">Knowledgeable staff</h5>
              </div>
              <div className="flex items-center my-2">
                <IoIosMedical className="text-2xl text-blue-logo-secondary mr-2 min-w-fit" />
                <h5 className="text-blue-secondary">Patient, caring team</h5>
              </div>
              <div className="flex items-center my-2">
                <IoIosMedical className="text-2xl text-blue-logo-secondary mr-2 min-w-fit" />
                <h5 className="text-blue-secondary">Rapid response</h5>
              </div>
              <div className="flex items-center my-2">
                <IoIosMedical className="text-2xl text-blue-logo-secondary mr-2 min-w-fit" />
                <h5 className="text-blue-secondary">Reliable results</h5>
              </div>
            </div>
            <div className="flex flex-col lg:items-start items-center justify-center lg:mx-0 mx-auto mt-12 lg:mt-0">
              <h4 className="text-blue-logo-primary text-xl italic lg:text-start text-center">
                Give us a call if you…
              </h4>
              <div className="flex flex-col items-start justify-center w-fit mx-auto lg:mx-0 lg:ml-2  mt-8">
                <div className="flex items-center my-2">
                  <BsCheck2Circle className="text-2xl text-blue-logo-secondary mr-2 min-w-fit" />
                  <h5 className="text-blue-secondary">
                    Aren’t able to leave home
                  </h5>
                </div>
                <div className="flex items-center my-2">
                  <BsCheck2Circle className="text-2xl text-blue-logo-secondary mr-2 min-w-fit" />
                  <h5 className="text-blue-secondary">
                    Were recently released from the hospital
                  </h5>
                </div>
                <div className="flex items-center my-2">
                  <BsCheck2Circle className="text-2xl text-blue-logo-secondary mr-2 min-w-fit" />
                  <h5 className="text-blue-secondary">
                    Have a chronic condition
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-secondary/10 py-24">
        <div className="container mx-auto">
          <h2 className="text-blue-primary text-5xl font-semibold text-center">
            FAQ
          </h2>
          <div
            class="accordion accordion-flush mt-16 lg:w-2/3 w-11/12 mx-auto"
            id="houseCallAccordion"
          >
            <div class="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
              <h2 class="accordion-header mb-0" id="flush-headingOne">
                <button
                  class="accordion-button relative text-xl font-medium flex items-center w-full py-4 px-5 text-blue-logo-primary text-left bg-white border-0 rounded-none transition focus:outline-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Who can access house calls?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse border-0 collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#houseCallAccordion"
              >
                <div class="accordion-body py-4 px-5">
                  <p className="text-blue-primary">
                    Our house calls option is available to all our patients in
                    all 5 boroughs – Bronx, Brooklyn, Manhattan, Queens and
                    Staten Island.
                    <br />
                    <br />
                    If you are unable to leave home or the office, a Qcare
                    clinician will come to you. This can be because you’re not
                    feeling well enough to get out or simply because you’re
                    busy.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
              <h2 class="accordion-header mb-0" id="flush-headingTwo">
                <button
                  class="accordion-button relative text-xl font-medium flex items-center w-full py-4 px-5 text-blue-logo-primary text-left bg-white border-0 rounded-none transition focus:outline-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Are house calls covered by insurance?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse border-0 collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#houseCallAccordion"
              >
                <div class="accordion-body py-4 px-5">
                  <p className="text-blue-primary">
                    Yes! House calls are covered by insurance. Out of pocket
                    payment is accepted as well.{" "}
                    <a
                      href="/insurance"
                      className="text-blue-logo-primary hover:text-blue-secondary underline-animation after:bg-blue-secondary"
                    >
                      Click here
                    </a>{" "}
                    to see what insurance we accept.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
              <h2 class="accordion-header mb-0" id="flush-headingThree">
                <button
                  class="accordion-button relative text-xl font-medium flex items-center w-full py-4 px-5 text-blue-logo-primary text-left bg-white border-0 rounded-none transition focus:outline-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Can I complete lab tests at home?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#houseCallAccordion"
              >
                <div class="accordion-body py-4 px-5">
                  <p className="text-blue-primary">
                    We offer a variety of point of care testing options for
                    house calls. Your clinician will be able to collect any sort
                    of specimen the doctor may order based on your symptoms –
                    blood, urine, stool and swabs.
                  </p>
                </div>
              </div>
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

export default HouseCalls;
