import { Fragment } from "react";
import { BiClinic } from "react-icons/bi";
import {
  BsArrowDown,
  BsArrowLeft,
  BsArrowRight,
  BsCheck2Circle,
  BsClipboardCheck,
  BsHouseDoor,
  BsTruck,
  BsXCircle,
} from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FaHandHoldingHeart } from "react-icons/fa";
import { IoIosMedical } from "react-icons/io";
import Data from "../components/Locations/Data";
import StoreLocator from "../components/Locations/StoreLocator";
import useWindowSize from "../hooks/useWindowSize";

export default function Home() {
  const size = useWindowSize();

  return (
    <Fragment>
      <main>
        <div className="banner bg-blue-primary pb-16">
          <div className="bg-[url(../public/img/patterns/Q-logo-pattern-home-banner.svg)] bg-center bg-repeat-space bg-contain pt-24 pb-8">
            <div className="container mx-auto py-32 flex flex-col">
              <h1 className="heading text-white text-6xl font-semibold md:w-2/3 w-full md:text-start text-center">
                Healthcare when and where you need it.
              </h1>
              <div className="mt-8 md:text-start text-center">
                <a
                  className="btn-primary uppercase text-white border-2 border-white hover:border-yellow-logo hover:bg-yellow-logo font-medium md:mx-0"
                  href="#"
                >
                  Book an Appointment
                </a>
              </div>
            </div>
          </div>
          <div className="w-1/2 grid grid-cols-3 gap-8 border-2 rounded-full border-yellow-logo px-8 py-4 mx-auto">
            <a
              href="#locationsButton"
              className="text-white hover:text-yellow-logo flex flex-col items-center mx-4"
            >
              <BiClinic className="h-12 w-auto" />
              <p
                className={
                  "text-center font-medium" +
                  (size.width < 440 ? " hidden" : "")
                }
              >
                Urgent Care Clinics
              </p>
            </a>
            <a
              href="#locationsButton"
              className="text-white hover:text-yellow-logo flex flex-col items-center mx-4"
            >
              <BsTruck className="h-12 w-auto" />
              <p
                className={
                  "text-center font-medium" +
                  (size.width < 440 ? " hidden" : "")
                }
              >
                Mobile Care Units
              </p>
            </a>
            <a
              href="#locationsButton"
              className="text-white hover:text-yellow-logo flex flex-col items-center mx-4"
            >
              <BsHouseDoor className="h-12 w-auto" />
              <p
                className={
                  "text-center font-medium" +
                  (size.width < 440 ? " hidden" : "")
                }
              >
                House Calls
              </p>
            </a>
          </div>
        </div>
        <div className="container mx-auto py-48">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="flex items-center justify-center">
              <img
                src="img/walk-by-nyc.jpg"
                className="w-3/4 mx-auto rounded-xl"
                alt="Brooklyn Man Walking"
              />
            </div>
            <div className="flex flex-col justify-evenly items-start">
              <h2 className="text-5xl font-medium text-blue-primary heading lg:mx-0 mx-auto lg:text-start text-center">
                Say hello when you walk by,
                <br />
                Stop by when you need us
              </h2>
              <p className="w-5/6 text-blue-secondary lg:mt-0 mt-4 text-center lg:text-start lg:mx-0 mx-auto">
                At Qcare, we provide New York City residents with convenient,
                quality healthcare that doesn’t interrupt your day. We’re
                posting our mobile care units at strategic locations around the
                NYC area. Our plan over the next several months is to become the
                convenient walk-in urgent care and wellness clinic just outside
                your door.
                <br />
                <br />
                Visit Qcare mobile care units for any urgent medical matter or
                routine care for patients of all ages, from babies to seniors.
                Our clinic physicians are board-certified emergency room doctors
                with years of experience handling medical emergencies throughout
                the Metro New York area.
              </p>
              <div className="xl:mt-0 mt-8 lg:text-start text-center w-full">
                <a
                  href="#"
                  className="btn-primary text-blue-primary border-blue-primary border-2 uppercase hover:bg-blue-logo-secondary hover:border-blue-logo-secondary hover:text-white"
                  id="locationsButton"
                >
                  Find a location near you
                </a>
              </div>
            </div>
          </div>
          <h2 className="mt-56 text-5xl text-blue-logo-primary font-medium heading text-center">
            The doctor is in
          </h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 lg:w-3/4 mx-auto mt-16">
            <div className="flex flex-col items-center justify-start">
              <a
                href="#"
                className="p-10 border-2 border-blue-logo-primary text-blue-logo-primary rounded-full hover:scale-110 mb-4"
              >
                <BiClinic className="text-6xl" />
              </a>
              <a
                href="#"
                className="text-blue-primary hover:text-red-secondary text-lg text-center font-medium"
              >
                Urgent Care Clinics
              </a>
              <p className="text-sm text-blue-secondary text-center mt-8 w-3/4 mx-auto">
                We manage most urgent care visits in our mobile care units. For
                more complicated or vulnerable care visits, we may recommend
                patients visit one of our full service urgent care centers
                around the NYC area.
              </p>
            </div>
            <div className="flex flex-col items-center justify-start">
              <a
                href="#"
                className="p-10 border-2 border-blue-logo-primary text-blue-logo-primary rounded-full hover:scale-110 mb-4"
              >
                <BsTruck className="text-6xl" />
              </a>
              <a
                href="#"
                className="text-blue-primary hover:text-red-secondary text-lg text-center font-medium"
              >
                Mobile Care Units
              </a>
              <p className="text-sm text-blue-secondary text-center mt-8 w-3/4 mx-auto">
                We’re building a fleet of fully-equipped mobile urgent care vans
                that we’re strategically parking throughout the NYC area and
                five boroughs.
              </p>
            </div>
            <div className="flex flex-col items-center justify-start">
              <a
                href="#"
                className="p-10 border-2 border-blue-logo-primary text-blue-logo-primary rounded-full hover:scale-110 mb-4"
              >
                <BsHouseDoor className="text-6xl" />
              </a>
              <a
                href="#"
                className="text-blue-primary hover:text-red-secondary text-lg text-center font-medium"
              >
                House Calls
              </a>
              <p className="text-sm text-blue-secondary text-center mt-8 w-3/4 mx-auto">
                We provide home visits for eligible seniors and those who are
                disabled.
              </p>
            </div>
          </div>
          <p className="mt-16 text-lg text-blue-logo-primary text-center w-3/4 mx-auto">
            We offer care where you need it and when you need it most, with
            convenient location-based hours, throughout New York City. Schedule
            an appointment or walk in.
          </p>
          <div className="text-center mt-24">
            <a
              href="#"
              className="btn-primary uppercase text-red-primary border-2 border-red-primary hover:text-white hover:bg-red-logo hover:border-red-logo"
            >
              Plan your next visit
            </a>
          </div>
        </div>
        <div className="bg-blue-secondary/10 py-16">
          <div className="relative py-24 overflow-hidden bg-[url(../public/img/patterns/Q-logo-pattern.svg)] bg-center bg-no-repeat bg-contain">
            <h2 className="text-blue-primary heading text-5xl text-center font-semibold">
              Customizable healthcare
              <br /> when and where you need it most
            </h2>
            <div className="flex sm:flex-row flex-col items-center justify-center mt-32 w-5/6 mx-auto">
              <div className="flex flex-col items-center justify-start mx-4 w-2/5">
                <BsClipboardCheck className="text-blue-logo-primary text-7xl" />
                <h5 className="text-blue-primary text-2xl text-center font-medium mt-6">
                  Register Once with Qcare
                </h5>
              </div>
              <div className="flex items-center justify-center mx-4">
                <BsArrowRight className="text-blue-primary text-7xl hidden sm:block" />
                <BsArrowDown className="text-blue-primary text-7xl sm:hidden block my-4" />
              </div>
              <div className="flex flex-col items-center justify-start mx-4 w-2/5">
                <CiLocationOn className="text-blue-logo-primary text-7xl" />
                <h5 className="text-blue-primary text-2xl text-center font-medium mt-6">
                  Select your convenient point of service
                </h5>
              </div>
              <div className="flex items-center justify-center mx-4">
                <BsArrowRight className="text-blue-primary text-7xl hidden sm:block" />
                <BsArrowDown className="text-blue-primary text-7xl sm:hidden block my-4" />
              </div>
              <div className="flex flex-col items-center justify-start mx-4 w-2/5">
                <FaHandHoldingHeart className="text-blue-logo-primary text-7xl" />
                <h5 className="text-blue-primary text-2xl text-center font-medium mt-6">
                  Access Care
                </h5>
              </div>
            </div>
            <div className="rounded-xl bg-white border-2 border-blue-logo-primary px-8 py-6 mb-12 mt-32 w-fit mx-auto">
              <h5 className="text-blue-logo-primary heading uppercase text-sm text-center font-medium">
                Our Services
              </h5>
              <div className="grid md:grid-cols-2 md:gap-8 mt-4">
                <div className="flex flex-col items-start md:mr-4">
                  <a href="#" className="flex items-center group my-2">
                    <IoIosMedical className="text-blue-logo-secondary text-xl group-hover:text-red-secondary transition-all duration-300" />
                    <p className="text-blue-primary font-medium group-hover:text-red-secondary transition-all duration-300">
                      &nbsp;Trauma Care
                    </p>
                  </a>
                  <a href="#" className="flex items-center group my-2">
                    <IoIosMedical className="text-blue-logo-secondary text-xl group-hover:text-red-secondary transition-all duration-300" />
                    <p className="text-blue-primary font-medium group-hover:text-red-secondary transition-all duration-300">
                      &nbsp;COVID-19 Testing
                    </p>
                  </a>
                  <a href="#" className="flex items-center group my-2">
                    <IoIosMedical className="text-blue-logo-secondary text-xl group-hover:text-red-secondary transition-all duration-300" />
                    <p className="text-blue-primary font-medium group-hover:text-red-secondary transition-all duration-300">
                      &nbsp;Allergies & Asthma
                    </p>
                  </a>
                </div>
                <div className="flex flex-col items-start md:ml-4">
                  <a href="#" className="flex items-center group my-2">
                    <IoIosMedical className="text-blue-logo-secondary text-xl group-hover:text-red-secondary transition-all duration-300" />
                    <p className="text-blue-primary font-medium group-hover:text-red-secondary transition-all duration-300">
                      &nbsp;Wellness Care
                    </p>
                  </a>
                  <a href="#" className="flex items-center group my-2">
                    <IoIosMedical className="text-blue-logo-secondary text-xl group-hover:text-red-secondary transition-all duration-300" />
                    <p className="text-blue-primary font-medium group-hover:text-red-secondary transition-all duration-300">
                      &nbsp;Pediatric Care
                    </p>
                  </a>
                  <a href="#" className="flex items-center group my-2">
                    <IoIosMedical className="text-blue-logo-secondary text-xl group-hover:text-red-secondary transition-all duration-300" />
                    <p className="text-blue-primary font-medium group-hover:text-red-secondary transition-all duration-300">
                      &nbsp;Vaccinations
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center">
              <a
                href="#"
                className="btn-primary text-blue-primary border-blue-primary border-2 uppercase hover:bg-blue-logo-secondary hover:border-blue-logo-secondary hover:text-white"
              >
                See all services
              </a>
            </div>
          </div>
        </div>
        <div className="container lg:w-3/4 mx-auto py-32">
          <div className="grid lg:grid-cols-2 gap-x-12 gap-y-24">
            <div className="flex items-center justify-center lg:order-1 order-2 lg:w-full w-1/2 mx-auto">
              <img
                src="img/pexels-edward-jenner-4031321.jpg"
                className="w-full rounded-xl"
                alt="Lab Technicians"
              />
            </div>
            <div className="flex flex-col justify-evenly lg:order-2 order-1 items-center lg:items-start">
              <h2 className="text-4xl text-blue-primary font-medium md:text-start text-center">
                Quick registration, Quick testing, Quick results
              </h2>
              <div className="flex flex-col justify-center ml-8">
                <div className="flex items-center my-1">
                  <BsCheck2Circle className="text-lg text-blue-logo-secondary" />
                  <p className="text-blue-primary ml-2 w-fit">
                    Walk-in or schedule an appointment
                  </p>
                </div>
                <div className="flex items-center my-1">
                  <BsCheck2Circle className="text-lg text-blue-logo-secondary" />
                  <p className="text-blue-primary ml-2 w-fit">
                    Quick, contactless sign in through our app or location
                    kiosks
                  </p>
                </div>
                <div className="flex items-center my-1">
                  <BsCheck2Circle className="text-lg text-blue-logo-secondary" />
                  <p className="text-blue-primary ml-2 w-fit">
                    Location-based hours from the early morning to the late
                    evening and weekends too
                  </p>
                </div>
                <div className="flex items-center my-1">
                  <BsCheck2Circle className="text-lg text-blue-logo-secondary" />
                  <p className="text-blue-primary ml-2 w-fit">
                    Board-certified physicians, nurse practitioners, physician
                    assistants and nurses
                  </p>
                </div>
                <div className="flex items-center my-1">
                  <BsCheck2Circle className="text-lg text-blue-logo-secondary" />
                  <p className="text-blue-primary ml-2 w-fit">
                    Personalized, comprehensive care from a friendly provider
                    you know, thanks to our low staff turnover
                  </p>
                </div>
                <div className="flex items-center my-1">
                  <BsCheck2Circle className="text-lg text-blue-logo-secondary" />
                  <p className="text-blue-primary ml-2 w-fit">
                    Fast and reliable lab test results, usually within 24 hours
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-evenly items-center lg:items-start order-3">
              <h2 className="text-4xl text-red-primary font-medium">
                Say goodbye to…
              </h2>
              <div className="flex flex-col justify-center items-start ml-8">
                <div className="flex items-center my-3">
                  <BsXCircle className="text-lg text-red-secondary" />
                  <p className="text-red-primary ml-2 w-fit">
                    Filling out multiple forms at every visit
                  </p>
                </div>
                <div className="flex items-center my-3">
                  <BsXCircle className="text-lg text-red-secondary" />
                  <p className="text-red-primary ml-2 w-fit">
                    Days of waiting for strep test results
                  </p>
                </div>
                <div className="flex items-center my-3">
                  <BsXCircle className="text-lg text-red-secondary" />
                  <p className="text-red-primary ml-2 w-fit">
                    Missing work to visit the doctor
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center order-4 lg:w-full w-1/2 mx-auto">
              <img
                src="img/pexels-karolina-grabowska-5387256.jpg"
                className="w-full rounded-xl"
                alt="Office Work"
              />
            </div>
          </div>
        </div>
        <div className="bg-blue-logo-primary/10 py-32">
          <div className="container mx-auto">
            <h2 className="heading text-5xl text-blue-primary font-semibold text-center">
              Meeting New York patients wherever you are!
            </h2>
            <div className="mt-16">
              <StoreLocator
                locations={Data()}
                src="https://www.google.com/maps/d/u/1/embed?mid=1xwRDy-mAHVhayzNjSXDYxrHLbUckrFM&ehbc=2E312F"
              />
            </div>
          </div>
        </div>
        <div className="container mx-auto py-32">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center items-start">
              <h1 className="text-blue-primary heading text-5xl font-semibold md:text-start text-center">
                <span className="text-4xl text-blue-logo-primary">
                  We help you care for
                </span>
                <br />
                Yourself and Your Family
              </h1>
              <p className="text-blue-secondary font-medium mt-16 md:text-start text-center">
                Check out these wellness tips and the research that backs them
                up to better understand how to optimize your health and
                nutrition.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div
                id="testimonialSlider"
                class="carousel slide relative"
                data-bs-ride="true"
              >
                <div class="carousel-indicators">
                  <button
                    class="carousel-control-next !bg-transparent !mr-4"
                    type="button"
                    data-bs-target="#testimonialSlider"
                    data-bs-slide="prev"
                  >
                    <BsArrowLeft className="text-4xl !text-blue-logo-secondary" />
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    type="button"
                    data-bs-target="#testimonialSlider"
                    data-bs-slide-to="0"
                    class="active !w-3 !h-3 rounded-full !bg-blue-logo-secondary"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#testimonialSlider"
                    data-bs-slide-to="1"
                    className="!w-3 !h-3 rounded-full !bg-blue-logo-secondary"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#testimonialSlider"
                    data-bs-slide-to="2"
                    className="!w-3 !h-3 rounded-full !bg-blue-logo-secondary"
                    aria-label="Slide 3"
                  ></button>
                  <button
                    class="carousel-control-next !bg-transparent !ml-4"
                    type="button"
                    data-bs-target="#testimonialSlider"
                    data-bs-slide="next"
                  >
                    <BsArrowRight className="text-4xl !text-blue-logo-secondary" />
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
                <div class="carousel-inner relative w-full overflow-hidden">
                  <div class="carousel-item active float-left w-full py-16">
                    <a
                      href="#"
                      className="w-5/6 mx-auto h-[550px] flex flex-col rounded-xl shadow-md hover:shadow-xl overflow-hidden"
                    >
                      <img
                        src="img/blog1.jpg"
                        className="w-full"
                        alt="blog_1"
                      />
                      <div className="px-6 py-4">
                        <h3 className="text-blue-primary text-lg font-medium mb-2 text-center md:text-start">
                          What&#39;s The Difference Between CBC And CMP Blood
                          Tests?
                        </h3>
                        <p className="text-blue-secondary text-sm text-justify md:text-start">
                          There&#39;s a good deal that your blood can tell us
                          about your health. To access that information, we can
                          perform a complete blood count (CBC) and a
                          comprehensive metabolic panel (CMP). Here&#39;s a look
                          at the difference between the two.
                        </p>
                      </div>
                    </a>
                  </div>
                  <div class="carousel-item float-left w-full py-16">
                    <a
                      href="#"
                      className="w-5/6 mx-auto flex flex-col rounded-xl shadow-md hover:shadow-xl overflow-hidden h-[550px]"
                    >
                      <img
                        src="img/blog2.jpeg"
                        className="w-full"
                        alt="blog_2"
                      />
                      <div className="px-6 py-4">
                        <h3 className="text-blue-primary text-lg font-medium mb-2 text-center md:text-start">
                          Why Choosing Telehealth Might Be the Best Option for
                          You
                        </h3>
                        <p className="text-blue-secondary text-sm text-justify md:text-start">
                          As our nation watches anxiously as new variants of
                          COVID-19 emerge, the return to safety measures, such
                          as masking up and social distancing, may come back.
                          For this reason, and many others, telehealth may make
                          perfect sense.
                        </p>
                      </div>
                    </a>
                  </div>
                  <div class="carousel-item float-left w-full py-16">
                    <a
                      href="#"
                      className="w-5/6 mx-auto flex flex-col rounded-xl shadow-md hover:shadow-xl overflow-hidden h-[550px]"
                    >
                      <img
                        src="img/blog3.jpg"
                        className="w-full"
                        alt="blog_3"
                      />
                      <div className="px-6 py-4">
                        <h3 className="text-blue-primary text-lg font-medium mb-2 text-center md:text-start">
                          Common Heat-Related Illnesses and Symptoms
                        </h3>
                        <p className="text-blue-secondary text-sm text-justify md:text-start">
                          The month of August can be a hot and sticky one here
                          in New York City, which makes us more vulnerable to
                          heat-related illnesses. To beat the heat this summer,
                          we take a closer look at the problem.
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
}
