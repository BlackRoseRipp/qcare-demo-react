import { Fragment } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
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
import { LazyLoadImage } from "react-lazy-load-image-component";
import BlogSlider from "../components/BlogSlider/BlogSlider";
import Data from "../components/Locations/Data";
import StoreLocator from "../components/Locations/StoreLocator";
import useWindowSize from "../hooks/useWindowSize";
import LabTechniciansImg from "../img/compressed-files/pexels-edward-jenner-4031321-min.jpg";
import OfficeWorkImg from "../img/compressed-files/pexels-karolina-grabowska-5387256-min.jpg";
import BrooklynWalkingImg from "../img/compressed-files/walk-by-nyc-min.jpg";

export default function Home() {
  const size = useWindowSize();

  return (
    <Fragment>
      <main>
        <div className="banner bg-blue-primary">
          <div
            className={
              (size.width < 1123
                ? "bg-[url(../public/img/compressed-files/doctor-with-stethoscope-hands-ho.jpg)] bg-cover"
                : "bg-[url(../public/img/compressed-files/doctor-with-stethoscope-hands-hospital-background-3-min.webp)] bg-contain") +
              " bg-right bg-no-repeat pb-16"
            }
          >
            <div
              className={
                (size.width < 1123
                  ? "bg-center"
                  : "bg-left bg-[url(../public/img/patterns/Q-logo-pattern-home-banner.svg)]") +
                " container mx-auto bg-no-repeat bg-contain py-4 lg:py-36"
              }
            >
              <div
                className={
                  (size.width < 1123 ? "w-full" : "w-1/2") +
                  " py-32 flex flex-col justify-center"
                }
              >
                <h1
                  className={
                    (size.width < 1123
                      ? "text-blue-primary text-center"
                      : "text-white text-start") +
                    " heading text-6xl font-semibold"
                  }
                >
                  Quick care everywhere.
                </h1>
                <div
                  className={
                    (size.width < 1123 ? "text-center" : "text-start") + " mt-8"
                  }
                >
                  <a
                    className={
                      (size.width < 1123
                        ? "text-blue-primary bg-yellow-logo"
                        : "text-white border-2 bg-transparent hover:bg-yellow-logo") +
                      " btn-primary uppercase border-white hover:border-yellow-logo font-medium md:mx-0"
                    }
                    href="/locations"
                  >
                    Book an Appointment
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 w-11/12 grid grid-cols-3 gap-8 lg:border-2 rounded-full border-yellow-logo bg-blue-primary px-8 py-4 mx-auto">
              <a
                href="/nyc-urgent-care-services"
                className="text-white flex flex-col items-center mx-4 group"
              >
                <div
                  className={
                    "w-auto transition-all" +
                    (size.width < 440
                      ? " border-2 rounded-full p-2 border-yellow-logo group-hover:bg-yellow-logo group-focus:bg-yellow-logo"
                      : " group-hover:text-yellow-logo")
                  }
                >
                  <BiClinic className="w-auto h-12" />
                </div>
                <p
                  className={
                    "text-center font-medium group-hover:text-yellow-logo transition-all" +
                    (size.width < 440 ? " hidden" : "")
                  }
                >
                  Urgent Care Clinics
                </p>
              </a>
              <a
                href="/nyc-urgent-care-services"
                className="text-white flex flex-col items-center mx-4 group"
              >
                <div
                  className={
                    "w-auto transition-all" +
                    (size.width < 440
                      ? " border-2 rounded-full p-2 border-yellow-logo group-hover:bg-yellow-logo group-focus:bg-yellow-logo"
                      : " group-hover:text-yellow-logo")
                  }
                >
                  <BsTruck className="w-auto h-12" />
                </div>
                <p
                  className={
                    "text-center font-medium group-hover:text-yellow-logo transition-all" +
                    (size.width < 440 ? " hidden" : "")
                  }
                >
                  Mobile Care Units
                </p>
              </a>
              <a
                href="/house-calls"
                className="text-white flex flex-col items-center mx-4 group"
              >
                <div
                  className={
                    "w-auto transition-all" +
                    (size.width < 440
                      ? " border-2 rounded-full p-2 border-yellow-logo group-hover:bg-yellow-logo group-focus:bg-yellow-logo"
                      : " group-hover:text-yellow-logo")
                  }
                >
                  <BsHouseDoor className="w-auto h-12" />
                </div>
                <p
                  className={
                    "text-center font-medium group-hover:text-yellow-logo transition-all" +
                    (size.width < 440 ? " hidden" : "")
                  }
                >
                  House Calls
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="container mx-auto py-24 lg:py-48">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="flex items-center justify-center">
              <AnimationOnScroll
                animateIn="animate__fadeInLeft"
                animateOnce="true"
              >
                <div className="w-3/4 mx-auto rounded-xl overflow-hidden">
                  <LazyLoadImage
                    src={BrooklynWalkingImg}
                    alt="Brooklyn Man Walking"
                  />
                </div>
              </AnimationOnScroll>
            </div>
            <div className="flex flex-col justify-evenly items-start">
              <h2 className="text-2xl lg:text-5xl font-medium text-blue-primary heading lg:px-0 lg:mx-0 px-4 mx-auto lg:text-start text-center">
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
              <div className="mt-8 lg:text-start text-center w-full">
                <a
                  href="/locations"
                  className="btn-primary text-blue-primary border-blue-primary border-2 uppercase hover:bg-blue-logo-secondary hover:border-blue-logo-secondary hover:text-white"
                  id="locationsButton"
                >
                  Find a location near you
                </a>
              </div>
            </div>
          </div>
          <h2 className="lg:mt-56 mt-36 text-3xl lg:text-5xl text-blue-logo-primary font-medium heading text-center">
            The doctor is in
          </h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 lg:w-3/4 mx-auto mt-16">
            <div className="flex flex-col items-center justify-start">
              <a
                href="/nyc-urgent-care-services"
                className="p-10 border-2 border-blue-logo-primary text-blue-logo-primary rounded-full hover:scale-110 mb-4"
              >
                <BiClinic className="text-6xl" />
              </a>
              <a
                href="/nyc-urgent-care-services"
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
                href="/nyc-urgent-care-services"
                className="p-10 border-2 border-blue-logo-primary text-blue-logo-primary rounded-full hover:scale-110 mb-4"
              >
                <BsTruck className="text-6xl" />
              </a>
              <a
                href="/nyc-urgent-care-services"
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
                href="/house-calls"
                className="p-10 border-2 border-blue-logo-primary text-blue-logo-primary rounded-full hover:scale-110 mb-4"
              >
                <BsHouseDoor className="text-6xl" />
              </a>
              <a
                href="/house-calls"
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
              href="/plan-your-visit"
              className="btn-primary uppercase text-red-primary border-2 border-red-primary hover:text-white hover:bg-red-logo hover:border-red-logo"
            >
              Plan your next visit
            </a>
          </div>
        </div>
        <div className="bg-blue-secondary/10 lg:py-16 py-8">
          <div className="relative lg:py-24 py-12 overflow-hidden bg-[url(../public/img/patterns/Q-logo-pattern.svg)] bg-center bg-no-repeat bg-contain">
            <h2 className="text-blue-primary heading text-3xl lg:text-5xl text-center font-semibold px-4 lg:px-0">
              Customizable healthcare
              <br /> when and where you need it most
            </h2>
            <div className="flex sm:flex-row flex-col items-center justify-center lg:mt-32 mt-16 w-5/6 mx-auto">
              <div className="flex flex-col items-center justify-start mx-4 w-4/5 lg:w-2/5">
                <BsClipboardCheck className="text-blue-logo-primary text-7xl" />
                <h5 className="text-blue-primary text-2xl text-center font-medium mt-6">
                  Register Once with Qcare
                </h5>
              </div>
              <div className="flex items-center justify-center mx-4">
                <BsArrowRight className="text-blue-primary text-7xl hidden sm:block" />
                <BsArrowDown className="text-blue-primary text-7xl sm:hidden block my-4" />
              </div>
              <div className="flex flex-col items-center justify-start mx-4 w-4/5 lg:w-2/5">
                <CiLocationOn className="text-blue-logo-primary text-7xl" />
                <h5 className="text-blue-primary text-2xl text-center font-medium mt-6">
                  Select your convenient point of service
                </h5>
              </div>
              <div className="flex items-center justify-center mx-4">
                <BsArrowRight className="text-blue-primary text-7xl hidden sm:block" />
                <BsArrowDown className="text-blue-primary text-7xl sm:hidden block my-4" />
              </div>
              <div className="flex flex-col items-center justify-start mx-4 w-4/5 lg:w-2/5">
                <FaHandHoldingHeart className="text-blue-logo-primary text-7xl" />
                <h5 className="text-blue-primary text-2xl text-center font-medium mt-6">
                  Access Care
                </h5>
              </div>
            </div>
            <div className="rounded-xl bg-white border-2 border-blue-logo-primary px-8 py-6 mb-12 mt-12 lg:mt-32 w-fit mx-auto">
              <h5 className="text-blue-logo-primary heading uppercase text-sm text-center font-medium">
                Our Services
              </h5>
              <div className="grid md:grid-cols-2 md:gap-8 mt-4">
                <div className="flex flex-col items-start md:mr-4">
                  <a
                    href="/urgent-care"
                    className="flex items-center group my-2"
                  >
                    <IoIosMedical className="text-blue-logo-secondary text-xl group-hover:text-red-secondary transition-all duration-300" />
                    <p className="text-blue-primary font-medium group-hover:text-red-secondary transition-all duration-300">
                      &nbsp;Trauma Care
                    </p>
                  </a>
                  <a href="/covid-19" className="flex items-center group my-2">
                    <IoIosMedical className="text-blue-logo-secondary text-xl group-hover:text-red-secondary transition-all duration-300" />
                    <p className="text-blue-primary font-medium group-hover:text-red-secondary transition-all duration-300">
                      &nbsp;COVID-19 Testing
                    </p>
                  </a>
                  <a
                    href="/allergies-asthma"
                    className="flex items-center group my-2"
                  >
                    <IoIosMedical className="text-blue-logo-secondary text-xl group-hover:text-red-secondary transition-all duration-300" />
                    <p className="text-blue-primary font-medium group-hover:text-red-secondary transition-all duration-300">
                      &nbsp;Allergies & Asthma
                    </p>
                  </a>
                  <a
                    href="/strep-throat"
                    className="flex items-center justify-start w-full group my-2"
                  >
                    <IoIosMedical className="text-blue-logo-secondary text-xl group-hover:text-red-secondary transition-all duration-300" />
                    <p className="text-blue-primary font-medium group-hover:text-red-secondary transition-all duration-300">
                      &nbsp;Strep Throat
                    </p>
                  </a>
                  <a
                    href="/cold-&-flu"
                    className="flex items-center justify-start w-full group my-2"
                  >
                    <IoIosMedical className="text-blue-logo-secondary text-xl group-hover:text-red-secondary transition-all duration-300" />
                    <p className="text-blue-primary font-medium group-hover:text-red-secondary transition-all duration-300">
                      &nbsp;Cold & Flu
                    </p>
                  </a>
                  <a
                    href="/frostbite"
                    className="flex items-center justify-start w-full group my-2"
                  >
                    <IoIosMedical className="text-blue-logo-secondary text-xl group-hover:text-red-secondary transition-all duration-300" />
                    <p className="text-blue-primary font-medium group-hover:text-red-secondary transition-all duration-300">
                      &nbsp;Frostbite
                    </p>
                  </a>
                  <a
                    href="/sti"
                    className="flex items-center justify-start w-full group my-2"
                  >
                    <IoIosMedical className="text-blue-logo-secondary text-xl group-hover:text-red-secondary transition-all duration-300" />
                    <p className="text-blue-primary font-medium group-hover:text-red-secondary transition-all duration-300">
                      &nbsp;Sexually Transmittedly Infections
                    </p>
                  </a>
                  <a
                    href="/stomach-pains"
                    className="flex items-center justify-start w-full group my-2"
                  >
                    <IoIosMedical className="text-blue-logo-secondary text-xl group-hover:text-red-secondary transition-all duration-300" />
                    <p className="text-blue-primary font-medium group-hover:text-red-secondary transition-all duration-300">
                      &nbsp;Stomach Pains
                    </p>
                  </a>
                  <a
                    href="/uti"
                    className="flex items-center justify-start w-full group my-2"
                  >
                    <IoIosMedical className="text-blue-logo-secondary text-xl group-hover:text-red-secondary transition-all duration-300" />
                    <p className="text-blue-primary font-medium group-hover:text-red-secondary transition-all duration-300">
                      &nbsp;UTI Care
                    </p>
                  </a>
                </div>
                <div className="flex flex-col items-start md:ml-4">
                  <a
                    href="/prevention"
                    className="flex items-center group my-2"
                  >
                    <IoIosMedical className="text-blue-logo-secondary text-xl group-hover:text-red-secondary transition-all duration-300" />
                    <p className="text-blue-primary font-medium group-hover:text-red-secondary transition-all duration-300">
                      &nbsp;Wellness Care
                    </p>
                  </a>
                  {/* <a
                    href="/pediatrics"
                    className="flex items-center group my-2"
                  >
                    <IoIosMedical className="text-blue-logo-secondary text-xl group-hover:text-red-secondary transition-all duration-300" />
                    <p className="text-blue-primary font-medium group-hover:text-red-secondary transition-all duration-300">
                      &nbsp;Pediatric Care
                    </p>
                  </a> */}
                  <a href="/vaccines" className="flex items-center group my-2">
                    <IoIosMedical className="text-blue-logo-secondary text-xl group-hover:text-red-secondary transition-all duration-300" />
                    <p className="text-blue-primary font-medium group-hover:text-red-secondary transition-all duration-300">
                      &nbsp;Vaccinations
                    </p>
                  </a>
                  <a
                    href="/injuries"
                    className="flex items-center justify-start w-full group my-2"
                  >
                    <IoIosMedical className="text-blue-logo-secondary text-xl group-hover:text-red-secondary transition-all duration-300" />
                    <p className="text-blue-primary font-medium group-hover:text-red-secondary transition-all duration-300">
                      &nbsp;Broken Bones, Strains & Sprains
                    </p>
                  </a>
                  <a
                    href="/scrapes-&-cuts"
                    className="flex items-center justify-start w-full group my-2"
                  >
                    <IoIosMedical className="text-blue-logo-secondary text-xl group-hover:text-red-secondary transition-all duration-300" />
                    <p className="text-blue-primary font-medium group-hover:text-red-secondary transition-all duration-300">
                      &nbsp;Cuts, Scrapes, & Sutures
                    </p>
                  </a>
                  <a
                    href="/burn-care"
                    className="flex items-center justify-start w-full group my-2"
                  >
                    <IoIosMedical className="text-blue-logo-secondary text-xl group-hover:text-red-secondary transition-all duration-300" />
                    <p className="text-blue-primary font-medium group-hover:text-red-secondary transition-all duration-300">
                      &nbsp;Burn Care
                    </p>
                  </a>
                  <a
                    href="/skin-ailments"
                    className="flex items-center justify-start w-full group my-2"
                  >
                    <IoIosMedical className="text-blue-logo-secondary text-xl group-hover:text-red-secondary transition-all duration-300" />
                    <p className="text-blue-primary font-medium group-hover:text-red-secondary transition-all duration-300">
                      &nbsp;Skin Ailments
                    </p>
                  </a>
                  <a
                    href="/ear-nose-&-throat"
                    className="flex items-center justify-start w-full group my-2"
                  >
                    <IoIosMedical className="text-blue-logo-secondary text-xl group-hover:text-red-secondary transition-all duration-300" />
                    <p className="text-blue-primary font-medium group-hover:text-red-secondary transition-all duration-300">
                      &nbsp;Ear, Nose & Throat
                    </p>
                  </a>
                  <a
                    href="/respiratory-illness"
                    className="flex items-center justify-start w-full group my-2"
                  >
                    <IoIosMedical className="text-blue-logo-secondary text-xl group-hover:text-red-secondary transition-all duration-300" />
                    <p className="text-blue-primary font-medium group-hover:text-red-secondary transition-all duration-300">
                      &nbsp;Respiratory Illnesses
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center">
              <a
                href="/nyc-urgent-care-services"
                className="btn-primary text-blue-primary border-blue-primary border-2 uppercase hover:bg-blue-logo-secondary hover:border-blue-logo-secondary hover:text-white"
              >
                See all services
              </a>
            </div>
          </div>
        </div>
        <div className="container lg:w-3/4 mx-auto lg:py-32 py-16">
          <div className="grid lg:grid-cols-2 gap-x-12 gap-y-24">
            <div className="flex items-center justify-center lg:order-1 order-2 lg:w-full w-1/2 mx-auto">
              <AnimationOnScroll
                animateIn="animate__fadeInLeft"
                animateOnce="true"
              >
                <div className="w-full rounded-xl overflow-hidden">
                  <LazyLoadImage
                    src={LabTechniciansImg}
                    alt="Lab Technicians"
                  />
                </div>
              </AnimationOnScroll>
            </div>
            <div className="flex flex-col justify-evenly lg:order-2 order-1 items-center lg:items-start">
              <h2 className="text-2xl lg:text-4xl lg:mb-0 mb-8 text-blue-primary font-medium md:text-start text-center">
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
                  <BsCheck2Circle className="text-lg text-blue-logo-secondary " />
                  <p className="text-blue-primary ml-2 w-fit">
                    Quick, contactless sign in through our app or location
                    kiosks
                  </p>
                </div>
                <div className="flex items-center my-1">
                  <BsCheck2Circle className="text-lg text-blue-logo-secondary " />
                  <p className="text-blue-primary ml-2 w-fit">
                    Location-based hours from the early morning to the late
                    evening and weekends too
                  </p>
                </div>
                <div className="flex items-center my-1">
                  <BsCheck2Circle className="text-lg text-blue-logo-secondary " />
                  <p className="text-blue-primary ml-2 w-fit">
                    Board-certified physicians, nurse practitioners, physician
                    assistants and nurses
                  </p>
                </div>
                <div className="flex items-center my-1">
                  <BsCheck2Circle className="text-lg text-blue-logo-secondary " />
                  <p className="text-blue-primary ml-2 w-fit">
                    Personalized, comprehensive care from a friendly provider
                    you know, thanks to our low staff turnover
                  </p>
                </div>
                <div className="flex items-center my-1">
                  <BsCheck2Circle className="text-lg text-blue-logo-secondary " />
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
              <AnimationOnScroll
                animateIn="animate__fadeInRight"
                animateOnce="true"
              >
                <div className="w-full rounded-xl overflow-hidden">
                  <LazyLoadImage src={OfficeWorkImg} alt="Office Work" />
                </div>
              </AnimationOnScroll>
            </div>
          </div>
        </div>
        <div className="bg-blue-logo-primary/10 py-16 lg:py-32">
          <div className="container mx-auto">
            <h2 className="heading text-3xl lg:text-5xl text-blue-primary font-semibold text-center">
              Meeting New York patients wherever you are!
            </h2>
            <div className="mt-16">
              <AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true">
                <StoreLocator
                  locations={Data()}
                  src="https://www.google.com/maps/d/u/1/embed?mid=1xwRDy-mAHVhayzNjSXDYxrHLbUckrFM&ehbc=2E312F"
                />
              </AnimationOnScroll>
            </div>
          </div>
        </div>
        <div className="container mx-auto py-16 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-x-12">
            <div className="flex flex-col justify-center items-start">
              <h1 className="text-blue-primary heading text-3xl lg:text-5xl font-semibold md:text-start text-center px-4 lg:px-0">
                Stay on top of your health and wellness
              </h1>
              <p className="text-blue-secondary font-medium mt-16 md:text-start text-center px-4 lg:px-0">
                Check out these wellness tips and the research that backs them
                up to better understand how to optimize your health and
                nutrition.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <AnimationOnScroll
                animateIn="animate__fadeInRight"
                animateOnce="true"
              >
                <BlogSlider />
              </AnimationOnScroll>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
}
